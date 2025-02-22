import React from "react";
import { OurOfficesSvg } from "@/svg";

const OurOffices = () => {
  return (
    <section className="bg-cover bg-center h-screen max-h-[900px] overflow-hidden bg-ourOffices-background overlay p-0 flex items-center">
      <div className="max-w-[1800px] w-full mx-auto px-5 md:px-32 flex flex-col text-white justify-center">
        <h2 className="mb-4 text-white">Global Network & Offices</h2>

        {/* First Row - Dubai & London */}
        <div className="grid grid-cols-2 gap-5 md:flex md:flex-row md:gap-60">
          {/* Dubai Office */}
          <div className="text-left">
            <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <OurOfficesSvg />
            </div>
            <h3 className="font-bold text-3xl">Dubai (HQ)</h3>
            <p className="mt-3 text-lg">
              <a href="https://maps.app.goo.gl/example-dubai">
                Aviation City, Dubai World Central
                <br />
                Dubai, UAE
              </a>
              <br />
              
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurOffices;
