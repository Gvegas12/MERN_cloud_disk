const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const router = new Router();

router.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = User.findOne({ email });
    if (candidate) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким email уже существует" });
    }

    const hashPassword = await bcrypt.hash(password, 15);
    const user = new User({ email, password: hashPassword });
    т;

    await user.save();
    return res.json({ message: "Пользователь успешно создан" });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
    ``;
  }
});
