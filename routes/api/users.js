const express = require("express");
const Users = require("../../models/User");
const router = express.Router();
//@route GET api/users
//@des   Test router
// @acces Public

router.get("/", (req, res) => {
  //
  Users.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});
module.exports = router;
