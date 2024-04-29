import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

import { useGetHistoricalStats } from "@/hooks/useGetHistoricalStats";
import ErrorPage from "@/pages/ErrorPage";
import { Loader } from "../Loader";

const CovidLineChart: FC = () => {
  const { historicalData, error, loading } = useGetHistoricalStats();

  const transformedData = historicalData
    ? Object.keys(historicalData.cases).map((date) => ({
        date,
        cases: historicalData.cases[date],
        deaths: historicalData.deaths[date],
        recovered: historicalData.recovered[date],
      }))
    : [];

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;

  return (
    <>
      <div className="font-bold text-lg text-center">
        Historical Covid-19 Data
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <LineChart width={600} height={400} data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" name="Cases" />
          <Line
            type="monotone"
            dataKey="recovered"
            stroke="#00c49f"
            name="Recovered"
          />
        </LineChart>

        <BarChart width={600} height={400} data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <Tooltip />
          <Legend />
          <Bar dataKey="deaths" fill="#ff7300" name="Deaths" />
        </BarChart>
      </div>
    </>
  );
};

export default CovidLineChart;
