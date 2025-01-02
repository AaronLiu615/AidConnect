import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import foodbankIcon from "./imgs/foodbank.png";
import hospitalIcon from "./imgs/hospital.png";
import shelterIcon from "./imgs/shelter.png";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.73061,
  lng: -73.935242,
};

const services = [
  {
    id: 1,
    type: "Food Bank",
    name: "Food Bank For New York City",
    location: { lat: 40.803742, lng: -73.955551 },
    icon: foodbankIcon,
  },
  {
    id: 2,
    type: "Shelter",
    name: "The Bowery Mission",
    location: { lat: 40.721241, lng: -73.992649 },
    icon: shelterIcon,
  },
  {
    id: 3,
    type: "Hospital",
    name: "NYC Health + Hospitals/Bellevue",
    location: { lat: 40.739021, lng: -73.975367 },
    icon: hospitalIcon,
  },
];

function MapContainer() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedType, setSelectedType] = useState("default");

  const handleMarkerLoad = (marker, iconUrl) => {
    marker.setIcon({
      url: iconUrl,
      scaledSize: new window.google.maps.Size(32, 32),
    });
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredServices = services.filter((service) => {
    return selectedType === "default" || service.type.toLowerCase() === selectedType.toLowerCase();
  });

  return (
    <LoadScript googleMapsApiKey= {apiKey} >
      <select id="iconSelect" onChange={handleTypeChange}>
        <option value="default">Default</option>
        <option value="hospital">Hospital</option>
        <option value="food bank">Food Bank</option>
        <option value="shelter">Shelter</option>
      </select>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {filteredServices.map((service) => (
          <Marker
            key={service.id}
            position={service.location}
            onLoad={(marker) => handleMarkerLoad(marker, service.icon)}
            onClick={() => setSelectedService(service)}
          />
        ))}
        {selectedService && (
          <InfoWindow
            position={selectedService.location}
            onCloseClick={() => setSelectedService(null)}
          >
            <div>
              <h4>{selectedService.type}</h4>
              <h4>{selectedService.name}</h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
