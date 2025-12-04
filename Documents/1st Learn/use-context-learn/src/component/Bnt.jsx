import { ThemeContext } from "./ThemeContext";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <p className={`p-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
      This is content!
    </p>
  );
}
