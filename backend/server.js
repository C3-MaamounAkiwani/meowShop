const express = require('express');
const cors = require('cors');
// its connected
const db = require('./db/db');
require("dotenv").config();

const app = express();

//routers

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
