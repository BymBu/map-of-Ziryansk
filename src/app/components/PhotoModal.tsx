"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import CloudinaryImage from "./CloudinaryImage";

interface PhotoModalProps {
  photo: string;
  alt: string;
  onClose: () => void;
  onNext?: () => void; // Функция для следующего фото
  onPrev?: () => void; // Функция для предыдущего фото
  currentIndex?: number; // Текущий индекс (для отображения 1/5)
  totalPhotos?: number; // Всего фото
}

export default function PhotoModal({ 
  photo, 
  alt, 
  onClose, 
  onNext, 
  onPrev,
  currentIndex,
  totalPhotos
}: PhotoModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      {/* Кнопка ВЛЕВО */}
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1612]/60 text-[#e3d5b8] border border-[#8b5a2b]/50 hover:bg-[#8b5a2b] hover:text-white transition-all backdrop-blur-sm shadow-lg group"
          aria-label="Предыдущее фото"
        >
          <span className="text-2xl group-hover:-translate-x-0.5 transition-transform">←</span>
        </button>
      )}

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-2 border border-[#8b5a2b]/40 rounded-sm shadow-2xl bg-[#1a1612]/50">
          <CloudinaryImage
            src={photo}
            alt={alt}
            className="max-h-[75vh] w-auto rounded-sm block select-none"
            width={1400}
          />
          
          {/* Счетчик фото (например 2/5) */}
          {totalPhotos && currentIndex !== undefined && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-[#e3d5b8] px-3 py-1 rounded-full text-xs font-mono border border-[#8b5a2b]/30 backdrop-blur-sm pointer-events-none">
              {currentIndex + 1} / {totalPhotos}
            </div>
          )}
        </div>
      </motion.div>

      {/* Кнопка ВПРАВО */}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1612]/60 text-[#e3d5b8] border border-[#8b5a2b]/50 hover:bg-[#8b5a2b] hover:text-white transition-all backdrop-blur-sm shadow-lg group"
          aria-label="Следующее фото"
        >
          <span className="text-2xl group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      )}

      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1612]/80 text-[#e3d5b8] border border-[#8b5a2b]/50 hover:bg-[#8b5a2b] hover:text-white transition-colors z-[10001]"
        aria-label="Закрыть фото"
      >
        ✕
      </button>
    </motion.div>
  );
}