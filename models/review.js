const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    Comment: String,

    rating: {
        type: String,
        min: 1,
        max: 5,
    },

    createdAt:{
        type : Date,
        default: Data.now()
    },
});

module.exports = mongoose.model("Review", reviewSchema)