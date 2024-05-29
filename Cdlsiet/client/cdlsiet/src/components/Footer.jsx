import { FaMagnifyingGlassLocation, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

// import logo from '../images/logo.png' // Replace with your logo image


const Footer = () => {
  return (
    <footer className="bg-[black] grid grid-cols-3  absolute bottom-0  w-[100vw] h-[23vh] flex">
      <div className='flex'>
        <h1 className="m-[20px_35px]"><b className="uppercase font-black  font-sans text-[#CCCCCC]">Our Location</b>
          <iframe className='w-[12vw]  h-[15vh] pt-[10px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.32301814564!2d74.92227651093147!3d29.71040113421676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3665787c4ee6b%3A0xcaa2d7689d1e68e9!2sCh.%20Devi%20Lal%20State%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1716116007989!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
        </h1>
        <div>
          <h2 className='text-[12px] sm:text-[16.1px] uppercase mt-[20px] font-black  text-[#CCCCCC]'>chaudhary devilal state institutenof engineering and technology ,</h2>
          <h1 className="flex pt-[20px] uppercase">
            <FaMagnifyingGlassLocation />  <b className='pl-[10px] font-serif'>  Panniwala mota, Sirsa</b>
          </h1>
        </div>
        <hr />
      </div>
      <div className='w-[]'>
        <img className='h-[20vh] w-[15vw] m-auto invert ' src="src/images/clg.jpg" alt="" />
        <hr />
      </div>
      <div className=''>
        <h2 className=' flex text-[12px] sm:text-[16.1px] uppercase mt-[20px] font-black  text-[#CCCCCC]'>Contact Us</h2>
        <h2 className=' flex text-[12px] sm:text-[16.1px] font-serif mt-[10px] font-black text-[green] '>  <FaLocationDot /><b className="pl-[8px]">Panniwala Mota, Sirsa 125077</b></h2>
        <h2 className=' flex text-[12px] sm:text-[16.1px] font-serif mt-[10px] font-black  text-[green]'>  <FaPhoneAlt /><b className="pl-[8px]">01668-277597</b></h2>
        <h2 className=' flex text-[12px] sm:text-[16.1px] font-serif mt-[10px] font-black text-[green] '>  <MdMarkEmailUnread /><b className="pl-[8px]">directorcdlsiet@gmail.com</b></h2>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;