import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CheckBoxLog from "./checkBox";
import SearchListings from "./Search";
import listings from "./ListingsData";
import testImg from "../assets/img/testImg.svg";
import CheckMarkListing from "../assets/img/CheckMark.svg";
import "../styles/tenants.css";
import { EditButton, DeleteButton } from "./Buttons";
import Edit from "../assets/img/Edit.svg";
import EditHover from "../assets/img/EditHover.svg";
import Delete from "../assets/img/Delete.svg";
import DeleteIconHover from "../assets/img/DeleteIconHover.svg";
import fetchListings from "../fetch";

const ListingsAdmin = () => {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display =
      dropdown.style.display === "none" ? "block" : "none";
  };
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="d-flex w-100">
          <div className="container tenantsContainer">
            <div className="d-flex align-items-center justify-content-start">
              <h2 className="tenantsText">Listings</h2>
              <div className="form-check ms-3 mb-1">
                <label className="d-flex align-items-center mb-0">
                  <CheckBoxLog />
                  <p className="m-2 mb-0 publicShow">
                    Show only public listings{" "}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <SearchListings />
          <div className="ListingContainer">
            <button className="mt-4 ms-4" onClick={toggleDropdown}>
              Price
            </button>
            <div id="dropdown" style={{ display: "none" }}>
              <select id="priceSelect">
                <option value="1000">Min $1,000</option>
                <option value="5000">Max $5,000</option>
              </select>
            </div>
            <button className="mt-4 ms-4" onClick={toggleDropdown}>
              Sq. Ft.
            </button>
            <div id="dropdown" style={{ display: "none" }}>
              <select id="priceSelect">
                <option value="1000">Min $1,000</option>
                <option value="5000">Max $5,000</option>
              </select>
            </div>
            <button className="mt-4 ms-4 AddListing" onClick={toggleDropdown}>
              <span>+</span> Add Listing
            </button>
          </div>
        </div>
        <div className="container-fluid listings d-flex justify-content-center align-items-center">
          <div className="row container-fluid">
            <div className="container-fluid col table-container">
              <table className="table mt-4 w-100">
                <thead>
                  <tr>
                    <td>
                      <p className="ms-5 id td p1">ID</p>
                    </td>
                    <td>
                      <p className="location td p1">LOCATION</p>
                    </td>
                    <td>
                      <p className="lotSize td p1">LOT SIZE</p>
                    </td>
                    <td>
                      <p className="houseSize td p1">HOUSE SIZE</p>
                    </td>
                    <td>
                      <p className="price td p1">PRICE</p>
                    </td>
                    <td></td>
                    <td>
                      <p className="public td p1">PUBLIC</p>
                    </td>
                    <td>
                      <p className="actions td p1">ACTIONS</p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing.id}>
                      <td>
                        <img className="testImg" src={testImg} alt="testImg" />
                        {listing.id}
                      </td>
                      <td className="h p1"> <p className=" td td2"></p> {listing.location}</td>
                      <td className="h p1"> <p className=" td td2"></p> {listing.lotSize}</td>
                      <td className="h p1"> <p className=" td td2"></p> {listing.houseSize}</td>
                      <td className="h p1"> <p className=" td td2"></p> {listing.price}</td>
                      <td className="h p1"> <p className=" td td2"></p> </td>
                      <td className="h p1"> <p className=" td td2"></p> 
                        {listing.public && (
                          <img
                            className="checkMarkListing"
                            src={CheckMarkListing}
                            alt="CheckMark"
                          />
                        )}
                      </td>
                      <td>
                        <EditButton
                          defaultImage={<img src={Edit} alt="Edit" />}
                          hoverImage={<img src={EditHover} alt="EditHover" />}
                          onClick={() => handleEditClick(tenant)}
                        />
                        <DeleteButton
                          className="delete"
                          defaultImage={<img src={Delete} alt="Delete" />}
                          hoverImage={
                            <img src={DeleteIconHover} alt="DeleteIconHover" />
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsAdmin;
