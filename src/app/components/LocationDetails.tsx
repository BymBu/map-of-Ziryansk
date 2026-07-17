import Image from "next/image";
import { useState } from "react";
import PhotoModal from "./PhotoModal";
import { motion, AnimatePresence } from "framer-motion";
import CloudinaryImage from "./CloudinaryImage";

export default function LocationDetails({
  location,
  onClose,
}: {
  location: any;
  onClose: () => void;
}) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <>
      {/* Затемнение фона */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9998] bg-black/70 "
        onClick={onClose}
      />

      {/* Контент — адаптивный */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.8,
        }}
        className={`
          fixed z-[9999] bg-[#1a1612] text-[#e3d5b8] shadow-2xl p-5 border-2 border-[#8b5a2b]
          
          /* МОБИЛЬНЫЙ: шторка снизу */
          inset-x-0 bottom-0 max-h-[70vh] rounded-t-2xl border-t-2
          
          /* ДЕСКТОП: карточка справа сверху — ШИРЕ */
          md:inset-auto md:top-4 md:right-4 md:w-[420px] lg:w-[480px] xl:w-[540px] md:max-h-[80vh] md:rounded-sm md:border
          
          /* Кастомный скроллбар + отключаем горизонтальный скролл */
          overflow-y-auto overflow-x-hidden
          scrollbar-thin scrollbar-track-[#0f0c09] scrollbar-thumb-[#8b5a2b] scrollbar-thumb-rounded-full
          hover:scrollbar-thumb-[#d4af37]
        `}
      >
        {/* Ручка шторки (только на мобилке) */}
        {/* <div className="flex justify-center pt-2 pb-3 md:hidden sticky top-0 bg-[#1a1612]/95 backdrop-blur-sm z-20">
          <div className="w-12 h-1.5 bg-[#8b5a2b]/50 rounded-full" />
        </div> */}

        {/* Фоновый узор (Роза ветров) */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </div>

        {/* Металлические уголки */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#8b5a2b] opacity-50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#8b5a2b] opacity-50" />
        {/* <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#8b5a2b] opacity-50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#8b5a2b] opacity-50" /> */}

        {/* Заголовок с пером */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#d4af37] flex-shrink-0"
            >
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
            <h2 className="text-xl md:text-2xl font-serif font-bold leading-tight text-[#f4e4bc] ">
              {location.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-[#5c3a1e] text-[#8b5a2b] hover:bg-[#3e2723] hover:text-[#f4e4bc] transition-colors"
            title="Закрыть dossier"
          >
            ✕
          </button>
        </div>

        {/* Индикатор уверенности */}
        {!location.confidence && (
          <div className="mb-3 flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider border-b border-dashed border-[#3e2723] pb-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Требует проверки
          </div>
        )}

        {/* Описание — крупнее на десктопе */}
        <p className="md:text-[18px] lg:text-[20px] text-[20px] text-[#c4b5a0] leading-relaxed mb-5 font-light relative z-10 break-words">
          {location.description}
        </p>

        {/* Галерея артефактов */}
        {location.images?.length > 0 ? (
          <div className="space-y-3 relative z-10 pb-4">
            <div className="text-[12px] uppercase tracking-widest text-[#5c3a1e] font-bold border-t border-[#3e2723]/40 pt-3 mt-4">
              Архивные материалы
            </div>

            {/* Сетка — больше картинок на десктопе */}
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {location.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className="relative aspect-square rounded-sm overflow-hidden bg-[#0f0c09] border border-[#3e2723] hover:border-[#8b5a2b] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
                  aria-label={`Открыть фото ${idx + 1}`}
                >
                  <CloudinaryImage 
                    src={img}
                    alt={`Архивное фото ${idx + 1}: ${location.name}`}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    width={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </motion.div>

      {/* Фото-модалка */}
      <AnimatePresence>
        {activePhotoIndex !== null && location.images?.[activePhotoIndex] && (
          <PhotoModal
            photo={location.images[activePhotoIndex]}
            alt={`Архивное фото ${activePhotoIndex + 1}: ${location.name}`}
            onClose={() => setActivePhotoIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
