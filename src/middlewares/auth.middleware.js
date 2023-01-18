const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  console.log(token);
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: "HS512" },
    (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: "invalid token",
          message: "el token no es valido, envia uno correcto",
        });
      } else {
        console.log(decoded);
        next();
      }
    }
  );
};

module.exports = authMiddleware;
