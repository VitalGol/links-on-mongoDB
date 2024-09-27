import mongoose from 'mongoose';

const linksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // required: [true, 'Please add value'],
    },
    link: {
      type: String,
      required: true,
      // required: [true, 'Please add value'],
    },
    select: {
      type: String,
      required: true,
      // required: [true, 'Please add value'],
    },
  },
  { timestamps: true }
);

export const linksModel = mongoose.model('links', linksSchema);
