var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const upload = require("./multer");
const LocalStrategy = require("passport-local").Strategy;

/* PASSPORT CONFIG */
passport.use(new LocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

/* HOME (PROFILE PAGE) */
router.get("/", isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({ _id: req.user._id })
    .populate("posts");
  res.render("homepage", {
    user: user,
    nav: false
  });
});
router.get("/add", isLoggedIn, (req, res) => {
  res.render("add", {
    user: req.user,
    nav: false
  });
});

router.post(
  "/createpost",
  isLoggedIn,
  upload.single("image"),
  async (req, res) => {

    if (!req.file) {
      return res.redirect("/add");
    }

    // req.user is already available via passport
    const post = await postModel.create({
      user: req.user._id,
      title: req.body.title,
      description: req.body.description,
      image: req.file.filename
    });

    // push post id into user
    req.user.posts.push(post._id);
    await req.user.save();

    res.redirect("/");
  }
);



/* FILE UPLOAD (PROFILE IMAGE) */
router.post(
  "/fileupload",
  isLoggedIn,
  upload.single("image"),
  async (req, res) => {

    if (!req.file) {
      return res.redirect("/");
    }

    req.user.profileImage = req.file.filename;
    await req.user.save();

    res.redirect("/");
  }
);

/* LOGIN */
router.get("/login", (req, res) => {
  res.render("login", { error: req.flash("error") });
});

/* REGISTER */
router.post("/register", (req, res) => {
  const { fullname, username, email, password } = req.body;

  const userData = new userModel({ fullname, username, email });

  userModel.register(userData, password)
    .then(() => {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/");
      });
    });
});

/* LOGIN POST */
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

/* LOGOUT */
router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/login");
  });
});

/* AUTH MIDDLEWARE */
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;
