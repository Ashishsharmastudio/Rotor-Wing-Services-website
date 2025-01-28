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
              <a href="tel:+97142234567">+971 4 223 4567</a>
            </p>
          </div>

          {/* London Office */}
          <div className="text-left">
            <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <OurOfficesSvg />
            </div>
            <h3 className="font-bold text-3xl">London</h3>
            <p className="mt-3 text-lg">
              <a href="https://maps.app.goo.gl/example-london">
                Aviation House, Gatwick Airport
                <br />
                London, UK
              </a>
              <br />
              <a href="tel:+441293456789">+44 1293 456 789</a>
            </p>
          </div>
        </div>

        {/* Second Row - Singapore (Hidden on mobile) */}
        <div className="hidden md:flex md:flex-row gap-10 md:gap-14 mt-14">
          <div className="lg:w-1/2 text-left">
            <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <OurOfficesSvg />
            </div>
            <h3 className="font-bold text-3xl">Singapore</h3>
            <p className="mt-3 text-lg">
              <a href="https://maps.app.goo.gl/example-singapore">
                20 Changi Airport Blvd
                <br />
                Singapore
              </a>
              <br />
              <a href="tel:+6565123456">+65 6512 3456</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
