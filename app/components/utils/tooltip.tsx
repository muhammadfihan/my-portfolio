"use client";
import React from "react";

const TooltipIcon = ({ icon, text, href }: { icon: any; text: any; href: any }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white rounded-md p-2 shadow-lg mt-2"
      >
        <a href={href} target="_blank">
          {icon}
        </a>
      </button>
      {showTooltip && (
        <div className="mt-2 absolute top-0 right-full ml-2 p-2 mr-2 bg-gray-100 font-semibold text-purple-600 rounded-md shadow text-xs">
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipIcon;
