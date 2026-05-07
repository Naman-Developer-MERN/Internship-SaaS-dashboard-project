import { paymentsData } from "../data/Payment";

export default function DashFees(){
      
      return(
            <>
                  <div className="text-md md:text-2xl font-semibold p-2 text-slate-800 dark:text-slate-50
                        text-center mt-1 rounded-lg mb-8 flex items-center gap-3" >
                        <div className="h-4 w-4 rounded-full bg-indigo-400"></div>
                        <p>
                              Fee Overview
                        </p>
                  </div>
                  <table className="cursor-pointer">
                        <thead>
                              <tr className= "text-indigo-500 font-semibold text-md">
                                    <td>Name</td>
                                    <td>Course</td>
                                    <td>Amount</td>
                                    <td>Pay date</td>
                                    <td>Status</td>
                                    <td>Mode</td>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    paymentsData.map((s)=>(     
                                          <tr className="border-t" key = {s.id} >
                                                <td className="py-3">{s.studentName}</td>
                                                <td>{s.course}</td>
                                                <td>{s.amount}</td>
                                                <td>{s.paymentDate}</td>
                                                <td>{s.paymentStatus}</td>
                                                <td className="">{s.mode}</td>
                                          </tr>
                                    )) 
                              }
                        </tbody>
                  </table>
                   
            </>
      )
}