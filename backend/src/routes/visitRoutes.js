const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { createVisit } = require("../controllers/visitController");

// All visit APIs require doctor authentication
router.use(authMiddleware);

router.post("/", createVisit);

module.exports = router;
