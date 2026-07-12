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



const InvisibleMarker = L.divIcon({
  className: "invisible-marker",
  iconSize: [100, 100], // Зона клика
  iconAnchor: [20, 20],
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
              },
              click: () => {},
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

function LocationDetails({
  location,
  onClose,
}: {
  location: any;
  onClose: () => void;
}) {
  return (
    <div className="absolute top-4 right-4 w-80 bg-black/80 backdrop-blur-md text-white p-4 rounded-xl border border-gray-700 shadow-2xl z-[1000] animate-in fade-in slide-in-from-right-10">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        ✕
      </button>
      <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
        {location.name}
        {!location.confidence && (
          <span className="text-yellow-500 text-lg">?</span>
        )}
      </h2>
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {location.description}
      </p>

      {location.images.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {location.images.map((img: string, idx: number) => (
            <div
              key={idx}
              className="relative h-24 rounded overflow-hidden bg-gray-800"
            >
              {/* Тут будет Image, но пока заглушка */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs">
                Photo {idx + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
