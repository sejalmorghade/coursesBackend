import Course from '../model/course.js';

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { courseName, description, price } = req.body;

    const course = new Course({ courseName, description, price });
    await course.save();

    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error: error.message });
  }
};

// Get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
};
