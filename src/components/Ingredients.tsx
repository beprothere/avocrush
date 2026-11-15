import Image from "next/image";
import curvearrow from "@/../public/img/curvearrow.svg";
import iconfiltertext from "@/../public/img/iconfiltertext.svg";

const Ingredients = () => {
  return (
    <div className="ingredients-container">
      <h3>
        <b>Avocrush —</b> a 125g ready-to-eat smashed avocado with chunks.
      </h3>
      <div className="quality-percentage-subheading-description-descriptionicon">
        <div className="percentage-subheading relative">
          <b className="percentage-number">100%</b>
          <Image
            src={curvearrow}
            alt="ingredient-curve-arrow"
            className="ingredient-curve-arrow"
          />
          <span>
            <p className="subheading">Avocado. Nothing else</p>
            <b className="design-line design-line1"></b>
            <b className="design-line design-line9"></b>
            <b className="design-line design-line8"></b>
            <b className="design-line design-line7"></b>
            {/* <b className="design-line design-line2"></b> */}
          </span>
        </div>
        <div className="pargraph-pargraphicon">
          <p>
            A simple, natural avocado spread made from ripe avocados, with
            playful chunks for a fresh, homemade feel. Nothing added - just the
            pure, full flavour of avocado
          </p>
          <span className="pargraphicon">
            <Image src={iconfiltertext} alt="icon-filter-text" />
            <b className="design-line3"></b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
