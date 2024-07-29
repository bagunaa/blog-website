import Logo from "../assets/Logo.png";
import Search from "../assets/search-outline.svg";
export const Navbar = () => {
  return (
    <>
      <div className="flex w-[1917px] py-8 flex-col items-start gap-[10px]">
        <div className="flex items-start gap-[118px]">
          <img className="w-[158px] h-[36px]" src={Logo} alt="Blog-Logo" />
          <div className="flex items-center gap-7">
            <div className="flex w-[667px] justify-center items-center gap-10">
              <p className="text-base font-normal">Home</p>
              <p className="text-base font-normal">Blog</p>
              <p className="text-base font-normal">Contact</p>
            </div>
            <div className="flex w-[166[px] items-center gap-10 bg-[#F4F4F5] rounded-md border-2">
              <input
                className="flex w-[114px] items-center gap-3 bg-[#F4F4F5] rounded-md"
                placeholder="Search"
              />
              <img src={Search} alt="SearchIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
