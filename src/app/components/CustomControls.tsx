"use client";

import { useMap } from "react-leaflet";
import { Dispatch, SetStateAction } from "react";

export default function CustomControls({
  setMapMode,
  mapMode,
}: {
  mapMode: string;
  setMapMode: Dispatch<SetStateAction<string>>;
}) {
  const map = useMap();

  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();

  // Вспомогательная функция для классов кнопки
  const getButtonClass = (isActive: boolean) =>
    `w-12 h-12 border-2 rounded-lg shadow-lg flex items-center justify-center transition-all active:scale-95 relative ${
      isActive
        ? "bg-[#8b5a2b] border-[#d4af37] text-[#f4e4bc]"
        : "bg-[#e3d5b8] border-[#8b5a2b] text-[#5c3a1e] hover:bg-[#d4c5a9]"
    }`;

  return (
    <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-3 z-[1000]">
      {/* ЗУМ */}
      <div className="flex flex-col gap-1 bg-[#e3d5b8]/90 p-1 rounded-lg border border-[#8b5a2b] shadow-md backdrop-blur-sm">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] rounded transition-colors text-xl font-bold"
        >
          +
        </button>
        <div className="h-[1px] bg-[#8b5a2b]/30 mx-2"></div>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] rounded transition-colors text-xl font-bold"
        >
          −
        </button>
      </div>

      <div className="h-1"></div>

      {/* СЛОИ КАРТЫ */}
      <div className="flex flex-col gap-2">
        {/* 1. МОЯ КАРТА (Зырянск) */}
        <button
          onClick={() => setMapMode("ziryansk")}
          className={getButtonClass(mapMode === "ziryansk")}
          title="Карта Зырянска"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 20l-5-4V4l5 4v12zm6 0l-5-4V4l5 4v12zm6 0l-5-4V4l5 4v12z" />
          </svg>
          {mapMode === "ziryansk" && (
            <div className="absolute bottom-1 w-1.5 h-1.5 bg-[#f4e4bc] rounded-full"></div>
          )}
        </button>

        {/* 2. СПУТНИК */}
        <button
          onClick={() => setMapMode("default")}
          className={getButtonClass(mapMode === "default")}
          title="Спутник (Esri)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {mapMode === "default" && (
            <div className="absolute bottom-1 w-1.5 h-1.5 bg-[#f4e4bc] rounded-full"></div>
          )}
        </button>

        {/* 3. ТОПО 1988 */}
        <button
          onClick={() => setMapMode("topo-1988")}
          className={getButtonClass(mapMode === "topo-1988")}
          title="Топокарта 1988"
        >
          <span className="font-serif font-bold text-lg">88</span>
          {mapMode === "topo-1988" && (
            <div className="absolute bottom-1 w-1.5 h-1.5 bg-[#f4e4bc] rounded-full"></div>
          )}
        </button>

        {/* 4. ТОПО 1982 */}
        <button
          onClick={() => setMapMode("topo-1982")}
          className={getButtonClass(mapMode === "topo-1982")}
          title="Топокарта 1982"
        >
          <span className="font-serif font-bold text-lg">82</span>
          {mapMode === "topo-1982" && (
            <div className="absolute bottom-1 w-1.5 h-1.5 bg-[#f4e4bc] rounded-full"></div>
          )}
        </button>
      </div>
    </div>
  );
}
