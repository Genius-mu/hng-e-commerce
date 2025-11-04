// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function CheckoutPage() {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const stored = localStorage.getItem("cart");
//     if (stored) setCart(JSON.parse(stored));
//   }, []);

//   const calculateTotal = () =>
//     cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const total = calculateTotal();
//   const shipping = total > 0 ? 50 : 0;
//   const vat = total > 0 ? Math.round(total * 0.2) : 0;
//   const grandTotal = total + shipping + vat;

//   const handlePayment = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (cart.length === 0) return alert("Your cart is empty.");
//     setIsModalOpen(true);
//   };

//   return (
//     <section className="w-full flex justify-center items-center bg-[#fafafa] py-16 relative">
//       <div className="w-[80%] flex flex-col lg:flex-row gap-10 justify-between">
//         {/* LEFT: Form Section */}
//         <form
//           onSubmit={handlePayment}
//           className="flex flex-col bg-white p-10 rounded-2xl flex-1"
//         >
//           <Link
//             href="/cart"
//             className="text-sm text-gray-600 hover:text-black mb-5"
//           >
//             ← Go Back
//           </Link>

//           <h1 className="text-3xl font-bold text-black uppercase mb-8">
//             Checkout
//           </h1>

//           {/* Billing Details */}
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-2">
//               <h3 className="text-[#D87D4A] uppercase tracking-[2px] text-sm font-semibold">
//                 Billing Details
//               </h3>

//               <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="flex flex-col w-full">
//                   <label className="text-sm text-gray-700 font-semibold">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Alexei Ward"
//                     className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                   />
//                 </div>

//                 <div className="flex flex-col w-full">
//                   <label className="text-sm text-gray-700 font-semibold">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="alexei@mail.com"
//                     className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col w-full">
//                 <label className="text-sm text-gray-700 font-semibold">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="+1 202-555-0136"
//                   className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                 />
//               </div>
//             </div>

//             {/* Shipping Info */}
//             <div className="flex flex-col gap-2">
//               <h3 className="text-[#D87D4A] uppercase tracking-[2px] text-sm font-semibold">
//                 Shipping Info
//               </h3>

//               <div className="flex flex-col w-full">
//                 <label className="text-sm text-gray-700 font-semibold">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="1137 Williams Avenue"
//                   className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                 />
//               </div>

//               <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="flex flex-col w-full">
//                   <label className="text-sm text-gray-700 font-semibold">
//                     ZIP Code
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="10001"
//                     className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                   />
//                 </div>
//                 <div className="flex flex-col w-full">
//                   <label className="text-sm text-gray-700 font-semibold">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="New York"
//                     className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col w-full">
//                 <label className="text-sm text-gray-700 font-semibold">
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="United States"
//                   className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
//                 />
//               </div>
//             </div>

//             {/* Payment Details */}
//             <div className="flex flex-col gap-2">
//               <h3 className="text-[#D87D4A] uppercase tracking-[2px] text-sm font-semibold">
//                 Payment Details
//               </h3>

//               <div className="flex flex-col lg:flex-row justify-between gap-4">
//                 <p className="text-sm text-gray-700 font-semibold">
//                   Payment Method
//                 </p>

//                 <div className="flex flex-col gap-3 w-full">
//                   <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-3 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-[#D87D4A]"
//                     />
//                     e-Money
//                   </label>
//                   <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-3 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-[#D87D4A]"
//                     />
//                     Cash on Delivery
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>

//         {/* RIGHT: Summary Section */}
//         <div className="flex flex-col bg-white p-8 rounded-2xl w-full lg:w-[35%] h-fit">
//           <h2 className="uppercase text-xl font-semibold text-black mb-5">
//             Summary
//           </h2>

//           {cart.length > 0 ? (
//             <div className="flex flex-col gap-5">
//               {cart.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center gap-3"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-[4em] h-[4em] bg-[#f1f1f1] rounded flex justify-center items-center overflow-hidden">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-[2.5em] h-[2.5em]"
//                       />
//                     </div>
//                     <div className="flex flex-col">
//                       <h3 className="text-sm font-semibold text-black uppercase">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-500 text-sm">
//                         ${item.price.toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-gray-500 text-sm">
//                     x{item.quantity}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-col justify-center items-center gap-3 text-gray-400 mt-4">
//               <div className="w-[5em] h-[5em] bg-[#f1f1f1] rounded flex justify-center items-center text-3xl">
//                 :
//               </div>
//               <p>No items in cart</p>
//             </div>
//           )}

