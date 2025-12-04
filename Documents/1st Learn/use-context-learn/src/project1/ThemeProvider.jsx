import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeTog } from "../App";

const ThemeProvider = () => {
  const { dark, setDark } = useContext(ThemeTog);

  return (
    <button
      onClick={() => setDark(!dark)}
      //   aria-label="Toggle dark mode"
      className={`relative w-12 h-6 rounded-full flex items-center transition-colors duration-300 
                 ${dark ? "bg-gray-700" : "bg-gray-200"} hover:shadow-lg`}
    >
      <div
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center 
                    ${
                      dark
                        ? "translate-x-6 bg-indigo-500"
                        : "translate-x-0.5 bg-yellow-400"
                    } 
                    shadow-md`}
      >
        {dark ? (
          <span key="moon">
            <Moon className="w-4 h-4 text-white" />
          </span>
        ) : (
          <span key="sun">
            <Sun className="w-4 h-4 text-white" />
          </span>
        )}
      </div>
    </button>
  );
};

export default ThemeProvider;
