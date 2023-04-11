import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    message:{
        type: String
    },
    rating: {
        type: Number
    },
    imagesReview:{
        type: Array,
        default: []
    }
},
{
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;