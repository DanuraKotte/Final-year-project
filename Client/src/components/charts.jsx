import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "John Turner",
    pv: 140,
    amt: 2400,
  },
  {
    name: "Vinay Kumar",
    pv: 100,
    amt: 2210,
  },
  {
    name: "Jessica Roberts",
    pv: 10,
    amt: 2290,
  },
  {
    name: "Ying Han",
    pv: 45,
    amt: 2000,
  },
];

export default function VoteCharts() {
  return (
    <ResponsiveContainer width="80%" aspect={2}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        barSize={70}>
        <XAxis dataKey="name" scale="auto" padding={{ left: 1, right: 1 }} />
        <YAxis domain={[0, 300]} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#ed820d" background={{ fill: "#f5f5fa" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}
