const { express, mongoose } = require("./tut2.js");

// connect to mongodb server 

mongoose.connect("mongodb://127.0.0.1:27017/tutorial")
    .then(() => { console.log("connected to mongodb successfully") })
    .catch(() => { console.log("error connecting to database server!!") });

// work with database here 

const friendchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    others: {
        hobby: String,
        course: String
    }
}, {
    query: {
        hobbyFinder(_name) {
            return this.find({"others.hobby":_name})
        }
    }
})
const friend = mongoose.model("friend", friendchema);

// add data to the database

(async function () {
    const aman = new friend({
        name: "Aman Singh",
        rollNo: 10,
        others: { hobby: "Studying", course: "B.Tech" }
    })
    const dev = new friend({
        name: "Dev Pratap Singh",
        rollNo: 32,
        others: { hobby: "Sleeping", course: "B.Tech" }
    })
    const sanjog = new friend({
        name: "Sanjog Giri",
        rollNo: 114,
        others: { hobby: "Studying", course: "B.Tech" }
    })
    const shagun = new friend({
        name: "Shagun Rajput",
        rollNo: 118,
        others: { hobby: "coding", course: "B.Com." }
    })
    const raju = new friend({
        name: "Raju Lal",
        rollNo: 46,
        others: { hobby: "Basketball", course: "B.A." }
    })
    // const r= await aman.save();
    const r = await friend.insertMany([aman, dev, sanjog, shagun, raju]);
    // console.log(r);


    // read database 

    // const r= await friend.find({"others.hobby": "Sleeping"});
    // console.log(r);
    // const r1 = await friend.find().hobbyFinder("Sleeping");
    // console.log(r1);

    console.log(friendchema.path("name"))
}
)();
