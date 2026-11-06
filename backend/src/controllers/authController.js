const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const doctorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required."
      });
    }

    // Validate doctor username
    if (username !== process.env.DOCTOR_USERNAME) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password."
      });
    }

    // Compare password with stored bcrypt hash
    const isPasswordValid = await bcrypt.compare(
      password,
      process.env.DOCTOR_PASSWORD_HASH
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password."
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        username: process.env.DOCTOR_USERNAME,
        role: "DOCTOR"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d"
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful!",
      data: {
        token,
        username: process.env.DOCTOR_USERNAME
      }
    });

  } catch (error) {
    console.error("Doctor login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during login."
    });
  }
};

module.exports = { doctorLogin };
