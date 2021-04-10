const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if(request.query.maxPrice){
      const maxPrice=parseInt(request.query.maxPrice);
      const mealsWithMaxPrice=await knex("meals").where("price", "<", maxPrice) ;
      response.json(mealsWithMaxPrice);
      } 
    else if(request.query.tittle){
     const givenTittle=request.query.tittle;
     const mealsWithTittle=await knex('meals')
                           .where("tittle",'like', '%'+givenTittle+'%') ;
     response.json(mealsWithTittle);                     

     }
    else if(request.query.limit){
      const givenLimit=parseInt(request.query.limit);
      const mealsWithLimit=await knex('meals')
                          .limit(givenLimit);
                          
      response.json(mealsWithLimit);  

     }
     else if(request.query.availableReservations){
      const mealsWithReservations=await knex('meals')
                          .where("max_reservations", ">", 5) ;
                          
      response.json(mealsWithReservations);  
     }
     else if(request.query.createdAfter){
      const givenDate=new Date(request.query.createdAfter);
      const mealsCreatedAfterDate=await knex('meals').where('created_date','>',givenDate);
                          
      response.json(mealsCreatedAfterDate);  
     }
   else{
      const titles = await knex("meals").select("tittle");
      const meals = await knex("meals");
      response.json(meals);
    }
  } catch (error) {
    throw error;
  }
});



router.post("/", async (request, response) => {
  try {
 
    const newMeal=await knex('meals')
                      .insert(request.body);
    response.json(newMeal);
  } catch (error) {
    throw error;
  }
});



router.get("/:id", async (request, response) => {
  try {
    const mealByid = await knex("meals")
                    .where({id:parseInt(request.params.id)});
    response.json(mealByid);
  } catch (error) {
    throw error;
  }
});



router.put("/:id", async (request, response)=>{
try {
  const updatedMeal=await knex("meals")
                    .where({id:parseInt(request.params.id)})
                    .update({tittle:request.body.tittle,
                             description: request.body.description,});
   response.json(updatedMeal);
}catch(error){
  throw error;
}
});



router.delete("/:id", async (request, response)=>{
  try{
    const deletedMeal=await knex("meals")
                      .where({id:parseInt(request.params.id)})
                      .del();
    response.json(deletedMeal);

  }catch(error){
    throw error;
  }
});
/* getMealsavailableReservations: async (current) => {
  const meals = await knex
    .select("meals.*")
    .from("meals")
    .join(
      knex("meals")
        .select({ id: "meals.id" }, "meals.max_reservations")
        .from("meals")
        .join("reservations", function () {
          this.on("meals.id", "=", "reservations.meal_id");
        })
        .sum({ sum: ["reservations.number_of_guests"] })
        .groupBy("meals.id")
        .as("M_R"),
      function () {
        this.on("meals.max_reservations", ">", "M_R.sum");
        // this.on("M_R.id", "=", "meals.id").andOn(
        //   "meals.max_reservations",
        //   ">",
        //   "M_R.sum"
        // );
      }
    ); */

module.exports = router;
