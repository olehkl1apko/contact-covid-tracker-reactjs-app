import { GlobalStats, LinearChart, PieChartCmp } from "@/components";

import { useGetGlobalStats } from "@/hooks/useGetGlobalStats";
import ErrorPage from "./ErrorPage";
import { Loader } from "@/components/Loader";

const DashboardPage = () => {
  const { globalData, error, loading } = useGetGlobalStats();

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;

  return (
    <div className="flex flex-col gap-8">
      {globalData && (
        <div className="flex flex-wrap gap-10 justify-center">
          <GlobalStats data={globalData} />
          <PieChartCmp data={globalData} />
        </div>
      )}
      <LinearChart />
    </div>
  );
};

export default DashboardPage;
