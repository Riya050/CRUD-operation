const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//const User= require("./models/userModel");
const cors = require("cors");
app.use(cors());

const userRouter = require("./routes/userRoute");
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect", error);
  });

// app.post("/",async (req, res)=>{
//   const {name,email,age}=req.body;
//   const User= require("./models/userModel");
//   try {
//    const userAdded = await User.create({
//      name: name,
//      email: email,
//      age: age,
//    });
//    res.status(201).json(userAdded);
//  } catch (error) {
//    console.log(error);
//    res.send(400).json({ error: error.message });
//  }
// });

// app.get("/",async (req, res) => {
//    try {
//        const showAll = await User.find();
//        res.status(200).json(showAll);
//      } catch (error) {
//        console.log(error);
//        res.send(500).json({ error: error.message });
//      }

// });

// app.get("/:id",async (req, res) => {
//     const { id } = req.params;
//     try {
//       const singleUser = await userData.findByIdAndDelete({ _id: id });
//       res.status(200).json(singleUser);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// app.get("/",async (req, res) =>
// {
//   res.send("api running successfully!");
// });

app.use(userRouter);
