const jwt = require("jsonwebtoken");
const AuthService = require("../services/auth.services");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await AuthService.login(email, password);

    if (response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id,
      };
      const token = jwt.sign(data, "sharala", { algorithm: "HS512" });
      // console.log(token);
      data.token = token;
      res.json(data);
    } else {
      res.status(403).json({ message: "credenciales invalidas" });
    }
    // res.json(result);
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = userLogin;
