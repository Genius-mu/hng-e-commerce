// import Link from "next/link";
// import React from "react";

// const Section1 = () => {
//   return (
//     <>
//       <section className="sec1 w-full h-fit pt-[10%] pb-[14%] flex justify-center items-center">
//         <div className="h-full w-[80%] flex justify-between">
//           <div className="flex flex-col gap-y-5">
//             <h3 className="uppercase text-[11px] font-light text-[#999] tracking-[9px]">
//               new product
//             </h3>
//             <h2 className="text-white text-5xl uppercase max-w-[500px]">
//               xx99 mark ii HeadPhones
//             </h2>
//             <p className="para text-[#fafafa] text-[14px] max-w-[300px]">
//               Experience natural, lifelike audio exceptional build quality made
//               for the passionate music enthusiast.
//             </p>
//             <Link href="" className="text-white pt-3 pb-3 pl-7 pr-7 bg-[#d87d4a] hover:bg-[#fbaf85] hover:text-black transition duration-200 w-fit">see product</Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Section1;

import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <section className="sec1 w-full h-fit pt-[10%] pb-[14%] flex justify-center items-center bg-black">
      <div className="h-full w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between items-start md:items-center gap-y-8 md:gap-y-0">
        <div className="flex flex-col gap-y-5">
          <h3 className="uppercase text-[10px] sm:text-[11px] font-light text-[#999] tracking-[6px] sm:tracking-[9px]">
            new product
          </h3>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl uppercase max-w-full sm:max-w-[500px] leading-snug">
            xx99 mark ii HeadPhones
          </h2>
          <p className="para text-[#fafafa] text-[12px] sm:text-[14px] max-w-full sm:max-w-[300px]">
            Experience natural, lifelike audio exceptional build quality made
            for the passionate music enthusiast.
          </p>
          <Link
            href=""
            className="text-white mt-3 sm:mt-5 py-2 px-5 sm:py-3 sm:px-7 bg-[#d87d4a] hover:bg-[#fbaf85] hover:text-black transition duration-200 w-fit text-center"
          >
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
