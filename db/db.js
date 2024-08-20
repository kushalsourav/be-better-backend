const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://bebetter:bebetter@be-better.j3fmj.mongodb.net/be_better";

mongoose.connect(dbUrl, {useNewUrlParser : true})

mongoose.connection.on("error", (err) => {
    console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
    console.log("connection is established")
})
