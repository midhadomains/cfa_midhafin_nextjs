'use client'
import React, { useEffect } from "react";

export default function Page({ params }) {
  useEffect(() => {
    // Disable right-click on the entire page
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts for Save, Print, etc.
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === "s" || e.key === "p")) {
        e.preventDefault();
      }
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="pointer-events-none">
      <embed
        src={`https://filesharingaplic.s3.ap-south-1.amazonaws.com/${params.pdf}#toolbar=0`}
        className="w-[100svw] h-[100svh] pointer-events-non"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click on the embed
      ></embed>
    </div>
  );
}

