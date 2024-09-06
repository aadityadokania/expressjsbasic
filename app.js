const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/users');
const app = express();
const port = 3000;

// Load environment variables from .env file
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/env', (req, res) => {
  const myValue = process.env.MY_VALUE;
  if (myValue) {
    res.json({ myValue });
  } else {
    res.status(404).json({ error: 'MY_VALUE environment variable is not set' });
  }
});

// Use the users routes
app.use('/users', users);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
