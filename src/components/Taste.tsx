import Image from "next/image";
import tastefampic from "@/../public/img/tastefampic.svg";
import iconavo from "@/../public/img/iconavo.svg";

const Taste = () => {
  return (
    <div className="Taste-box-avocrush">
      <div className="uper-heading-image-box">
        <strong>A Taste the Whole Family Shares</strong>
        <Image src={tastefampic} alt="tastefamilypic-pic" />
      </div>

      <i className="divide-line no-mobile"></i>

      <div className="down-descriptions-box">
        <p>
          In every home, there{"’"}s that one food everyone reaches for —
          Avocrush is that moment. From busy mornings to weekend brunches, it
          brings the family together around something real, fresh, and
          effortlessly delicious. Kids love the smooth, creamy texture - and the
          tiny avocado chunks that make every bite interesting. Parents love it
          for being natural, wholesome, and ready in seconds.
        </p>

        <p>
          And everyone loves how it turns simple meals into little celebrations.
          Whether it{"’"}s spread on warm toast, scooped next to eggs, or shared
          as a dip during family movie night, Avocrush fits naturally into
          everyday life — creating small moments of joy around the table.
          Nothing but avocado. Real flavor. Made for families.
        </p>
      </div>

      <span className="no-desktop divide-line-box opacity-100! relative">
        <i className="divide-line opacity-45!"></i>
        <Image
          src={iconavo}
          alt="icon-avo-pic1"
          className="icon-avo-pic00 absolute opacity-100!"
        />
      </span>

      <div className="taste-enddrop-descripton-heading-container">
        <div className="taste-enddrop-descripton-heading-box">
          <strong>No mess, no waste.</strong>
          <span>
            <Image src={iconavo} alt="icon-avo-pic1" className="no-mobile" />
            <p>
              Avocrush brings ready-to-use smashed avocado to your kitchen - no
              chopping, no pits, no mess, and nothing goes to waste.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>
        <div className="taste-enddrop-descripton-heading-box">
          <strong>Just ripe, just right.</strong>
          <span>
            <Image src={iconavo} alt="icon-avo-pic2" className="no-mobile" />
            <p>
              Made from fully ripe avocados, every spoonful blends creamy
              smoothness with avocado chunks in a naturally rich flavour - ready
              whenever you are.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>
        <div className="taste-enddrop-descripton-heading-box">
          <strong>Always ready, always fresh.</strong>
          <span>
            <Image src={iconavo} alt="icon-avo-pic3" className="no-mobile" />
            <p>
              From the first spoonful to the last, Avocrush stays perfectly ripe
              and ready to enjoy - no rush, no compromise on quality.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>
      </div>
    </div>
  );
};

export default Taste;
