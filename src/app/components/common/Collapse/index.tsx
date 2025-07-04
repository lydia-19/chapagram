import React, { useState, useRef } from "react";
import ChevronDown from "@icons/chevron-down.svg";

interface CollapseItem {
  question: string;
  answer: React.ReactNode;
}

interface CollapseProps {
  items: CollapseItem[];
}

const Collapse: React.FC<CollapseProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl bg-gray-100/85 shadow-sm transition-all duration-200"
          >
            <button
              className="flex w-full items-center justify-between gap-1 px-6 py-6 text-left"
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
            >
              <p className="text-gray-text font-medium">{item.question}</p>
              <span
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
              className={`animate-fadeIn overflow-hidden px-6 transition-all duration-200 ease-in ${
                isOpen ? "pb-6" : "pb-0"
              }`}
              style={{
                maxHeight:
                  isOpen && contentRefs.current[idx]
                    ? contentRefs.current[idx]!.scrollHeight + 24 + "px"
                    : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collapse;
