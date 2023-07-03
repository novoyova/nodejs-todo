const db = require('../config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserModel = require('../model/user.model');

const todoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: UserModel.modelName
  },
  title: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,
  }
});

const TodoModel = db.model('todo', todoSchema);

module.exports = TodoModel;