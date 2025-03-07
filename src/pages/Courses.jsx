import CourseCard from '../components/CourseCard';
import { useEffect } from 'react';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Master JavaScript concepts.' },
  { id: 3, title: 'Advanced JavaScript', description: 'Master JavaScript concepts.' },
  { id: 4, title: 'Advanced JavaScript', description: 'Master JavaScript concepts.' },
  { id: 5, title: 'Advanced JavaScript', description: 'Master JavaScript concepts.' },
  { id: 6, title: 'Advanced JavaScript', description: 'Master JavaScript concepts.' },
  // Add more courses as needed
];

const Courses = () => {

  
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
