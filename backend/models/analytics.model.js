import mongoose, { Schema } from "mongoose";

const analyticSchema = new Schema(
  {
    urlId: {
      type: Schema.Types.ObjectId,
      ref: 'Link',
      require: true
    },
    clicks: {
      type: Number
    }
  }
)

const Analytic = mongoose.model('Analytic', analyticSchema)

export default Analytic;