"use client";

import { useEffect, useRef, useState } from "react";

interface PanoramaModalProps {
  isVisible: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window {
    pannellum: {
      viewer: (container: HTMLElement, config: any) => any;
    };
  }
}

export default function PanoramaModal({
  isVisible,
  onClose,
  src,
  alt,
}: PanoramaModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viewerRef = useRef<any>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Управление зумом
  const handleZoomIn = () => {
    if (viewerRef.current) {
      const currentHfov = viewerRef.current.getHfov();
      viewerRef.current.setHfov(Math.max(40, currentHfov - 20), 500);
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      const currentHfov = viewerRef.current.getHfov();
      viewerRef.current.setHfov(Math.min(120, currentHfov + 20), 500);
    }
  };

  const toggleAutoRotate = () => {
    if (!viewerRef.current) return;
    if (isAutoRotating) {
      viewerRef.current.stopAutoRotate();
      setIsAutoRotating(false);
    } else {
      viewerRef.current.startAutoRotate(-0.2);
      setIsAutoRotating(true);
    }
  };

  useEffect(() => {
    if (!isVisible || !containerRef.current || !src) return;

    setIsLoading(true);
    
    // Таймер безопасности: если onLoad не сработает, уберем спиннер через 3 сек
    const safetyTimer = setTimeout(() => setIsLoading(false), 3000);

    const checkPannellum = setInterval(() => {
      if (typeof window !== "undefined" && window.pannellum?.viewer) {
        clearInterval(checkPannellum);

        if (viewerRef.current) {
          viewerRef.current.destroy();
          viewerRef.current = null;
        }

        viewerRef.current = window.pannellum.viewer(containerRef.current!, {
          type: "equirectangular",
          panorama: src,
          autoLoad: true,
          showControls: false,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          mouseZoom: true,
          draggable: true,
          keyboardZoom: true,
          hfov: 80,
          minHfov: 40,
          maxHfov: 120,
          haov: 360,
          vaov: 180,
          vOffset: 0,
          minYaw: -160,
          maxYaw: 160,
          autoRotate: -1,
          autoRotateInactivityDelay: 3000,
          friction: 0.15,
          strings: {
            loadButtonLabel: "Загрузить",
            loadingLabel: "Загрузка...",
          },
          onLoad: () => {
            setIsLoading(false);
            clearTimeout(safetyTimer);
          },
        });

        document.body.style.overflow = "hidden";
      }
    }, 100);

    return () => {
      clearInterval(checkPannellum);
      clearTimeout(safetyTimer);
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
      document.body.style.overflow = "";
    };
  }, [isVisible, src]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex flex-col"
      onClick={onClose}
    >
      {/* Индикатор загрузки */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none bg-black/50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#8b5a2b] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#e3d5b8] font-serif animate-pulse">Загрузка панорамы...</p>
          </div>
        </div>
      )}

      {/* Контейнер панорамы */}
      <div
        ref={containerRef}
        className={`flex-1 w-full cursor-grab active:cursor-grabbing relative transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onClick={(e) => e.stopPropagation()}
      />

      {/* КАСТОМНЫЙ UI УПРАВЛЕНИЯ */}
      <div
        className="absolute top-4 right-4 z-10 flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1612]/90 text-[#e3d5b8] border border-[#8b5a2b] hover:bg-[#8b5a2b] hover:text-white transition-all backdrop-blur-sm shadow-lg"
          title="Закрыть"
        >
          ✕
        </button>

        {/* Зум +/- */}
        <div className="flex flex-col bg-[#1a1612]/90 border border-[#8b5a2b] rounded-lg overflow-hidden shadow-lg backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="w-10 h-10 flex items-center justify-center text-[#e3d5b8] hover:bg-[#8b5a2b] hover:text-white transition-colors border-b border-[#8b5a2b]/30 text-xl font-serif"
            title="Приблизить (+)"
          >
            +
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="w-10 h-10 flex items-center justify-center text-[#e3d5b8] hover:bg-[#8b5a2b] hover:text-white transition-colors text-xl font-serif"
            title="Отдалить (-)"
          >
            −
          </button>
        </div>

        {/* Кнопка автовращения */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleAutoRotate();
          }}
          className={`w-10 h-10 flex items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all ${
            isAutoRotating
              ? "bg-[#8b5a2b] text-[#f4e4bc] border-[#d4af37]"
              : "bg-[#1a1612]/90 text-[#e3d5b8] border-[#8b5a2b] hover:bg-[#3e2723]"
          }`}
          title={isAutoRotating ? "Остановить вращение" : "Запустить вращение"}
        >
          ↻
        </button>
      </div>

      {/* ИНСТРУКЦИЯ И НАЗВАНИЕ */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4  flex items-center flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[#f4e4bc] mb-3 font-serif text-sm opacity-90 drop-shadow-md bg-black/50 inline-block px-4 py-1.5 rounded-full backdrop-blur-sm border border-[#8b5a2b]/30">
          {alt}
        </p>

        <div className="bg-[#1a1612]/90 backdrop-blur-md border border-[#8b5a2b] rounded-lg shadow-2xl p-3 text-[#e3d5b8] text-center relative">
           <div className="grid grid-cols-4 gap-x-4 gap-y-2 text-[13px] leading-tight font-light opacity-80">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[16px]">👆</span>
              <p>Тяни для обзора</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="text-[16px]">🤏</span>
              <p>Щипок для зума</p>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[16px]">⌨️</span>
              <p>Стрелки для поворота</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="text-[16px]">↻</span>
              <p>Авто-вращение</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-3 w-full py-1.5 bg-[#8b5a2b]/20 hover:bg-[#8b5a2b] text-[#e3d5b8] text-xs uppercase tracking-wider rounded transition-colors border border-[#8b5a2b]/50"
          >
            Закрыть панораму
          </button>
        </div>
      </div>
    </div>
  );
}