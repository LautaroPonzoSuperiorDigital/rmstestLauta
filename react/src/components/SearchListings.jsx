import SearchIcon from "../assets/img/SearchIcon.svg";
import "../styles/tenants.css";

function SearchListings() {
  return (
    <div className="search-container searchListings d-flex align-items-center justify-content-end mt-4">
      <input
        type="text"
        className="form-control form-control-sm search-input"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
      <button className="buttonListings custom-button"></button>
    </div>
  );
}

export default SearchListings;
