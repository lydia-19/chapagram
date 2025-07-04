import { useState, useEffect } from "react";
import Testimony from "../Testimony";

interface TestimonyItem {
  image: string;
  title: string;
  description: string;
}

interface TestimonyCarouselProps {
  testimonies: TestimonyItem[];
  interval?: number; // In milliseconds
}

const TestimonyCarousel = ({
  testimonies,
  interval = 4000,
}: TestimonyCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonies.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonies.length, interval]);

  const next = (current + 1) % testimonies.length;

  return (
    <div className="relative flex w-full items-center justify-center lg:h-testimonial">
      {/* Current testimony (top) */}
      <div className="absolute -top-30 left-1/2 z-20 -translate-x-1/2 transition-all duration-700 lg:left-20 xl:left-24">
        <Testimony {...testimonies[current]} />
      </div>
      {/* Next testimony */}
      <div className="absolute top-testimonialOffset z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 lg:left-testimonialLeft xl:left-testimonialRight">
        <Testimony {...testimonies[next]} />
      </div>
    </div>
  );
};

export default TestimonyCarousel;
