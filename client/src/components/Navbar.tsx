import Link from "next/link";
import { CTASecondaryButton } from "./CTASecondaryButton";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-5 xl:px-10 py-2.5 ">
      <div className="flex items-center justify-start gap-20">
        <Link href="/" className="text-left">
          <span className="font-jacquesFrancois font-semibold text-primaryGray text-2xl">
            Logo
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <CTASecondaryButton title="Login" onClick={() => {}} />
        <CTASecondaryButton title="Signup" onClick={() => {}} />
      </div>
    </nav>
  );
};
