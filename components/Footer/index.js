import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 laptop:mt-20 border-t border-gray-800 pt-8 pb-8">
        <div className="flex flex-col laptop:flex-row items-center justify-between gap-4 p-2 laptop:p-0">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Yalta Developers. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Made with</span>
            <span className="text-red-500 animate-pulse text-lg">❤️</span>
            <span className="text-gray-400">by</span>
            <a 
              href="https://github.com/Dadebay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300"
            >
              Yalta Development Team
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
