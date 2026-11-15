import Image from "next/image";
import avicon from "@/../public/img/iconavo.svg";

const Partner = () => {
  return (
    <div className="Partner-avocrush-box">
      <strong className="heading-section-partner-box">
        Why Partner With Us
      </strong>
      <i className="divide-line no-mobile"></i>

      <span className="no-desktop divide-line-box opacity-100! relative">
        <i className="divide-line opacity-45!"></i>
        <Image
          src={avicon}
          alt="icon-avo-pic1"
          className="icon-avo-pic00 absolute opacity-100!"
        />
      </span>

      <div className="icon-with-heading-description-partner-box">
        <div>
          <strong>
            Clean-label <br /> product.
          </strong>
          <span>
            <picture className="no-mobile">
              <Image src={avicon} alt="avicon8" />
            </picture>
            <p>
              Premium, fresh, and effortlessly simple. Smashed avocado with 20%
              chunks - a clean label your shelves and menus can trust.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>

        <div>
          <strong>
            Consistent quality, <br /> year-round.
          </strong>
          <span>
            <picture className="no-mobile">
              <Image src={avicon} alt="avicon9" />
            </picture>
            <p>
              Our production process ensures stable texture, flavor, and color —
              every batch, every shipment.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>

        <div>
          <strong>
            Cold-pressed <br /> freshness.
          </strong>
          <span>
            <picture className="no-mobile">
              <Image src={avicon} alt="avicon10" />
            </picture>
            <p>
              State-of-the-art cold-press technology preserves nutrients and
              extends shelf life naturally.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>

        <div>
          <strong>Efficient 125g pack format.</strong>
          <span>
            <picture className="no-mobile">
              <Image src={avicon} alt="avicon11" />
            </picture>
            <p>
              Perfect for retail shelves, meal kits, cafés, and hotel breakfast
              service.
            </p>
          </span>
        </div>
        <i className="divide-line no-mobile"></i>
      </div>

      <div className="highlighted-heading-with-description">
        <div className="heading-descriptionwithhighlight-txt-box-partner">
          <strong>For Retailers</strong>
          <p>
            Give your customers a ready-to-eat avocado option they can rely on —
            no ripening time, no waste, no guessing.
          </p>
        </div>
        <i className="divide-line no-mobile"></i>

        <div className="heading-descriptionwithhighlight-txt-box-partner">
          <strong>For Foodservice</strong>
          <p>
            A fast, cost-effective solution for kitchens: portion-controlled,
            consistent, and always ready. Ideal for toast bars, restaurants,
            salad bars, and grab-and-go concepts.
          </p>
        </div>
        <i className="divide-line no-mobile"></i>

        <div className="heading-descriptionwithhighlight-txt-box-partner">
          <strong>For Distributors</strong>
          <p>
            Offer a high-demand, plant-based product with strong consumer appeal
            and a rising category trend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
