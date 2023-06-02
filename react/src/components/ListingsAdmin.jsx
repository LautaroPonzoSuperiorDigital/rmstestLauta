import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CheckBoxLog from "./checkBox";
import Search from "./Search";
import listings from "./ListingsData";
import testImg from "../assets/img/testImg.svg";
import CheckMark from "../assets/img/CheckMark.svg";
import "../styles/tenants.css";
import { EditButton, DeleteButton } from "./Buttons";
import Edit from "../assets/img/Edit.svg";
import EditHover from "../assets/img/EditHover.svg";
import Delete from "../assets/img/Delete.svg";
import DeleteIconHover from "../assets/img/DeleteIconHover.svg";
import fetchListings from "../fetch";

const ListingsAdmin = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings()
      .then((data) => {
        console.log(data);
        setListings(data.listings);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
          <Search />
        </div>
        <div className="container-fluid listings d-flex justify-content-center align-items-center">
          <div className="row container-fluid">
            <div className="container-fluid col table-container">
              <table className="table mt-4 w-100">
                <thead>
                  <tr>
                    <td>
                      <p className="lead listings1 p1 p2">ID</p>
                    </td>
                    <td>
                      <p className="lead status p1 p2">LOCATION</p>
                    </td>
                    <td>
                      <p className="lead email p1 p2">LOT SIZE</p>
                    </td>
                    <td>
                      <p className="lead phone p1 p2">HOUSE SIZE</p>
                    </td>
                    <td>
                      <p className="lead contract p1 p2">PRICE</p>
                    </td>
                    <td>
                      <p className="lead bgcheck p1 p2">PUBLIC</p>
                    </td>
                    <td>
                      <p className="lead actions p1 p2">ACTIONS</p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                {listings.map(listing => (
                    <tr key={listing.id}>
                      <td>
                        <img className="testImg" src={testImg} alt="testImg" />
                      </td>
                      <td>{listing.id}</td>
                      <td>{listing.location}</td>
                      <td>{listing.lot_size}</td>
                      <td>{listing.house_size}</td>
                      <td>{listing.price}</td>
                      <td>{listing.public}</td>
                      <td>
                        {listing.actions && (
                          <img
                            className="checkMark"
                            src={CheckMark}
                            alt="CheckMark"
                          />
                        )}
                      </td>
                      <td>
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
                              <img
                                src={DeleteIconHover}
                                alt="DeleteIconHover"
                              />
                            }
                          />
                        </td>
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
