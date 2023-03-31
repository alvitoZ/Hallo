import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PrimaryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  return (
    <>
      <nav
        className="
        dark:bg-[#1a202c]
          w-full
          py-4
          md:pt-16
          text-lg text-gray-700
        "
      >
        <div className="flex justify-between">
          <div className="md:gap-8 cursor-pointer md:hidden block">
            <div className="">
              <Image src="/images/s.jpg" alt="s" width={50} height={50} />
            </div>
            <div>
              <p className="font-bold">huruf1</p>
              <p className="font-bold">huruf2</p>
            </div>
          </div>
          <div
            className={`h-6 w-6 cursor-pointer md:hidden block`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src="/images/f.jpg" alt="s" width={25} height={25} />
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div
            className="
              pt-4
              md:flex
              md:justify-between
              md:items-center
              md:pt-0
              md:w-full
              pb-8
              border-b-[3px]
              "
          >
            <div className="md:flex md:flex-row md:gap-8 hidden">
              <div className="">
                <Image src="/images/s.jpg" alt="s" width={50} height={50} />
              </div>
              <div>
                <p className="font-bold">huruf1</p>
                <p className="font-bold">huruf2</p>
              </div>
            </div>
            {/* <div className="hidden md:block">
              <Image src="/images/s.jpg" height={87} width={81} alt="sehijra" />
            </div> */}
            <div className="flex md:gap-28 md:flex-row flex-col">
              <div className="md:flex md:flex-row md:gap-24">
                <p className="font-bold">
                  <Link href={"/"}>Homepage</Link>
                </p>
                <p className="font-bold">
                  <Link href={"/"}>Information</Link>
                </p>
                <p className="font-bold">
                  <Link href={"/"}>Search About Me</Link>
                </p>
              </div>
              <div>
                <Image src="/images/f.jpg" alt="s" width={25} height={25} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default PrimaryNavigation;
