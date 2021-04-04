import { connectToDatabase } from "../utils/mongodb";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../config/keys";

class UserController {
  static async signUp(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { db } = await connectToDatabase();
      const User = db.collection("users");
      const Login = db.collection("login");
      const { email, password, username } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const createdAt = new Date();
      await User.insertOne(
        {
          username,
          createdAt,
        },
        async (err, user) => {
          await Login.insertOne({
            email,
            password: hash,
            userId: user.insertedId,
            createdAt,
          });
          const token = jwt.sign({ userId: user.insertedId }, jwtSecretKey);
          return res.status(200).send({ token });
        }
      );

      return res.status(200).json({});
    } catch (err) {
      console.log(err);
    }
  }

  static async findAll(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { db } = await connectToDatabase();
      const data = await db.collection("users").find({}).toArray();
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }

  static async signIn(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { email } = req.body;
      const { db } = await connectToDatabase();
      const user = await db.collection("login").findOne({ email });
      if (!user)
        return res.status(422).send({ error: "Invalid password or email" });
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserController;
