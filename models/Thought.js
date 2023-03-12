// const {Schema, model} = require("mongoose")
// const moment = require("moment")

// const thoughtSchema = new Schema ({
//     thoughtText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (date) => {
//             return moment(date).format("MM/DD/YYYY")
//         }

//     },

// })
const { Schema, model } = require('mongoose');
const reactionSchema = require('../models/Reaction');
const moment = require('moment');


const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 280
      },
      createdAt: {
        type: Date,
       
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
  },
  { 
    toJSON: {
      
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


thoughtSchema.virtual('reactionCount').get(function () {
  return `reactions: ${this.reactions.length}`;
  });



const Thought = model('Thought', thoughtSchema);


module.exports = Thought;
