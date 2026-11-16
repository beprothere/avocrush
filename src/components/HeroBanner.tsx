import { heroBanner } from "@/content/heroBanner";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      {heroBanner && (
        <div
          className="hero-banner-box"
          style={{
            backgroundImage: `url(/img/hero-img.jpg)`,
          }}
        >
          <div className="banner-heading-bg-box"></div>
          <h2 className="heroBanner_heading">Smooth. Green. Irresistible.</h2>

          <div className="desc-box-home-banner-box">
            <p className="desc-box-home-banner-txt font-ofmedium">
              A smooth, creamy avocado spread with real chunks. Made from real,
              ripe avocados, crafted for those who appreciate pure, honest
              flavour. 
            </p>
          </div>

          <Image
            src="/img/prd1.png"
            alt="Hero Image"
            width={300}
            height={300}
            className="herro-overlay-image"
          />
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
