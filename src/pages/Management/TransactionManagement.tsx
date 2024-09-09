import { useState } from "react";
import Main from "../../components/Main";
import { OrderItemType, OrderType } from "../../shared/types";
import ProductCard from "./ProductCard";

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orders: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "sajknaskd",
    quantity: 4,
    price: 690,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Akshay Saini",
    address: "240/01A, gurudwara colony Clement",
    city: "Dehradun",
    state: "Uttrakhand",
    country: "India",
    pinCode: 248002,
    status: "Processing",
    subTotal: 2100,
    discount: 600,
    shippingCharges: 0,
    tax: 200,
    total: 2100 + 200 + 0 - 600,
    orderItems: orders,
    _id: "tyui87654",
  });

  const { name, address, city, country, state, pinCode, subTotal, shippingCharges, total, tax, discount, orderItems, status } = order;

  const updateHandler = (): void => {
    setOrder((order) => ({
      ...order,
      status: order.status === "Shipped" ? "Delivered" : "Shipped",
    }));
  };

  return (
    <Main className="product-management">
      <section style={{ padding: "2rem" }}>
        <h2>Order Items</h2>
        {orderItems.map((orderItem) => (
          <ProductCard name={orderItem.name} photo={orderItem.photo} _id={orderItem._id} quantity={orderItem.quantity} price={orderItem.price} />
        ))}
      </section>
      <article className="shipping-info-card">
        <h1>Order Info</h1>
        <h5>User Info</h5>
        <p>Name: {name}</p>
        <p>Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}</p>

        <h5>Amout Breakup</h5>
        <p>Subtotal: {subTotal}</p>
        <p>Shipping Charges: {shippingCharges}</p>
        <p>Tax: {tax}</p>
        <p>Discount: {discount}</p>
        <p>Total: {total}</p>

        <h5>Status Info</h5>
        <p>
          Status: <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>{status}</span>
        </p>
        <button disabled={status === "Delivered"} onClick={updateHandler}>
          Process Status
        </button>
      </article>
    </Main>
  );
};

export default TransactionManagement;
