import express from "express";
import { Register, getAllUsers, Login, getMyProfile, Logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.get("/all", getAllUsers)
router.post("/new", Register)
router.post("/login", Login)
router.post("/logout", Logout)
router.get("/me", isAuthenticated, getMyProfile)

// chaining
// router.route("/userid/:id").get(getUserDetails).put(updateUserDetails).delete(deleteUserDetails)
export default router;