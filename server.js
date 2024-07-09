const express=require("express");
const connect=require("./configs/db")

const cors = require('cors'); 
const {register, login}=require("./controllers/user.controller");
const eventController=require("./controllers/event.controller");
const userController=require("./controllers/userSchema.controller");






const app=express();
app.use(express.json());
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions));
app.post("/register", register); 
app.post("/login", login);
app.use("/events", eventController);
app.use("/users", userController);



const port=process.env.PORT || 8735;
app.listen(port, async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});