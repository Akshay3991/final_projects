import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeService = ({ service }) => {
  // console.log(service);

  const dispatch = useDispatch();
  const cartServices = useSelector((store) => store.cart);
  const elementFound = cartServices.indexOf(service.id) >= 0;

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(service.id));
  };
  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(service.id));
  };
  return (
    <div>
      {/* design */}

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToCart}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeService;
