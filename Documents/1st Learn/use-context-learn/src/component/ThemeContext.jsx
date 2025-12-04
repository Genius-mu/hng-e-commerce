import { createContext } from "react";
import Header from "./CompA";

export const ThemeContext = createContext();

const ThemeVal = () => {
  return (
    <>
      <ThemeContext.Provider value  ="Musti">
        <Header />
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeVal;
