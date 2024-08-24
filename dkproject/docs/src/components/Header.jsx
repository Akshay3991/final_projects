import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown, FaOpencart } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const Header = () => {
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
          <div className=" w-[70%] ">
            <div className=" w-[70%] ">
              <ul className="flex gap-[40px]  ">
                <Link
                  to="/"
                  className="no-underline text-[white] hover:underline  text-[23px] font-serif font-black mt-[20px]"
                >
                  <li className="flex gap-[10px]">
                    <FaHome className="text-[30px] font-bold text-[green]" />
                    Home
                  </li>
                </Link>
                <input
                  type="text"
                  className="bg-[#e44602] mt-[10px] w-[40%] border-[3px] pl-[200px] border-[white] rounded-[20px]"
                />
                <Link
                  to="/contact"
                  className="no-underline  text-[white] hover:underline  text-[23px] font-serif font-black mt-[20px]"
                >
                  <li className="flex gap-[10px]">
                    <BsFillTelephoneFill className="text-[30px] font-bold text-[#f48004]" />
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-[15%]  bg-[green] pt-[20px] ">
            <ul className="flex gap-[30px] ">
              <Link
                to="/orders"
                className="no-underline  text-[whitesmoke] text-[30px]"
              >
                <li>
                  <FaOpencart />
                </li>
              </Link>
              <Link
                to="/cart"
                className="no-underline text-[whitesmoke] text-[30px]"
              >
                <li>
                  <FaCartArrowDown />
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
