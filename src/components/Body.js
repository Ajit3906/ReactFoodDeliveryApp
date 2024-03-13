import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import "./body.css";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [restaurantList]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurant = await data.json();
    const filtered = restaurant?.data?.cards?.filter((element) => element.card.card.id === "top_brands_for_you");
    setRestaurantList(filtered[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return ( restaurantList?.length === 0 ? <ShimmerCards/> :
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList?.filter((res) => res.info.avgRating > 4.0)
            );
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
          {restaurantList?.map((res) => (
            <RestaurantCard key={res?.id} resData={res} />
          ))}
      </div>
    </div>
  );
};

export default Body;