import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const cartService = ({ service }) => {
  const dispatch = useDispatch();
  const handleRemoveService = () => {
    dispatch(cartActions.removeFromCart(service.id));
  };
  return (
    <main>
      <div className="" onClick={handleRemoveItem}>
        <RiDeleteBin5Fill />
      </div>
    </main>
  );
};

export default cartService;
