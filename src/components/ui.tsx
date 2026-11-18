import type { ReactNode } from 'react';
import { Clock, Star } from 'lucide-react';
import type { Order } from '../types';
import { STAGE_LABELS } from '../types';
import { formatRupiah } from '../data';

export function OrderStatusBanner({ order }: { order: Order }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-brand-50 border border-brand-100 px-4 py-3">
      <span className="relative flex h-3 w-3 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-500" />
      </span>
      <p className="text-sm font-semibold text-brand-800">{STAGE_LABELS[order.stage]}</p>
    </div>
  );
}

export function RestaurantHeader({ order }: { order: Order }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-card">
        <UtensilsGlyph />
      </div>
      <div className="min-w-0">
        <h2 className="truncate text-base font-bold text-gray-900">{order.restaurantName}</h2>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1 font-semibold text-amber-600">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {order.restaurantRating.toFixed(1)}
          </span>
          <span>{order.restaurantCuisine}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {order.restaurantTime}
          </span>
        </div>
      </div>
    </div>
  );
}

function UtensilsGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 2v7a3 3 0 0 0 6 0V2" />
      <path d="M6 2v20" />
      <path d="M18 9c1.5-1.5 2-4 1.5-6.5C17 3 15.5 4.5 15 7c-.4 1.9.5 3.6 1.5 4v11" />
    </svg>
  );
}

export function OrderSummaryCard({ order }: { order: Order }) {
  const total = order.subtotal + order.deliveryFee + order.tax;
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-card">
      <div className="border-b border-gray-100 px-5 py-4">
        <h3 className="text-sm font-bold text-gray-900">Order Summary</h3>
        <p className="mt-0.5 text-xs text-gray-500">Order ID {order.id}</p>
      </div>
      <ul className="divide-y divide-gray-50 px-5">
        {order.items.map((item) => (
          <li key={item.id} className="py-3">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  <span className="text-brand-600">{item.qty}×</span> {item.name}
                </p>
                {item.note && <p className="mt-0.5 text-xs text-gray-500 italic">Note: {item.note}</p>}
              </div>
              <span className="shrink-0 text-sm text-gray-700">{formatRupiah(item.price * item.qty)}</span>
            </div>
          </li>
        ))}
      </ul>
      <dl className="space-y-1.5 border-t border-gray-100 px-5 py-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <dt>Subtotal</dt>
          <dd>{formatRupiah(order.subtotal)}</dd>
        </div>
        <div className="flex justify-between text-gray-600">
          <dt>Delivery fee</dt>
          <dd>{formatRupiah(order.deliveryFee)}</dd>
        </div>
        <div className="flex justify-between text-gray-600">
          <dt>Tax &amp; fees</dt>
          <dd>{formatRupiah(order.tax)}</dd>
        </div>
        <div className="flex justify-between border-t border-gray-100 pt-2 font-bold text-gray-900">
          <dt>Total</dt>
          <dd>{formatRupiah(total)}</dd>
        </div>
      </dl>
    </div>
  );
}

export function Section({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}
