import Link from "next/link";
import ctaarrow from "@/../public/img/ctaarrow.svg";
import Image from "next/image";
import logo from "@/../public/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <Image src={logo} alt="logo-pic" className="logo-pic" />
        <Link href={"#contact"} className="font-OfeliaBold2 cta1-btn">
          <Image src={ctaarrow} alt="contact-btn-icon" />
          <p>Contact Us</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
