
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require("dotenv").config()

module.exports = () => {
 mongoose.connect(
    process.env.DATABASE
  )
}
