import { motion, AnimatePresence } from "framer-motion";
import { usePaperSound } from "../hooks/usePaperSound";
import CloudinaryImage from "./CloudinaryImage";
import { CHANGELOG_DATA } from "../../../data/changelog";

interface IntroLogProps {
  onClose: () => void;
}

export default function ChangeLogModal({ onClose }: IntroLogProps) {
  const playPaperSound = usePaperSound();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full max-w-6xl h-[85vh] sm:h-[80vh] bg-[#f4e4bc] shadow-2xl overflow-hidden rounded-sm border border-[#c4b5a0]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(139, 90, 43, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(62, 39, 35, 0.05) 0%, transparent 50%), linear-gradient(to bottom, #f4e4bc 0%, #ebe0c2 100%)`,
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0 60px rgba(139, 90, 43, 0.1)",
          }}
        >
          {/* Декоративные уголки */}
          <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-[#8b5a2b] opacity-40 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-4 border-r-4 border-[#8b5a2b] opacity-40 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b-4 border-l-4 border-[#8b5a2b] opacity-40 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-4 border-r-4 border-[#8b5a2b] opacity-40 rounded-br-lg pointer-events-none" />

          <style jsx global>{`
            .scrollbar-vintage::-webkit-scrollbar {
              width: 10px;
            }
            .scrollbar-vintage::-webkit-scrollbar-track {
              background: rgba(244, 228, 188, 0.5);
              border-radius: 5px;
            }
            .scrollbar-vintage::-webkit-scrollbar-thumb {
              background-color: #8b5a2b;
              border-radius: 5px;
              border: 2px solid #f4e4bc;
            }
            .scrollbar-vintage::-webkit-scrollbar-thumb:hover {
              background-color: #5c3a1e;
            }
            .scrollbar-vintage {
              scrollbar-width: thin;
              scrollbar-color: #8b5a2b #f4e4bc;
            }
          `}</style>

          <div className="absolute inset-x-0 top-0 bottom-[72px] overflow-y-auto scrollbar-vintage p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* ЛЕВАЯ КОЛОНКА: Визитка */}
              <div className="w-full md:w-1/3 shrink-0">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2f18] mb-1 tracking-wide">
                  Зырянск
                </h1>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#8b5a2b] mb-6 md:mb-8 font-bold">
                  Карта памяти · 2026
                </p>

                {/* Аватар автора */}
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full border-4 border-[#8b5a2b] overflow-hidden shadow-lg mb-6 bg-[#d4c5a9] relative group">
                  <CloudinaryImage
                    src="/me.png"
                    alt="Вячеслав"
                    width={320}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full pointer-events-none" />
                </div>

                <div className="text-center md:text-left space-y-4">
                  <p className="text-sm md:text-base text-[#3e2723] leading-relaxed opacity-90">
                    Меня зовут Вячеслав. Мне 18 лет. Я FullStack Web
                    разработчик.
                  </p>

                  <div className="pt-4 border-t border-[#8b5a2b]/30 text-sm md:text-base text-[#3e2723]">
                    <p className="mb-2 font-bold uppercase tracking-wider text-[#5c3a1e] text-[14px] md:text-xs">
                      Связь с автором карты
                    </p>
                    <p className="leading-relaxed opacity-90 text-xs md:text-sm">
                      Если вы хотите заказать сайт или реализовать бизнес-идею —
                      я на связи.
                    </p>
                    <div className="mt-2 space-y-1 font-mono text-[14px] md:text-xxs text-[#5c3a1e]">
                      <p>
                        Telegram:{" "}
                        <a
                          href="https://t.me/slepta"
                          className="underline hover:text-[#8b5a2b]"
                        >
                          @slepta
                        </a>
                      </p>
                      <p>
                        VK:{" "}
                        <a
                          href="https://vk.com/bymbu"
                          className="underline hover:text-[#8b5a2b]"
                        >
                          bymbu
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ПРАВАЯ КОЛОНКА: Лог обновлений */}
              <div className="w-full md:w-2/3 prose prose-stone max-w-none text-[#2c1e12]">
                <section className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2f18] border-b-2 border-[#8b5a2b]/40 pb-3 mb-6 flex items-center gap-3">
                    📜 Список изменений
                  </h2>

                  <div className="space-y-6">
                    {CHANGELOG_DATA.map((entry, idx) => (
                      <div
                        key={entry.version}
                        className={`pt-4 border-t border-[#8b5a2b]/20 ${idx === 0 ? "border-0 pt-0" : ""}`}
                      >
                        <h3 className="text-xl font-bold text-[#5c3a1e] flex items-center gap-2">
                          <span className="text-sm font-mono bg-[#8b5a2b]/20 px-2 py-0.5 rounded">
                            v{entry.version}
                          </span>
                          <span>— {entry.date}</span>

                          {idx === 0 && (
                            <span className="ml-2 text-[10px] uppercase tracking-wider bg-[#5c3a1e] text-[#f4e4bc] px-2 py-0.5 rounded-full animate-pulse">
                              Новое
                            </span>
                          )}
                        </h3>

                        {entry.summary && (
                          <p className="text-sm italic text-[#5c3a1e]/70 mb-2">
                            {entry.summary}
                          </p>
                        )}

                        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed font-light text-[#2c1e12]">
                          {entry.changes.map((change, i) => (
                            <li key={i}>{change}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-[#f4e4bc] via-[#f4e4bc] to-transparent z-20">
            <button
              onClick={() => {
                playPaperSound();
                onClose();
              }}
              className="w-full py-4 bg-[#5c3a1e] text-[#f4e4bc] font-serif text-lg font-bold tracking-wider rounded-sm hover:bg-[#3e2723] transition-all shadow-lg active:scale-[0.98] border border-[#8b5a2b]"
            >
              Закрыть журнал
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
