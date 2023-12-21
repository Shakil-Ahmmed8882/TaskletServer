const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String, // Username field
  email: {
    // Email field
    type: String,
    required: true, // Make email required
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User
