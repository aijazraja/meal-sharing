const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservation");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});


router.post("/", async (request, response)=>{
const newReservation=await knex('reservation')
                       .insert({
                        'number_of_guests':4,
                        'created_date':new Date(),
                        'contact_phonenumber':4342345,
                        'contact_name':'waleed ahmad',
                        'contact_email':'jazi@ramil.com',
                        'meal_id':3,
                      });
response.json('Reservation added');
});


router.get("/:id", async (request, response) => {
  try {
      const reservationsById=await knex('reservation')
                             .where({id:parseInt(request.params.id)}); 
    response.json(reservationsById);
  } catch (error) {
    throw error;
  }
});


router.put('/:id',async(request,response)=>{
  try {
    const updatedReservations=await knex('reservation')
                           .where({id:parseInt(request.params.id)})
                           .update({
                             'number_of_guests':2,
                             'contact_phonenumber':5342342,
                           }); 
  response.json('Reservation updated');
} catch (error) {
  throw error;
}
});


router.delete('/:id',async (request, response)=>{
  try {
  const deletedReservation=await knex('reservation')
                           .where({id:parseInt(request.params.id)})
                           .del();
  } catch (error) {
    throw error;
    }
    response.json('Reservation deleted');
});

module.exports = router;