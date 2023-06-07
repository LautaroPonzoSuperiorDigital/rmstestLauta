import React, { useState } from "react";
import "../../styles/modal.css";
import testImg from "../../assets/img/testImg.jpg";

const EditModalListings = () => {
  return (
    <div className="modalWrapper2 container-fluid">
      <div className="container-fluid modalContent2 d-flex justify-content-center align-items-center">
        <div className="row">
          <img className="ModalImg" src={testImg} alt="testImg" />
        </div>
        <form className="modalListing d-flex row justify-content-start">
          <div className="row">
            <div className="col">
              {/* Columna de los inputs */}
              <div className="inputContainerListing">
                <input type="text" className="inputListing" placeholder="ID" />
                <input
                  type="text"
                  className="inputListing"
                  placeholder="LOCATION"
                />
                <input
                  type="text"
                  className="inputListing"
                  placeholder="LOT SIZE"
                />
                <input
                  type="text"
                  className="inputListing"
                  placeholder="HOUSE SIZE"
                />
                <input
                  type="number"
                  className="inputListing"
                  placeholder="PRICE"
                />
                <div className="listingCheckbox">
                  <div className="form-check">
                    <label htmlFor="publicCheckbox" className="checkboxLabel">
                      PUBLIC
                    </label>
                    <input
                      type="checkbox"
                      id="publicCheckbox"
                      className="checkboxListing"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inputListing2">
                <div className="inputContainerListing2">
                  <div className="bedroomBathroom">
                    <input
                      type="text"
                      className="inputListing2"
                      placeholder="#BEDROOM"
                    />
                    <input
                      type="text"
                      className="inputListing2"
                      placeholder="#BATHROOM"
                    />
                  </div>
                </div>
                <p className="amentities">AMENTITIES</p>
                <ul>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="buttonContainer d-flex justify-content-end">
            <button type="button" className="modalButton cancelListing">
              Cancel
            </button>
            <button type="button" className="modalButton1 saveListing">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModalListings;
