import Props1 from "@/components/Props1";
import RBanner from "@/components/RBanner";
import Section2 from "@/components/Section2";
import Section6 from "@/components/Section6";

const Headphones = () => {
  return (
    <>
      <RBanner txtVal={"Headphones"} />
      <Props1
        h3Val={"NEW PRODUCT"}
        imgVal={"/images/img7.png"}
        h2Val={"ZX9 SPEAKER"}
        pVal={
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        flStyl={"row"}
        linkVal="/headphone"
      />
      <Props1
        h3Val={"NEW PRODUCT"}
        imgVal={"/images/img8.png"}
        h2Val={"ZX9 SPEAKER"}
        pVal={
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        flStyl={"row-reverse"}
        linkVal="/headphone2"
      />
      <Props1
        h3Val={"NEW PRODUCT"}
        imgVal={"/images/img9.png"}
        h2Val={"ZX9 SPEAKER"}
        pVal={
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        flStyl={"row"}
        linkVal="/headphone3"
      />
      <Section2 />
      <Section6 />
    </>
  );
};

export default Headphones;
