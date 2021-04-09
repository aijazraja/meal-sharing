import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom';

export default function Search({ meals, setmeals }) {
  const [search, setsearch] = useState("");

  useEffect(() => {
    if(search==''){
      setmeals([]);
    }
    else{
      const filteredProducts = meals.filter((oneProduct) => {
        if (oneProduct.tittle.toLowerCase().includes(search)) {
          return oneProduct;
        }
      });
     
      setmeals(filteredProducts);
    
      
    }
   
  }, [search])
 
 function handelSearch(e){
   console.log(e.target.value)
setsearch(e.target.value);
    
 }
  


  return (
    <div>
      <input
        type="text"
        onChange={handelSearch}
        placeholder="Search product"
        className="searchBox"
   
      />

      {/* {
              search && setmeals(filteredProducts)   } */}
      {/* {
          search &&
        filteredProducts.map((meal) => {
          return (
            <div key={meal.id}>
            <Link to={'meal/'+meal.id} > <h4>{meal.tittle}</h4></Link>
              <p>{meal.description}</p>
              <p>{meal.location}</p>
              <p>{meal.when}</p>
              <p>{meal.max_reservations}</p>
              <p>{meal.price}</p>
            </div>
          );
        })
        } */}
    </div>
  );
}

//onBlur={(e)=>e.target.value=''