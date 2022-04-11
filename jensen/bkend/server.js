const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require('mongoose');
dotenv.config({ path: './config/config.env' });


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}
connectDB();

const skolor = require('./routes/skolor');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/skolor', skolor);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

