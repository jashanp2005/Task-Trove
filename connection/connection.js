const mongoose = require('mongoose')

const connection = async (req, res) => {
    try{
        await mongoose.connect("")
        .then(() => {
            console.log("Database Connected");
        });
    }
    catch (err) {
        console.log(err)
    }
};

connection();