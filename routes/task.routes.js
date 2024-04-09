import { Router } from "express";
import { createTask, getTasks, updateTask } from "../controllers/task.controller.js";

const router = Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').put(updateTask);

export default router;