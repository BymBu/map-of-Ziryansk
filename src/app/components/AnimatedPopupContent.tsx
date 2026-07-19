import { motion } from "framer-motion";

export default function AnimatedPopupContent({
  name,
  isVisible,
  description,
  hasPhotos,
}: {
  name: string;
  description: string;
  isVisible: boolean;
  hasPhotos?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 10 }
      }
      transition={{ type: "spring", stiffness: 150, damping: 40 }}
      //  ЖЕСТКИЙ СБРОС ШРИФТА ДЛЯ МОБИЛЬНЫХ ПОПАПОВ
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif !important",
        fontFeatureSettings: "normal !important",
      }}
      className="text-[#2c1e12]"
    >
      <h3 className="text-lg font-bold mb-1">{name}</h3>

      {hasPhotos && (
        <div className="mt-3 pt-2 border-t border-dashed border-[#8b5a2b]/40 flex items-center gap-2 text-sm text-[#8b5a2b]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span>Нажмите для архивных фото</span>
        </div>
      )}
    </motion.div>
  );
}
