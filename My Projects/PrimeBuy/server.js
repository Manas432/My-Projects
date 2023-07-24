const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming request data (using body-parser middleware)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Connect to MongoDB database
mongoose.connect('mongodb+srv://Manas32:28JMxroHBRSya77f@cluster0.uve8zmr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new FormData instance
    const newFormData = new FormData({
      name,
      email,
      message,
    });

    // Save the form data to the database using async/await
    await newFormData.save();

    res.send('Form data saved successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving data to the database.');
  }
});





const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
