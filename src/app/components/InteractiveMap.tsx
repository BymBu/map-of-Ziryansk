"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ImageOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { locations } from "../../../data/locations";
import { useState } from "react";
import AnimatedPopupContent from "./AnimatedPopupContent";
import CustomControls from "./CustomControls";
import LocationDetails from "./LocationDetails";
import { InvisibleMarker } from "./utils/InvisibleMarker";
import IntroModal from "./IntroModal";
import WelcomeNote from "./WelcomeNote";
import { usePaperSound } from "../hooks/usePaperSound";
import PanoramaModal from "./PanoramaModal";


export default function InteractiveMap() {
  const [showIntro, setShowIntro] = useState(true);

  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null); // Для попапа
  const [activeLocation, setActiveLocation] = useState<string | null>(null); // Для LocationDetails

  const [activePanorama, setActivePanorama] = useState<string | null>(null); // Для панорамы

  type MapMode = "default" | "topo-1988" | "topo-1982" | "ziryansk";
  const [mapMode, setMapMode] = useState<MapMode>("ziryansk");

  const playPaperSound = usePaperSound();

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <WelcomeNote setShowIntro={setShowIntro} />
      <IntroModal isVisible={showIntro} onClose={() => setShowIntro(false)} />

      <MapContainer
        center={[52.264682, 107.779104]}
        zoom={16}
         style={{ height: "100%", width: "100%", willChange: "transform" }}
        className="z-0"
        minZoom={15}
        maxZoom={18}
        maxBounds={[
          [52.24, 107.73],
          [52.29, 107.84],
        ]}
        maxBoundsViscosity={0.5}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {mapMode === "topo-1988" && (
          <ImageOverlay
            url="https://res.cloudinary.com/xv01jkbw/image/upload/v1784283430/compressed_topo-1988_ng3sgd.webp"
            bounds={[
              [52.235, 107.73],
              [52.295, 107.84],
            ]}
            opacity={0.9}
            zIndex={20}
          />
        )}
        {mapMode === "topo-1982" && (
          <ImageOverlay
            url="https://res.cloudinary.com/xv01jkbw/image/upload/v1784283434/compressed_topo-1982_sdrr0h.webp"
            bounds={[
              [52.235, 107.71],
              [52.295, 107.83],
            ]}
            opacity={0.9}
            zIndex={20}
          />
        )}
        {mapMode === "ziryansk" && (
          <ImageOverlay
            url="https://res.cloudinary.com/xv01jkbw/image/upload/v1784283434/compressed_ziryansk_enfdx7.webp"
            bounds={[
              [52.241175, 107.707171],
              [52.283425, 107.85156],
            ]}
            opacity={1}
            zIndex={20}
          />
        )}

        {/* Маркеры */}
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.coords}
            icon={InvisibleMarker}
            eventHandlers={{
              mouseover: (e) => {
                setHoveredLocation(loc.id);

                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    e.target.openPopup();
                    playPaperSound();
                  });
                });
              },
              mouseout: (e) => {
                setHoveredLocation(null);
                e.target.closePopup();
              },
              click: () => {
                if (loc.type === "panorama") {
                  setActivePanorama(loc.id);
                } else {
                  setActiveLocation(loc.id);
                }
              },
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
                description={loc.description || ""}
                isVisible={hoveredLocation === loc.id}
                hasPhotos={!!loc.images?.length}
              />
            </Popup>
          </Marker>
        ))}

        <CustomControls
          mapMode={mapMode}
          setMapMode={(mode) => setMapMode(mode as MapMode)}
        />
      </MapContainer>

      {/* GUI Overlay - открывается ТОЛЬКО по клику */}
      {activeLocation && (
        <LocationDetails
          location={locations.find((l) => l.id === activeLocation)!}
          onClose={() => setActiveLocation(null)}
        />
      )}

      {activePanorama && (
        <PanoramaModal
          isVisible={!!activePanorama}
          onClose={() => setActivePanorama(null)}
          src={
            locations.find((l) => l.id === activePanorama)?.panoramaSrc || ""
          }
          alt={locations.find((l) => l.id === activePanorama)?.name || ""}
        />
      )}
    </div>
  );
}
