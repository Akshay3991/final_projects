import React from "react";
import { useSelector } from "react-redux";

const cartSummary = () => {
  const cartServiceIds = useSelector((state) => state.cart);
  const services = useSelector((state) => state.services);
  const finalServices = services.filter((service) => {
    const serviceIndex = cartServiceIds.indexof(service.id);
    return serviceIndex >= 0;
  });
  return <div>cartSummary</div>;
};

export default cartSummary;
