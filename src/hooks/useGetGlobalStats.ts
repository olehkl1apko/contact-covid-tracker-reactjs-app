import { useState, useEffect } from "react";
import axios from "axios";
import { ICountryCovidStats } from "@/modules/interfaces";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const useGetGlobalStats = () => {
  const [globalData, setGlobalData] = useState<ICountryCovidStats[] | null>(
    null
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/all");
        setGlobalData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return { globalData, error, loading };
};
