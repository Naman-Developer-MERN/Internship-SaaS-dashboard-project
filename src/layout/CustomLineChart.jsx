import {Line, ResponsiveContainer,LineChart, Tooltip} from "recharts";

export default function CustomLineChart({data, }){
      
      return(
            <>
                  <ResponsiveContainer width = "100%" height = "100%" >
                        <LineChart data = {data} >
                              <Tooltip contentStyle = {
                                    {borderRadius:"10px", backgroundColor:"#FFF" }
                              } />
                              <Line
                                    type = "monotone" dataKey = "value" stroke = "#6366F1" 
                                    strokeWidth={2} dot = {false} animationDuration={800}
                              />
                        </LineChart >
                  </ResponsiveContainer>
            </>
      )
}
// 