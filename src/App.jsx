import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Reports from './Components/Reports/Reports'
import { useState } from 'react'

function App() {
  const [selectedCourse,setSelectedCourse]=useState([])
  const [selectCredit,setSelectCredit]=useState(0)
  const [selectPrice,setSelectPrice]=useState(0)
  const [remainingCredit,setRemainingCredit]=useState(20)

  const handleSelectBtn=(course,credit,price)=>{
    const newSelectedCourse = [...selectedCourse,course]   
    const newCredit = selectCredit+credit    
    const newPrice=selectPrice+price    
    const newRemainingCredit=remainingCredit-credit
    if (newRemainingCredit<0){
      alert("You Cannot Select More than 20 Credits")
    }
    else{
      setRemainingCredit(newRemainingCredit)
      setSelectedCourse(newSelectedCourse)
      setSelectCredit(newCredit)
      setSelectPrice(newPrice)
    }
  }
  return (
     <div>
         <Header></Header>
         <div className='flex gap-6'>
             <Courses handleSelectBtn={handleSelectBtn}></Courses>
             <Reports selectedCourse={selectedCourse} selectCredit={selectCredit} selectPrice={selectPrice} remainingCredit={remainingCredit}></Reports>
         </div>
     </div>
  )
}

export default App
