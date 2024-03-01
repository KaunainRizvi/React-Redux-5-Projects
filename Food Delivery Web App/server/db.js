const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dailyfoodie:dailyfoodie%40123@cluster0.9vu9ewo.mongodb.net/'
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
};

module.exports = connectToMongo;
