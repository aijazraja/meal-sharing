import React, { useState } from "react";

const startValues = {
  tittle: "",
  location: "",
  description: "",
  max_reservations: "",
  when: "",
  price: "",
};


const AddMeal = ({ meals }) => {
  const [inputValues, setInputValues] = useState(startValues);


  const changeEventhandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
 
  function onAddData(e) {
  
    e.preventDefault();
    const meal = {
      tittle: inputValues.title,
      description: inputValues.description,
      location: inputValues.location,
      when: inputValues.when,
      max_reservations: inputValues.maxReservations,
      price: inputValues.price,
    };
    

  
    const response = addDataToDb("/api/meals", meal);
    console.log(response, response.ok);
    if (response) {
      const messagge = `Thank You, Your Meal : ${meal.title} Added`;
      alert(messagge);
    } else {
      throw new Error(response.status);
    }
   
    setInputValues(startValues);
  }
  async function addDataToDb(url = "", data = {}) {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.ok;
    } catch (error) {
      return error;
    }
  }
  function slectedoptions() {
    meals.map((meal) => {
      return (
        <option value={meal.tittle} width="250px">
          {meal.tittle}
        </option>
      );
    });
  }

  return (
    <div className="reservation">
      <h3>Intreseted to cook and become a host ?</h3>

      <h3>Add Meal</h3>
      <form className="reserveform" onSubmit={onAddData}>
        <label htmlFor="title">Select your meal * : </label>
        <select name="title" id="title" width="250px" onChange={changeEventhandler}>
          {meals.map((meal) => {
            return (
              <option key={meal.id} value={meal.tittle} width="250px">
                {meal.tittle}
              </option>
            );
          })}
        </select>
        <br />
        <br />

        <label htmlFor="location">Your Location* : </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={inputValues.location}
          onChange={changeEventhandler}
        ></input>
        <br />
        <br />

        <label htmlFor="when">Date of event * : </label>
        <input
          type="date"
          id="when"
          name="when"
          required
          min={new Date}
          value={inputValues.when}
          onChange={changeEventhandler}
          id="#addmealdate"
        ></input>


        <br />
        <br />
        <label htmlFor="max_reservations">Max Reservations* : </label>
        <input
          type="number"
          id="max_reservations"
          name="maxReservations"
          required
          value={inputValues.maxReservations}
          onChange={changeEventhandler}
        ></input>

        <br />
        <br />
        <label htmlFor="price">Price* : </label>
        <input
          type="number"
          id="price"
          name="price"
          value={inputValues.price}
          required
          onChange={changeEventhandler}
        ></input>
        <br />
        <br />

        <label htmlFor="description" className="meal_description">
          Description* :
        </label>
        <textarea
          id="description"
          name="description"
          value={inputValues.description}
          required
          onChange={changeEventhandler}
          width="850px"
        ></textarea>
        <br />
        <br />
        <button type="submit" className="meal_submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddMeal;
