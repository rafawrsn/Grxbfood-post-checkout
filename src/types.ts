export type RequestStatus = 'awaiting' | 'accepted' | 'unable';

export type OrderStage = 'preparing' | 'cooking' | 'picked_up' | 'delivered';

export interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  note?: string;
}

export interface Order {
  id: string;
  placedAt: number;
  restaurantName: string;
  restaurantCuisine: string;
  restaurantRating: number;
  restaurantTime: string;
  address: string;
  stage: OrderStage;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  items: OrderItem[];
}

export interface OrderRequest {
  id: string;
  message: string;
  status: RequestStatus;
  createdAt: number;
  declineReason?: string;
}

export const STAGE_LABELS: Record<OrderStage, string> = {
  preparing: 'Restaurant is preparing your order',
  cooking: 'Your food is being prepared',
  picked_up: 'Driver is on the way to you',
  delivered: 'Order delivered',
};

/** Requests can only be submitted before the driver picks the order up. */
export function canSubmitRequest(order: Order): boolean {
  return order.stage === 'preparing' || order.stage === 'cooking';
}
