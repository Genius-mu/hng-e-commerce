import Link from "next/link";

const Section5 = () => {
  return (
    <>
      <section className="w-full h-fit pt-[10%] pb-[2%] flex justify-center items-center">
        <div className="h-full gap-x-5 sm:flex-col flex-col md:flex-row flex justify-start items-center rounded w-[80%]">
          <div className="w-full h-[20em] rounded overflow-hidden">
            <img
              src="/images/img5.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full bg-[#f1f1f1] h-[20em] rounded justify-center pl-[10%] flex flex-col gap-y-4">
            <h2 className="text-2xl text-black uppercase font-semibold">
              yx1 earphones
            </h2>
            <Link
              href=""
              className="uppercase w-fit hover:text-white hover:bg-black transition duration-200 text-black bg-transparent border-2 border-black pt-2 pb-2 pl-7 pr-7"
            >
              see product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
