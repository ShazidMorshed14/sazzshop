import nc from "next-connect";
import db from "../../../utils/db";

import { isRequestValidated, validateSignupRequest } from "../validators/auth";
const handler = nc();

handler.post(
  // validateSignupRequest,
  // isRequestValidated,
  async (req, res) => {
    try {
      await db.connectDb();
      const { name, email, password, confirmPassword } = req.body;
      return res.status(200).json({ name, email, password });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

export default handler;
