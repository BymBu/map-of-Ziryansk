"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locations } from "../../../data/locations";
import { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <MapContainer
        center={[52.264682, 107.779104]} // Центр Зырянска
        zoom={20}
        style={{ height: "100%", width: "100%" }}
        className="z-0"

        // --- СТРОКИ ОГРАНИЧИВАЮТ КАРТУ ---
        minZoom={15} // Нельзя отдалить камеру дальше этого значения
        maxZoom={18} // Нельзя приблизить ближе этого (чтобы пиксели не мылились)
        maxBounds={[
          [52.24, 107.75], // Юго-западный угол (левый нижний)
          [52.29, 107.81], // Северо-восточный угол (правый верхний)
        ]}
        maxBoundsViscosity={1.0}
      >
        
        {/* Слой спутника */}
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {/* Маркеры */}
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.coords}
            eventHandlers={{
              click: () => setActiveLocation(loc.id),
            }}
          >
            <Popup>
              <div className="p-2 max-w-xs">
                <h3 className="font-bold text-lg mb-1">{loc.name}</h3>
                {!loc.confidence && (
                  <span className="text-yellow-600 text-xs font-bold">
                    ? НЕ УВЕРЕН
                  </span>
                )}
                <p className="text-sm text-gray-700 mt-2">{loc.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
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
