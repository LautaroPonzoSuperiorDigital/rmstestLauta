import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/tenants.css";
import SearchIcon from "../assets/img/SearchIcon.svg";
import Edit from "../assets/img/Edit.svg";
import EditHover from "../assets/img/EditHover.svg";
import Delete from "../assets/img/Delete.svg";
import DeleteIconHover from "../assets/img/DeleteIconHover.svg";
import CheckMark from "../assets/img/CheckMark.svg";
import Footer from "./Footer";
import tenantsData from "./tenantsData";
import HoverableButton from "./HoverableButton";

const Tenant = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [tenants, setTenants] = useState(tenantsData);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleEdit = (rowData) => {
    setSelectedRowData(rowData);
    setIsEditOpen(true);
  };

  const handleDelete = (listings) => {
    const updatedTenants = tenants.filter(
      (tenant) => tenant.listings !== listings
    );
    setTenants(updatedTenants);
  };

  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="d-flex w-100">
          <div className="container tenantsContainer">
            <div className="d-flex align-items-center justify-content-start">
              <h2 className="tenantsText">tenants</h2>
              <div className="form-check ms-3 mb-1">
                <label className="d-flex align-items-center mb-0">
                  <input
                    type="checkbox"
                    name="Checkbox square-checkbox"
                    className="form-check-input mb-1"
                  />
                  <p className="m-2 mb-0 tenantShow">
                    Show only tenants with missed payment{" "}
                    <span className="filterMissedPayment">2</span>
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="search-container d-flex align-items-center justify-content-end mt-4">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
          </div>
        </div>
        <div className="container-fluid tenants d-flex justify-content-start">
          <div className="row container-fluid">
            <div className="col table-container">
              <table className="table mt-4 w-100">
                <thead>
                  <tr>
                    <td>
                      <p className="lead name p1">NAME</p>
                    </td>
                    <td>
                      <p className="lead listings1 p1">LISTINGS</p>
                    </td>
                    <td>
                      <p className="lead status p1">PAYMENT STATUS</p>
                    </td>
                    <td>
                      <p className="lead email p1">EMAIL</p>
                    </td>
                    <td>
                      <p className="lead phone p1">PHONE</p>
                    </td>
                    <td>
                      <p className="lead contract p1">CONTRACT DATES</p>
                    </td>
                    <td>
                      <p className="lead bgcheck p1">BACKGROUND CHECK</p>
                    </td>
                    <td>
                      <p className="lead actions p1">ACTIONS</p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((tenant) => (
                    <tr key={tenant.listings}>
                      <td>
                        <p className="lead name p1 h">{tenant.name}</p>
                      </td>
                      <td>
                        <p className="lead listings1 p1 h">{tenant.listings}</p>
                      </td>
                      <td>
                        <p
                          className={`lead status p1 h ${
                            tenant.status.includes("Missed Payment")
                              ? "missed"
                              : ""
                          }`}
                        >
                          {tenant.status}
                        </p>
                      </td>
                      <td>
                        <p className="lead email p1 h email1">{tenant.email}</p>
                      </td>
                      <td>
                        <p className="lead phone p1 h">{tenant.phone}</p>
                      </td>
                      <td>
                        <p className="lead contract p1 h">{tenant.contract}</p>
                      </td>
                      <td>
                        {tenant.backgroundCheck === "check" ? (
                          <img
                            className="checkMark"
                            src={CheckMark}
                            alt="CheckMark"
                          />
                        ) : null}
                      </td>

                      <td>
      <HoverableButton
        defaultImage={<img src={Edit} alt="Edit" />}
        hoverImage={<img src={EditHover} alt="EditHover" />}
        onClick={() => handleEdit(tenant)}
      />
      <HoverableButton 
        className={`delete ms-2 deleteButton`}
        defaultImage={<img src={Delete} alt="Delete" />}
        hoverImage={<img src={DeleteIconHover} alt="DeleteIconHover" />}
        onClick={() => handleDelete(tenant.listings)}
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

      {/* Componente de edición */}
      {isEditOpen && (
        <div className="edit-component">
          <h3>Edit Component</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Tenant;
