const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
