import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "./body.css";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurant = await data.json();
    const filtered = restaurant?.data?.cards?.filter(
      (element) => element.card.card.id === "top_brands_for_you"
    );
    setRestaurantList(
      filtered[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      filtered[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(filteredRestaurantList);

  return restaurantList?.length === 0 ? (
    <ShimmerCards />
  ) : !onlineStatus ? (
    <div>
      <h2>You are offline</h2>
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurantList(
              filteredRestaurantList?.filter((res) => res.info.avgRating > 4.0)
            );
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList?.map((res) => (
          <Link key={res?.info?.id} to={"restaurant/" + res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
