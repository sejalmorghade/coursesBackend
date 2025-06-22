import express from 'express';
import { createCourse, getAllCourses } from '../controller/course.js';

const router = express.Router();

router.post('/create', createCourse);       // Create course
router.get('/all', getAllCourses);          // Get all courses

export default router;
