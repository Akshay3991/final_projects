import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/form");
  };
  let price = 0;
  const cartServiceIds = useSelector((state) => state.cart);
  const services = useSelector((state) => state.services);
  const finalServices = services.filter((service) => {
    const serviceIndex = cartServiceIds.indexOf(service.id);
    return serviceIndex >= 0;
  });
  finalServices.forEach((service) => {
    price += service.original_price;
  });
  return (
    <div>
      <h1>Total price of {finalServices.length} services:</h1>
      <span>$ {price}</span>
      <div>
        <button onClick={clickHandler}>Place Order</button>
      </div>
    </div>
  );
};

export default CartSummary;
