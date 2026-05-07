import { Bar, ResponsiveContainer, Tooltip ,BarChart} from "recharts";

export default function CustomBarChart({ data })
{
      return(
            <>
                  <ResponsiveContainer width = "100%" height = "100%" >
                        <BarChart data = {data} >
                              <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} 
                              contentStyle = {{
                                    borderRadius:"10px",border:"none",
                                    boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
                              }}/>
                              <Bar dataKey = "value" radius = {[4,4,0,0]} fill = "#FCD34D" 
                                    barSize={20} animationDuration={800} 
                              />
                        </BarChart>
                  </ResponsiveContainer>
            </>
      )
}