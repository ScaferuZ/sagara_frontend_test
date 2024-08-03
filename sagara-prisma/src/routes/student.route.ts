import express from "express";
import studentController from "../controllers/student.controller";

const router = express.Router();

router.post("/add", studentController.addStudent)
router.get("/", studentController.getStudents)
router.get("/:id", studentController.getStudent)
router.put("/update/:id", studentController.updateStudent)
router.delete("/delete/:id", studentController.deleteStudent)

export default router;
