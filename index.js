const express = require('express')
const mongoose=  require('mongoose')
require('dotenv/config')


const app = express();

const port = process.env.PORT || 3001;

mongoose.connect(
    process.env.URL,
    {useNewUrlParser: true },
    () => console.log('connected to database')
);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});