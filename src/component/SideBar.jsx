import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import data from "./Data";
import { useGlobalContext } from "./Context";

function SideBar() {
  const { openSid } = useGlobalContext();
  const [subOpen, setSubOpen] = useState(true);
  const [linkOpen, SetLinkOpen] = useState(true);
  const [numSub, setNumSub] = useState("");
  const [numLink, setNumLink] = useState("");
  const [HsubRef, setHsubRef] = useState("");
  const [HlinkRef, setHlinkRef] = useState("");

  const subRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    setHsubRef(subRef.current.getBoundingClientRect().height);
    setHlinkRef(linkRef.current.getBoundingClientRect().height);
  }, [HsubRef, HlinkRef]);
  return (
    <aside
      className={`  ${
        openSid ? "-left-full" : "-left-0"
      } fixed  bg-white  top-[4rem]  duration-300 p-4 sm:p-[50px] md:p-[60px] lg:p-[70px]`}
    >
      <h1 className="mb-10">Home</h1>
      <>
        {data.map((item, index) => {
          return (
            <div key={index} className=" mb-10   relative   ">
              <div
                onClick={function () {
                  setSubOpen(!subOpen);
                  setNumSub(index);
                }}
                className="text-xs  cursor-pointer   flex justify-between"
              >
                <h1 className=" text-base btn">{item.name}</h1>
                <span
                  className={`ml-1 duration-300  ${
                    subOpen && numSub === index ? "rotate-180" : "rotate-0"
                  } flex items-center justify-center text-base`}
                >
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
              <div
                className="overflow-hidden origin-top mt-1 duration-300 pl-5"
                style={{
                  height: subOpen && numSub === index ? `auto` : "0px",
                }}
              >
                <div ref={subRef}>
                  {item.sublinks.map((ie, i) => {
                    return (
                      <div key={i} className=" py-1  ">
                        <div
                          onClick={function () {
                            SetLinkOpen(!linkOpen);
                            setNumLink(i);
                          }}
                          className="flex justify-between cursor-pointer"
                        >
                          <p className="text-sm">{ie.Head}</p>

                          <span
                            className={`ml-1 duration-300  ${
                              linkOpen && numLink === i
                                ? "rotate-180"
                                : "rotate-0"
                            } flex items-center justify-center text-base`}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </span>
                        </div>

                        <div
                          className={`py-1  overflow-hidden duration-300 origin-top`}
                          style={{
                            height:
                              linkOpen && numLink === i
                                ? `${HlinkRef}px `
                                : "0px",
                          }}
                        >
                          <div ref={linkRef}>
                            {ie.sublink.map((im, i) => {
                              return (
                                <p className="text-xs pl-4 py-1" key={i}>
                                  {im.name}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </>
      <button className="  text-xs md:block text-white py-[6px] px-4 rounded-full bg-violet-800 ">
        Get Started
      </button>
    </aside>
  );
}

export default SideBar;
