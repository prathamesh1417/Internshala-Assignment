import React, { useState } from "react";

export default function Widget() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-background text-foreground font-sans">
      <nav className="flex items-center justify-between p-6 border border-zinc-200 bg-white rounded-full shadow-xl mt-8 mx-auto w-11/12 max-w-7xl">
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/6QQFzgK1/logo-1.png"
            alt="GrowuMedia Logo"
            className="h-15 w-12 mr-3"
          />
          <span className="md:text-3xl  text-2xl font-extrabold font-montserrat">
            GrowuMedia
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-semibold text-zinc-3">
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
          >
            Video Editing
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
          >
            Reels / Tiktok
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
          >
            Video Promotion
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
          >
            Career
          </a>
        </div>
        <button className="hidden md:block bg-black text-white shadow-2xl rounded-full px-7 py-5 hover:bg-gray-800 transition-colors duration-100 focus:outline-none focus:ring-2 ">
          Book an Intro →
        </button>
        <div className="md:hidden flex items-center">
          <button
            className="bg-black text-white shadow-2xl rounded-full px-4 py-2 hover:bg-gray-800 transition-colors duration-100 focus:outline-none focus:ring-2 "
            onClick={toggleDropdown}
          >
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div className="md:hidden flex flex-col items-center bg-white rounded-md shadow-lg mt-2 p-4">
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300 py-2"
          >
            Video Editing
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300 py-2"
          >
            Reels / Tiktok
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300 py-2"
          >
            Video Promotion
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300 py-2"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300 py-2"
          >
            Career
          </a>
        </div>
      )}

      <main className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl ">
          <span className="text-yellow-400 font-greatVibes md:text-9xl ">
            Not Just Another
          </span>
          <br />
          <span className="text-black font-montserrat font-extrabold ">
            Video Editing Agency
          </span>
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl font-extrabold text-zinc-500">
          We Help You To Start A New Or Grow Your Existing Podcast That Unlocks{" "}
          <br />
          Opportunities &{" "}
          <span className="text-black">
            Leads, Expands Impact And Increases Revenue.
          </span>
        </p>
        <div className="mt-12 space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-transparent text-black rounded-full px-7 py-5 border border-gray-300 font-semibold hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            View Plans & Pricing
          </button>
          <button className="bg-black text-white font-bold drop-shadow-2xl rounded-full px-7 py-5 hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Our Projects →
          </button>
        </div>
      </main>

      <section className="mt-8 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold font-montserrat">Our Results</h2>
      </section>
    </div>
  );
}
