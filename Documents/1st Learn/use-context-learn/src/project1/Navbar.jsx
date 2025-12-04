import ThemeProvider from "./ThemeProvider";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeTog);

  return (
    <nav
      className={`w-full flex justify-center items-center backdrop-blur-xl ${
        dark ? "bg-black/70" : "bg-black/2"
      } shadow-sm transition-colors`}
    >
      <div className="w-[90%] py-3 flex justify-between">
        <h1 className={`text-2xl ${dark ? "text-white" : "text-black"} font-extrabold`}>useContxt</h1>

        <div className="flex items-center gap-3 w-fit">
          <ThemeProvider />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
