import mongoose, { Schema } from "mongoose";
const storeScehma = new Schema(
    {
        name: String ,
        amount: Number ,
        quantity: Number
    },
    {
        timestamps: true
    }
);
const Item = mongoose.models.Item || mongoose.model("Item", storeScehma)

export default Item

