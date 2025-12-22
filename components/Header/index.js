import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleTeamScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
    // Force dark mode
    setTheme('dark');
  }, [setTheme]);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      Resume
                    </Button>
                  )}
                  <Button onClick={() => router.push("/#right-fit")}>
                    The Right Fit
                  </Button>
                  <Button onClick={() => router.push("/#playbook")}>
                    Playbook
                  </Button>
                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                  <Button onClick={handleWorkScroll}>Work - Projects</Button>
                  <Button onClick={handleTeamScroll}>Work - Team</Button>
                  <Button onClick={handleAboutScroll}>Work - About</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`hidden flex-row items-center justify-center sticky top-4 z-50 tablet:flex w-full py-3 px-6`}
      >
        <nav className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 flex items-center gap-2 shadow-2xl">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-xl opacity-50"></div>
          
          {/* Navigation items */}
          <div className="relative flex items-center gap-2">
            <button
              onClick={() => router.push("/")}
              className={`relative px-7 py-3 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 overflow-hidden group ${
                data.showCursor && "cursor-none"
              }`}
              style={{ fontFamily: "'Gilroy-SemiBold', sans-serif" }}
            >
              <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 antialiased">
                Home
              </span>
            </button>
            
            {showResume && (
              <button
                onClick={() => router.push("/resume")}
                className={`relative px-7 py-3 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 overflow-hidden group ${
                  data.showCursor && "cursor-none"
                }`}
                style={{ fontFamily: "'Gilroy-SemiBold', sans-serif" }}
              >
                <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="relative z-10 text-gray-300 group-hover:text-black transition-colors duration-300 antialiased">
                  Resume
                </span>
              </button>
            )}
            
            <button
              onClick={handleWorkScroll}
              className={`relative px-7 py-3 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 overflow-hidden group ${
                data.showCursor && "cursor-none"
              }`}
              style={{ fontFamily: "'Gilroy-SemiBold', sans-serif" }}
            >
              <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className="relative z-10 text-gray-300 group-hover:text-black transition-colors duration-300 antialiased">
                Projects
              </span>
            </button>
            
            <button
              onClick={() => router.push("/#contact")}
              className={`relative px-7 py-3 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 overflow-hidden group ${
                data.showCursor && "cursor-none"
              }`}
              style={{ fontFamily: "'Gilroy-SemiBold', sans-serif" }}
            >
              <span className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              <span className="relative z-10 text-gray-300 group-hover:text-black transition-colors duration-300 antialiased">
                Contact
              </span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
