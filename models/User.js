const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    vendor_id: {
      type: String,
    },
    questions: [
      {
        question_id: String,
        RequestID: Number,
        Answer: String,
        template_id: String,
        EvidenceBinary: String,
        comment: String,
        status: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UsersSchema);
