import Report from "../Report/Report"
import './Reports.css'

function Reports({selectedCourse}) {
  return (
     <div className="w-1/3  mt-12 ">
        <div className="cont shadow-lg card pl-4">
          <div>
             <p className="text-3xl font-semibold text-center mb-6">Bill Summary</p>
          </div>
          
          <h3>Course Credit Remaining : <span>20</span> hrs.</h3>
          <hr className="undrline"/>
          <h3 className="font-bold">Course Name </h3>
          <div >
            {
                  selectedCourse.map((report,ind)=><Report key={ind} report={report}></Report>)
            }
          </div>
          <hr className="undrline"/>
          
          <p className="mt-3 mb-3">Total Credit Hour: </p>
          <hr className="undrline"/>
          <p className="mt-3"> Total Price : </p>
          <br />
        </div>
      </div>
  )
}

export default Reports
