import { connectToDatabase } from "../../../utils/mongodb";
import { Newsletter } from "../../../utils/interface";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Newsletter>
) {
  const { db } = await connectToDatabase();
  const data = await db.collection("newsletter").find({}).toArray();
  res.json(data);
}
