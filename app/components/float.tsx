"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaUserAlt } from "react-icons/fa";
import TooltipIcon from "./tooltip";

const FloatingActionButton = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <ul className="fixed right-2 bottom-1/2 transform translate-y-1/2 z-10">
      <li>
        <TooltipIcon icon={<FaGithub />} text="Github" href="https://github.com/muhammadfihan" />
      </li>

      <li>
        <TooltipIcon
          icon={<FaLinkedin />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/muhammad-fihan-ashidiq-4a196b179"
        />
      </li>
      <li>
        <TooltipIcon
          icon={<FaInstagram />}
          text="Instagram"
          href="https://www.instagram.com/fihanashidiq/"
        />
      </li>
      <li>
        <TooltipIcon icon={<FaUserAlt />} text="Resume" href="/cv.pdf" />
      </li>
    </ul>
  );
};

export default FloatingActionButton;
