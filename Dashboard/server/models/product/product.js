import mongoose from "mongoose";
const Schema = mongoose.Schema;


const optionSchema = new Schema({
    options:[{
        optionName:{
            type:String,
            required:false,
        },
        optionValues:[{
            value:{
                type:String,
                required:false,
            },
            price:{
                type:Number,
            },
            quantity:{
                type:Number,
            },
            images:{
                type:Array,
                default:[],
            }
        }]
    }]
});


const imageSchema = new Schema({
    imageUrl: {
      type: Array,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: false,
    }
  });

  const reviewSchema = new Schema({
    message:{
        type: String
    },
    rating: {
        type: Number
    },
    imagesReview:{
        type: Array,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
},
{
    timestamps: true
});

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParentCategory",
        required: true,
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required:true
    },
    option: [optionSchema],
    quality: {
        type: Number,
        required: true,
    },
    highlights: {
        type: Array,
        default: []
    },
    sales: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        default: []
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reviews: [reviewSchema],
    images: imageSchema
},
    {
        timestamps: true
    });

const Product = mongoose.model('Product', productSchema);

export default Product;