import Link from "next/link";
import Image from "next/image";

import { SetStateAction, useState } from "react";

import NavbarList from "../link/NavbarList";
import Moon from "public/moon.svg";
import Sun from "public/sun.svg";

interface HeaderProps {
  setDarkToggle: React.Dispatch<SetStateAction<boolean>>;
  darkToggle: boolean;
}

export default function Header({ props }: { props: HeaderProps }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      // className={`w-[95%] z-30 left-[2.5%] mt-6 rounded-[4rem] shadow-xl shado-[0px_0px_30px_0px_rgba(0,0,0,0.3)] fixed backdrop-blur`}
      className={`w-full z-30 fixed backdrop-blur`}
    >
      <div className="justify-between px-12 md:px-14 md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="#">
              <h2 className="text-2xl font-poppins dark:text-white text-lightParagraph font-bold">
                daudhiyaa
              </h2>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-white text-darkText"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 dark:text-white text-darkText"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div
            className={`flex-1 justify-self-center pb-6 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="md:items-center justify-center flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0 font-poppins text-white">
              <NavbarList title="Home" href="/" />
              <NavbarList title="Projects" href="/projects" />
              <NavbarList title="Chess Player" href="/chess" />
              <NavbarList title="Login" href="/login" />
            </ul>
          </div>
          <button
            onClick={() => props.setDarkToggle(!props.darkToggle)}
            className={`p-2 duration-300 h-min text-darkText md:flex rounded-md hover:shadow-md hover:bg-darkComponentHover bg-darkComponent ${
              navbar ? "max-[768px]:flex" : "max-[768px]:hidden"
            }`}
          >
            <Image src={props.darkToggle ? Sun : Moon} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}
