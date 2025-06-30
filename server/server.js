const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoute = require('./routes/feedbackRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('your_mongodb_atlas_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api/feedback', feedbackRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
