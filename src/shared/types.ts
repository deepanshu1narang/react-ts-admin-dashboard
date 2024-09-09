import { FormDetails } from "../pages/Management/NewProduct";

interface OrderItemType extends Required<Omit<FormDetails, "stock">> {
  quantity: number;
  _id: string;
}

interface OrderType {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: number;
  status: "Processing" | "Shipped" | "Delivered";
  subTotal: number;
  total: number;
  discount: number;
  tax: number;
  shippingCharges: number;
  orderItems: OrderItemType[];
  _id: string;
}

export type { OrderItemType, OrderType };
