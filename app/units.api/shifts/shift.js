const mongoose = require('mongoose');
const format = require('date-fns/format');
const slugify = require('slugify');
const { capitalize } = require('../../util');

const shiftSchema = mongoose.Schema({
  date: {
    type: Date,
    required: [true, ['Please, add date.']]
  },
  units: {
    type: Number,
    default: 0
  },
  floor: {
    type: Number,
    required: [true, 'Please, add floor.']
  },
  comments: {
    type: String,
    required: [true, 'Please, add comments.'],
    maxlength: 200,
    trim: true
  },
  active: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

shiftSchema.set('toObject', { virtuals: true });
shiftSchema.set('toJSON', { virtuals: true });

// shiftSchema.pre("save", function(next) {

//   const fullname = `${this.lname} ${this.fname}`;
//   this.slug = slugify(fullname, {
//     replacement: '-',
//     lower: true,
//     trim: true
//   });

//   next();

// });

// authorSchema.virtual('display').get(function() {

//   const displayFirst = this.fname

// });

shiftSchema.virtual('date_formatted').get(function() {
  return format(this.date, 'MMMM d, yyyy')
});

module.exports = mongoose.model('Shift', shiftSchema);
