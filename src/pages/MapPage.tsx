import { Map } from "@/components";
import { useGetCountries } from "@/hooks/useGetCountries";
import ErrorPage from "./ErrorPage";
import { Loader } from "@/components/Loader";

const MapPage = () => {
  const { countriesData, error, loading } = useGetCountries();

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;

  return <Map countryStats={countriesData || []} />;
};

export default MapPage;
