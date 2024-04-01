import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Reports from './Components/Reports/Reports'
import { useState } from 'react'

function App() {
  const [selectedCourse,setSelectedCourse]=useState([])

  const handleSelectBtn=(course)=>{
    const newSelectedCourse = [...selectedCourse,course]
    setSelectedCourse(newSelectedCourse)
  }
  return (
     <div>
         <Header></Header>
         <div className='flex gap-6'>
             <Courses handleSelectBtn={handleSelectBtn}></Courses>
             <Reports selectedCourse={selectedCourse}></Reports>
         </div>
     </div>
  )
}

export default App
