const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./firebase');

const app = express();
const port = 5000
app.use(bodyParser.json());
app.use(cors());

app.use('/firebase', admin);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`)
})
