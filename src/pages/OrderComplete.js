import React from 'react';
import { useSelector } from 'react-redux';

const OrderComplete = () => {
  const order = useSelector((state) => state.order);

  return (
    <div className="order-complete">
      <h2>Order Complete</h2>
      <p>Thank you, {order.name}!</p>
      <p>Your booking has been confirmed for {order.checkIn} to {order.checkOut}.</p>
      <p>Total Price: ₹{order.totalPrice}</p>
    </div>
  );
};

export default OrderComplete;
