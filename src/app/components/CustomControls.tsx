import { useMap } from "react-leaflet";

export default function CustomControls({
  mapMode,
  setMapMode,
}: {
  mapMode: string;
  setMapMode: (mode: string) => void;
}) {
  const map = useMap();

  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();

  return (
    <div className="absolute bottom-8 right-5 flex flex-col gap-4 z-[1000]">
      {/* Кнопка Зум + */}
      <button
        onClick={handleZoomIn}
        className="absolute -right-39 w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 group relative"
        title="Приблизить"
      >
        <span className="text-2xl font-serif font-bold">+</span>
        {/* Декоративный элемент "свиток" */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#8b5a2b] rounded-full opacity-50"></div>
      </button>

      {/* Кнопка Зум - */}
      <button
        onClick={handleZoomOut}
        className="absolute -right-39 w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 group relative"
        title="Отдалить"
      >
        <span className="text-2xl font-serif font-bold">-</span>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#8b5a2b] rounded-full opacity-50"></div>
      </button>

      {/* Переключатель режима карты */}
      <div className="flex justify-center items-center gap-1">
        <button
          onClick={() => setMapMode("ziryansk")}
          className="w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 "
          title="Сменить слой"
        >
          🗺️
        </button>

        <button
          onClick={() => setMapMode("default")}
          className="w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95"
          title="Сменить слой"
        >
          🗺️
        </button>

        <button
          onClick={() => setMapMode("topo-1988")}
          className="w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 "
          title="Сменить слой"
        >
          1988
        </button>

        <button
          onClick={() => setMapMode("topo-1982")}
          className="w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 "
          title="Сменить слой"
        >
          1982
        </button>
      </div>
    </div>
  );
}