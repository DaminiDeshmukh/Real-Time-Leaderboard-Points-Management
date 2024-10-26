import express from "express";
import { claimPoints, getAllUser, getMonthlyData, getTodayHistory, getUserHistory, getUserWithHelpOfId, getUserWithHelpOfToken, getWeeklyData } from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/get-users", getAllUser);
router.post("/get-users-info", verifyToken, getUserWithHelpOfToken);
router.post("/get-users-info",verifyToken,   getUserWithHelpOfId);
router.patch("/claim-points", claimPoints);
router.get("/your-daily-history", getTodayHistory);
router.get("/your-weekly-history", getWeeklyData);
router.get("/your-monthly-history", getMonthlyData);
router.post("/your-history", getUserHistory);


// import bcrypt from 'bcryptjs';
// import User from '../models/users.model.js'; // Ensure this import is present

// // Temporary route to add sample users
// router.post("/add-sample-users", async (req, res) => {
//   try {
//     // Hash a sample password
//     const hashedPassword = await bcrypt.hash('samplepassword', 10);

//     // Sample users with hashed password
//     const sampleUsers = [
//         { firstName: 'David', lastName: 'Miller', username: 'david', email: 'david@example.com', points: 5, password: hashedPassword },
//         { firstName: 'Eve', lastName: 'Johnson', username: 'eve', email: 'eve@example.com', points: 30, password: hashedPassword },
//         { firstName: 'Frank', lastName: 'Wilson', username: 'frank', email: 'frank@example.com', points: 12, password: hashedPassword },
//         { firstName: 'Grace', lastName: 'Moore', username: 'grace', email: 'grace@example.com', points: 25, password: hashedPassword },
//         { firstName: 'Henry', lastName: 'Taylor', username: 'henry', email: 'henry@example.com', points: 18, password: hashedPassword },
//         { firstName: 'Ivy', lastName: 'Anderson', username: 'ivy', email: 'ivy@example.com', points: 22, password: hashedPassword },
//         { firstName: 'Jack', lastName: 'Thomas', username: 'jack', email: 'jack@example.com', points: 14, password: hashedPassword }
//     ,  
//     ];

//     await User.insertMany(sampleUsers);
//     res.status(201).json({ success: true, message: 'Sample users added successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to add sample users', error: error.message });
//   }
// });


export default router;
