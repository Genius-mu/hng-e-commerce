import Link from "next/link";

const Section3 = () => {
  return (
    <>
      <section className="w-full h-fit pt-[10%] pb-[1%] flex justify-center items-center">
        <div className="h-full relative pl-[5%] pr-[5%] rounded w-[80%] bg-[#d87d4a] overflow-hidden gap-x-5">
          {/* <span className="w-[70%] bottom-[20px] h-full top-[-10px] border-1 dsc sm:flex-none border-[#fff]/40 rounded-[50%] absolute left-[-50px]"></span>
          <span className="w-[50%] h-[90%] border-1 dsc sm:flex-none border-[#fff]/40 rounded-[50%] absolute left-[10px] bottom-[-30%]"></span>
          <span className="w-[40%] h-[80%] border-1 dsc sm:flex-none border-[#fff]/40 rounded-[50%] absolute bottom-[-30%]"></span> */}
          <div className="z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10">
            <div>
              <img src="/images/img4.png" alt="" />
            </div>
            <div className="flex pt-[4%] flex-col gap-y-7 md:items-start sm:items-center pb-4">
              <h2 className="font-semibold text-3xl uppercase text-white md:max-w-[200px] sm:max-w-[300px] sm:text-center md:text-left">
                xz9 speaker
              </h2>
              <p className="text-white max-w-[300px] sm:text-center md:text-left">
                Upgrade to premium speakers that are phenomenally built to
                deliver truely remarable sound.
              </p>
              <Link
                href=""
                className="text-white bg-black pt-2 pb-2 pl-7 pr-7 w-fit uppercase text-[15px] border-black hover:bg-transparent border-2 hover:text-black transition duration-200"
              >
                see product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
