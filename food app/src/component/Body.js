import ResturantCard from "./ResturantCard";
import resObj from "../utils/data";
import { useState } from "react";

const Body = () => {
  const [filterRes, setfilterRes] = useState(resObj);

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants, cuisines..."
          aria-label="Search"
        />
      </div>
      <div className="filter-card">
        <div
          onClick={() => {
            setfilterRes(resObj);
          }}
        >
          All
        </div>
        <div
          onClick={() => {
            const filteredRes = resObj.filter((res) => res.stars > 4);
            setfilterRes(filteredRes);
          }}
        >
          Top Rated
        </div>
        <div
          onClick={() => {
            const filteredRes = resObj.filter((res) => res.type === "veg");
            setfilterRes(filteredRes);
          }}
        >
          Veg
        </div>
        <div
          onClick={() => {
            const filteredRes = resObj.filter((res) => res.type === "nonveg");
            setfilterRes(filteredRes);
          }}
        >
          Non Veg
        </div>
      </div>
      <div className="res-container">
        {filterRes.map((restaurant) => (
          <ResturantCard resData={restaurant} key={restaurant.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
