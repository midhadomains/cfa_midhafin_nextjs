"use client";
import { useEffect } from "react";
import Router from "next/router";

const LatexScriptLoader = () => {
  useEffect(() => {
    // Function to load MathJax script
    const loadMathJax = () => {
      if (typeof window !== "undefined" && window.MathJax) {
        // Ensure MathJax is fully loaded before calling typeset
        if (window.MathJax.startup) {
          window.MathJax.startup.promise.then(() => {
            window.MathJax.typeset();  // Render equations after MathJax is fully initialized
          });
        }
      } else {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";  // MathJax v3 script
        script.async = true;
        script.onload = () => {
          if (window.MathJax && window.MathJax.startup) {
            // Ensure MathJax is fully initialized before calling typeset
            window.MathJax.startup.promise.then(() => {
              window.MathJax.typeset();  // Re-render equations after script load
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    // Initial load
    loadMathJax();

    // Listen for route changes and re-load MathJax
    const handleRouteChange = () => {
      loadMathJax();
    };

    // Attach event listener to route change
    Router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup listener on unmount
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return null;
};

export default LatexScriptLoader;
