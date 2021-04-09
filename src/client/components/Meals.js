import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

export default function Meals({ meals,setsearchmeal }) {
  
  return (
    <div className="mealsTop">
      <div className="mealssearch">
        <Search meals={meals} setmeals={setsearchmeal} />
      </div>
      {meals.map((oneMeal) => {
        return (
          <div key={oneMeal.id} className="mealsMain">
            <div className="mealsImage">
              <Link to={"meal/" + oneMeal.id}>
                <img
                  src={`./src/client/assets/images/${oneMeal.tittle}.jpg`}
                  width="250px"
                  height="225px"
                  alt={oneMeal.tittle}
                />
              </Link>
            </div>
            <div className="mealsDetail">
            <Link to={"meal/" + oneMeal.id}>
              <h4>{oneMeal.tittle}</h4>
              </Link>
              <hr />
              <p>Location : {oneMeal.location}</p>
              <p>Price : {oneMeal.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
