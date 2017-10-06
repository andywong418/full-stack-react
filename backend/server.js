const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
app.use(bodyParser.json());
app.use('/db', dbRoutes);

// This line makes the build folder publicly available.
app.use(express.static('build'));

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
