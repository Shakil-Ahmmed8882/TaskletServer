const { model, Schema } = require("mongoose");

const TasksSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Tasks = model("Tasks", TasksSchema);

module.exports = Tasks;
