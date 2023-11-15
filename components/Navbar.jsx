import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center p-2 space-x-10 md:space-x-20">
      <Link href="/about" className="text-bank_green">
        About Us
      </Link>

      {/* Your logo is the Home button! */}
      <Link href="/">
        <Image
          src="/images/bootcamp_bank.png"
          alt="logo"
          height={100}
          width={100}
        />
      </Link>

      <Link href="/accounts" className="text-bank_green">
        Accounts
      </Link>
    </div>
  );
}

export default Navbar;
