import CartService from "../components/CartService";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartServices = useSelector((state) => state.cart);
  const services = useSelector((state) => state.services);
  const finalServices = services.filter((service) => {
    const serviceIndex = cartServices.indexOf(service.id);
    return serviceIndex >= 0;
  });

  return (
    <main>
      <div>
        {finalServices.map((service) => (
          <CartService service={service} key={service.id} />
        ))}
      </div>
      <div>
        <CartSummary />
      </div>
    </main>
  );
};

export default Cart;
