import React from "react";

const ShippingConfirmation = ({ order }) => {
  return (
    <div>
      <h1>Your order has been shipped!</h1>
      <p>Order ID: {order.id}</p>
      <p>Tracking Number: {order.tracking_number}</p>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default ShippingConfirmation;
