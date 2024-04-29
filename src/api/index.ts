import axios from "axios";

import {
  ICountryCovidStats,
  IHistoricalCovidData,
  IGlobalCovidStats,
} from "@/modules/interfaces";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export class APIClient {
  getCountryCovidStats = async () => {
    return await axiosInstance
      .get<ICountryCovidStats[]>("/countries")
      .then((res) => res.data);
  };

  getHistoricalCovidData = async () => {
    return await axiosInstance
      .get<IHistoricalCovidData>("/historical/all?lastdays=all")
      .then((res) => res.data);
  };

  getGlobalCovidStats = async () => {
    return await axiosInstance
      .get<IGlobalCovidStats>("/all")
      .then((res) => res.data);
  };
}