//           <div className="flex flex-col gap-3 mt-8">
//             <div className="flex justify-between">
//               <p className="text-gray-500 uppercase text-sm">Total</p>
//               <p className="text-black font-semibold">
//                 ${total.toLocaleString()}
//               </p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-gray-500 uppercase text-sm">Shipping</p>
//               <p className="text-black font-semibold">${shipping}</p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-gray-500 uppercase text-sm">VAT (included)</p>
//               <p className="text-black font-semibold">${vat}</p>
//             </div>
//             <div className="flex justify-between pt-2">
//               <p className="text-gray-500 uppercase text-sm">Grand Total</p>
//               <p className="text-[#D87D4A] font-bold">${grandTotal}</p>
//             </div>
//           </div>

//           <button
//             type="submit"
//             onClick={handlePayment}
//             className="w-full mt-6 py-3 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
//           >
//             Continue & Pay
//           </button>
//         </div>
//       </div>

//       {/* MODAL */}
//       {isModalOpen && (
//         <div className="absolute inset-0 flex justify-center items-center bg-[#000000]/20 z-50">
//           <div className="bg-white rounded-2xl w-[90%] max-w-md p-10 flex flex-col items-center gap-6 text-center shadow-xl">
//             <div className="w-12 h-12 rounded-full bg-[#D87D4A] flex justify-center items-center">
//               <span className="text-white text-2xl font-bold">✓</span>
//             </div>

//             <h2 className="text-2xl font-bold tracking-wide">
//               THANK YOU FOR YOUR ORDER
//             </h2>
//             <p className="text-gray-500 text-sm">
//               You will receive an email confirmation shortly.
//             </p>

//             {/* Order Summary Inside Modal */}
//             <div className="flex flex-col lg:flex-row w-full bg-[#f1f1f1] rounded-lg overflow-hidden">
//               <div className="flex-1 flex items-center justify-between p-4">
//                 {cart.length > 0 ? (
//                   <div className="flex items-center gap-4">
//                     <div className="w-[3em] h-[3em] bg-white rounded flex justify-center items-center overflow-hidden">
//                       <img src={cart[0].image} className="w-[2em]" />
//                     </div>
//                     <div className="flex flex-col text-left">
//                       <h3 className="font-semibold text-sm">{cart[0].name}</h3>
//                       <p className="text-gray-500 text-xs">
//                         ${cart[0].price.toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="text-gray-400 text-sm">No items</p>
//                 )}
//               </div>

//               <div className="bg-black text-white p-6 flex flex-col justify-center items-center">
//                 <p className="text-gray-400 text-xs uppercase">Grand Total</p>
//                 <p className="text-lg font-bold">${grandTotal}</p>
//               </div>
//             </div>

