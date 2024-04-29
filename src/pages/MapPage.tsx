import { Map } from "@/components";
import { useGetCountries } from "@/hooks/useGetCountries";
import ErrorPage from "./ErrorPage";
import { Loader } from "@/components/Loader";

const MapPage = () => {
  const { data, error, isLoading } = useGetCountries();

  if (error) return <ErrorPage />;
  if (isLoading) return <Loader />;

  return <Map countryStats={data || []} />;
};

export default MapPage;
