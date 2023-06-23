import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useGlobalContext } from "./Context";
import data from "./Data";
function Items() {
  const { openSub } = useGlobalContext();
  function handleOver(e) {
    const page = e.target.textContent;
    const tempbt = e.target.getBoundingClientRect();
    const center = (tempbt.left + tempbt.right) / 2;
    const bottom = tempbt.bottom + 10;
    openSub(page, { center, bottom });
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            onMouseOver={handleOver}
            key={index}
            className="group   h-full relative  text-xs flex cursor-pointer items-center justify-center pl-[40px]"
          >
            <h1 className="flex items-center justify-center h-full uppercase btn">
              {item.name}
            </h1>
            <span className="ml-1 group-hover:rotate-180 duration-300 ">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        );
      })}
    </>
  );
}

export default Items;
