import cartService from "../components/cartService";
import cartSummary from "../components/cartSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartServices = useSelector((state) => state.cart);
  const services = useSelector((state) => state.services);
  const finalServices = services.filter((service) => {
    const serviceIndex = cartServices.indexof(service.id);
    return serviceIndex >= 0;
  });

  return (
    <main>
      <div>
        {finalServices.map((service) => (
          <cartService service={service} key={service.id} />
        ))}
      </div>
      <cartSummary />
    </main>
  );
};

export default Cart;
