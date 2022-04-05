const mongoose = require('mongoose');
const { connect } = require('../routes/skolorRoutes');

const connectDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`Mongo connectad! ${conn.connection.host}`.cyan.
    underline);
    } catch (error) {
    console.log(error);
    process.exit(1)
    }
}

module.exports = connectDB