import React from "react";
import  { useState } from 'react';
import "../styles/footer.css";

const Footer = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleClick = (pageNumber) => {
      // Lógica de manejo de clics en números de página
      setCurrentPage(pageNumber);
      console.log(`Clicked page ${pageNumber}`);
    };
  
    return (
      <footer>
        <div className="container-fluid row  footer d-flex">
          <div className="col">
            <div className="d-flex justify-content-start">
              <p className="leftFooter">Showing 1 to 10 of 35 entries</p>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="d-flex align-items-center button-container">
              <button className="previous" onClick={() => handleClick("previous")}>Previous</button>
              <ul className="pagination row align-items-center justify-content-center">
                <li className={`page-item col-1 ${currentPage === 1 ? 'active' : ''}`}>
                  <button onClick={() => handleClick(1)}>1</button>
                </li>
                <li className={`page-item col-1 ${currentPage === 2 ? 'active' : ''}`}>
                  <button onClick={() => handleClick(2)}>2</button>
                </li>
                <li className={`page-item col-1 ${currentPage === 3 ? 'active' : ''}`}>
                  <button onClick={() => handleClick(3)}>3</button>
                </li>
              </ul>
              <button className="nextPage" onClick={() => handleClick("next")}>Next</button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;
