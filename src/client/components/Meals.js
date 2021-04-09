import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
let imageUrl={
  Danish_flavor:"https://i.ibb.co/T0gB7xS/Danish-flavor.jpg" ,
  Fish:"https://i.ibb.co/q0g2nyT/Fish.jpg" ,
  Hamburger:"https://i.ibb.co/7rC9wn7/Hamburger.jpg",
  Indian_food:"https://i.ibb.co/rZqptg9/Indian-food.jpg",
  karachi_biryani:"https://i.ibb.co/5Rfk8hZ/karachi-biryani.jpg",
  Kebab:"https://i.ibb.co/8sF1nLx/Kebab.jpg",
  lahori_karahi: "https://i.ibb.co/K6zPNV1/lahori-karahi.jpg",
  Maxican_food: "https://i.ibb.co/NLQM847/Maxican-food.jpg",
  Pizza: "https://i.ibb.co/T1fV19F/pizza.jpg" ,
  Roast_chicken: "https://i.ibb.co/60nTPwP/Roast-chicken.jpg",
  Sandwich: "https://i.ibb.co/sw5HWm5/Sandwich.jpg",
  Seafood: "https://i.ibb.co/3h84QSB/Seafood.jpg"
}
let imageUrlArray=[
  "https://i.ibb.co/T1fV19F/pizza.jpg" ,
  "https://i.ibb.co/rZqptg9/Indian-food.jpg",
  "https://i.ibb.co/T0gB7xS/Danish-flavor.jpg" ,
  "https://i.ibb.co/NLQM847/Maxican-food.jpg",
  "https://i.ibb.co/K6zPNV1/lahori-karahi.jpg",
  "https://i.ibb.co/5Rfk8hZ/karachi-biryani.jpg",
  "https://i.ibb.co/60nTPwP/Roast-chicken.jpg",
  "https://i.ibb.co/q0g2nyT/Fish.jpg" ,
  "https://i.ibb.co/3h84QSB/Seafood.jpg",
  "https://i.ibb.co/8sF1nLx/Kebab.jpg",
  "https://i.ibb.co/7rC9wn7/Hamburger.jpg",
  "https://i.ibb.co/sw5HWm5/Sandwich.jpg",
  "https://i.ibb.co/3h84QSB/Seafood.jpg",
  "https://i.ibb.co/8sF1nLx/Kebab.jpg",
  "https://i.ibb.co/K6zPNV1/lahori-karahi.jpg",
  "https://i.ibb.co/5Rfk8hZ/karachi-biryani.jpg",
  "https://i.ibb.co/60nTPwP/Roast-chicken.jpg",
  "https://i.ibb.co/q0g2nyT/Fish.jpg" ,
  "https://i.ibb.co/3h84QSB/Seafood.jpg"

  ]



export default function Meals({ meals,setsearchmeal }) {
  
  return (
    <div className="mealsTop">
      <div className="mealssearch">
        <Search meals={meals} setmeals={setsearchmeal} />
      </div>
      {meals.map((oneMeal,index) => {
        return (
          <div key={oneMeal.id} className="mealsMain">
            <div className="mealsImage">
              <Link to={"meal/" + oneMeal.id}>
              <img
                  src={imageUrlArray[index]}
                  width="250px"
                  height="225px"
                  alt={oneMeal.tittle}
                />
                {/* <img  
                  src={`./src/client/assets/images/${oneMeal.tittle}.jpg`}
                  width="250px"
                  height="225px"
                  alt={oneMeal.tittle}
                /> */}
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
