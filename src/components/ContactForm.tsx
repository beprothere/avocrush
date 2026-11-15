import arrowpicsbtn from "@/../public/img/arr1.svg";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section className="contact-form-conatiner" id="contact">
      <div className="contact-heding-contact-book">
        <div className="name-and-arrow">
          <strong className="contact-text-heading">Contact Us</strong>
          <Image src={arrowpicsbtn} alt="arrow-pic-contact-icon" />
        </div>

        <div className="other-contacts">
          <Link href={"tel:+38267037053"} className="tel-cont-link-content">
            +382 67 037 053
          </Link>

          <Link
            href={"mailto:partnership@avocrush.me"}
            className="target-email-link"
          >
            partnership@avocrush.me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
