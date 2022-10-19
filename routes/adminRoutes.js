const express = require("express");
const { update, deleteUser } = require("../auth/auth");
const { adminAuth } = require("../middlewares/auth");
const router = express.Router();

router.route("/update-user").post([adminAuth], update);
router.route("/delete-user").post([adminAuth], deleteUser);

module.exports = router;
