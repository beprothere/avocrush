import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import pvector1 from "@/../public/img/pvector1.svg";
import pvector2 from "@/../public/img/pvector2.svg";
import pvector3 from "@/../public/img/pvector3.svg";
import pvector4 from "@/../public/img/pvector4.svg";
import pvector5 from "@/../public/img/pvector5.svg";

const Preserves = () => {
  return (
    <div className="preserves-box">
      <div className="preserves-track-graph">
        <div className="no-desktop">
          <GoDotFill />
          <picture>
            <Image src={pvector1} alt="pvector1-pic" width={100} height={100} />
          </picture>
          <b>Vegan</b>
        </div>
        <div className="no-mobile">
          <GoDotFill />
          <picture>
            <Image src={pvector2} alt="pvector2-pic" width={100} height={100} />
          </picture>
          <b>Clean label</b>
        </div>
        <div>
          <GoDotFill />
          <picture>
            <Image src={pvector3} alt="pvector3-pic" width={100} height={100} />
          </picture>
          <b><b className="no-mobile">No preservatives</b><b className="no-desktop">No presv.</b> </b>
        </div>
        <div>
          <GoDotFill />
          <picture>
            <Image src={pvector4} alt="pvector4-pic" width={100} height={100} />
          </picture>
          <b>Healthy fats</b>
        </div>
        <div>
          <GoDotFill />
          <picture>
            <Image src={pvector5} alt="pvector5-pic" width={100} height={100} />
          </picture>
          <b>Keto-friendly</b>
        </div>
      </div>

      <div className="mob-divide-line-box">
        <i className="mob-divide-line"></i>
      </div>

      <div className="preserves-detail-txt-box">
        <p>Cold-pressed and sealed in an airtight pack,</p>
        <strong>
          Avocrush preserves the pure taste and vibrant color of ripe avocados —
          naturally.
        </strong>
      </div>

      <div className="divide-line-box">
        <i className="divide-line"></i>
      </div>
    </div>
  );
};

export default Preserves;
