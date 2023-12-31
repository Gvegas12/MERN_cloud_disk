const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Не авторизован",
      });
    }

    const decoded = jwt.verify(token, config.get("jwt.secret_key"));
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Не авторизован",
      error,
    });
  }
};
