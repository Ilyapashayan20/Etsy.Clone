import mongoose from "mongoose";

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageUrl: {
    type: String,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',

  }
});

const Image = mongoose.model('Image', imageSchema);

export default Image;