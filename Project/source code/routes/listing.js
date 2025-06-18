const express=require("express");
const router=express.Router();
const Listing= require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js")
const {isLoggedIn, isOwner, validateListing}=require("../middleware.js");
const listingController= require("../controllers/listings.js");

//index+ create route
router.route("/")
.get(validateListing, wrapAsync(listingController.index))
.post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

//show+ update+ delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports=router;