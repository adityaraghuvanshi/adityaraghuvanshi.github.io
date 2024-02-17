var express = require("express");
var router = express.Router();
var userModel = require("./users");
var postModel = require("./posts");
const passport = require("passport");

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});
router.get("/login", function (req, res) {
	res.render("login", { error: req.flash("error") });
});
router.get("/feed", function (req, res) {
	res.render("feed");
});
router.get("/profile", isLoggedIn, function (req, res, next) {
	res.render("profile");
});

router.post("/register", function (req, res) {
	const { username, email, fullname } = req.body;
	const userData = new userModel({ username, email, fullname });

	userModel.register(userData, req.body.password).then(function () {
		passport.authenticate("local")(req, res, function () {
			res.redirect("./profile");
		});
	});
});
router.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/profile",
		failureRedirect: "/login",
		failureFlash: true,
	}),
	function (req, res) {},
);
router.get("/logout", function (req, res) {
	req.logout(function (err) {
		if (err) {
			return next();
		}
		res.redirect("/login");
	});
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/profile");
}
module.exports = router;