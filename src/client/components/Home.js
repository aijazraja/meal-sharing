import React from 'react'
import Search from "./Search";
import { Link } from "react-router-dom";
import {  useState } from "react";

export default function Home({meals ,setsearchmeal,searchActive}) {

   
    return (
        <div className="banner">
        <div className="search" >
        <Search meals={meals} setmeals={setsearchmeal} />
        
        {searchActive &&
            meals.map((oneMeal)=>{
                return(
                    <div key={oneMeal.id}>
                    <Link to={"meal/" + oneMeal.id}>
                        <h3>{oneMeal.tittle}</h3>
                        </Link>
                    </div>
                )
            })
        }
        </div>
        <div>
            {/* <img src="./src/client/assets/images/banner3.jpg"alt=""  width="1125px"/> */}
        </div>
       

        
            
        </div>
    )
}
