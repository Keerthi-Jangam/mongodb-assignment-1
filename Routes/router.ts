import express from 'express'
export const router = express.Router()
import { courseRouter } from './courseRouter';
router.use('/courses',courseRouter);
// router.use('/prerequisite',prerequisiteRouter);
// router.use('/course-prerequisite',cpRouter); 