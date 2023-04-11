import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import { loginValidation, registerValidation } from "./validations/validations.js";
import { login,register,getMe } from "./controllers/UserController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import checkAuth from './utils/checkAuth.js'
import { create, getProduct,getProducts } from "./controllers/Product/ProductController.js";
import { createCategory, getCategories, updateParentCategory, updateSubcategory } from "./controllers/Category/CategoryController.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use(cors())

mongoose.connect('mongodb+srv://Ilya:wwwwwwww@cluster0.ubr0lv4.mongodb.net/?retryWrites=true&w=majority',)
.then(()=>console.log('DB Connected:'))
.catch((err)=> console.log('DB Error', err))



app.get("/", (req, res) => {res.send("Etsy Dashboard")})


app.post("/login", loginValidation,handleValidationErrors,login)
app.post("/register", registerValidation,handleValidationErrors,register)
app.get('/me',checkAuth,getMe)

app.get("/products", getProducts)
app.get("/products/:id", getProduct)
app.post("/create", checkAuth , create)

app.get("/categories", getCategories)
app.post("/category", checkAuth, createCategory)
app.put('/categories/:id', updateParentCategory);
app.put('/category/:id/subcategory/:subcategoryId', updateSubcategory)



app.listen(process.env.PORT , (err) => {
    if(err){
        return console.error(err);
    }
    console.log("Server Connected");
})