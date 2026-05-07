import { studentsData } from "../data/studentData"

export default function DashStudent(){
      
      return(
            <>
                  <div className="text-md md:text-2xl font-semibold p-2 dark:text-slate-50 
                  text-slate-800 text-center mt-1 rounded-lg mb-8 flex items-center justify-between" >
                        <div className="flex flex-start gap-2 items-center">
                              <div className="h-4 w-4 rounded-full bg-indigo-400"></div>
                              <p>
                                    Student Overview

                              </p>
                        </div>
                        <div>
                              <button className="px-2 p-1 cursor-pointer text-sm text-white bg-indigo-500 rounded-lg">
                                    +Add
                              </button>
                        </div>
                  </div>
                  <table className="cursor-pointer">
                        <thead>
                              <tr className= "text-indigo-500 font-semibold text-md">
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Course</td>
                                    <td>Year</td>
                                    <td>Attendance</td>
                                    <td>FeeStatus</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                   studentsData.map((s)=>(     
                                          <tr className="border-t" key = {s.id} >
                                                <td className="py-3">{s.name}</td>
                                                <td>{s.email}</td>
                                                <td>{s.course}</td>
                                                <td>{s.year}</td>
                                                <td>{s.attendance}</td>
                                                <td className="">{s.feeStatus}</td>
                                                <td className="" >
                                                      <button className="bg-slate-500 p-2 rounded-md cursor-pointer text-slate-50">
                                                            Edit
                                                      </button>
                                                </td>
                                                <td className="">
                                                      <button className="bg-slate-950 dark:bg-slate-200 dark:text-slate-950 
                                                      text-white p-2 rounded-md cursor-pointer">
                                                            Delete
                                                      </button>
                                                </td>

                                          </tr>
                                    )) 
                              }
                        </tbody>
                  </table>
            </>
      )
}