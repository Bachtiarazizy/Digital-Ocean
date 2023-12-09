import Link from "next/link";
import { CgDigitalocean } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <CgDigitalocean className="mr-4" />
          <span className="text-white text-lg font-semibold">DigitalOcean</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          <Link href="/teams" className="text-white">
            Teams
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-white">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
