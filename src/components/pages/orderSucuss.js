import React from "react";
import "../../assets/css/style.css";
function orderSucuss() {
  return (
    <div className="order-success-container">
      <h2 className="order-success-heading">Order Successfully Placed!</h2>
      <p className="order-success-message">
        Thank you for your order. Your purchase was successful.
      </p>
      {/* You can include additional information or styling here */}
    </div>
  );
}

export default orderSucuss;
