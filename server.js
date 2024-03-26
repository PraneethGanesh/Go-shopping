const express = require('express')
const mongoose = require('mongoose')
const Products = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes



mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://user002-s1:OEXgqTLjGOu1WcMR@cluster0.bshysoa.mongodb.net/myDb')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})

app.post('/add-products',async(req,res)=>{
    const products=new Products(req.body)
    console.log(products);
    try{
        
        await products.save()
        res.status(201).json({
            status:'Sucess',
            headers: {
                'Authorization': '',
                'Content-Type': '',
              },
            data:{
                products
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

app.get('/get-products',async(req,res)=>{
    const products=await Products.find({})
    try{
        res.status(200).json({
            status:'Sucess',
            data:{
                products
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

// app.post('/add-products', async(req, res) => {
//     try {
//         const Product = await Product.create(req.body)
//         res.status(200).json(Product);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })
