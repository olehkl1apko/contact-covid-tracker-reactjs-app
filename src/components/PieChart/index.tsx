import { useGetGlobalStats } from "@/hooks/useGetGlobalStats";

const PieChart = () => {
  const { globalData, error, loading } = useGetGlobalStats();
  console.log("🚀 ~ countriesData:", globalData);

  return <div>PieChart</div>;
};

export default PieChart;
