import Image from "next/image";

const GlobeWithArcs = () => {
  const arcPaths = [
    // Left side arcs
    { d: "M10,100 Q30,10 50,0", delay: "0s" },
    // Right side arcs
    { d: "M90,100 Q70,10 50,0", delay: "0.5s" },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src="/images/half-globe.png"
        alt="Half Globe"
        width={800}
        height={355}
        className="relative z-10 h-auto"
      />

      {/* SVG Container for Arcs */}
      <svg
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {arcPaths.map((arc, index) => (
          <path
            key={index}
            d={arc.d}
            fill="none"
            stroke="white"
            strokeWidth={0.3}
            className="animate-arc-pulse"
            style={{ animationDelay: arc.delay }}
          />
        ))}
      </svg>
    </div>
  );
};

export default GlobeWithArcs;
