import { coursesData } from "../data/courseData";

export default function DashCourse(){
      
      return(
            <>
                  <div className="text-md md:text-2xl font-semibold p-2 text-slate-800 dark:text-slate-50
                        text-center mt-1 rounded-lg mb-8 flex items-center gap-3" >
                        <div className="h-4 w-4 rounded-full bg-indigo-400"></div>
                        <p>
                              Course Overview
                        </p>
                  </div>
                  <table className="cursor-pointer">
                        <thead>
                              <tr className= "text-indigo-500 font-semibold text-md">
                                    <td>Course</td>
                                    <td>Duration</td>
                                    <td>Students</td>
                                    <td>Semester</td>
                                    <td>Fees</td>
                                    <td>Status</td>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    coursesData.map((s)=>(     
                                          <tr className="border-t" key = {s.id} >
                                                <td className="py-3">{s.courseName}</td>
                                                <td>{s.duration}</td>
                                                <td>{s.students}</td>
                                                <td>{s.semester}</td>
                                                <td>{s.fees}</td>
                                                <td className="">{s.status}</td>
                                          </tr>
                                    )) 
                              }
                        </tbody>
                  </table>
            
                                          
            </>
      )
}