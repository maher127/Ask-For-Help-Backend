const express = require("express");
const Users = require("../../models/User");
//@route GET api/users
//@des   Test router
// @acces Public

router.get("/users", (req, res) => {
  //
  Users.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});
module.exports = router;
