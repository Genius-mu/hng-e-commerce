import Link from "next/link";

const Section4 = () => {
  return (
    <>
      <section className="w-full h-fit pt-[10%] pb-[2%] flex justify-center items-center">
        <div className="sec4 h-[20em] justify-start items-center pl-[5%] pr-[5%] rounded w-[80%] bg-[#f1f1f1] flex">
          <div className="flex flex-col gap-y-4 h-fit">
            <h2 className="text-black font-semibold text-2xl uppercase">
              zx7 speaker
            </h2>
            <Link
              href=""
              className="uppercase hover:text-white hover:bg-black transition duration-200 text-black bg-transparent border-2 border-black pt-2 pb-2 pl-7 pr-7"
            >
              see product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
