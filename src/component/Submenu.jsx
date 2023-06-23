import React, { useEffect, useState } from "react";

import { useGlobalContext } from "./Context";
function Submenu() {
  const { newData, location, open, setOpSub, setOpen, setOpenSid } =
    useGlobalContext();

  const [rese, setResize] = useState(0);

  const container = React.useRef(null);
  useEffect(() => {
    const sub = container.current;
    sub.style.left = `${location.center}px`;
    sub.style.top = `${location.bottom}px`;
  }, [location, open, newData]);
  useEffect(() => {
    function Width() {
      setResize(window.innerWidth);
    }
    if (rese < 768) {
      setOpen(false);
    }
    if (rese > 768) {
      setOpenSid(true);
    }
    window.addEventListener("resize", Width);

    return () => {
      window.removeEventListener("resize", Width);
    };
  }, [rese]);

  return (
    <div
      onMouseOver={() => setOpSub(true)}
      ref={container}
      className={`
    ${open ? "grid" : "hidden"}
     z-10 before:content-['']  

     ${() => console.log(window.innerWidth)}
    before:rotate-45 before:left-3 md:before:left-2/4 
      md:-translate-x-2/4 fixed before:-top-[5px] before:absolute 
    before:h-4 before:w-4 before:bg-white bg-white top-[45px] gap-[30px] grid grid-cols-3 w-[400px] p-4 `}
    >
      {newData &&
        newData.sublinks &&
        newData.sublinks.map((ite, i) => {
          return (
            <div key={i} className="h-fit">
              <h1 className="text-base mb-2 uppercase">{ite.Head}</h1>
              <ul>
                {ite.sublink.map((ie, i) => {
                  return (
                    <li className="py-[2px]" key={i}>
                      {ie.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default Submenu;
