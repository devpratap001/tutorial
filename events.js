const EventEmitter= require("node:events");
const myEmitter=  new EventEmitter();
console.log(myEmitter);
function Events(){
    console.log("an event  occurred")
}
myEmitter.on("event", Events);
myEmitter.on("newListener", ()=>{
    console.log("listener added")
});
myEmitter.on("removeListener", ()=>{
    console.log("listener removed")
});
myEmitter.once("car", ()=>{
    console.log("once event only");
});
// myEmitter.on("error", ()=>{
//     console.log("Sorty, error occurred");
// });
myEmitter.addListener("error", ()=>"Oops! error occurred")
// myEmitter.emit("error");
// myEmitter.emit("error");
// myEmitter.emit("event");
// myEmitter.emit("car");
// myEmitter.emit("car");

console.log(myEmitter.eventNames());
console.log(myEmitter.listeners("event"));
// console.log(myEmitter.getMaxListeners());
// console.log(myEmitter.listenerCount("car"));
// console.log(myEmitter.listeners("car"));
myEmitter.off("event", Events);
console.log(myEmitter.eventNames());
console.log(myEmitter.listeners("event"));