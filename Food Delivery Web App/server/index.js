const express = require('express');
const app = express();
const port = 5000;
const connectToMongo = require("./db");


connectToMongo().then(() => {
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    });
}).catch(error => {
    console.error("Error connecting to MongoDB:", error);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.json());
app.use('/api', require("./Routes/createUser"));
