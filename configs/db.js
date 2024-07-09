const mongoose=require("mongoose");  
module.exports=()=>{ 
    return mongoose.connect("mongodb+srv://charitha22bce9612:VVQLPZ8s1hiKT1q5@cluster0.d2jwrmy.mongodb.net/Events_database?retryWrites=true&w=majority")
} 
mongoose.set("strictQuery",true);

var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))
