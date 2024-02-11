import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./body.css";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">
        <h3>Search</h3>
      </div> */}
      <div className="res-container">
        {resList?.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
