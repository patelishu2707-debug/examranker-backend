import express from "express";
import pb from "../services/pocketbase";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const authData = await pb
      .collection("app_users")
      .authWithPassword(email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: authData.token,
      user: authData.record,
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });

  }
});

export default router;