import express from "express";
import mongoose from "mongoose";
import Razorpay from "razorpay";
import userRoutes from "./routes/user_routes.js"
import cartRoutes from "./routes/cart_routes.js"
import addressRoutes from "./routes/address_routes.js"
import feedbackRoutes from "./routes/feedback_routes.js"
import wishlistRoutes from "./routes/wishlist_routes.js"
import productRoutes from "./routes/product_routes.js"
import blogRoutes  from   "./routes/blog_routes.js"
import cookieParser from "cookie-parser";
import crypto from 'crypto';
import cors from "cors";
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true })); 


const PORT =  7000;
const MONGO =  "mongodb+srv://archit:1234@cluster0.gb71m.mongodb.net/mydatabase";

mongoose.connect(MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });
  const __dirname = path.resolve()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})



const razorpay = new Razorpay({
    key_id: 'rzp_test_uq83ufnV8txFFP', // Replace with your Razorpay key
    key_secret: 'B7J5p6Nw6Q1cPNTLgEdkMOV9', // Replace with your Razorpay secret
  });
  
  // Endpoint to create an order
  app.post('/backend/create-order', async (req, res) => {
    try {
      const { amount } = req.body;
      const order = await razorpay.orders.create({
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        receipt: `receipt_${Math.floor(Math.random() * 1000)}`,
      });
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Endpoint to verify payment
  app.post('/backend/verify-payment', async (req, res) => {
    console.log('Received payment verification request:', req.body);
    try {
      const { paymentId, orderId, signature } = req.body;
  
      // Verify payment signature
      const hmac = crypto.createHmac('sha256', 'B7J5p6Nw6Q1cPNTLgEdkMOV9'); // Replace with your Razorpay secret
      const expectedSignature = hmac.update(`${orderId}|${paymentId}`)
                                    .digest('hex');
  
      if (expectedSignature === signature) {
        res.json({ success: true });
      } else {
        res.status(400).json({ error: 'Signature verification failed' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  app.use("/backend/user",userRoutes)
  app.use("/backend/feedback",feedbackRoutes)
  app.use("/backend/address",addressRoutes)
  app.use("/backend/wishlist",wishlistRoutes)
  app.use("/backend/product",productRoutes)
  app.use("/backend/blog",blogRoutes)
  app.use("/backend/cart",cartRoutes)
  
  app.use((err,req,res,next)=>{
      const statusCode=err.statusCode ||500;
      const message=err.message || "Internal Server Error"
    return res.status(statusCode).json({
      success:false,
      statusCode,
      message
    })
    })
  
  