import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import { createVisit } from "../controllers/visitController.js";

const router = express.Router();

// All visit APIs require doctor authentication
router.use(authMiddleware);

router.post("/", createVisit);

export default router;
