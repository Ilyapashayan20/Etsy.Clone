import ProductModel from "../../models/product/product.js"



export const getProducts = async (req,res) =>{
    try{
        const products = await ProductModel.find().select("title price images quality category sales").populate("user", "name avatarUrl").exec();


        res.json(products)
    } catch(e){
        console.log(e);
        res.status(500).json({message: e.message})
    }
}


export const getProduct = async (req,res) =>{
    try{

        const productID = req.params.id
        
        const product = await ProductModel.findById(productID)

        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        res.json(product)

    }catch(e){
        console.log(e)
        res.status(500).json({message:e.message})
    }

}


export const create = async (req,res) =>{
    try{
        const doc = new ProductModel({
            title: req.body.title,
            price: req.body.price,
            discountedPrice: req.body.discountedPrice,
            description: req.body.description,
            category: req.body.category,
            option: req.body.option,
            quality: req.body.quality,
            tags: req.body.tags,
            reviews: req.body.reviews,
            images: req.body.images,
            user: req.userId,
        })

        const product = await doc.save()

        res.json(product)
    } catch(err){
        console.log(err)
        res.status(500).json({
            message:""
        })
    }
}