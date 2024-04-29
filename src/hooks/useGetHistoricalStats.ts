import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { APIClient } from "@/components/api";
import historicalStats from "@/data/historicalStats.json";

const apiClient = new APIClient();

export const useGetHistoricalStats = () =>
  useQuery({
    queryKey: ["historicalStats"],
    queryFn: apiClient.getHistoricalCovidData,
    staleTime: ms("24h"),
    initialData: historicalStats,
  });
