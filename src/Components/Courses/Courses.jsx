import { useEffect } from "react"
import { useState } from "react"
import Course from "../Course/Course"

function Courses({handleSelectBtn}) {

  const [courses,setCourses]=useState([])

  useEffect(()=>{
    fetch ("courses.json")
    .then (res=>res.json())
    .then(data=>{setCourses(data)})
  },[])

  return (
    <div className="w-2/3  mt-12 ml-5">
      <h1 className="mb-10 text-4xl">Total Courses : {courses.length}</h1>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 mb-8 my-10">
            {
              courses.map(course=><Course key={course.id} course={course} handleSelectBtn={handleSelectBtn}></Course> )
            }
       </div>
    </div>
  )
}

export default Courses
