// // import "./App.css";
// // import ThemeVal from "./component/ThemeContext";
// // import Page from "./project1/Page";
// // import { createContext, useState } from "react";

// // export const ThemeTog = createContext();

// // function App() {
// //   const [dark, setDark] = useState(false);

// //   return (
// //     <>
// //       {/* <ThemeVal /> */}
// //       <ThemeTog.Provider value={{ dark, setDark }}>
// //         <Page />
// //       </ThemeTog.Provider>
// //     </>
// //   );
// // }

// // export default App;

// import { createContext, useState } from "react";
// import "./App.css";
// import Products from "./project2/Products";
// import Cart from "./project2/Cart";

// export const CartContext = createContext();

// function App() {
//   const [Carts, setCarts] = useState([
//     {
//       h2Con: "",
//       pCon: "",
//       priceCon: "",
//     },
//   ]);

//   console.log(Carts);

//   return (
//     <>
//       <div className="flex flex-col gap-5 justify-center items-center">
//         <CartContext.Provider value={{ Carts, setCarts }}>
//           <Products />
//         </CartContext.Provider>
//         <hr className="border-2 border-blue-600 w-[80%]" />
//         <CartContext.Provider value={{ Carts, setCarts }}>
//           {Carts === "" ? "" : <Cart />}
//         </CartContext.Provider>
//       </div>
//     </>
//   );
// }

// export default App;

import { createContext, useState } from "react";
import "./App.css";
import Products from "./project2/Products";
import Cart from "./project2/Cart";

export const CartContext = createContext();

function App() {
  const [Carts, setCarts] = useState([]);

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center">
        <CartContext.Provider value={{ Carts, setCarts }}>
          <Products />
          <hr className="border-2 border-blue-600 w-[80%]" />
          <Cart />
        </CartContext.Provider>
      </div>
    </>
  );
}

export default App;
