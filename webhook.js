const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // You can change this to any port you prefer

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the webhook endpoint
app.get('/', (req, res) => {
    // Handle the incoming webhook payload here
    console.log('Webhook received:', req.body);
  
    // Respond to the webhook request (optional)
    res.status(200).send('Webhook received successfully!');
  });
app.post('/', (req, res) => {
  // Handle the incoming webhook payload here
  console.log('Webhook received:', req.body);

  // Respond to the webhook request (optional)
  res.status(200).send('Webhook received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});