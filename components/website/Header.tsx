"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const links = [
  {
    link:"/",
    label:"Home"
  },
  {
    link:"/about",
    label:"About Us"
  },
  {
    link:"/book-demo",
    label:"Book Demo"
  },
  {
    link:"timeline-blogs",
    label:"Timeline & Blogs"
  },
  {
    link:"/how-it-works",
    label:"How It Works"
  },
  {
    link:"/contact",
    label:"Contact"
  }
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full text-white">
        {/* Top Header */}
        <div className="bg-background-secondary">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h3 className="hidden md:inline-block">
              Welcome To NK Lakshay Educare
            </h3>

            <div className="flex">
              <button className="p-2 hover:bg-background-primary">
                Login
              </button>

              <div className="border-r border-white" />

              <button className="p-2 hover:bg-background-primary">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="bg-white">
          <nav className="max-w-6xl h-16 mx-auto flex justify-between items-center text-black">
            <div className="px-2 font-bold text-xl">
              Logo
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-5 font-medium">
              {links.map((tab, index) => (
                <li
                  key={index}
                  className="hover:text-background-secondary cursor-pointer transition-colors"
                >
                  <Link href={tab.link}>{tab.label}</Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="block md:hidden p-2 mr-2"
            >
              <GiHamburgerMenu className="text-2xl" />
            </button>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button className="rounded-full bg-background-primary px-8">
                Pay Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

     
     {/* Drawer */}
<div
  className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold text-black">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <IoClose className="text-3xl text-black" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col text-black">
          {links.map((tab) => (
            <li
              key={tab.label}
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-b hover:bg-background-secondary hover:text-white cursor-pointer transition-colors"
            >
              <Link href={tab.link}>{tab.label}</Link>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <Button className="w-full rounded-full bg-background-primary">
            Pay Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;