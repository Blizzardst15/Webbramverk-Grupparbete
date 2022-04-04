const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/api', router)

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})