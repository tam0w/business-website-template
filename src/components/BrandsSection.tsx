"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaApple,
  FaMicrosoft,
  FaGoogle,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Brands: BrandType[] = [
  { name: "Apple", logo: FaApple },
  { name: "Microsoft", logo: FaMicrosoft },
  { name: "Google", logo: FaGoogle },
  { name: "Amazon", logo: FaAmazon },
  { name: "Facebook", logo: FaFacebook },
  { name: "Twitter", logo: FaTwitter },
  { name: "LinkedIn", logo: FaLinkedin },
  { name: "Instagram", logo: FaInstagram },
];

type BrandType = {
  name: string;
  logo: IconType;
};

interface BrandSectionProps {
  scrollSpeed?: number;
  scrollInterval?: number;
}

const BrandCard: React.FC<{
  brand: BrandType;
  onHover: (isHovered: boolean) => void;
  className?: string;
}> = React.memo(({ brand, onHover, className }) => (
  <motion.div
    className={`flex-shrink-0 w-auto rounded-xl overflow-hidden flex flex-col items-start justify-center p-6 glass border-glow-hover transition-all duration-300 ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <div className="flex items-center space-x-3">
      {React.createElement(brand.logo, { className: "text-3xl text-foreground" })}
      <h3 className="text-lg font-semibold text-foreground">{brand.name}</h3>
    </div>
  </motion.div>
));

BrandCard.displayName = "BrandCard";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
};

const BrandsSection: React.FC<BrandSectionProps> = ({
  scrollSpeed = 0.1,
  scrollInterval = 30,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const effectiveScrollSpeed = isMobile ? scrollSpeed * 2 : scrollSpeed;
  const effectiveScrollInterval = isMobile
    ? scrollInterval / 2
    : scrollInterval;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        setScrollPosition(
          (prevPosition) => (prevPosition + effectiveScrollSpeed) % 100
        );
      }, effectiveScrollInterval);
    }

    return () => clearInterval(interval);
  }, [isPaused, effectiveScrollSpeed, effectiveScrollInterval]);

  const handleHover = (isHovered: boolean) => {
    setIsPaused(isHovered);
  };

  return (
    <section className="h-dvh px-6 bg-background flex items-center justify-center snap-start snap-always">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Trusted by industry leaders
          </p>
        </div>
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
            }}
          >
            <AnimatePresence>
              <motion.div
                className="flex space-x-6"
                style={{ transform: `translateX(-${scrollPosition}%)` }}
                transition={{ duration: 0.5 }}
              >
                {Brands.concat(Brands).map((brand, index) => (
                  <BrandCard key={index} brand={brand} onHover={handleHover} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
