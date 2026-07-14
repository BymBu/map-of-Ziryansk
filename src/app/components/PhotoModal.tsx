import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface PhotoModalProps {
  photo: string;
  alt: string;
  onClose: () => void;
}

export default function PhotoModal({ photo, alt, onClose }: PhotoModalProps) {
  // Блокируем скролл фона
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Закрытие по Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    //  создает фон и центрирует контент
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose} // Клик по темному фону закрывает модалку
    >
      {/* ЭТОТ КОНТЕЙНЕР ДЕРЖИТ КАРТИНКУ И РАМКУ */}
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full max-w-4xl h-[60vh] md:h-[70vh]" 
        onClick={(e) => e.stopPropagation()} // Клик по самой картинке НЕ закрывает
      >
        <Image
          src={photo}
          alt={alt}
          fill
          className="object-contain rounded-sm shadow-2xl"
          priority
          sizes="auto"
        />
        
        {/* Декоративная рамка */}
        <div className="absolute -inset-2 border border-[#8b5a2b]/30 rounded-sm pointer-events-none" />
      </motion.div>

      {/* Кнопка закрытия (лежит ВНУТРИ первого motion.div, но ПОСЛЕ второго) */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1612]/80 text-[#e3d5b8] border border-[#8b5a2b]/50 hover:bg-[#8b5a2b] hover:text-white transition-colors z-10"
        aria-label="Закрыть фото"
      >
        ✕
      </button>
    </motion.div>
  );
}