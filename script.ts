import { config } from "./Config/config";
import { Course, Prerequisite } from "./Types/Types";
import {
  insertCourses,
  insertPrerequsite,
  readCSVFile,
} from "./Insertion/insertion";

config;
let courses: Course[];
let prerequisites: any = [];
const LoadInsert = async () => {
  try {
    courses = await readCSVFile<Course>("Data/courses.csv");
    prerequisites = await readCSVFile<Prerequisite>("Data/prerequisite.csv");
    console.log(courses);
    if (courses) {
      await insertCourses(courses);
    }
    if (prerequisites) {
      await insertPrerequsite(prerequisites);
    }
  } catch (e) {
    console.log("Error fetching or Inserting:", e);
  }
};

// LoadInsert();
