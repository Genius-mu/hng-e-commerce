import Props1 from "@/components/Props1";
import RBanner from "@/components/RBanner";
import Section2 from "@/components/Section2";
import Section6 from "@/components/Section6";

const Speakers = () => {
  return (
    <>
      <RBanner txtVal={"speakers"} />
      <Props1
        h3Val={"NEW PRODUCT"}
        imgVal={"/images/img10.png"}
        h2Val={"ZX9 SPEAKER"}
        pVal={
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        flStyl={"row"}
        linkVal="/speaker"
      />
      <Props1
        h3Val={""}
        imgVal={"/images/img11.png"}
        h2Val={"ZX7 SPEAKER"}
        pVal={
          "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        }
        flStyl={"row-reverse"}
        linkVal="/speaker"
      />
      <Section2 />
      <Section6 />
    </>
  );
};

export default Speakers;
