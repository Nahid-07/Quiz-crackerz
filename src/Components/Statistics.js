import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer
} from "recharts";

const Statistics = () => {
  const userData = useLoaderData();
  const { data } = userData;
  console.log(data);

  return (
    <div className="container mx-auto bg-gray-200 mt-24">
      <div className="p-4  flex items-center justify-center">
      <ResponsiveContainer width='100%' height={600}>
      <AreaChart data={data}>
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
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
