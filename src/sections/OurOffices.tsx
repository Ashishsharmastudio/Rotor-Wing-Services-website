"use client";
import React from "react";
import InteractiveMap from "../components/InteractiveMap";

const OurOffices = () => {
  return (
    <section className="h-screen max-h-[900px] overflow-hidden p-0 flex flex-col items-center justify-center bg-white">
      <div className="max-w-[1800px] w-full mx-auto  text-black text-center">
        <h2 className="mb-8">Global Network & Offices</h2>
        <InteractiveMap />
      </div>
    </section>
  );
};

export default OurOffices;
