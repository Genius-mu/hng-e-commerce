// import { useContext } from "react";
// import { CartContext } from "../App";

// const Cart = () => {
//   const { Carts, setCarts } = useContext(CartContext);
//   const total = Carts.reduce(
//     (acc, item) => acc + Number(item.priceCon || 0),
//     0
//   );

//   return (
//     <>
//       <section className="grid justify-center items-center p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-fit gap-4">
//         {Carts.map((Cart, index) => (
//           <>
//             <div className="flex flex-col gap-4 px-4 py-4 justify-center items-center border-b-2 border-blue-600 w-full h-fit shadow-xl">
//               <h2 className="font-bold text-xl uppercase">{Cart.h2Con}</h2>
//               <p>{Cart.pCon}</p>
//               <p>{`$${Cart.priceCon}`}</p>
//             </div>
//           </>
//         ))}
//       </section>

//       <div className="w-full text-center mt-6 text-2xl font-bold">
//         Total: ${total}
//       </div>
//     </>
//   );
// };

// export default Cart;

import { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { Carts } = useContext(CartContext);

  const total = Carts.reduce(
    (acc, item) => acc + item.priceCon * item.quantity,
    0
  );

  return (
    <>
      <section className="grid p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Carts.map((cart, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 border-b-2 border-blue-600 shadow-xl"
          >
            <h2 className="font-bold text-xl uppercase">{cart.h2Con}</h2>
            <p>{cart.pCon}</p>
            <p>Price: ${cart.priceCon}</p>
            <p>Quantity: {cart.quantity}</p>
            <p>Total: ${cart.priceCon * cart.quantity}</p>
          </div>
        ))}
      </section>

      <div className="w-full text-center mt-6 text-2xl font-bold">
        Cart Total: ${total}
      </div>
    </>
  );
};

export default Cart;
