"use client";

import Chart from "react-google-charts";

interface PieChartProps {
  data: (string | number)[][];
  height?: string;
  title: string;
  width?: string;
}

export default function PieChart({
  data,
  height = "400px",
  title,
  width = "100%",
}: PieChartProps) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        title,
      }}
      height={height}
      width={width}
    />
  );
}
