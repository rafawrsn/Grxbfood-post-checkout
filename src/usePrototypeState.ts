import { useCallback, useEffect, useState } from 'react';
import type { Order, OrderRequest, RequestStatus } from './types';
import { MOCK_ORDER } from './data';

const STORAGE_KEY = 'grabfood-prototype-v1';

interface StoredState {
  order: Order;
  requests: OrderRequest[];
}

function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as StoredState;
      if (parsed?.order?.id && Array.isArray(parsed.requests)) {
        return parsed;
      }
    }
  } catch {
    // fall through to fresh demo data
  }
  return { order: MOCK_ORDER, requests: [] };
}

export function usePrototypeState() {
  const [{ order, requests }, setState] = useState<StoredState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ order, requests }));
  }, [order, requests]);

  const addRequest = useCallback((message: string) => {
    const req: OrderRequest = {
      id: `req-${Date.now()}`,
      message,
      status: 'awaiting',
      createdAt: Date.now(),
    };
    setState((s) => ({ ...s, requests: [req, ...s.requests] }));
    return req.id;
  }, []);

  const setRequestStatus = useCallback((id: string, status: RequestStatus, declineReason?: string) => {
    setState((s) => ({
      ...s,
      requests: s.requests.map((r) =>
        r.id === id ? { ...r, status, declineReason: status === 'unable' ? declineReason : undefined } : r,
      ),
    }));
  }, []);

  const advanceStage = useCallback(() => {
    setState((s) => {
      const stages: Order['stage'][] = ['preparing', 'cooking', 'picked_up', 'delivered'];
      const idx = stages.indexOf(s.order.stage);
      return { ...s, order: { ...s.order, stage: stages[Math.min(idx + 1, stages.length - 1)] } };
    });
  }, []);

  const resetDemo = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ order: { ...MOCK_ORDER, placedAt: Date.now() }, requests: [] });
  }, []);

  return { order, requests, addRequest, setRequestStatus, advanceStage, resetDemo };
}
