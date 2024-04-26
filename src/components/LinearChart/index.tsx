import { useGetCountries } from "@/hooks/useGetCountries";

const LinearChart = () => {
  const { countriesData, error, loading } = useGetCountries();
  console.log("🚀 ~ countriesData:", countriesData);

  return <div>LinearChart</div>;
};

export default LinearChart;
