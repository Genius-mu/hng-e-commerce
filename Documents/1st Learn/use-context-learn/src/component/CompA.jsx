import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  //   const { theme, setTheme } = useContext(ThemeContext); // 3. Consume
  const Vals = useContext(ThemeContext);
  return (
    <>
      <h1>{Vals}</h1>
    </>
  );
}

export default Header;
