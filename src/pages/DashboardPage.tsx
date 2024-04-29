import { GlobalStats, LinearChart, PieChartCmp } from "@/components";

import { useGetGlobalStats } from "@/hooks/useGetGlobalStats";
import ErrorPage from "./ErrorPage";
import { Loader } from "@/components/Loader";

const DashboardPage = () => {
  const { data, error, isLoading } = useGetGlobalStats();

  if (error) return <ErrorPage />;
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-10 justify-center">
        <GlobalStats data={data} />
        <PieChartCmp data={data} />
      </div>
      <LinearChart />
    </div>
  );
};

export default DashboardPage;
