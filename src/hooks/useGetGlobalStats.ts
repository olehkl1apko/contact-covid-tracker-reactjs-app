import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { APIClient } from "@/components/api";
import globalStats from "@/data/globalStats.json";

const apiClient = new APIClient();

export const useGetGlobalStats = () =>
  useQuery({
    queryKey: ["globalStats"],
    queryFn: apiClient.getGlobalCovidStats,
    staleTime: ms("24h"),
    initialData: globalStats,
  });
