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
    <div className="lg:h-testimonial relative flex w-full items-center justify-center">
      {/* Current testimony (top) */}
      <div className="-top-30 absolute left-1/2 z-20 -translate-x-1/2 transition-all duration-700 lg:left-24">
        <Testimony {...testimonies[current]} />
      </div>
      {/* Next testimony */}
      <div className="top-testimonialOffset lg:left-testimonialLeft xl:left-testimonialRight absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-700">
        <Testimony {...testimonies[next]} />
      </div>
    </div>
  );
};

export default TestimonyCarousel;