//             <Link
//               href="/"
//               className="w-full bg-[#D87D4A] text-white py-3 rounded hover:opacity-90 transition font-semibold"
//               onClick={() => setIsModalOpen(false)}
//             >
//               BACK TO HOME
//             </Link>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  // ✅ Make sure we’re on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Load cart from localStorage whenever it changes
  useEffect(() => {
    const loadCart = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          setCart(JSON.parse(storedCart));
        } catch {
          setCart([]);
        }
      } else {
        setCart([]);
      }
    };

    // Initial load
    loadCart();

    // Listen for changes (like add/remove from another tab or page)
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  if (!isClient) return null; // avoids hydration mismatch

  // ✅ Calculate totals
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 50 : 0;
  const vat = cart.length > 0 ? Math.round(total * 0.2) : 0;
  const grandTotal = total + shipping;

  // ✅ Payment handler
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <section className="w-full flex justify-center items-center bg-[#fafafa] py-16 relative">
      <div className="w-[80%] flex flex-col lg:flex-row gap-10 justify-between">
        {/* LEFT: Form Section */}
        <form
          onSubmit={handlePayment}
          className="flex flex-col bg-white p-10 rounded-2xl flex-1"
        >
          <Link
            href="/cart"
            className="text-sm text-gray-600 hover:text-black mb-5"
          >
            ← Go Back
          </Link>

          <h1 className="text-3xl font-bold text-black uppercase mb-8">
            Checkout
          </h1>

          {/* Billing Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#D87D4A] uppercase tracking-[2px] text-sm font-semibold">
                Billing Details
              </h3>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-700 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alexei@mail.com"
                    className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-700 font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+1 202-555-0136"
                  className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                />
              </div>
            </div>

            {/* Shipping Info */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#D87D4A] uppercase tracking-[2px] text-sm font-semibold">
                Shipping Info
              </h3>

              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-700 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-700 font-semibold">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    placeholder="10001"
                    className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-700 font-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-700 font-semibold">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="United States"
                  className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#D87D4A] uppercase tracking-[2px] text-sm font-semibold">
                Payment Details
              </h3>

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <p className="text-sm text-gray-700 font-semibold">
                  Payment Method
                </p>

                <div className="flex flex-col gap-3 w-full">
                  <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-[#D87D4A]"
                    />
                    e-Money
                  </label>
                  <label className="flex items-center gap-3 border border-gray-300 rounded px-4 py-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      className="accent-[#D87D4A]"
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-700 font-semibold">
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    placeholder="238521993"
                    className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-700 font-semibold">
                    e-Money PIN
                  </label>
                  <input
                    type="text"
                    placeholder="6891"
                    className="border border-gray-300 rounded px-4 py-3 outline-none focus:border-[#D87D4A]"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* RIGHT: Summary Section */}
        <div className="flex flex-col bg-white p-8 rounded-2xl w-full lg:w-[35%] h-fit">
          <h2 className="uppercase text-xl font-semibold text-black mb-5">
            Summary
          </h2>

          {/* ✅ If Cart is Empty */}
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <div className="w-[4em] h-[4em] mx-auto bg-[#f1f1f1] rounded flex justify-center items-center mb-3">
                <span className="text-2xl font-bold text-gray-400">–</span>
              </div>
              <p>No items in your cart.</p>
            </div>
          ) : (
            <>
              {/* ✅ Cart Items */}
              <div className="flex flex-col gap-5">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-[4em] h-[4em] bg-[#f1f1f1] rounded flex justify-center items-center overflow-hidden">
                        <img
                          src={item.image || "/images/blank.png"}
                          alt={item.name}
                          className="w-[2.5em] h-[2.5em] object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-black uppercase">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* ✅ Totals */}
              <div className="flex flex-col gap-3 mt-8">
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase text-sm">Total</p>
                  <p className="text-black font-semibold">
                    ${total.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase text-sm">Shipping</p>
                  <p className="text-black font-semibold">${shipping}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 uppercase text-sm">
                    VAT (included)
                  </p>
                  <p className="text-black font-semibold">${vat}</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p className="text-gray-500 uppercase text-sm">Grand Total</p>
                  <p className="text-[#D87D4A] font-bold">
                    ${grandTotal.toLocaleString()}
                  </p>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            onClick={handlePayment}
            className="w-full mt-6 py-3 bg-[#D87D4A] text-white rounded hover:opacity-90 transition"
          >
            Continue & Pay
          </button>
        </div>
      </div>

      {/* ✅ MODAL */}
      {isModalOpen && cart.length > 0 && (
        <div className="absolute inset-0 flex justify-center items-center bg-[#000000]/20 z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-10 flex flex-col items-center gap-6 text-center shadow-xl">
            <div className="w-12 h-12 rounded-full bg-[#D87D4A] flex justify-center items-center">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>

            <h2 className="text-2xl font-bold tracking-wide">
              THANK YOU FOR YOUR ORDER
            </h2>
            <p className="text-gray-500 text-sm">
              You will receive an email confirmation shortly.
            </p>

            <div className="flex flex-col lg:flex-row w-full bg-[#f1f1f1] rounded-lg overflow-hidden">
              <div className="flex-1 flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-[3em] h-[3em] bg-white rounded flex justify-center items-center overflow-hidden">
                    <img
                      src={cart[0]?.image || "/images/blank.png"}
                      className="w-[2em]"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="font-semibold text-sm">
                      {cart[0]?.name || "No Item"}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      ${cart[0]?.price?.toLocaleString() || 0}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 text-xs">
                  x{cart[0]?.quantity || 0}
                </span>
              </div>

              <div className="bg-black text-white p-6 flex flex-col justify-center items-center">
                <p className="text-gray-400 text-xs uppercase">Grand Total</p>
                <p className="text-lg font-bold">
                  ${grandTotal.toLocaleString()}
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="w-full bg-[#D87D4A] text-white py-3 rounded hover:opacity-90 transition font-semibold"
              onClick={() => {
                setIsModalOpen(false);
                localStorage.removeItem("cart");
                setCart([]);
              }}
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
