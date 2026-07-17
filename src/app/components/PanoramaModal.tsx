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

  // Управление зумом через API Pannellum
  const handleZoomIn = () => {
    if (viewerRef.current) {
      const currentHfov = viewerRef.current.getHfov();
      viewerRef.current.setHfov(Math.max(40, currentHfov - 20), 500); // Плавный зум за 500мс
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      const currentHfov = viewerRef.current.getHfov();
      viewerRef.current.setHfov(Math.min(120, currentHfov + 20), 500);
    }
  };

  // Переключение автовращения
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

          // ОТКЛЮЧАЕМ РОДНЫЕ КОНТРОЛЫ
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

          minYaw: -160, // Левая граница (половина от 320 со знаком минус)
          maxYaw: 160, // Правая граница (половина от 320)

          autoRotate: -1,
          autoRotateInactivityDelay: 3000,
          friction: 0.15,

          strings: {
            loadButtonLabel: "Загрузить",
            loadingLabel: "Загрузка...",
          },
        });

        document.body.style.overflow = "hidden";
      }
    }, 100);

    return () => {
      clearInterval(checkPannellum);
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
      {/* Контейнер панорамы */}
      <div
        ref={containerRef}
        className="flex-1 w-full cursor-grab active:cursor-grabbing relative"
        onClick={(e) => e.stopPropagation()}
      />

      {/*  КАСТОМНЫЙ UI УПРАВЛЕНИЯ */}
      <div
        className="absolute top-4 right-4 z-10 flex flex-col gap-2"
        onClick={(e) => e.stopPropagation()} //  Блокируем закрытие для всей панели управления
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
            }} // Останавливаем всплытие
            className="w-10 h-10 flex items-center justify-center text-[#e3d5b8] hover:bg-[#8b5a2b] hover:text-white transition-colors border-b border-[#8b5a2b]/30 text-xl font-serif"
            title="Приблизить (+)"
          >
            +
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }} // 🔒 Останавливаем всплытие
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
          }} // 🔒 Останавливаем всплытие
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

      {/*  ИНСТРУКЦИЯ ВНИЗУ  */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4 pointer-events-none flex items-center flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[#f4e4bc] mb-2 font-serif text-sm opacity-90 drop-shadow-md bg-black/30 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
          {alt}
        </p>
        <div className="bg-[#f4e4bc]/95 backdrop-blur-md border-2 border-[#8b5a2b] rounded-lg shadow-2xl p-4 text-[#3e2723] text-center">
          <h3 className="font-serif font-bold text-[#5c3a1e] text-xs uppercase tracking-wider mb-2">
            Как управлять видом
          </h3>
          <div className="grid grid-cols-2 gap-3 text-[15px] leading-tight font-light opacity-90">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[20px]">👆</span>
              <p>
                Тяни мышью или пальцем,
                <br />
                чтобы осмотреться
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[15px]">🤏</span>
              <p>
                Щипок двумя пальцами
                <br />
                или колесико для зума
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[15px]">⌨️</span>
              <p>
                Стрелки на клавиатуре
                <br />
                для плавного поворота
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[15px]">↻</span>
              <p>
                Кнопка справа сверху
                <br />
                включает автовращение
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
