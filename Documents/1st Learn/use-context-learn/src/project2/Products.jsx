// import React, { useContext, useState } from "react";
// import { CartContext } from "../App";

// const Products = () => {
//   const { Carts, setCarts } = useContext(CartContext);

//   const [Cards, setCards] = useState([
//     {
//       h2Val: "Tesla",
//       pVal: "This is Tesla's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "#1200",
//     },
//     {
//       h2Val: "Nokia",
//       pVal: "Nokia: This is Nokia's latest phone model. Klassic Goldslsndj sj.",
//       priceVal: "300",
//     },
//     {
//       h2Val: "Tecno",
//       pVal: "Tecno: This is Tecno's latest phone model. Klassic Goldslsndj sj.",
//       priceVal: "600",
//     },
//     {
//       h2Val: "RedMi",
//       pVal: "This is Tesla's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "1400",
//     },
//     {
//       h2Val: "Real Me",
//       pVal: "RealMe: This is RealMe's latest phone model. Klassic Goldslsndj sj.",
//       priceVal: "700",
//     },
//     {
//       h2Val: "Samsung",
//       pVal: "Samsung: This is Samsung's latest phone model. Klassic Goldslsndj sj.",
//       priceVal: "2000",
//     },
//     {
//       h2Val: "Toyota",
//       pVal: "Toyota: This is Toyota's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "120000",
//     },
//     {
//       h2Val: "Camry",
//       pVal: "Camry: This is Camry's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "100000",
//     },
//     {
//       h2Val: "Siena",
//       pVal: "Seina: This is Seina's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "90000",
//     },
//     {
//       h2Val: "Toyota",
//       pVal: "Toyota: This is Toyota's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "120000",
//     },
//     {
//       h2Val: "Camry",
//       pVal: "Camry: This is Camry's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "100000",
//     },
//     {
//       h2Val: "Siena",
//       pVal: "Seina: This is Seina's latest car model. Klassic Goldslsndj sj.",
//       priceVal: "90000",
//     },
//   ]);
//   return (
//     <>
//       <section className="grid justify-center items-center p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-fit gap-4">
//         {Cards.map((Card, index) => (
//           <>
//             <div className="flex flex-col gap-4 px-4 py-4 justify-center items-center border-b-2 border-blue-600 w-full h-fit shadow-xl">
//               <h2 className="font-bold text-xl uppercase">{Card.h2Val}</h2>
//               <p>{Card.pVal}</p>
//               <p>{`$${Card.priceVal}`}</p>
//               <button
//                 onClick={() =>
//                   setCarts([
//                     ...Carts,
//                     {
//                       h2Con: Card.h2Val,
//                       pCon: Card.pVal,
//                       priceCon: Card.priceVal,
//                     },
//                   ])
//                 }
//                 className="bg-orange-600 w-full h-fit py-2 rounded text-white"
//               >
//                 Add to carts
//               </button>
//             </div>
//           </>
//         ))}
//       </section>
//     </>
//   );
// };

// export default Products;

import React, { useContext, useState } from "react";
import { CartContext } from "../App";

const Products = () => {
  const { Carts, setCarts } = useContext(CartContext);

  const [Cards] = useState([
    { h2Val: "Tesla", pVal: "Tesla latest model", priceVal: 1200 },
    { h2Val: "Nokia", pVal: "Nokia latest model", priceVal: 300 },
    { h2Val: "Tecno", pVal: "Tecno latest model", priceVal: 600 },
    { h2Val: "RedMi", pVal: "RedMi latest model", priceVal: 1400 },
  ]);

  const addToCart = (Card) => {
    const existing = Carts.find((item) => item.h2Con === Card.h2Val);

    if (existing) {
      // Increase quantity
      setCarts(
        Carts.map((item) =>
          item.h2Con === Card.h2Val
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      setCarts([
        ...Carts,
        {
          h2Con: Card.h2Val,
          pCon: Card.pVal,
          priceCon: Card.priceVal,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <section className="grid p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Cards.map((Card, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-4 border-b-2 border-blue-600 shadow-xl"
        >
          <h2 className="font-bold text-xl uppercase">{Card.h2Val}</h2>
          <p>{Card.pVal}</p>
          <p>${Card.priceVal}</p>

          <button
            onClick={() => addToCart(Card)}
            className="bg-orange-600 w-full py-2 rounded text-white"
          >
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default Products;
