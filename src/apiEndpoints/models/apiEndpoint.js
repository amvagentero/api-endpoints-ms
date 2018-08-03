const mongoose = require('mongoose');

const { Schema } = mongoose;

const ApiEndpointSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String, required: true, index: true, unique: true,
  },
  roles: {
    type: [String], enum: ['NEW', 'STATUS'], default: ['NEW'], required: true, index: true,
  },
});

module.exports = mongoose.model('ApiEndpoints', ApiEndpointSchema);
