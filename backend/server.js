const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/languageCourses', { useNewUrlParser: true, useUnifiedTopology: true });

const MessageSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String
});

const Message = mongoose.model('Message', MessageSchema);

app.post('/api/messages', async (req, res) => {
  const message = new Message(req.body);
  try {
    await message.save();
    res.status(200).send('Message saved');
  } catch (error) {
    res.status(500).send('Error saving message');
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
