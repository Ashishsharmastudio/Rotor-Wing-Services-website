import Image from "next/image";
import Link from "next/link";

const MeetOwner = () => {
  return (
    <section className="bg-blue-background px-[80px] flex items-center min-h-screen py-10 bg-no-repeat bg-cover ">
      <div className="flex flex-col md:flex-row items-center justify-center lg:items-start gap-5 max-w-[1800px] m-auto">
        {/*  <div className="mb-5 md:min-w-[400px]">
                  <Image
                        src='/images/ricky-photo.webp'
                        alt="Owner Image"
                        width={600} // Adjust according to the image size
                        height={800} // Adjust according to the image size
                        className="w-full h-full max-w-[570px] max-h-[780px] object-cover"
                    /> 
                </div>
*/}
        <div className="text-white md:max-w-[100%] md:pl-5 pt-5 md:pt-[5vh]">
          <h4 className="mb-3">MEET THE OWNER</h4>
          <h2 className="mb-3 text-white">
            Hi, I'm Francisco Javier Fernandez
          </h2>
          <p className="mb-[10px] details leading-relaxed text-[#bbbbbb]">
            With over two decades of experience in both civil and military
            aviation, I have developed a deep expertise in overseeing aircraft
            maintenance to ensure the highest safety and quality standards. My
            career has been dedicated to managing complex maintenance
            operations, ensuring compliance with regulatory requirements, and
            leading diverse teams to achieve operational excellence.
          </p>
          <p className="mb-[10px] details leading-relaxed text-[#bbbbbb]">
            I founded Rotor Wing Services to provide specialized aviation
            solutions, including consultancy, training, and maintenance
            management, tailored to meet the unique needs of our clients. Our
            mission is to empower aviation operators with skilled professionals
            and innovative solutions that enhance safety, efficiency, and
            operational readiness.
          </p>
          <p className="mb-[10px] details leading-relaxed text-[#bbbbbb]">
            Whether you're looking for expert crew resourcing, operational
            support, or comprehensive training programs, Rotor Wing Services is
            committed to delivering tailored solutions that meet your specific
            requirements. Our team is here to ensure that your operations run
            smoothly and safely, no matter the challenge.
          </p>
          <div className="my-3 details leading-relaxed">
            <p className="text-[#bbbbbb] pb-1">
              <span className="text-lightBlue">✓&nbsp;</span> 20+ years of
              aviation experience
            </p>
            <p className="text-[#bbbbbb] pb-1">
              <span className="text-lightBlue">✓&nbsp;</span> Expertise in civil
              and military aviation
            </p>
            <p className="text-[#bbbbbb] pb-1">
              <span className="text-lightBlue">✓&nbsp;</span> Comprehensive
              training and consultancy services
            </p>
            <p className="text-[#bbbbbb] pb-1">
              <span className="text-lightBlue">✓&nbsp;</span> Global network of
              aviation professionals
            </p>
          </div>
          <Link
            href="/request-a-qoute"
            className="text-white px-5 py-2 my-2 rounded-full text-lg bg-gradient-to-r from-[#59a6c8] via-[#6cc3e8] to-[#4f94b8] transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetOwner;
