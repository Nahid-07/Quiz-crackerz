import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const Statistics = () => {
  const userData = useLoaderData();
  const { data } = userData;
  console.log(data);

  return (
    <div>
      <AreaChart width={600} height={400} data={data}>
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </AreaChart>
    </div>
  );
};

export default Statistics;
