const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://maheswari1187:Maheswari_18@maheswari.duqhamd.mongodb.net/login', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
email:{
  type:string,
  required:true
},
  password:{type: String,
    required:true
  }
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
