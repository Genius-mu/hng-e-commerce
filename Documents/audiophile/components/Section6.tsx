const Section6 = () => {
  return (
    <>
      <section className="w-full h-fit pt-[5%] pb-[5%] flex justify-center items-center">
        <div className="h-full gap-x-5 flex flex-col md:flex-row gap-y-4 justify-between items-center rounded w-[80%]">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-4xl font-semibold max-w-[400px] uppercase text-black">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h2>
            <p className="text-black/70 text-[14px] max-w-[400px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="w-full sm:w-[50%] h-[30em] rounded overflow-hidden">
            <img
              src="/images/img6.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
