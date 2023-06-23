import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../assets/Logo.png";
import Items from "./Items";
import { useGlobalContext } from "./Context";
function Navbar() {
  const { setOpen, setOpenSid, openSid } = useGlobalContext();

  function handleSub(e) {
    if (!e.target.classList.contains("btn")) {
      setOpen(false);
    }
  }

  return (
    <nav
      onMouseOver={handleSub}
      className="bg-white h-[4rem]  px-4 sm:px-[50px] md:px-[60px] lg:px-[70px]"
    >
      <div className="flex justify-between items-center h-full">
        <div className="flex-1 md:flex-initial flex items-center justify-between ">
          <img className="h-[30px] " src={Logo} alt="..." />
          <button
            onClick={() => setOpenSid(!openSid)}
            className="block md:hidden"
          >
            {openSid ? <FaBars /> : <AiOutlineClose />}
          </button>
        </div>
        <div className=" hidden  h-full  md:flex items-center justify-between  ">
          <div
            className="
            text-xs  cursor-pointer h-full  flex items-center justify-center"
          >
            HOME
          </div>
          <Items />
        </div>
        <button className="hidden  text-xs md:block text-white py-[6px] px-4 rounded-full bg-violet-800 ">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
