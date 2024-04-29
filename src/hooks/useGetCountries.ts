import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { APIClient } from "@/api";
import countries from "@/data/countryStats.json";

const apiClient = new APIClient();

export const useGetCountries = () =>
  useQuery({
    queryKey: ["countries"],
    queryFn: apiClient.getCountryCovidStats,
    staleTime: ms("24h"),
    initialData: countries,
  });
