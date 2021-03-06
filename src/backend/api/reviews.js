const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reviews = await knex("review");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});


router.post("/", async (request, response)=>{
const newReviews=await knex('review')
                       .insert({
                        'title':'maxican food',
                        'description':'delicious food',
                        'stars':9,
                        'meal_id':3,
                        'created_date':new Date(),
                
                      });
response.json('Reviews added');
});


router.get("/:id", async (request, response) => {
  try {
      const reviewsById=await knex('review')
                             .where({id:parseInt(request.params.id)}); 
    response.json(reviewsById);
  } catch (error) {
    throw error;
  }
});


router.put('/:id',async(request,response)=>{
  try {
    const updatedRview=await knex('review')
                           .where({id:parseInt(request.params.id)})
                           .update({
                             'stars':6,
                             'description':'food was too much hot',
                           }); 
  response.json('Review updated');
} catch (error) {
  throw error;
}
});


router.delete('/:id',async (request, response)=>{
  try {
  const deletedReview=await knex('review')
                           .where({id:parseInt(request.params.id)})
                           .del();
  } catch (error) {
    throw error;
    }
    response.json('Review deleted');
});

module.exports = router;