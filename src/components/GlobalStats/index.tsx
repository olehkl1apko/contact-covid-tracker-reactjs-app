import { FC, Fragment } from "react";
import { IGlobalCovidStats } from "@/modules/interfaces";
import { Card, Divider } from "antd";

interface CovidDataProps {
  data: IGlobalCovidStats;
}

const GlobalStats: FC<CovidDataProps> = ({ data }) => {
  const stats = [
    { name: "Total Cases", value: data.cases },
    { name: "Total Deaths", value: data.deaths },
    { name: "Total Recovered", value: data.recovered },
    { name: "Total Tests", value: data.tests },
    { name: "Total Population", value: data.population },
  ];

  return (
    <Card
      title={`Covid-19 Summary (${new Date(data.updated).toLocaleString()})`}
      className="flex flex-col gap-3 text-base bg-gray-100"
    >
      {stats.map(({ name, value }) => (
        <Fragment key={name}>
          <p className="mb-4">
            <span className="text-rose-700 font-bold">{name}:</span>{" "}
            <span>{value.toLocaleString()}</span>
          </p>
          <Divider />
        </Fragment>
      ))}
    </Card>
  );
};

export default GlobalStats;
