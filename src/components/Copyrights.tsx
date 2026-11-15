import Image from "next/image";
import Link from "next/link";
import insta from "@/../public/img/insta.svg";

const Copyrights = () => {
  return (
    <div className="copyright-box flex-col">
      <div className="copy-line flex items-center justify-center gap-1">
        &copy; 2025 Avocrush by Florence.{" "}
        <Link href={"https://www.instagram.com/avocrush.me?igsh=emRmdmVicHhsanRk"} target="blank" className="flex items-center gap-2">
          <p>Follow Us </p>
          <Image src={insta} alt="iconinsta-icon" className="insta-icon" />
        </Link>
      </div>
      <Link href="http://ui.mpipin.com/" target="blank" className="underline mpipin-line">Design mpipin</Link>
    </div>
  );
};

export default Copyrights;
