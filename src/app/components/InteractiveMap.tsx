"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ImageOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locations } from "../../../data/locations";
import { useState } from "react";
import Image from "next/image";
import AnimatedPopupContent from "./AnimatedPopupContent";
import CustomControls from "./CustomControls";
import LocationDetails from "./LocationDetails";
import { InvisibleMarker } from "./utils/InvisibleMarker";

// Фикс иконок Leaflet в Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});





export default function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  type MapMode = "default" | "topo-1988" | "topo-1982" | "ziryansk";
  const [mapMode, setMapMode] = useState<MapMode>("ziryansk");

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <MapContainer
        center={[52.264682, 107.779104]} // Центр Зырянска
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
        minZoom={15} // Нельзя отдалить камеру дальше этого значения
        maxZoom={18} // Нельзя приблизить ближе этого
        maxBounds={[
          [52.24, 107.73],
          [52.29, 107.84],
        ]}
        maxBoundsViscosity={0.5}
        zoomControl={false}
      >
        {/* Слой спутника */}
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {mapMode === "topo-1988" ? (
          <ImageOverlay
            url="/maps/topo-1988.jpg"
            bounds={[
              [52.235, 107.73], // Юго-запад
              [52.295, 107.84], // Северо-восток
            ]}
            opacity={0.9}
            zIndex={20}
          />
        ) : null}

        {mapMode === "topo-1982" ? (
          <ImageOverlay
            url="/maps/topo-1982.png"
            bounds={[
              [52.235, 107.71], // Юго-запад
              [52.295, 107.83], // Северо-восток
            ]}
            opacity={0.9}
            zIndex={20}
          />
        ) : null}

        {mapMode === "ziryansk" ? (
          <ImageOverlay
            url="/maps/ziryansk.png"
            bounds={[
              [52.241175, 107.707171], // Юго-западный угол (Point 4)
              [52.283425, 107.85156], // Северо-восточный угол (Point 2)
            ]}
            opacity={1}
            zIndex={20}
          />
        ) : null}

        {/* Маркеры */}
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.coords}
            icon={InvisibleMarker}
            eventHandlers={{
              mouseover: (e) => {
                setActiveLocation(loc.id);

                // 2. Ждем ререндер React (2 кадра), потом открываем Leaflet-DOM
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    e.target.openPopup();
                  });
                });
              },
              mouseout: (e) => {
                e.target.closePopup();
              }
            }}
          >
            <Popup
              className="custom-scroll-popup"
              autoPan={false}
              keepInView={false}
              closeButton={false}
            >
              <AnimatedPopupContent
                name={loc.name}
                description={loc.description}
                isVisible={activeLocation === loc.id}
              />
            </Popup>
          </Marker>
        ))}

        <CustomControls mapMode={mapMode} setMapMode={setMapMode} />
      </MapContainer>

      {/* GUI Overlay (Игровой интерфейс) */}
      {activeLocation && (
        <LocationDetails
          location={locations.find((l) => l.id === activeLocation)!}
          onClose={() => setActiveLocation(null)}
        />
      )}
    </div>
  );
}


