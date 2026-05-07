import StatCard from "../layout/StatCard";
import { dashStats } from '../data/dashstats';
import CustomAreaChart from "../layout/CustomAreaChart";
import { studentGrowthMiniChart } from "../DashBoardChartsData/studentGrowthMiniChartData";
import CustomBarChart from "../layout/CustomBarChart";
import { paymentStatusData } from "../DashBoardChartsData/paymentStatusData";
import CustomPieChart from "../layout/CustomPieChart";
import { topCoursesData } from "../DashBoardChartsData/topCourseData";
import CustomLineChart from "../layout/CustomLineChart";
import { attendanceMiniChartData } from "../DashBoardChartsData/attendanceMiniChartData";
import { feesCollectionData } from "../DashBoardChartsData/feesCollectionMiniChartData";
import { revenueMiniChartData } from "../DashBoardChartsData/revenueMiniChartData";
import { recentActivityData } from "../DashBoardChartsData/recentActivityData";
import { courseProgressData } from "../DashBoardChartsData/courseProgressData";
import { recentPaymentsData } from "../DashBoardChartsData/recentPaymentsData";
import { recentNotifications } from "../DashBoardChartsData/recentNotifications";

export default function DashHome() {
      

      return(
            <>
                  <h1 className="text-semibold text-xl md:text-2xl">Welcome,
                        <span className="text-indigo-400 px-2 rounded-lg font-semibold">User</span>
                        <div className="h-1 bg-amber-300 rounded-full w-20 md:w-34 md:h-1 mt-2 " ></div>
                  </h1>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                        {
                              dashStats.map(d=> (
                                    <StatCard 
                                          key = {d.id}
                                          title = {d.title}
                                          value = {d.value}
                                          growth = {d.growth}
                                          icon = {d.icon}
                                          data = {d.data}
                                          type = {d.type}
                                    />
                              ))
                        }
                  </div>

                  <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6 dark:bg-slate-950
                        dark:border rounded-2xl dark:text-slate-50 dark:border-slate-50 border-none" >
                        <div className="col-span-1 md:col-span-2 rounded-2xl shadow-lg p-4 bg-white dark:border-slate-50
                              dark:bg-slate-950 border-white border" >
                              <div className="flex justify-between mb-4">
                                    <h2 className=" dark:text-slate-50 text-lg font-semibold">
                                          Student's Growth Overview
                                    </h2>
                                    <select className="bg-slate-100 rounded-full dark:bg-slate-900 p-1 text-sm">
                                          <option>This Year</option>
                                          <option>This Month</option>
                                          <option>This Day</option>
                                    </select>
                              </div>
                              <div className="h-[400px]">
                                    <CustomAreaChart data = {studentGrowthMiniChart} />
                              </div>
                        </div>
                        <div className="flex flex-col gap-5 rounded-2xl p-2 shadow-lg border bg-white dark:bg-slate-950
                              border-slate-200 dark:border-slate-50" >
                              <div className="rounded-2xl p-2 border border-none dark:border-slate-50" >
                                    <div className="flex justify-between mb-1">
                                          <h2 className=" dark:text-slate-50 text-lg font-semibold">
                                                Payment Overview
                                          </h2>
                                          <select className="bg-slate-100 rounded-full dark:bg-slate-900 p-1 text-sm">
                                                <option>This Year</option>
                                                <option>This Month</option>
                                                <option>This Day</option>
                                          </select>
                                    </div>
                                    <div className="h-[180px]">
                                          <CustomPieChart data = {paymentStatusData} />
                                    </div>
                              </div>
                              <div className=" rounded-2xl p-2 ">
                                    <div className="flex justify-between mb-1">
                                          <h2 className=" dark:text-slate-50 text-lg font-semibold">
                                                Courses Overview
                                          </h2>
                                          <select className="bg-slate-100 rounded-full dark:bg-slate-900 p-1 text-sm">
                                                <option>This Year</option>
                                                <option>This Month</option>
                                                <option>This Day</option>
                                          </select>
                                    </div>
                                    <div className="h-[180px]">
                                          <CustomBarChart data = {topCoursesData} />
                                    </div>
                              </div>
                        </div>
                  </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6  w-full">
                              <div className="rounded-2xl shadow-sm p-3 bg-white border border-white dark:bg-slate-950 dark:border-slate-50 ">
                                    <div className="flex justify-between mb-4">
                                          <h2 className = "text-sm font-semibold mb-4">Student Attendance Overview</h2>
                                    <select className="bg-slate-100 rounded-full dark:bg-slate-900 p-0 text-sm">
                                          <option>This Year</option>
                                          <option>This Month</option>
                                          <option>This Day</option>
                                    </select>
                              </div>
                                    <div className="h-[220px]">
                                          <CustomBarChart data = {feesCollectionData} />
                                    </div>
                              </div>
                              <div className="rounded-2xl shadow-sm p-3 bg-white border border-white dark:bg-slate-950 dark:border-slate-50 ">
                                    <div className="flex justify-between mb-4">
                                          <h2 className = "text-sm font-semibold mb-4">Fees Collection Overview</h2>
                                          <select className="bg-slate-100 rounded-full dark:bg-slate-900 p-0 text-sm">
                                                <option>This Year</option>
                                                <option>This Month</option>
                                                <option>This Day</option>
                                          </select>
                                    </div>
                                    <div className="h-[220px]">
                                          <CustomAreaChart data = {attendanceMiniChartData} />
                                    </div>
                              </div>
                              <div className="rounded-2xl shadow-sm p-3 bg-white border border-white dark:bg-slate-950 dark:border-slate-50 ">
                                    <div className="flex justify-between mb-4">
                                          <h2 className = "text-sm font-semibold mb-4">Revenue Overview</h2>
                                          <select className="bg-slate-100 rounded-full dark:bg-slate-900 p-0 text-sm">
                                                <option>This Year</option>
                                                <option>This Month</option>
                                                <option>This Day</option>
                                          </select>
                                    </div>
                                    <div className="h-[220px]">
                                          <CustomLineChart data = {revenueMiniChartData} />
                                    </div>
                              </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
                              <div className="bg-white rounded-2xl p-5 dark:bg-slate-950 border border-white 
                              dark:border-white shadow-xl">
                                    <h2 className="text-lg font-semibold mb-5">
                                          Recent Activity
                                    </h2>
                                    {
                                          recentActivityData.map((r)=>(
                                                <div key = {r.id} className="flex flex-start gap-5 mb-4" >
                                                      <div className="w-4 h-4 rounded-full bg-indigo-300 mt-2"></div>

                                                      <div>
                                                            <p className="font-medium">
                                                                  {r.title}
                                                            </p>
                                                            <p className="text-sm text-slate-500">
                                                                  {r.name}
                                                            </p>
                                                            <p className="text-xs text-slate-500">
                                                                  {r.time}
                                                            </p>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </div>
                              <div className="md:col-span-2 bg-white p-5 border-white dark:bg-slate-950 border dark:border-white 
                                    rounded-2xl shadow-md" >
                                    <h2 className="text-lg font-semibold mb-4" >
                                          Course Progress
                                    </h2>
                                    {
                                          courseProgressData.map((c)=>(
                                                <div className= "" key = {c.id} >
                                                      <div className="flex justify-between mb-1">
                                                            <span>{c.course}</span>
                                                            <span>{c.progress}%</span>
                                                      </div>
                                                      <div className="h-2 bg-slate-200 rounded-full mb-5 " >
                                                            <div className="h-2 bg-amber-300 rounded-full" style = {{ width:`${c.progress}%` }} >
                                                            </div>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4" >
                              <div className="bg-white rounded-2xl p-5 shadow-md mt-5 dark:bg-slate-950 border border-white">
                                    <h2 className="text-md font-semibold mb-4">
                                          Recent Payments
                                    </h2>
                                    <table className="w-full text-sm" >
                                          <thead>
                                                <tr className="text-left text-slate-500" >
                                                      <th>Student</th>
                                                      <th>Amount</th>
                                                      <th>Status</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {
                                                      recentPaymentsData.map((r)=>(
                                                            <tr key = {r.id} className="text-slate-500 text-md border-t" >
                                                                  <td className="py-3">{r.student}</td>
                                                                  <td>{r.amount}</td>
                                                                  <td className="text-green-400 text-md">{r.status}</td>
                                                            </tr>
                                                      ))
                                                }
                                          </tbody>
                                    </table>
                              </div>
                              <div className="bg-white dark:bg-slate-950 border border-white dark:border-slate-50 
                              shadow-md rounded-2xl p-5 mt-5">
                                    <h2 className="font-semibold text-md">Recent Notifications</h2>
                                    {
                                          recentNotifications.map((r)=>(
                                                <div className="flex flex-start gap-5 mt-4 items-center" >
                                                      <div className="h-3 w-3 bg-amber-300 rounded-full"></div>
                                                      <div>
                                                            <p className="">
                                                                  {r.message}
                                                            </p>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
            </>
      )
}
