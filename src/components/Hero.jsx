import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MarqueeSection from "./MarqueeSection";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headingLinesRef = useRef([]);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const imageRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial fade in for the whole section
      if (heroRef.current) {
        tl.fromTo(heroRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      }

      // Badge animation
      if (badgeRef.current) {
        tl.fromTo(badgeRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        );
      }

      // Heading lines stagger animation
      const validHeadingLines = headingLinesRef.current.filter(Boolean);
      if (validHeadingLines.length > 0) {
        tl.fromTo(validHeadingLines,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power4.out"
          },
          "-=0.3"
        );
      }

      // Description animation
      if (descriptionRef.current) {
        tl.fromTo(descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Buttons container fade in
      if (buttonsRef.current) {
        tl.fromTo(buttonsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.4"
        );
      }

      // Button 1 animation
      if (button1Ref.current) {
        tl.fromTo(button1Ref.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2"
        );
      }

      // Button 2 animation
      if (button2Ref.current) {
        tl.fromTo(button2Ref.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3"
        );
      }

      // Image animation with clip path reveal
      if (imageRef.current) {
        tl.fromTo(imageRef.current,
          {
            opacity: 0,
            scale: 0.95
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
          },
          "-=0.8"
        );
      }

    });

    return () => {
      ctx.revert();
    };
  }, [mounted]);

  // Initial mount trigger
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section ref={heroRef} className="relative bg-white overflow-hidden" />;

  return (
    <>
      <section ref={heroRef} className="relative bg-white min-h-[100dvh] lg:h-screen overflow-hidden flex items-center pt-24 pb-20 lg:pt-0 lg:pb-0">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          {/* Desktop: side-by-side, Mobile: stacked */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8  items-center">

            {/* Left Content */}
            <div className="w-full flex flex-col  gap-4 text-center lg:text-left pt-6">
              {/* Badge */}
              <div ref={badgeRef} className="inline-flex items-center bg-accent/10 rounded-full px-3 md:px-4 py-1.5 md:py-2 mx-auto lg:mx-0 w-fit border border-accent/20">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 md:mr-2 shadow-[0_0_8px_rgba(223,145,20,0.4)]"></span>
                <span className="text-xs md:text-sm text-accent tracking-wider font-semibold">WELCOME TO RIDEN TECH</span>
              </div>

              {/* Main Heading */}
              <h1 className="  text-4xl sm:text-5xl  lg:text-6xl xxl:text-7xl text-gray-900 leading-[1.1] md:leading-[1.2] font-semibold tracking-tight">
                <span ref={el => headingLinesRef.current[0] = el} className="block">Leading the</span>
                <span ref={el => headingLinesRef.current[1] = el} className="block text-accent italic">Evolution of</span>
                <span ref={el => headingLinesRef.current[2] = el} className="block relative">
                  Modern Business
                </span>
              </h1>

              {/* Description */}
              <p ref={descriptionRef} className="text-base md:text-md lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed md:leading-loose">
                We craft cutting-edge digital solutions that drive growth, enhance efficiency, and transform complex challenges into seamless digital experiences.
              </p>

              {/* CTA Buttons */}
              <div ref={buttonsRef} className="flex gap-2 justify-center lg:justify-start pt-2 md:pt-4">
                <Link
                  ref={button1Ref}
                  to="/contact"
                  className="group w-fit relative inline-flex items-center justify-center gap-1 bg-gray-900 text-white px-8 py-4 rounded-full sm:text-sm text-xs font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-gray-900/20   overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
                <Link
                  ref={button2Ref}
                  to="/services"
                  className="group w-fit relative inline-flex items-center justify-center gap-1 bg-gray-100 text-gray-900 px-8 py-4 rounded-full sm:text-sm text-xs font-medium  transition-all duration-300 hover:scale-[1.02] hover:shadow-md   overflow-hidden"
                >
                  <span className="relative z-10">View Services</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
              </div>
            </div>

            {/* Right Content - Image Container */}
            <div className="w-full flex justify-center items-center lg:py-4">
              <div
                className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-[1.1/1]"
              >
                {/* Main Image Container with Clip Path - Now properly contained */}
                <div
                  ref={imageRef}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    clipPath: 'url(#heroClipPath)',
                    WebkitClipPath: 'url(#heroClipPath)',
                  }}
                >
                  {/* IT-Related Image */}
                  <img
                    src="/hero.jpg"
                    alt="RidenTech Innovation"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive SVG ClipPath Definition */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="heroClipPath" clipPathUnits="objectBoundingBox">
              <path d="M 0.037 0.082 L 0.37 0.082 A 0.037 0.041 0 0 0 0.407 0.041 L 0.407 0.041 A 0.037 0.041 0 0 1 0.444 0 L 0.963 0 A 0.037 0.041 0 0 1 1 0.041 L 1 0.959 A 0.037 0.041 0 0 1 0.963 1 L 0.037 1 A 0.037 0.041 0 0 1 0 0.959 L 0 0.122 A 0.037 0.041 0 0 1 0.037 0.082 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <MarqueeSection />
        </div>
      </section>
    </>
  );
};

export default Hero;
