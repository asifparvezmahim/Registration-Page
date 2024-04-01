import './Course.css'

function Course({course,handleSelectBtn}) {
  const {course_title,course_img,details,course_price,credit}=course
  return (
    <div className='shadow-lg'>
       <img src={course_img} alt="" srcSet="" />
       <h3 className='ml-2 py-3 font-semibold'>{course_title}</h3>
       <p className='ml-2 py-3'>{details}</p>
       <div className='flex py-3 justify-evenly'>
          <small>Price : {course_price} $</small>
          <small>Credit : {credit} hrs.</small>
       </div>
       <button onClick={()=>handleSelectBtn(course)} className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Start</button>
    </div>
  )
}

export default Course
