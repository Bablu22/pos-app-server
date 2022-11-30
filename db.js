const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.nvyrvu7.mongodb.net/pos`)

let connectionObj = mongoose.connection
connectionObj.on("connected", () => {
    console.log(`Database connected`);
})

connectionObj.on('error', () => {
    console.log('Database connected faild');
})


