import Image from "next/image";
import marketpointstorepic from "@/../public/img/marketpointstorepic.svg";
import marketpointjarrpic from "@/../public/img/prd2.png";

const Market = () => {
  return (
    <div className="Market-avocrush-box">
      <strong>Pure Quality. Reliable Supply. Ready for Your Market.</strong>
      <picture className="marketpointstorepic">
        <Image src={marketpointstorepic} alt="marketpointstorepic" />
      </picture>
      <picture className="marketpointjarrpic">
        <Image src={marketpointjarrpic} alt="marketpointjarrpic" />
      </picture>
    </div>
  );
};

export default Market;
