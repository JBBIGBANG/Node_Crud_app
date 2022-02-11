const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const users = require('./models/userSchema');
const router = require('./Routes/routerr');
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(router);



mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
     useUnifiedTopology: true }, () => {
        console.log('Connected to database');
    });

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
