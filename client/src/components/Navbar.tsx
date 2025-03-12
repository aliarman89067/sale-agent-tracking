import Link from "next/link";
import { CTASecondaryButton } from "./CTASecondaryButton";
import { NAVBAR_HEIGHT } from "@/constant/values";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-fit bg-white z-50">
      <div
        style={{ height: `${NAVBAR_HEIGHT}px` }}
        className="flex items-center justify-between mx-auto w-full px-5 xl:px-10"
      >
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
      </div>
    </nav>
  );
};
