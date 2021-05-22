import { Users } from "../../utils/interface";
// import UserController from "../../controllers/UserController";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Users | any>
) {
  if (req.method === "POST") {
    //
  } else {
    //
  }
}
