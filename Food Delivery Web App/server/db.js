const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dailyfoodie:dailyfoodie%40123@cluster0.9vu9ewo.mongodb.net/dailyfoodie';

const connectToMongo = async () => {
    try {
        const connection = await mongoose.connect(mongoURI);
        console.log("Connected");

        const fetchData = await connection.connection.db.collection("foodData2");
        const data = await fetchData.find({}).toArray();
        // console.log("Fetched data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
};

module.exports = connectToMongo;
