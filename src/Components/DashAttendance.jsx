import { attendanceData } from "../data/attendance";

export default function DashAttendance(){
      
      return(
            <>
                  <div className="text-md md:text-2xl font-semibold p-2 text-slate-800 dark:text-slate-50
                        text-center mt-1 rounded-lg mb-8 flex items-center gap-3" >
                        <div className="h-4 w-4 rounded-full bg-indigo-400"></div>
                        <p>
                              Attendance Overview
                        </p>
                  </div>
                  <table className="cursor-pointer">
                        <thead>
                              <tr className="text-indigo-500 font-semibold text-md">
                                    <td className="">Name</td>
                                    <td className="">Course</td>
                                    <td className="">Month</td>
                                    <td className="">Attendance(%)</td>
                                    <td className="">Status</td>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    attendanceData.map((s)=>(     
                                          <tr className="border-t" key = {s.id} >
                                                <td className="py-3">{s.studentName}</td>
                                                <td>{s.course}</td>
                                                <td>{s.month}</td>
                                                <td>{s.attendancePercent}%</td>
                                                <td className="">{s.status}</td>
                                          </tr>
                                    )) 
                              }
                        </tbody>
                  </table>
            </>
      )
}