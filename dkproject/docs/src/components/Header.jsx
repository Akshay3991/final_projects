import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown, FaOpencart } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      <header>
        <nav className="bg-[#ece9e9] w-[100vw] h-[10vh] flex    ">
          <div className="bg-[#f17305] w-[15%] p-[25px]">
            <Link
              to="/"
              className="no-underline bg-[#04aa20] border-[10px] border-[white] rounded-[30px] p-[14px_6px] ml-[10px] "
            >
              LOGO
            </Link>
          </div>
          <div className="flex gap-[40px]  w-[70%] ">
            <Link
              to="/"
              className="no-underline flex gap-[10px] text-[white] hover:underline  text-[23px] font-serif font-black mt-[20px]"
            >
              <FaHome className="text-[30px] font-bold text-[green]" />
              Home
            </Link>
            <input
              type="text"
              className="bg-[#e44602] mt-[10px] w-[40%] border-[3px] pl-[200px] border-[white] rounded-[20px]"
            />
            <Link
              to="/contact"
              className="no-underline flex gap-[10px]  text-[white] hover:underline  text-[23px] font-serif font-black mt-[20px]"
            >
              <BsFillTelephoneFill className="text-[30px] font-bold text-[#f48004]" />
              Contact Us
            </Link>
          </div>
          <div className="w-[15%] flex gap-[30px] bg-[green] pt-[20px] ">
            <Link
              to="/orders"
              className="no-underline flex gap-[10px]  text-[whitesmoke] text-[30px]"
            >
              <FaOpencart />
              <span className="action_name">Orders</span>
            </Link>
            <Link
              to="/cart"
              className="no-underline flex gap-[10px] text-[whitesmoke] text-[30px]"
            >
              <FaCartArrowDown />
              <span className="">Cart</span>
              {cart.length !== 0 && (
                <span className="bg-[red]">{cart.length}</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
