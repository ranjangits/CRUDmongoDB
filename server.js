// // import modules  express body-parser cors
// let express = require('express')
// let bodyparser = require('body-parser')
// let cors = require('cors')
// //create rest object
// let app = express()
// //set json as a mime time
// app.use(bodyparser.json)
// //client not sending data =>encoding to json
// app.use(bodyparser.urlencoded({extended:false}))
// //enable cors -> cross origine Resource Sharing -> communication among various ports
// app.use (cors())


// //import fetch insert update delete modules
// let fetch = require('./fetch/fetch')
// let insert = require('./insert/insert')
// let update = require('./update/update')
// let remove = require('./delete/delete')
// //use above modules
// app.use("/fetch",fetch)
// app.use("/insert",insert)
// app.use("/update",update)
// app.use("/delete",remove)
// //assign port no 
// app.listen(8080)
// console.log("server listening port no 8080")

// /*
// node server  test following urls with postman
// http://localhost:8080/fetch
// http://localhost:8080/insert
// http://localhost:8080/update
// http://localhost:8080/delete

// */

//import modules express body-parser cors
let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//create port
let port = process.env.PORT || 8080
//set JSON as MIME type
app.use(bodyparser.json())
//client not sending form data -> encoding to JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//import fetch insert update delete modules
let fetch = require("./fetch/fetch")
let insert = require("./insert/insert")
let update = require("./update/update")
let remov = require("./delete/delete")
//use above modules
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remov)
 //assign port no
app.listen(port,()=>{
    console.log("Server running on port no :- ",port)
})

/*
    >node server
    Test following URLs with postman
    http://localhost:8080/fetch     (get)
    http://localhost:8080/insert    |
    http://localhost:8080/update    |(post)
    http://localhost:8080/delete    |

    body -> raw -> json

*/