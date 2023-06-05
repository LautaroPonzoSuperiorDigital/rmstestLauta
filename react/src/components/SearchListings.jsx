import SearchIcon from "../assets/img/SearchIcon.svg";
import "../styles/tenants.css";

function SearchListings() {
  return (
    <div className="d-flex mt-4 searchListings">
      <input
        type="text"
        className="form-control form-control-sm searchListings"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        value={searchTerm}
        onChange={handleChange}
      />
      <img className="SearchIcon" src={SearchIcon} alt="SearchIcon" />
      <button onClick={handleSearch}></button>
    </div>
  );
}

export default SearchListings;
