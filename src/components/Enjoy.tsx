import Image from "next/image";
import bgimageenjoy from "@/../public/img/bgimageenjoy.svg";
import prd3 from "@/../public/img/prd3.png";

const Enjoy = () => {
  return (
    <div className="Enjoy-avocrush-box">
      <b className="enjoy-subheading">Enjoy</b>
      <strong className="heading-enjoy">Avocrush</strong>

      <picture className="bg-image-headings-enjoy-box">
        <Image src={bgimageenjoy} alt="bgimageenjoy" />
      </picture>

      <div className="mobile-inner-bg"></div>

      <picture className="jarr-image-headings-enjoy-box">
        <Image src={prd3} alt="bgimageenjoy" />
      </picture>
    </div>
  );
};

export default Enjoy;
