"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

import Image from "next/image";
import image from "@/img/hero.png";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white w-full">
      {/* Snowfall Effect */}
      <Snowfall
        color="#ededed"
        snowflakeCount={50}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
        }}
      />

      <div className="container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between relative z-10 w-full">
        {/* Text Content */}
        <div
          className={`md:max-w-2xl w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl md:leading-[80px] leading-[60px] font-bold mb-4 text-green-600 font-korona">
            🎅 The Merriest Memecoin of 2024! 🎄
          </h1>

          <p className="md:text-xl text-lg text-gray-700 mb-8 leading-8">
            Ho Ho HODL! Join the most festive community in crypto. 1% of all
            transactions go to Children&apos;s Charities!
          </p>
          <div className="md:space-x-4 flex md:flex-row flex-col space-y-5 md:space-y-0">
            <button className="bg-red-600 text-white md:px-8 px-5 py-3 rounded-full font-bold hover:bg-red-700 transition-colors font-korona md:text-xl text-lg">
              Buy $CRYPTOMAS
            </button>
            <Link
              href={"https://t.me/bagcryptomas"}
              target="_blank"
              className="bg-green-600 text-white md:px-8 px-5 py-3 rounded-full font-bold hover:bg-green-700 transition-colors font-korona md:text-xl text-base"
            >
              Join Community
            </Link>
          </div>
        </div>

        {/* Image - Right side */}
        <div className="md:w-[50%] w-full h-full">
          <Image
            src={image}
            alt="CRYPTOMAS"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
