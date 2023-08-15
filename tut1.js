// import url from "node:url"; no need to import for WHATWG url API 
// const myUrl= new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
// console.log(myUrl);
// // console.log(myUrl.searchParams);
// console.log(myUrl.toString());
// console.log(myUrl.toJSON());

// Search Parameters 

// let params= new URLSearchParams("first=me&second=brother%2Csister");
let params= new URLSearchParams({
    first: "me",
    second: ['brother', 'sister']
})
console.log(params)
params.set('third', 'friend');
console.log(params);

// params.delete('third');
// console.log(params);

// console.log(params.entries());
// params.forEach((value, name)=>{
//     console.log(`${name} => ${value}\n`)
// })

// console.log(params.size);
// params.sort()
// console.log(params)
console.log(params.toString())