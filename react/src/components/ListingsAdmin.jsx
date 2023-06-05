import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CheckBoxLog from "./checkBox";
import SearchListings from "./Search";
import listingsData from "./ListingsData";
import testImg from "../assets/img/testImg.svg";
import CheckMarkListing from "../assets/img/CheckMark.svg";
import "../styles/tenants.css";
import { EditButton, DeleteButton } from "./ButtonsListings";
import Edit from "../assets/img/Edit.svg";
import EditHover from "../assets/img/EditHover.svg";
import Delete from "../assets/img/Delete.svg";
import DeleteIconHover from "../assets/img/DeleteIconHover.svg";
import Pagination from "./Paginations";

const ListingsAdmin = () => {
  const [listings, setListings] = useState(listingsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showOnlyPublicListings, setShowOnlyPublicListings] = useState(false);

  const PAGE_SIZE = 10;
  const totalListings = listings.length;
  const totalPages = Math.ceil(totalListings / PAGE_SIZE);

  const listingsPerPage = listings.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display =
      dropdown.style.display === "none" ? "block" : "none";
  };
  const handleEdit = (index) => {
    console.log("Editar listado con índice:", index);
  };

  const handleDelete = (listingId) => {
    const updatedListings = listings.filter(
      (listing) => listing.id !== listingId
    );
    setListings(updatedListings);
  };

  const handleCheckBoxChange = () => {
    setShowOnlyPublicListings(!showOnlyPublicListings);
  };

  const filteredListings = showOnlyPublicListings
    ? listings.filter((listing) => listing.public)
    : listings;

  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="d-flex w-100 mb-3">
          <div className="container tenantsContainer">
            <div className="d-flex align-items-center justify-content-start">
              <h2 className="tenantsText">Listings</h2>
              <div className="form-check ms-3 mb-1">
                <label className="d-flex align-items-center mb-0">
                  <CheckBoxLog
                    checked={showOnlyPublicListings}
                    onChange={handleCheckBoxChange}
                  />
                  <p className="m-2 mb-0 publicShow">
                    Show only public listings{" "}
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="container-fluid ListingContainer d-flex justify-content-end">
            <SearchListings />
            <button
              className="mt-4 ms-4"
              onClick={() => toggleDropdown("priceDropdown")}
            >
              Price
            </button>
            <div id="priceDropdown">
              <select id="priceSelect">
                <option value="1000">Min $1,000</option>
                <option value="5000">Max $5,000</option>
              </select>
            </div>
            <button
              className="mt-4 ms-4 toggle"
              onClick={() => toggleDropdown("sqftDropdown")}
            >
              Sq. Ft.
            </button>
            <div id="sqftDropdown">
              <select id="sqftSelect">
                <option value="1000">Min 1,000 sqft</option>
                <option value="5000">Max 5,000 sqft</option>
              </select>
            </div>
            <button
              className="mt-4 ms-4 mr-5 AddListing"
              onClick={() => toggleDropdown("addListingDropdown")}
            >
              <span>+</span> Add Listing
            </button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="ListingContainer">
            <div className="listingsContainer">
              <table className="table table-responsive-lg">
                <thead>
                  <tr>
                    <td>
                      <p className="ID td p1">ID</p>
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
                  {filteredListings.map((listing, index) => (
                    <tr key={listing.id} className="trBg">
                      <td className="imgId">
                        <p className="alignText d-flex align-items-center h p1">
                          <img
                            className="testImg"
                            src={testImg}
                            alt="testImg"
                          />
                          {listing.id}
                        </p>
                      </td>
                      <td className="h p1 td td2">
                        <p className="alignText d-flex align-items-center">
                          {listing.location}
                        </p>
                      </td>
                      <td className="h p1 td td2">
                        <p className="alignText d-flex align-items-center">
                          {listing.lotSize}
                        </p>
                      </td>
                      <td className="h p1 td td2">
                        <p className="alignText d-flex align-items-center">
                          {listing.houseSize}
                        </p>
                      </td>
                      <td className="h p1 td td2">
                        <p className="alignText d-flex align-items-center">
                          {listing.price}
                        </p>
                      </td>
                      <td className="h p1 td td2"></td>
                      <td className="h p1 td td2">
                        <p className="alignText d-flex align-items-center">
                          {listing.public && (
                            <img
                              className="checkMarkListing"
                              src={CheckMarkListing}
                              alt="CheckMark"
                            />
                          )}
                        </p>
                      </td>
                      <td>
                        <EditButton
                          defaultImage={<img src={Edit} alt="Edit" />}
                          hoverImage={<img src={EditHover} alt="EditHover" />}
                          onClick={() => handleEdit(index)}
                        />
                        <DeleteButton
                          className="delete"
                          defaultImage={<img src={Delete} alt="Delete" />}
                          hoverImage={
                            <img src={DeleteIconHover} alt="DeleteIconHover" />
                          }
                          onClick={() => handleDelete(listing.id)}
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalEntries={totalListings}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ListingsAdmin;
