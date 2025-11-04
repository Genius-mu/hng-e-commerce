import Props1 from "@/components/Props1";
import RBanner from "@/components/RBanner";
import Section2 from "@/components/Section2";
import Section6 from "@/components/Section6";

const Earphones = () => {
  return (
    <>
      <RBanner txtVal={"EARPHONES"} />
      <Props1
        h3Val={"NEW PRODUCT"}
        imgVal={"/images/img12.png"}
        h2Val={"ZX9 SPEAKER"}
        pVal={
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
        flStyl={"row"}
        linkVal=""
      />
      <Section2 />
      <Section6 />
    </>
  );
};

export default Earphones;
