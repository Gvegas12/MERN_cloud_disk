const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const authMiddleware = require("../middlewares/auth.middleware");
const fileService = require("../services/file.service");
const File = require("../models/File");

const router = new Router();

const createToken = (user) => {
  const token = jwt.sign({ id: user.id }, config.get("jwt.secret_key"), {
    expiresIn: "1h",
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      diskSpace: user.diskSpace,
      usedSpace: user.usedSpace,
      avatar: user.avatar,
    },
  };
};

router.post(
  "/registration",
  [
    check("email", "Некорректный email").isEmail(),
    check(
      "password",
      "Пароль должен содержать не менее 3 символов и менее 12 символов"
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Некорректный запрос", errors });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует" });
      }

      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashPassword });

      await user.save();
      await fileService.createDir(new File({ user: user.id, name: "" }));

      return res.json(createToken(user));
    } catch (e) {
      console.log(e);
      res.send({ message: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    return res.json(createToken(user));
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    return res.json(createToken(user));
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
