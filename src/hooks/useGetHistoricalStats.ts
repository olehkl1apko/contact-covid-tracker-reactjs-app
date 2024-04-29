import { useState, useEffect } from "react";
import axios from "axios";
import { IHistoricalCovidData } from "@/modules/interfaces";

export const useGetHistoricalStats = () => {
  const [historicalData, setHistoricalData] =
    useState<IHistoricalCovidData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/historical/all?lastdays=all");
        setHistoricalData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unexpected error occurred."));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return { historicalData, error, loading };
};
