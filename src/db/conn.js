const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/RegisteredUser",{
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

















// mongoose.connect("mongodb://localhost:27017/RegisteredUser",{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//         // useCreateIndex:true  
//     })

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error..'));
// db.once('open', function () {
//     console.log("we are connected successfully...");
// });