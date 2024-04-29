import React from "react";
import { Popup } from "react-leaflet";
import { ICountryCovidStats } from "@/modules/interfaces";

interface CountryPopupProps {
  country: ICountryCovidStats;
}

const CountryPopupItem: React.FC<CountryPopupProps> = ({ country }) => {
  const metrics = [
    { label: "Population", value: country.population },
    { label: "Cases", value: country.cases },
    { label: "Deaths", value: country.deaths },
    { label: "Recovered", value: country.recovered },
    { label: "Tests Per Million", value: country.testsPerOneMillion },
    { label: "Recovered Per Million", value: country.recoveredPerOneMillion },
    { label: "Deaths Per Million", value: country.deathsPerOneMillion },
  ];

  return (
    <Popup>
      <div>
        <h4 className="text-lg font-bold">{country.country}</h4>
        {metrics.map((metric, index) => (
          <p key={index}>
            <span className="text-rose-700 text-sm">{metric.label}: </span>
            {metric.value.toLocaleString()}
          </p>
        ))}
      </div>
    </Popup>
  );
};

export default CountryPopupItem;
