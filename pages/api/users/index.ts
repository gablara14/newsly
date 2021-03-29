import { connectToDatabase } from "../../../utils/mongodb";
import { Users } from "../../../utils/interface";
// import mongoose from "mongoose";
// const User = mongoose.model("Users");

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Users>
) {
  const { db } = await connectToDatabase();
  try {
    if (req.method === "POST") {
      const data = req.body;
      await db.collection("users").insertOne(data);
      return res.status(200).json(data);
    }
    const data = await db.collection("users").find({}).toArray();
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
}
