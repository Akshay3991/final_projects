import { useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { cartActions } from "../store/cartSlice";

const CartService = ({ service }) => {
  const dispatch = useDispatch();

  const handleRemoveService = () => {
    dispatch(cartActions.removeFromCart(service.id));
  };
  return (
    <main>
      <div className="" onClick={handleRemoveService}>
        <RiDeleteBin5Fill />
      </div>
    </main>
  );
};

export default CartService;
