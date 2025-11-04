// import { Facebook, Instagram, Twitter } from "lucide-react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <section className="w-full h-fit pt-[5%] pb-[4%] bg-black flex justify-center items-center">
//         <div className="h-full gap-x-5 flex justify-between rounded w-[80%]">
//           <div className="flex flex-col gap-y-7">
//             <h2 className="text-white font-bold text-2xl">audiophile</h2>
//             <p className="text-white/70 text-[14px] max-w-[400px]">
//               Audiophile is an all in one stop to fulfill your audio needs.
//               We're a small team of music lovers and sound specialists who are
//               devoted to helping you get the most out of personal audio. Come
//               and visit our demo facility - we’re open 7 days a week.
//             </p>
//             <p className="text-white/70 text-[14px] font-semibold">
//               Copyright 2021. All Rights Reserved
//             </p>
//           </div>
//           <div className="flex flex-col items-end gap-y-[40%]">
//             <nav className="flex gap-x-3">
//               <Link href="/" className="uppercase text-[15px] text-white">
//                 Home
//               </Link>
//               <Link href="/" className="uppercase text-[15px] text-white">
//                 HeadPhones
//               </Link>
//               <Link href="/" className="uppercase text-[15px] text-white">
//                 speakers
//               </Link>
//               <Link href="/" className="uppercase text-[15px] text-white">
//                 earphones
//               </Link>
//             </nav>
//             <span className="flex gap-x-5">
//               <Link href="" className="uppercase text-[15px] text-white">
//                 <Facebook />
//               </Link>
//               <Link href="" className="uppercase text-[15px] text-white">
//                 <Twitter />
//               </Link>
//               <Link href="" className="uppercase text-[15px] text-white">
//                 <Instagram />
//               </Link>
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black flex justify-center items-center py-12">
      <div className="w-[90%] md:w-[80%] flex flex-col gap-10">
        {/* Top: Logo + Nav */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <h2 className="text-white font-bold text-2xl tracking-wider">
            audiophile
          </h2>

          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
            <Link
              href="/"
              className="uppercase text-sm text-white hover:text-[#d87d4a] transition"
            >
              Home
            </Link>
            <Link
              href="/headphonepage"
              className="uppercase text-sm text-white hover:text-[#d87d4a] transition"
            >
              Headphones
            </Link>
            <Link
              href="/speakers"
              className="uppercase text-sm text-white hover:text-[#d87d4a] transition"
            >
              Speakers
            </Link>
            <Link
              href="/earphones"
              className="uppercase text-sm text-white hover:text-[#d87d4a] transition"
            >
              Earphones
            </Link>
          </nav>
        </div>

        {/* Middle: Description */}
        <p className="text-white/70 text-[14px] max-w-[520px] leading-relaxed">
          Audiophile is an all-in-one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility — we’re open 7 days a week.
        </p>

        {/* Bottom: Copyright + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/70 text-[14px]">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex gap-5">
            <Link
              href="#"
              className="text-white hover:text-[#d87d4a] transition"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-[#d87d4a] transition"
            >
              <Twitter />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-[#d87d4a] transition"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
