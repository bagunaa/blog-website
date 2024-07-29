import { Header } from "./Header";

export const PostTitle = () => {
  return (
    <div className="flex flex-col items-start gap-8">
      <Header text="All Blog Post" />

      <div className="flex w-[1216px] items-center gap-[30px]">
        <div className="flex items-center gap-5">
          <p className="text-[#D4A373] text-xs font-bold leading-6">All</p>
          <p className="text-[#495057] text-xs font-bold leading-6">Design</p>
          <p className="text-[#495057] text-xs font-bold leading-6">Travel </p>
          <p className="text-[#495057] text-xs font-bold leading-6">Fashion</p>
          <p className="text-[#495057] text-xs font-bold leading-6">
            Technology
          </p>
          <p className="text-[#495057] text-xs font-bold leading-6">Branding</p>
        </div>

        <p className="text-[#495057] text-xs font-bold leading-6 text-right">
          View All
        </p>
      </div>
    </div>
  );
};
