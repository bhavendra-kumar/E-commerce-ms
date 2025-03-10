const express = require('express')
const { upload } = require('../multer')
const user = require('./model/user')
const path = require('path')
const ErrorHandler = require('../utils/ErrorHandler')

const router = express.Router()

router.post('/addTocart', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {

        if (!userId || !productId || !quantity) {
            return res.status(400).send("All fields are required");
        }
        const user = await User.findOne({ email: userId });
        if (!user) return res.status(404).send("User not found");

        const product = await Product.findById(productId);
        if (!product) return res.status(404).send("Product not found");

        const cartIndex = user.cart.findIndex(item => item.productId.toString() === productId);
        if (cartIndex !== -1) {
            user.cart[cartIndex].quantity = quantity || 1;
        } else {
            user.cart.push({ productId, quantity: quantity || 1 });
        }
        await user.save();

        return res.status(200).json({ message: "Updated successfully", cart: user.cart });

    } catch (e) {
        console.error("Error:", e);
        return res.status(500).send(e.message);
    }
});

router.get('/cartProduct',async(req,res)=>{
    const {email} = req.query
    try{if(email)
        res.status(400).send('login to add to cart ')
        const user = await User.findOne({email}).populate({path:'cart.productId',model:'Product'})
      if(!user)
        res.status(400).send('register to add cart')
    res.status(200).json({
        message:'Cart retrieved succesfully',cart:user.cart
    });
    }catch(err){
        console.error('Server error',err);
        res.status(500).json({error:'Server error'});
    }
})



