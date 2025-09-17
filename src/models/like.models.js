/*
comment ObjectId comments
  createdAt Date
  video ObjectId videos
  createdAt Date
  likedBy ObjectId users
  tweet ObjectId tweets
*/

import mongoose, { Schema } from "mongoose";
const likeSchema = new Schema(
  {
    // either of `video`,`comment` or `tweet` will be assigned others are null
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
  },
  { timestamps: true }
);
export const Like = mongoose.model("Like", likeSchema);
