import { heroBanner } from "@/content/heroBanner";
import Image from "next/image";

const MobBanner = () => {
  return (
    <div className="Mob-banner-container">
      {heroBanner && (
        <div className="Mob-banner-box">
          <div className="relative image-box-banner">
            {heroBanner.bgImageUrl && (
              <Image
                src="/img/maskgroup.png"
                alt="Mob-Hero-bg-Image"
                width={300}
                height={300}
                className="Mob-bg-image"
              />
            )}

            <picture className="overlay-jarr-pic-box">
              <Image
                src="/img/prd1.png"
                alt="Hero-jarr-Image"
                width={100}
                height={100}
                className="Mob-herro-overlay-image"
              />
            </picture>
          </div>

          <h2 className="MobBanner_heading">Smooth. Green. Irresistible.</h2>

          <div className="Mob-desc-box-home-banner-box">
            <p className="Mob-desc-box-home-banner-txt font-ofmedium">
              A smooth, creamy avocado spread with real chunks. Made from real,
              ripe avocados, crafted for those who appreciate pure, honest
              flavour.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobBanner;
