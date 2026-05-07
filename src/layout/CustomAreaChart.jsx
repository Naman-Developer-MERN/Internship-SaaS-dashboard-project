import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function CustomAreaChart({ data })
{
      return(
            <>
                  <ResponsiveContainer width = "100%" height = "100%" >
                        <AreaChart data = {data} >
                        <defs>
                              <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="95%" stopColor="#72ed93" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#72ed93" stopOpacity={0.2}/>
                              </linearGradient>
                        </defs>
                              <XAxis dataKey="label" axisLine={false} tickLine={false} />
                              <YAxis />
                              <Tooltip contentStyle={{border:""}}  />
                              <Area 
                                    type = "monotone" dataKey = "value" stroke = "#72ed93"
                                    fill="url(#colorData)" dot = {true} strokeWidth = {2} animationDuration={800}
                              />
                        </AreaChart>
                  </ResponsiveContainer>
            </>
      )
}