"use client";
import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "500px"
};

const center = { lat: 30.0, lng: 20.0 };

// Use environment variable for API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
console.log("API_KEY", GOOGLE_MAPS_API_KEY);

const officeLocations = [
  {
    id: "americas",
    name: "Sheridan, WY, USA",
    position: { lat: 44.796394, lng: -106.968999 }
  },
  {
    id: "europe",
    name: "Madrid, Spain",
    position: { lat: 40.438099, lng: -3.84434 }
  },
  {
    id: "mea",
    name: "Abu Dhabi, UAE",
    position: { lat: 24.385264, lng: 54.265726 }
  },
  {
    id: "apac",
    name: "Hong Kong",
    position: { lat: 22.352694, lng: 113.982236 }
  }
];

const InteractiveMap = () => {
  const [highlightedOffice, setHighlightedOffice] = useState<string | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  });

  const handleMarkerClick = useCallback((id: string) => {
    setHighlightedOffice(id);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
    >
      {officeLocations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          onClick={() => handleMarkerClick(location.id)}
          icon={
            highlightedOffice === location.id
              ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              : undefined
          }
        />
      ))}

      {officeLocations.map((location) =>
        highlightedOffice === location.id ? (
          <InfoWindow
            key={location.id}
            position={location.position}
            onCloseClick={() => setHighlightedOffice(null)}
          >
            <div>
              <h3>{location.name}</h3>
            </div>
          </InfoWindow>
        ) : null
      )}
    </GoogleMap>
  );
};

export default InteractiveMap;
