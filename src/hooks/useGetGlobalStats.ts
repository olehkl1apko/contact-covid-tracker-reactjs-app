import { useState, useEffect } from "react";
import axios from "axios";
import { IGlobalCovidStats } from "@/modules/interfaces";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const useGetGlobalStats = () => {
  const [globalData, setGlobalData] = useState<IGlobalCovidStats | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/all");
        setGlobalData(data);
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

  return { globalData, error, loading };
};
