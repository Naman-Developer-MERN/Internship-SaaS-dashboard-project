import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend
} from "recharts";

export default function CustomPieChart({ data }) {

  return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />

          <Legend />

          <Pie data={data} dataKey="value" nameKey="" innerRadius={50} outerRadius={70}
            paddingAngle={4} fill="#10B981"
          />
        </PieChart>
      </ResponsiveContainer>
  );
}