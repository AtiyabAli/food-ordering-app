import React from "react";
import { CDN2_URL } from './utilis/url'

const RestaurantCard = ({setObj}) => {
  // const {setObj} = props;

  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img src={CDN2_URL + setObj.info.cloudinaryImageId } alt="" className="res-logo"/>

      <h3>{setObj.info.name}</h3>
      <h4>{setObj.info.cuisines.join(", ")}</h4>
      <h4>{setObj.info.avgRating} rating</h4>
      <h4>{setObj.info.costForTwo}</h4>
      <h4>{setObj.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
