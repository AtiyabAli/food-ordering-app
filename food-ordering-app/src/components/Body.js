import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import apiList from "./utilis/fswiggyApi";

const Body = () => {
  const [listOfRestaurant] = useState(apiList);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] =
    useState(apiList);

  const [searhText, setSearchText] = useState(" ");

  const sort = () => {
    let sorted = listOfRestaurant.filter((res) =>
      res.info.name.toLocaleLowerCase().includes(searhText.toLocaleLowerCase())
    );
    setFilteredListOfRestaurant(sorted);
  };

  return (
    <div className="body">
      <div className="filter-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searhText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              sort();
            }}
          >
            Sort
          </button>
        </div>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          setFilteredListOfRestaurant(
            listOfRestaurant.filter((res) => res.info.avgRating >= 4.5)
          );
        }}
      >
        Top Rated Restaurant
      </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard setObj= {apiList[0]} /> */}

        {filteredListOfRestaurant.map((item) => {
          return <RestaurantCard setObj={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
