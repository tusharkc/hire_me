"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Layout = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const counterRef = useRef(null);
  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * 200) + 50;

    const timeoutId = setTimeout(() => {
      const randomNumber = count + Math.floor(Math.random() * 10) + 1;
      setCount(randomNumber > 100 ? 100 : randomNumber);
    }, randomDelay);

    return () => clearTimeout(timeoutId);
  }, [count]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(counterRef.current, 0.25, { delay: 3.5, opacity: 0 });
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".bar", 1.5, {
        delay: 3.5,
        height: 0,
        zIndex: -1000,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
      });
    });
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isExternal: false },
    { name: "Github", href: "https://github.com/tusharkc", isExternal: true },
    {
      name: "Twitter",
      href: "https://twitter.com/tusharkc2502",
      isExternal: true,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/tushar-karamchandani-92592120b/",
      isExternal: true,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@Tusharkc",
      isExternal: true,
    },
  ];

  return (
    <>
      <h1
        ref={counterRef}
        className="counter fixed w-full h-full flex justify-end items-end z-[10000] text-[#bcbcc4] px-[0.2em] py-[0.4em] text-[20vw] pointer-events-none"
      >
        {count}
      </h1>
      <div className="overlay w-[100vw] h-screen fixed z-[500] flex items-center justify-center pointer-events-none">
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
        <div className="bar w-[10vw] h-screen bg-[#1a1a1a]"></div>
      </div>
      {count === 100 && (
        <>
          {/* Sidebar overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
            />
          )}

          {/* Sidebar for mobile */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleSidebar}
                className="text-black focus:outline-none"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="p-4">
              {navLinks.map((link, index) => (
                <div key={index} className="py-3">
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-black font-bold text-xl hover:text-gray-700"
                      onClick={toggleSidebar}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-black font-bold text-xl hover:text-gray-700"
                      onClick={toggleSidebar}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Header */}
          <header
            ref={ref}
            className={`${
              isSticky ? "sticky" : "absolute"
            } top-0 left-0 right-0 z-40 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg`}
          >
            <div className="flex items-center justify-between container mx-auto">
              {/* Hamburger menu for mobile */}
              <div className="md:hidden p-4">
                <button onClick={toggleSidebar} className="focus:outline-none">
                  <MenuIcon />
                </button>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
                {navLinks.map((link, index) => (
                  <nav key={index} className="p-4 md:p-8">
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-black font-bold text-xl md:text-2xl"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="cursor-pointer text-black font-bold text-xl md:text-2xl"
                      >
                        {link.name}
                      </Link>
                    )}
                  </nav>
                ))}
              </div>
            </div>
          </header>

          {children}
        </>
      )}
    </>
  );
};

export default Layout;
