const { Schema, model } = require('mongoose');

const ChatSchema = new Schema({
  userId: {
    type: Schema.Types.String,
    required: true,
  },
  roomId: {
    type: Schema.Types.String,
    required: true,
  },
  text: {
    type: Schema.Types.String,
    default: '',
  },
  readed: {
    type: Schema.Types.Boolean,
    required: true,
    default: false,
  },
  replyTo: {
    type: Schema.Types.String, // -> target chat._id
    default: null,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('chats', ChatSchema);