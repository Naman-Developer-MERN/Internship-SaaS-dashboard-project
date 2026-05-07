import {AreaChart,Area,XAxis,YAxis,Tooltip,ResponsiveContainer,
  Legend, 
  CartesianGrid} from "recharts";

export default function MainAreaChart({ data }) {

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-slate-50 rounded-2xl dark:border-white
     p-4 shadow-md h-100">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">
          Student growth Overview
        </h2>

        <select className="border rounded-lg px-3 py-1 text-sm dark:text-white dark:bg-slate-900">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height="85%" >
        <AreaChart data={data} >

          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="grey" strokeDasharray="3 3" />

          <XAxis dataKey="month" axisLine={false} tickLine={false} />

          <YAxis axisLine={false} tickLine={false} />

          <Tooltip
                  contentStyle={{
                        borderRadius: "10px",
                        border: "none",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
                  }}
          />

          <Legend />

          <Area type="monotone" dataKey="student" stroke="#22C55E" fill="url(#greenGradient)" strokeWidth={3}
           dot={false} activeDot={{ r: 5 }} />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}