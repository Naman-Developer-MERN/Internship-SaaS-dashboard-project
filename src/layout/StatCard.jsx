import CustomAreaChart from "./CustomAreaChart";
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./CustomLineChart";

export default function StatCard({ title,value,growth,data,type }) {

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 dark:border-white 
    dark:border rounded-xl dark:border-slate shadow-lg 
    hover:shadow-md p-2  transition-all duration-200 hover:-translate-y-1 h-auto w-auto" >
            {/* <div className="h-18 absolute w-18 top-0 right-0 translate-x-10
            -translate-y-10 bg-indigo-100 rounded-full" /> */}
            <div>
                  <p className="text-md text-slate-500">
                        {title}
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                        {value}
                  </h2>

                  <p className="text-green-500 text-sm mt-2">
                        {growth}
                  </p>
            </div>

            <div className="mt-1 h-20 p-1" >
                  {type === "area" && <CustomAreaChart data = {data} />}
                  {type === "bar" && <CustomBarChart data = {data} />}
                  {type === "line" && <CustomLineChart data = {data} />}
            </div>
    </div>
  );
}