const PostDog = require("../controllers/PostDogs")
const { Router } = require('express');
const PostRouter = Router();
PostRouter.post("/post", PostDog)
module.exports = PostRouter;
