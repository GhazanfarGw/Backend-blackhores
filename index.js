const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
const userRouter = require('./routes/user');


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
});


app.listen(port, () => {
	console.log("Sever is listening on port 4000")
})

app.use('/user', userRouter);