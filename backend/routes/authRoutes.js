const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const passport = require("passport");

router.post("/signup", signup);
router.post("/login", login);

router.get('/oauth/google',
  passport.authenticate('google',{scope:['profile','email']})
);

router.get('/oauth/google/callback',
  passport.authenticate('google', {failureRedirect:'/login', session: false}),
  (req,res)=>{
    const token = req.user.token;
    res.redirect(`${process.env.FRONTEND_URL}/oauth-success?token=${token}`);
  }
)


module.exports = router;