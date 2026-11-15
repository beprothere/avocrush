import { client } from "@/sanity/lib/client";
import Image from "next/image";
import prd1 from "@/../public/img/prd1.png";

const MobBanner = async () => {
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
    <div className="Mob-banner-container">
      {heroBanner && (
        <div className="Mob-banner-box">
          <div className="relative image-box-banner">
            {heroBanner.bgImageUrl && (
              <Image
                src={heroBanner.bgImageUrl}
                alt="Mob-Hero-bg-Image"
                width={300}
                height={300}
                className="Mob-bg-image"
              />
            )}

            <picture className="overlay-jarr-pic-box">
              <Image
                src={prd1}
                alt="Hero-jarr-Image"
                width={100}
                height={100}
                className="Mob-herro-overlay-image"
              />
            </picture>
          </div>

          <h2 className="MobBanner_heading">{heroBanner.heading}</h2>

          <div className="Mob-desc-box-home-banner-box">
            <p className="Mob-desc-box-home-banner-txt font-ofmedium">
              {heroBanner.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobBanner;
