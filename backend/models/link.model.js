import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      rerquire: true
    },
    shortenUrl: {
      type: String,
      require: true
    },
    createdAt: {
      type: Date,
    },
    validationTime: {
      // todo: have something here.
    }

  }
)

const Link = mongoose.model('Link', linkSchema)

export default Link;