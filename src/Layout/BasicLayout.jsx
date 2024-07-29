import { Footer, Navbar } from "../components";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-[1216px] m-auto flex flex-col gap-[50px] flex-grow">
        <Navbar />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
