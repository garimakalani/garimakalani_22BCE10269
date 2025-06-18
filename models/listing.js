const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema= new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/the-people-relaxing-on-santa-monica-state-beach-in-california-usa-u1FWmL-gtpo",
        set: (v)=>v===""?"https://unsplash.com/photos/the-people-relaxing-on-santa-monica-state-beach-in-california-usa-u1FWmL-gtpo" :v,
    },
    price: Number,
    location: String,
    country: String,
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
});

const Listing= mongoose.model("Listing", listingSchema);
module.exports= Listing;