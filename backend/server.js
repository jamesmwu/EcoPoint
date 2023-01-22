const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

// var con1 = mongoose.createConnection(
//   'mongodb+srv://jameswu21:12345@app.cmqxvm2.mongodb.net/?retryWrites=true&w=majority'
// );
// var con2 = mongoose.createConnection(
//   'mongodb+srv://jameswu21:12345@app.cmqxvm2.mongodb.net/readings?retryWrites=true&w=majority'
// );

mongoose
  .connect(
    'mongodb+srv://jameswu21:12345@app.cmqxvm2.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to DB'))
  .catch(console.error);

app.listen(3001, () => console.log('Server listening on port 3001'));

// con1.model('User', require('./models/users'));
// con1.model('Stat', require('./models/stats'));
// con1.model('Switch', require('./models/switch'));

const User = require('./models/users');
const Stat = require('./models/stats');
const Switch = require('./models/switch');
const Reading = require('./models/readings');

//USER ENDPOINTS
app.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get('/users/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.json({ error: 'Username does not exist.' });
    return;
  }

  res.json(user);
});

app.post('/users/new', async (req, res) => {
  const dupUser = await User.findOne({ username: req.body.username });
  if (dupUser) {
    res.json({ error: 'Duplicate username exists.' });
    return;
  }
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  await user.save();

  res.json(user);
});

app.delete('/users/delete/:_id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params._id);

  res.json(result);
});

app.put('/users/edit/:_id', async (req, res) => {
  const user = await User.findById(req.params._id);

  user.username = req.body.username;
  user.password = req.body.password;
  user.save();

  res.json(user);
});

//STAT ENDPOINTS
app.get('/leaderboard', async (req, res) => {
  const leaderboard = await Stat.find();

  res.json(leaderboard);
});

app.post('/leaderboard/new', (req, res) => {
  const stat = new Stat({
    usage: req.body.usage,
    user: req.body.user,
    timestamp: Date.now(),
  });

  stat.save();

  res.json(stat);
});

app.delete('/leaderboard/delete/:_id', async (req, res) => {
  const result = await Stat.findByIdAndDelete(req.params._id);

  res.json(result);
});

app.put('/leaderboard/update/:_id', async (req, res) => {
  const stat = await Stat.findById(req.params._id);

  stat.usage = req.body.usage;
  stat.save();

  res.json(stat);
});

//SWITCH ENDPOINTS
app.get('/switch', async (req, res) => {
  const on = await Switch.find();

  res.json(on);
});

app.put('/switch/update/:_id', async (req, res) => {
  const light = await Switch.findById(req.params._id);

  light.on = !light.on;
  light.save();

  res.json(light);
});

//EPS32 ENDPOINTS
app.get('/readings', async (req, res) => {
  const reading = await Reading.find();

  res.json(reading);
});
