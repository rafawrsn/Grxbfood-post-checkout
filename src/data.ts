import type { Order, OrderRequest, RequestStatus } from './types';

export const DEMO_PLACED_AT = Date.now();

export const MOCK_ORDER: Order = {
  id: 'GF-8842016',
  placedAt: DEMO_PLACED_AT,
  restaurantName: "Warung Kopi Pak Eko",
  restaurantCuisine: 'Indonesian • Coffee & Toast',
  restaurantRating: 4.8,
  restaurantTime: '15–25 min',
  address: 'Jl. Melati No. 12, Apt 4B, Kebayoran Baru, Jakarta',
  stage: 'cooking',
  subtotal: 87000,
  deliveryFee: 9000,
  tax: 9700,
  items: [
    { id: 'i1', name: 'Iced Coffee Latte', qty: 2, price: 28000 },
    { id: 'i2', name: 'Buttered Toast with Chocolate Sprinkles', qty: 1, price: 16000 },
    { id: 'i3', name: 'Fried Rice with Fried Egg', qty: 1, price: 30000, note: 'Extra spicy, please' },
  ],
};

export const EXAMPLE_REQUESTS = [
  'Less ice for my iced coffee, please.',
  'Less sugar in the latte, thank you.',
  'Please pack the toast separately so it stays crispy.',
];

export const DECLINE_REASONS = [
  'The drink was already prepared before the request arrived.',
  'The kitchen cannot adjust this item in the current batch.',
];

export function formatRupiah(value: number): string {
  return `Rp${value.toLocaleString('id-ID')}`;
}

export function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

export const STATUS_META: Record<
  RequestStatus,
  { label: string; description: string }
> = {
  awaiting: {
    label: 'Awaiting Response',
    description: 'The restaurant has received your request and has not made a decision yet.',
  },
  accepted: {
    label: 'Accepted',
    description: 'Good news — the restaurant confirmed they can fulfill your request.',
  },
  unable: {
    label: 'Unable to Fulfill',
    description: 'The restaurant cannot carry out this request for this order.',
  },
};
