import React, { useState } from "react";
import "../styles/tenants.css";

const HoverableButton = ({ defaultImage, hoverImage, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeletingHovered, setIsDeletingHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className="hoverableButton"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="imageContainer">
        {isHovered ? hoverImage : defaultImage}
      </span>
    </button>
  );
};

export default HoverableButton;
