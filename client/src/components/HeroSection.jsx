import { IoIosSearch } from "react-icons/io";
const HeroSection = () => {
  return (
    <div className=" sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center">
      <form action="" className="absolute flex justify-center items-center">
        <input
          type="search"
          id="search"
          name="search"
          className="-px-3 py-5 w-[80vw] text-xl sm:text-3xl mx-auto outline-none  border-b border-gray-300 focus:border-gray-500 transition-all duration-300"
          placeholder="Search your assest...."
        />
        <IoIosSearch className="text-3xl sm:text-5xl text-gray-500 -ml-10" />
      </form>
    </div>
  );
};

export default HeroSection;
