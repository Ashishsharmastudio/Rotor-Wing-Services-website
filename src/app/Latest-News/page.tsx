import React from "react";
import events from "../../../events.json";
import Link from "next/link";
import BrandNames from "@/sections/BrandNames";

const Events = () => {
  return (
    <>
      <div className="bg-[url('/hero_images/2.png')] overlay bg-cover bg-center bg-no-repeat h-[130px] sm:h-[190px] lg:h-[300px] max-h-[300px] flex items-center justify-center">
        <h1 className="px-5 md:px-10 lg:px-20 max-w-[1800px] w-full mx-auto text-white">
          Latest News & Updates
        </h1>
      </div>

      <BrandNames />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1800px]">
        <div className="py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              Stay informed with the latest industry insights, company updates,
              and aviation trends from Rotor Wing Services. Here, we share
              breaking news, regulatory changes, success stories, and expert
              opinions to keep you ahead in the rotorcraft industry.
            </p>

            <div className="bg-blue-100 p-4 sm:p-6 rounded-lg mb-12">
              <ul className="space-y-4">
                {[
                  "Company Announcements – Exciting updates on partnerships, new services, and key milestones.",
                  "Industry News – Stay up to date with regulatory developments, technological advancements, and market trends in helicopter operations and maintenance.",
                  "Expert Insights & Opinions – Thought leadership articles, interviews, and discussions from our experienced team.",
                  "Project Highlights – A behind-the-scenes look at our ongoing and completed projects worldwide.",
                  "Training & Events – Information on upcoming webinars, workshops, and certification programs.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 flex-shrink-0">✔</span>
                    <p className="text-darkBlue">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            {events.event.map((category, index) => (
              <div key={index} className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-darkBlue mb-6">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.content.map((article, articleIndex) => (
                    <div
                      key={articleIndex}
                      className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02]"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={article.image}
                          alt={article.heading}
                          className="object-cover w-full h-48"
                        />
                      </div>
                      <div className="p-4">
                        <Link
                          href={`/events/${article.heading
                            .replace(/ /g, "-")
                            .toLowerCase()}`}
                          className="block"
                        >
                          <h3 className="font-bold text-lg text-darkBlue hover:text-blue-600 transition-colors duration-200">
                            {article.heading}
                          </h3>
                          <p className="mt-2 text-gray-600 line-clamp-3">
                            {article.description}
                          </p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 pb-8">
            <p className="text-gray-600 mb-2">
              Follow us for the latest updates and industry-leading insights.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              <span>Connect on LinkedIn</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
