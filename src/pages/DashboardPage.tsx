import { LinearChart, PieChart } from "@/components";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <PieChart />
      <LinearChart />
    </div>
  );
};

export default DashboardPage;
