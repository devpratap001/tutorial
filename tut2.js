const express = require("express");
const mongoose= require("mongoose");

module.exports= {express,mongoose};
// const app = express();
// const subApp= express();
// app.listen(8000, () => {
//     // console.log(app.locals);
//     console.log("server listeninng on the port 8000...")
// })
// // app.use(express.json())

// subApp.on("mount", (parent)=>{
//     console.log("subApp mounted on main server.");
// });
// app.get("/", (req, res, next)=>{
//     console.log(res.headersSent);
//     res.append("range", "bytes=200-1000");
//     req.accepts("text/plain")
//     res.format({
//         "text/plain": function(){
//             res.send("homepage- text");
//         },
//         "text/html": function(){
//             res.send("<p>homepage- html</p>")
//         },
//         "application/json": function(){
//             res.send({"message":"homepage- json"})
//         }
//     })
//     // console.log(res.headersSent);
//     // console.log(req.range())
//     // console.log(req.baseUrl);
//     // console.log(req.body)
// })
// app.get("/about", (req, res, next)=>{
//     res.send("about page");
// })

// app.use("/subApp", subApp);
// subApp.route("/").get((req, res, next)=>{
//     res.send("subapp home page");
//     // console.log(req.baseUrl)
// })
// subApp.get("/about", (req, res, next)=>{
//     res.send("subapp about page");
// })



// // const {engine} = require("express-handlebars");

// // app.get("/", (req, res, next) => {
// //     res.send("this is home page");
// //     res.end()
// // })
// // app.get("/about", (req, res, next) => {
// //     res.send("this is about page");
// //     res.end()
// // })
// // app.get("/about/:hobby", (req, res, next) => {
// //     let hobbi = req.params.hobby;
// //     res.send(`your hobby is: ${hobbi}`);
// //     res.end()
// // })
// // app.param("hobby", (req, res, next, innt) => {
// //     console.log("received the hobby value: " + innt);
// //     next()
// // })


// // app.set("views", "./views");
// // app.set("view engine", "handlebars");
// // app.engine("handlebars", engine());

// // app.get("/", (req, res, next)=>{
// //     res.render("first", {
// //         firstUser:{
// //             name: "Dev Pratap",
// //             id: "dkehjfb2683bdjk",
// //             hobbies: {1:"dnacing", 2:"singing", 3:"swimming"}
// //         },
// //         helpers:{
// //             classes(){return "3rd year";}
// //         }
// //     });
// //     // next();
// // });
// // app.get("/style.css", (req, res, next)=>{
// //     res.sendFile(__dirname+ "/views/layouts/style.css");
// // });
// // app.get("/views", (req, res, next)=>{
// //     res.render("second");
// // })
// // const fs= require("node:fs");
// // app.use((req, res, next)=>{
// //     res.header("Access-Control-Allow-Origin", "*");
// //     res.header("Access-Control-Allow-Method", "GET,PUT,POST,DELETE");
// //     next();
// // })

// // var fileData= [];
// // fs.readFile("./tut/deletion.json", (err, data)=>{
// //     var fileDataJson= JSON.parse(data);
// //     for (let i in fileDataJson){
// //         fileData.push(fileDataJson[i]);
// //     };
// //     console.log(fileData);
// // })

// // app.get("/", (req, res, next)=>{
// //     res.send("hello there, this is home page");
// //     res.end();
// // });
// // app.get("/delete", (reqq, res, next)=>{
// //     res.end("this is a deletion page.")
// // })
// // app.delete("/delete/:id", (req, res, next)=>{
// //     let Id= +req.params.id;
// //     for (let i of fileData){
// //         if (i.id=== Id){
// //             var toRemoveIndex= fileData.indexOf(i)
// //             console.log(fileData[toRemoveIndex])
// //             fileData.splice(toRemoveIndex, 1);
// //         }
// //     }
// //     console.log(fileData);
// //     res.send("deletion successfull...")
// //     res.end();
// // })

// // const subApp= express();

// // subApp.on("mount", ()=>{
// //     console.log("sub application mounted on server...");
// // });
// // app.get("/", (req, res, next)=>{
// //     req.on("end", ()=>{
// //         console.log("main app request...")
// //     })
// //     res.send("Main app home page");
// //     res.end();
// // });

// // app.use("/subapp", subApp);

// // subApp.get("/system", (req, res, next)=>{
// //     req.on("end", ()=>{
// //         console.log("sub app request...")
// //     })
// //     res.send("sub app started: home page");
// //     res.end();
// // })

// // const fs = require("node:fs");
// // app.use(express.json());
// // const router = express.Router();
// // app.use(express.static(__dirname + "/tut"));

// // app.all("/", (req, res, next) => {
// //     req.on('end', () => {
// //         console.log("request initiated.");
// //         next()
// //     });
// //     req.on("start", (req, res, next) => {
// //         res.writeHead(200, { "content-type": "text/plain" })
// //         next()
// //     })
// //     // console.log(req);

// //     // res.sendFile(__dirname + "/tut/index.html");
// //     // res.render("index.html");
// //     const htmlDoc = fs.readFile('./tut/index.html', (err, data) => {
// //         if (err) {
// //             throw err;
// //         } else {
// //             console.log(data.toString());
// //         }
// //     });
// //     res.end();
// // });

// // app.all("/style.css", (req, res, next) => {
// //     res.sendFile(__dirname + "/tut/style.css");
// // })
// // app.use(express.urlencoded({ extended: false }));
// // router.get("/routing", (req, res, next) => {
// //     req.on("end", () => {
// //         console.log("router Stasrted...")
// //     })
// //     res.send("hello there this is a router based routing site!!")
// //     res.end()
// // })
// // app.use(router);

// // app.all("/tut2.js", (req, res, next) => {
// //     res.send("Data Posted Seccessfully!");
// //     console.log(req.body);
// //     next();
// // })