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
                          .where("max_reservations", ">", 0) ;
                          
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
                      .insert({
                      tittle:  request.body.tittle,
                      description:  request.body.description,
                      location:  request.body.location,
                      when: new Date(),
                      max_reservations:  request.body.maxReservations,
                      price:  request.body.price,
                      created_date:  request.body.createdDate,

    });
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

module.exports = router;
