// const { model, Schema } = require("mongoose");

// const TasksSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
// });




// const Tasks = model("Tasks", TasksSchema);

// module.exports = Tasks;



const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  priority: String,
});

module.exports = mongoose.model('Tasks', taskSchema);
