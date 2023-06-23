import { useGlobalContext } from "./Context";
function Hero() {
  const { setOpen, opSub } = useGlobalContext();
  function handleClose() {
    if (opSub) {
      setOpen(false);
    }
  }
  return (
    <div
      onMouseOver={handleClose}
      className="flex-1 relative bg-[url('./assets/Hero.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="absolute  w-full h-full flex place-items-center flex-col place-content-center">
        <h1 className="text-white">Fashion Tips</h1>
        <p className="my-3 font-semibold text-2xl text-white text-center">
          Items every woman should have
        </p>

        <button className="hidden  text-xs md:block text-white py-[6px] px-4 rounded-full bg-violet-800 ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
