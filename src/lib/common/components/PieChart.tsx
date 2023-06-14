"use client";

import Chart from "react-google-charts";

interface PieChartProps {
  data: (string | number)[][];
}

export default function PieChart({ data }: PieChartProps) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        title: "Ingredients (Tsp)",
      }}
      width={"100%"}
      height={"400px"}
    />
  );
}
