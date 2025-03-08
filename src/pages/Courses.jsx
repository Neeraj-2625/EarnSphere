import CourseCard from '../components/CourseCard';
import { useEffect } from 'react';

const courses = [
  { id: 1, title: 'Starter Course',price:"RS. 150",number:"3 courses",time: '1hrs 30min',img:'Starter.jpg' },
  { id: 2, title: 'Basic Course', price:"RS. 299",number:"5 courses",time: '2hrs 30min',img:'basic.jpg'},
  { id: 3, title: 'Sandard Course', price:"RS. 599",number:"8 courses",time: '4hrs',img:'standard.jpg' },
  { id: 4, title: 'Diamond Course', price:"RS. 1199",number:"15 courses",time: '8hrs',img:'Diamond.jpg' },
  { id: 5, title: 'Platinum Course', price:"RS. 2299",number:"20 courses",time: '10hrs',img:'platinum.jpg' },
  { id: 6, title: 'Premium Course', price:"RS. 3999",number:"30 courses",time: '16hrs',img:'premium.jpg' },
  // Add more courses as needed
];

const Courses = () => {

  
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center font-serif text-[#56021F]">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
