const { Schema, model } = require("mongoose");
const chatSchema = new Schema({
  latitude:{ type: String, required: false },
  longitude:{ type: String, required: false },
});
module.exports = model("chat", chatSchema);
