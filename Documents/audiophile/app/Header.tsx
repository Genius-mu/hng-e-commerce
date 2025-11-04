// "use client";

// import { ShoppingCart } from "lucide-react";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <>
//       <header className="w-full h-[5em] flex justify-center items-center bg-[#101010]">
//         <div className="flex w-[80%] h-full items-center justify-between border-b border-[#f1f1f1]">
//           <h2 className="text-white font-bold text-2xl">audiophile</h2>
//           <nav className="flex gap-x-5">
//             <Link href="/" className="uppercase text-[15px] text-white">
//               Home
//             </Link>
//             <Link
//               href="/headphonepage"
//               className="uppercase text-[15px] text-white"
//             >
//               HeadPhones
//             </Link>
//             <Link href="/speakers" className="uppercase text-[15px] text-white">
//               Speakers
//             </Link>
//             <Link
//               href="/earphones"
//               className="uppercase text-[15px] text-white"
//             >
//               Earphones
//             </Link>
//           </nav>
//           <Link href="/checkout" className="uppercase text-[15px] text-white">
//             <ShoppingCart className="w-6 h-6 text-white" />
//           </Link>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[5em] flex justify-center items-center bg-[#101010]">
      <div className="flex w-[90%] md:w-[80%] h-full items-center justify-between border-b border-[#f1f1f1]">
        
        {/* Logo */}
        <h2 className="text-white font-bold text-2xl tracking-wider">audiophile</h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-x-8">
          <Link href="/" className="uppercase text-[15px] text-white hover:text-[#d87d4a] transition">Home</Link>
          <Link href="/headphonepage" className="uppercase text-[15px] text-white hover:text-[#d87d4a] transition">Headphones</Link>
          <Link href="/speakers" className="uppercase text-[15px] text-white hover:text-[#d87d4a] transition">Speakers</Link>
          <Link href="/earphones" className="uppercase text-[15px] text-white hover:text-[#d87d4a] transition">Earphones</Link>
        </nav>

        {/* Cart + Mobile Menu Icon */}
        <div className="flex items-center gap-6">
          <Link href="/checkout">
            <ShoppingCart className="w-6 h-6 text-white hover:text-[#d87d4a] transition" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[5em] left-0 w-full bg-[#101010] border-b border-gray-700 md:hidden animate-fadeIn">
          <nav className="flex flex-col p-6 gap-y-4 text-center">
            <Link onClick={() => setOpen(false)} href="/" className="uppercase text-[15px] text-white hover:text-[#d87d4a]">Home</Link>
            <Link onClick={() => setOpen(false)} href="/headphonepage" className="uppercase text-[15px] text-white hover:text-[#d87d4a]">Headphones</Link>
            <Link onClick={() => setOpen(false)} href="/speakers" className="uppercase text-[15px] text-white hover:text-[#d87d4a]">Speakers</Link>
            <Link onClick={() => setOpen(false)} href="/earphones" className="uppercase text-[15px] text-white hover:text-[#d87d4a]">Earphones</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
