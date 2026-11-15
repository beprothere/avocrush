import { client } from "@/sanity/lib/client";
import Image from "next/image";
import prd1 from "@/../public/img/prd1.png";

const HeroBanner = async () => {
  const heroBanner = await client.fetch(`
    *[_type == "heroBanner"]{
      heading,
      description,
      ctaSlug,
      "bgImageUrl": bgImage.asset->url,
      "imageUrl": image.asset->url
    }[0]
  `);

  return (
    <div className="hero-banner-container">
      {heroBanner && (
        <div
          className="hero-banner-box"
          style={{
            backgroundImage: `url(${heroBanner.bgImageUrl})`,
          }}
        >
          <div className="banner-heading-bg-box"></div>
          <h2 className="heroBanner_heading">
            {heroBanner.heading}
          </h2>

          <div className="desc-box-home-banner-box">
            <p className="desc-box-home-banner-txt font-ofmedium">{heroBanner.description}</p>
          </div>

          
            <Image
              src={prd1}
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