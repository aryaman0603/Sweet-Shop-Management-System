import mongoose from "mongoose";

const sweetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Sweet name is required"],
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity cannot be negative"],
  },
});

const Sweet = mongoose.model("Sweet", sweetSchema);

export default Sweet;
