import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { Space } from "antd";
import { FC } from "react";
import { IGlobalCovidStats } from "@/modules/interfaces";

interface CovidDataProps {
  data: IGlobalCovidStats;
}

const PieChartCmp: FC<CovidDataProps> = ({ data }) => {
  const pieData = [
    { name: "Active Cases", value: data?.active },
    { name: "Recovered", value: data?.recovered },
    { name: "Deaths", value: data?.deaths },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  const renderLabel = ({ percent }: { percent: number }) => {
    return `${(percent * 100).toFixed(2)}%`;
  };

  return (
    <Space direction="vertical" align="center">
      <div className="font-bold text-lg">Global Covid-19 Data</div>
      <PieChart width={450} height={400}>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label={renderLabel}
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </Space>
  );
};

export default PieChartCmp;
