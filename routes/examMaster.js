const express = require("express");
const router = express.Router();

const { examResult, ResultDetail } = require("../controller/examMaster");
const verifyToken = require("../middleware/authMiddleware");

router.get("/results", verifyToken, examResult);
router.get("/ResultDetail", verifyToken, ResultDetail);

module.exports = router;
