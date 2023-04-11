import { ParentCategory, SubCategory } from "../../models/category/category.js"


export const getCategories = async (req,res) =>{
    try{
        const categories = await ParentCategory.find()

        res.status(200).json(categories)
    } catch(e){
        console.log(e);
        res.status(400).json({message: "No categories found"})
    }
}

export const createCategory = async (req, res) => {
  const Categories = new ParentCategory({
    title: req.body.title
  });

  const subCategories = req.body.subCategories.map(subCategory => {
    return new SubCategory({ name: subCategory.name , items: subCategory.items});
  });

  Categories.subCategories = subCategories;

  try {
    await Categories.save();
    res.status(201).json({ message: "Category created successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
};


export const updateParentCategory = async (req,res) =>{
  try{
    const parentID = req.params.id
    const category = await ParentCategory.findByIdAndUpdate(parentID,
      {title: req.body.title},
      {new: true}
    );
    res.status(200).json(category);
  }catch(e){
    console.log(e)
    res.status(400).json({message: e.message})
  }
}



export const updateSubcategory = async (req, res) => {
  try {
    const parentID = req.params.id
    const subcategoryID = req.params.subcategoryId
    const category = await ParentCategory.findById(parentID);
    let subcategory = category.subCategories.id(subcategoryID);
    if (!subcategory) {
      subcategory = new SubCategory({ name: req.body.name, items: req.body.items });
      category.subCategories.push(subcategory);
    } else {
      subcategory.name = req.body.name;
      subcategory.items = req.body.items;
    }
    await category.save();
    res.status(200).json({ message: "Subcategory updated successfully", subcategory });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
};
