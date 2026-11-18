import { Check, CircleAlert, CircleDashed, TimerOff } from 'lucide-react';
import type { OrderRequest, RequestStatus } from '../types';
import { STATUS_META, DECLINE_REASONS, formatTime } from '../data';

const STATUS_STYLES: Record<RequestStatus, { chip: string; icon: React.ReactNode }> = {
  awaiting: {
    chip: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: <CircleDashed className="h-4 w-4 animate-spin [animation-duration:3s]" />,
  },
  accepted: {
    chip: 'bg-brand-50 text-brand-700 border-brand-200',
    icon: <Check className="h-4 w-4" />,
  },
  unable: {
    chip: 'bg-red-50 text-red-700 border-red-200',
    icon: <CircleAlert className="h-4 w-4" />,
  },
};

export function RequestCard({
  request,
  isLatest,
  demoControls,
}: {
  request: OrderRequest;
  isLatest?: boolean;
  demoControls?: React.ReactNode;
}) {
  const meta = STATUS_META[request.status];
  const style = STATUS_STYLES[request.status];

  return (
    <div className="animate-fade-up rounded-2xl border border-gray-100 bg-white p-4 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${style.chip}`}>
          {style.icon}
          {meta.label}
        </span>
        <span className="text-xs text-gray-400">{formatTime(request.createdAt)}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-800">“{request.message}”</p>
      <p className="mt-2 text-xs text-gray-500">{meta.description}</p>

      {request.status === 'unable' && (
        <div className="mt-3 rounded-xl bg-gray-50 border border-gray-100 p-3">
          <p className="text-xs font-bold text-gray-700">Why it can't be fulfilled</p>
          <p className="mt-1 text-xs text-gray-600">{request.declineReason ?? DECLINE_REASONS[0]}</p>
          <p className="mt-2 text-xs text-gray-600">
            Next steps: you can message the restaurant directly or contact Grab Customer Support from the order
            receipt if this matters to your order.
          </p>
        </div>
      )}

      {demoControls && isLatest && <div className="mt-3 border-t border-gray-100 pt-3">{demoControls}</div>}
    </div>
  );
}

export function EmptyHistory() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white/60 px-4 py-8 text-center">
      <TimerOff className="h-6 w-6 text-gray-300" />
      <p className="mt-2 text-sm font-semibold text-gray-600">No requests yet</p>
      <p className="mt-1 text-xs text-gray-400">
        Submit a request and its status will appear here, so you always know where it stands.
      </p>
    </div>
  );
}
