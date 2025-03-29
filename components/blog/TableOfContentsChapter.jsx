"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";

const TableOfContentsChapter = ({ TOC }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Initial state set to false

  const sections = useMemo(() => TOC || [], [TOC]);
  const headerOffset = 70; // Adjust this value to match the height of your fixed header

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsVisible(window.innerWidth > 1370);

      const handleResize = () => {
        if (window.innerWidth > 1370) {
          setIsVisible(true);
        }
      };

      const handleScroll = () => {
        if (!isVisible) return;

        const scrollPosition = window.scrollY + headerOffset;
        const sectionOffsets = sections
          .map((section) => {
            const element = document.getElementById(section.id);
            return element
              ? {
                  id: section.id,
                  offset: element.offsetTop,
                  height: element.offsetHeight,
                }
              : null;
          })
          .filter((offset) => offset !== null);

        for (let i = 0; i < sectionOffsets.length - 1; i++) {
          const currentSection = sectionOffsets[i];
          const nextSection = sectionOffsets[i + 1];

          if (
            scrollPosition >= currentSection.offset &&
            scrollPosition < nextSection.offset &&
            activeSection !== currentSection.id
          ) {
            setActiveSection(currentSection.id);
            break;
          }
        }

        if (sectionOffsets.length > 0) {
          const lastSection = sectionOffsets[sectionOffsets.length - 1];
          if (scrollPosition >= lastSection.offset && activeSection !== lastSection.id) {
            setActiveSection(lastSection.id);
          }
        }

        // Scroll the active item into view within the container
        const activeElement = document.querySelector(".active-section");
        if (activeElement) {
          const container = activeElement.closest("ul");
          const containerRect = container.getBoundingClientRect();
          const activeRect = activeElement.getBoundingClientRect();

          if (activeRect.top < containerRect.top) {
            container.scrollTop -= containerRect.top - activeRect.top + 10; // Adjust for smooth scrolling
          } else if (activeRect.bottom > containerRect.bottom) {
            container.scrollTop += activeRect.bottom - containerRect.bottom + 10;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [sections, activeSection, isVisible]);

  const scrollToSection = (id) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      const elementPosition = element ? element.offsetTop : 0;
      const offsetPosition = elementPosition - headerOffset;

      if (window.innerWidth < 1370) {
        setIsVisible((prevState) => !prevState);
      }

      if (element) {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className="hidden xl:block">
      <div
        className={`table-of-contents bg-[#F1EEEB] shadow-lg mt-2 pt-2 z-20 w-[230px] md:w-[260px] lg:w-[320px] fixed xl:sticky mg:left-2 right-1 top-[65px] transition-all ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: `translateX(${isVisible ? "0%" : "100%"})` }}
      >
        <h2 className="md:text-[20px] font-bold text-left px-2 py-3 text-[16px]">Chapter Contents</h2>
        <ul className="px-2 z-20 max-h-[82svh] overflow-y-auto">
          {sections.map((section) => (
            <React.Fragment key={section.id}>
              <li className="py-2 text-[13px] md:text-[16px]">
                <Link
                  href={`#${section.id}`}
                  onClick={() => scrollToSection(section.id)}
                  className={`hover:text-[#BE4E1E] ${
                    activeSection === section.id ? "text-[#BE4E1E] font-[600] active-section" : ""
                  }`}
                >
                  {section.title}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContentsChapter;
