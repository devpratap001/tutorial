const { express, mongoose } = require("./tut2.js");

// connect to mongodb server 

mongoose.connect("mongodb://127.0.0.1:27017/tutorial")
    .then(() => { console.log("connected to mongodb successfully") })
    .catch(() => { console.log("error connecting to database server!!") });

// work with database here 

const friendSchema= new mongoose.Schema({
    name: String,
    rollNo: Number,
    others: {
        hobby: String,
        course: String
    }
})
const friends= mongoose.model("friends", friendSchema);

// add data to the database

// (async function (){
    // const aman= new friends({
    //     name: "Aman Singh",
    //     rollNo: 10,
    //     others: {hobby: "Studying", course: "B.Tech"}
    // })
    // const dev= new friends({
    //     name: "Dev Pratap Singh",
    //     rollNo: 32,
    //     others: {hobby: "Sleeping", course: "B.Tech"}
    // })
    // const sanjog = new friends({
    //     name: "Sanjog Giri",
    //     rollNo: 114,
    //     others: {hobby: "Studying", course: "B.Tech"}
    // })
    // const shagun = new friends({
    //     name: "Shagun Rajput",
    //     rollNo: 118,
    //     others: {hobby: "coding", course: "B.Com."}
    // })
    // const raju = new friends({
    //     name: "Raju Lal",
    //     rollNo: 46,
    //     others: {hobby: "Basketball", course: "B.A."}
    // })
    // // const r= await aman.save();
    // const r= await friends.insertMany([aman, dev, sanjog, shagun, raju]);
    // console.log(r);
// }
// )();

// read database 

(async function(){
    const r= await friends.find({"others.hobby": "Sleeping"});
    console.log(r);
}
)();