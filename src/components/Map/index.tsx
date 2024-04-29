import { FC } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { ICountryCovidStats } from "@/modules/interfaces";
import CountryPopupItem from "./CountryPopupItem";

interface MapPageProps {
  countryStats: ICountryCovidStats[];
}

const Map: FC<MapPageProps> = ({ countryStats }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countryStats.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <CountryPopupItem country={country} />
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
