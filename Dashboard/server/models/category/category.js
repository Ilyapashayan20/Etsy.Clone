import mongoose from 'mongoose'

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: [{
    type: String
  }]
});

const parentCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subCategories: [subCategorySchema]
});

const ParentCategory = mongoose.model('ParentCategory', parentCategorySchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export { ParentCategory, SubCategory }
