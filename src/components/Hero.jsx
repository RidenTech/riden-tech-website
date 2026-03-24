import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-white pt-20 flex items-center">
      <div className="max-w-8xl mx-auto">
        <div className="bg-gradient-to-br from-red-600 to-black rounded-3xl shadow-2xl h-[560px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white  pl-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Fair rides</span>
                <br />
                for the price you
                <br />
                both agree on
              </h1>

              <p className="text-xl text-white/90 max-w-lg">
                Download the RIDEN app and start your journey with fair prices and reliable service.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <FaApple className="text-3xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-lg font-semibold -mt-1">App Store</span>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <FaGooglePlay className="text-3xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Get it on</span>
                    <span className="text-lg font-semibold -mt-1">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative lg:h-[600px] w-full ">
              {/* Image positioned at bottom right */}
              <div className="absolute bottom-10 right-0 w-[100%] h-auto z-10">
                <img
                  src={heroImage}
                  alt="RIDEN App Interface"
                  className="w-full h-full object-contain"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;