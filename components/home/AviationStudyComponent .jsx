"use client";
import React, { useState } from "react";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Earth from "../../public/assets/banner/location.jpg";

const AviationStudyComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState("North America");

  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada"],
      universities: [
        {
          name: "Embry-Riddle Aeronautical University",
          description:
            "Known for aviation management, aeronautics, and pilot training.",
          location: "United States",
          lat: 29.1905,
          lon: -81.0481,
        },
        {
          name: "Purdue University",
          description: "Offers Aerospace Engineering and Aviation Management",
          location: "United States",
          lat: 40.4237,
          lon: -86.9212,
        },
      ],
    },
    { name: "Australia", countries: ["Australia"] },
    { name: "UAE", countries: ["United Arab Emirates"] },
    { name: "South Africa", countries: ["South Africa"] },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={Earth}
          alt="Earth Image"
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm mb-1 text-white">Country</div>
            <h1 className="text-3xl md:text-4xl text-white font-bold mb-3">
              Best Countries to Study Aviation
            </h1>
            <p className="text-white text-sm sm:text-base">
              Designed to help students choose aviation programs based on
              geographical regions, <br /> highlighting unique opportunities in
              each area.
            </p>
          </div>
          <button className="flex items-center gap-2 border border-white px-6 py-2 rounded hover:bg-[#35516B] transition-colors text-white">
            Let&apos;s Explore
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4 relative">
            {/* Vertical progress indicator */}
            <div className="absolute left-0 top-0 w-3 h-full bg-gray-300 rounded-full block">
              <div
                className="w-3 bg-pink-500 rounded-full"
                style={{
                  height: `${
                    (regions.findIndex((r) => r.name === selectedRegion) + 1) *
                    (100 / regions.length)
                  }%`,
                  transition: "height 0.3s ease-in-out",
                }}
              />
            </div>

            <div className="space-y-4 pl-6 md:pl-6">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className={`transition-all duration-300 ${
                    selectedRegion === region.name
                      ? "bg-[#ffffff25] rounded border-2 border-gray-400 p-4"
                      : "p-4 opacity-60 bg-[#ffffff25] rounded"
                  }`}
                >
                  <button
                    onClick={() => setSelectedRegion(region.name)}
                    className="w-full text-left"
                  >
                    <span className="text-xl font-semibold text-white">
                      {region.name}
                    </span>
                    {region.countries.map((country) => (
                      <div
                        key={country}
                        className={`text-sm mt-1 ${
                          selectedRegion === region.name
                            ? "text-gray-300 "
                            : "text-gray-400 hidden"
                        }`}
                      >
                        {country}
                      </div>
                    ))}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/4">
            <div className="bg-[#ffffff16] border border-gray-400 rounded-md p-4 md:py-8">
              <h2 className="text-xl mb-1 font-semibold text-white">
                {selectedRegion}
              </h2>
              {regions
                .find((r) => r.name === selectedRegion)
                ?.universities?.map((uni) => (
                  <div key={uni.name} className="mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <MapPin className="w-5 h-5 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-white">
                          {uni.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {uni.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationStudyComponent;
