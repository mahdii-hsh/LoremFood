import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    category_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: [
      {
        type: String,
        trim: true,
      },
    ],
    cooking_time: {
      type: Number,
      required: true,
      min: 0,
    },
    popular_in: [
      {
        type: String,
        trim: true,
      },
    ],
    is_vegetarian: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // optional: adds createdAt and updatedAt fields
  }
);


const Food = mongoose.model.Food || mongoose.model("Food",foodSchema)