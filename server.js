const mongoose = require('mongoose');
const express = require('express');
const User = require('./model');
const path=require('path');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
mongoose.connect('mongodb+srv://maheswari1187:Maheswari_18@maheswari.duqhamd.mongodb.net/login', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(
  () => console.log('Connected to MongoDB')
);

app.use(express.json());
app.use(cors({ origin: "*" }));
//app.use(express.static(path.join(__dirname, 'client', 'src', 'pages')));
app.use('/signup', express.static(path.join(__dirname, 'client', 'src', 'pages')));
app.get('/signup/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'src', 'pages')); 
});
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    let exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).send('User already exists');
    }

    if (password!==confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }

    let newUser = new User({
      name,
      email,
      password,
      confirmPassword
    });

    await newUser.save();
    res.status(200).send('Registered successfully');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (password !== user.password) {
      return res.status(401).send('Invalid password');
    }

    res.status(200).send('Login successful');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal server error');
  }
});

app.get('/', (req, res) => {
  res.send("Server is running");
});

app.listen(5001, () => {
  console.log("Server running on port http://localhost:5001");
});
