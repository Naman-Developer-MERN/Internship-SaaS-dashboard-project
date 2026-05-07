import { facultyData } from "../data/faculty";

export default function DashFaculty(){
      
      return(
            <>
                  <div className="text-md md:text-2xl font-semibold p-2 text-slate-800 dark:text-slate-50
                        text-center mt-1 rounded-lg mb-8 flex items-center gap-3" >
                        <div className="h-4 w-4 rounded-full bg-indigo-400"></div>
                        <p>
                              Faculty Overview
                        </p>
                  </div>
                        <table className="cursor-pointer">
                              <thead>
                                    <tr className= "text-indigo-500 font-semibold text-md">
                                          <td>Name</td>
                                          <td>Department</td>
                                          <td>Subject</td>
                                          <td>Experience</td>
                                          <td>Salary</td>
                                          <td>Status</td>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          facultyData.map((s)=>(     
                                                <tr className="border-t" key = {s.id} >
                                                      <td className="py-3">{s.name}</td>
                                                      <td>{s.department}</td>
                                                      <td>{s.subject}</td>
                                                      <td>{s.experience}</td>
                                                      <td>{s.salary}</td>
                                                      <td className="">{s.status}</td>
                                                </tr>
                                          )) 
                                    }
                              </tbody>
                        </table>
            </>
      )
}