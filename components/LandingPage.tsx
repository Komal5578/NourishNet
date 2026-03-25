"use client";

import React from "react";
import ShinyText from "./ShinyText";
import Lottie from "lottie-react";
import chefAnimation from "../public/data/chef-making-pizza.json";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
       <source src="/data/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-6">

        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 drop-shadow-lg">
            <ShinyText
              text="NourishNet"
              speed={2}
              color="#0a2240" // dark blue
              shineColor="#48bfe3"
              spread={120}
              className="inline-block"
            />
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-lg drop-shadow">
            A modern B2B website for managing tiffin (meal box) delivery services
            <br />
            <span className="font-semibold text-primary">NourishNet</span> is
            your all-in-one platform for food inspiration, planning, and more.
          </p>
          <button
            className="px-8 py-3 rounded-lg text-white text-lg font-semibold shadow-lg transition"
            style={{
              backgroundColor: '#0a2240',
              border: 'none',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#143968')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#0a2240')}
            onClick={() => router.push("/login")}
          >
            Get Started
          </button>
        </div>

        {/* Right Side: Animation clipped inside circle */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="relative border-8 border-primary shadow-2xl bg-white dark:bg-zinc-900"
            style={{
              width: "clamp(280px, 40vw, 384px)",
              height: "clamp(280px, 40vw, 384px)",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Lottie
              animationData={chefAnimation}
              loop={true}
              style={{
                position: "absolute",
                width: "140%",
                height: "140%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -45%)",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}