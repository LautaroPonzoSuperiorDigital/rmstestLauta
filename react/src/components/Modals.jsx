import React, { useState } from "react";
import "../styles/modal.css";
import Close from "../assets/img/Close.svg";
import Eye from "../assets/img/Eye.svg";

const EditModal = ({ defaultImage, hoverImage, onClick, index, tenant }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeletingHovered, setIsDeletingHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDeletingHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDeletingHovered(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onClick();
  };

  const handleCloseClick = () => {
    window.location.href = window.location.href;
  };

  const handleCancelClick = () => {
    window.location.href = window.location.href;
  };

  return (
    <div className="modalWrapper">
      <div className="modalContent">
        <button
          className="hoverableButton editButton"
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="imageContainer">
            {isHovered ? hoverImage : defaultImage}
          </span>
          {isDeletingHovered && (
            <div className="confirmationBox">Edit This Tenant</div>
          )}
        </button>

        <form
          className="editForm d-flex flex-column align-items-center"
          onSubmit={handleFormSubmit}
        >
          <img
            src={Close}
            alt="Close"
            className="close"
            onClick={handleCloseClick}
          />
          <h2 className="tenant">Edit Tenant</h2>
          <input
            type="text"
            className="modalForm"
            id="name"
            placeholder={`LEGAL NAME                                                             ${tenant.name}`}
            onChange={(e) => {}}
          />
          <input
            type="email"
            className="modalForm"
            id="email"
            placeholder={`EMAIL                                                     ${tenant.email}`}
            onChange={(e) => {}}
          />
          <input
            type="text"
            className="modalForm"
            id="phone"
            placeholder={`PHONE                                                                         ${tenant.phone}`}
            onChange={(e) => {}}
          />
          <input
            type="text"
            className="modalForm"
            id="SSNN"
            placeholder="SSNN"
          />
          <div className="buttonContainer">
            <button
              type="button"
              onClick={handleCancelClick}
              className="modalButton cancel"
            >
              Cancel
            </button>
            <button type="submit" className="modalButton save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
