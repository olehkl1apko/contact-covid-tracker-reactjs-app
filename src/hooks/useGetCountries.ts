import { useState, useEffect } from "react";
import axios from "axios";
import { ICountryCovidStats } from "@/modules/interfaces";

export const useGetCountries = () => {
  const [countriesData, setCountriesData] = useState<
    ICountryCovidStats[] | null
  >(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/countries");
        setCountriesData(data);
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

  return { countriesData, error, loading };
};
