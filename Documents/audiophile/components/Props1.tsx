// // "use client";
// // import Link from "next/link";

// // interface Props1Props {
// //   h3Val: string;
// //   h2Val: string;
// //   pVal: string;
// //   flStyl?: "row" | "row-reverse" | "column" | "column-reverse"; // restrict to valid flex directions
// //   imgVal: string;
// //   linkVal: string;
// // }

// // const Props1 = ({
// //   h3Val,
// //   h2Val,
// //   pVal,
// //   flStyl = "row",
// //   imgVal,
// //   linkVal,
// // }: Props1Props) => {
// //   return (
// //     <section className="w-full h-fit pt-[8%] pb-[5%] flex justify-center items-center">
// //       <div
// //         className="h-full gap-x-9 flex justify-between items-center rounded w-[80%]"
// //         style={{ flexDirection: flStyl }}
// //       >
// //         <div className="w-[50%] h-[30em] flex justify-center items-center bg-[#f1f1f1] rounded">
// //           <img src={imgVal} alt={h2Val} />
// //         </div>
// //         <div className="flex flex-col gap-y-6 w-[50%]">
// //           <h3 className="tracking-[7px] text-[#D87D4A]">{h3Val}</h3>
// //           <h2 className="text-4xl uppercase max-w-[240px]">{h2Val}</h2>
// //           <p className="text-[15px] text-black/70 max-w-[440px]">{pVal}</p>
// //           <Link
// //             href={linkVal}
// //             className="uppercase w-fit bg-[#d87d4a] hover:text-white hover:bg-black transition duration-200 text-white pt-2 pb-2 pl-7 pr-7"
// //           >
// //             see product
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Props1;

// "use client";
// import Link from "next/link";

// interface Props1Props {
//   h3Val: string;
//   h2Val: string;
//   pVal: string;
//   flStyl?: "row" | "row-reverse" | "column" | "column-reverse"; // restrict to valid flex directions
//   imgVal: string;
//   linkVal: string;
// }

// const Props1 = ({
//   h3Val,
//   h2Val,
//   pVal,
//   flStyl = "row",
//   imgVal,
//   linkVal,
// }: Props1Props) => {
//   return (
//     <section className="w-full h-fit pt-[8%] pb-[5%] flex justify-center items-center">
//       <div
//         className="h-full gap-x-9 flex justify-between items-center rounded w-[80%]"
//         style={{ flexDirection: flStyl }}
//       >
//         <div className="w-[50%] h-[30em] flex justify-center items-center bg-[#f1f1f1] rounded">
//           <img src={imgVal} alt={h2Val} />
//         </div>
//         <div className="flex flex-col gap-y-6 w-[50%]">
//           <h3 className="tracking-[7px] text-[#D87D4A]">{h3Val}</h3>
//           <h2 className="text-4xl uppercase max-w-[240px]">{h2Val}</h2>
//           <p className="text-[15px] text-black/70 max-w-[440px]">{pVal}</p>
//           <Link
//             href={linkVal}
//             className="uppercase w-fit bg-[#d87d4a] hover:text-white hover:bg-black transition duration-200 text-white pt-2 pb-2 pl-7 pr-7"
//           >
//             see product
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Props1;

"use client";
import Link from "next/link";

interface Props1Props {
  h3Val: string;
  h2Val: string;
  pVal: string;
  flStyl?: "row" | "row-reverse" | "column" | "column-reverse";
  imgVal: string;
  linkVal: string;
}

const Props1 = ({
  h3Val,
  h2Val,
  pVal,
  flStyl = "row",
  imgVal,
  linkVal,
}: Props1Props) => {
  // Determine flex direction classes based on flStyl
  const flexDirectionClass =
    flStyl === "row-reverse"
      ? "lg:flex-row-reverse"
      : flStyl === "column"
        ? "lg:flex-col"
        : flStyl === "column-reverse"
          ? "lg:flex-col-reverse"
          : "lg:flex-row";

  return (
    <section className="w-full h-fit pt-[8%] pb-[5%] flex justify-center items-center px-4">
      <div
        className={`h-full gap-6 lg:gap-9 flex flex-col ${flexDirectionClass} justify-between w-[80%] items-center rounded max-w-[1200px]`}
      >
        {/* Image Container */}
        <div className="w-full lg:w-[50%] h-[20em] sm:h-[25em] lg:h-[30em] flex justify-center items-center bg-[#f1f1f1] rounded-lg">
          <img
            src={imgVal}
            alt={h2Val}
            className="max-h-full max-w-full object-contain p-4"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-y-4 lg:gap-y-6 w-full lg:w-[50%] text-center lg:text-left items-center lg:items-start">
          <h3 className="tracking-[7px] text-[#D87D4A] text-xs sm:text-sm uppercase">
            {h3Val}
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase max-w-full lg:max-w-[240px] font-bold">
            {h2Val}
          </h2>
          <p className="text-sm sm:text-[15px] text-black/70 max-w-full lg:max-w-[440px]">
            {pVal}
          </p>
          <Link
            href={linkVal}
            className="uppercase w-fit bg-[#d87d4a] hover:bg-black transition duration-200 text-white text-xs sm:text-sm pt-3 pb-3 pl-6 pr-6 sm:pt-2 sm:pb-2 sm:pl-7 sm:pr-7 tracking-wide font-medium"
          >
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Props1;
