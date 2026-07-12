import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function IntroModal({ isVisible, onClose }: IntroModalProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
        >
          {/* Основной контейнер свитка */}
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-6xl h-[85vh] bg-[#f4e4bc] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            style={{
              // Текстура старой бумаги через CSS-градиенты
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(139, 90, 43, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(62, 39, 35, 0.05) 0%, transparent 50%),
                linear-gradient(to bottom, #f4e4bc 0%, #ebe0c2 100%)
              `,
              border: "1px solid #c4b5a0",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0 60px rgba(139, 90, 43, 0.1)",
            }}
          >
            {/* Декоративные уголки (эффект старой рамки) */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#8b5a2b] opacity-40 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#8b5a2b] opacity-40 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#8b5a2b] opacity-40 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#8b5a2b] opacity-40 rounded-br-lg pointer-events-none" />

            {/* ЛЕВАЯ КОЛОНКА: Визитка исследователя */}
            <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#d4c5a9] bg-[#ebe0c2]/50">
              <div>
                <h1 className="text-3xl font-serif font-bold text-[#4a2f18] mb-1 tracking-wide">
                  Зырянск
                </h1>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8b5a2b] mb-8 font-bold">
                  Карта памяти · 2026
                </p>

                {/* Фото */}
                <div className="w-40 h-40 mx-auto md:mx-0 rounded-full border-4 border-[#8b5a2b] overflow-hidden shadow-lg mb-6 bg-[#d4c5a9] relative group">
                  <Image
                    src="/me.png"
                    alt="Вячеслав"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Легкий виньетированный оверлей на фото */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full pointer-events-none" />
                </div>

                <div className="text-center md:text-left">
                  <p className="font-cusaiv text-lg italic text-[#5c3a1e] mb-3 leading-snug">
                    «Я прошел эти тропы, чтобы ты мог их увидеть...»
                  </p>
                  <p className="text-sm text-[#3e2723] leading-relaxed opacity-90">
                    Меня зовут Вячеслав. я FullStask Web разработчик. <br />
                    Я вырос здесь. Летом 2026 года я взял
                    карты и пошел искать то, что осталось от старой жизни.
                    Остатки ГЭС, кости у дороги, землянки в Утатах, надпись
                    «МИРУ МИР» и прочие следы истории.
                    <br />
                    <br />
                    Это не Википедия. Это земля и память.
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#8b5a2b]/30 text-sm text-[#3e2723]">
                    <p className="mb-3 font-bold uppercase tracking-wider text-[#5c3a1e] text-xs">
                      Связь с автором карты
                    </p>
                    <p className="leading-relaxed opacity-90">
                      Если вы хотите заказать сайт, реализовать бизнес-идею -- я на связи.
                    </p>
                    <div className="mt-3 space-y-1 font-mono text-xs text-[#5c3a1e]">
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

              {/* Кнопка старта внизу левой колонки */}
              <button
                onClick={onClose}
                className="mt-4 w-full py-4 bg-[#5c3a1e] text-[#f4e4bc] font-serif text-lg font-bold tracking-wider rounded-sm hover:bg-[#3e2723] transition-all shadow-lg active:scale-[0.98] border border-[#8b5a2b]"
              >
                Начать исследование
              </button>
            </div>

            {/* ПРАВАЯ КОЛОНКА: История села (Скроллируемая область) */}
            <div
              className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto custom-scrollbar"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#8b5a2b #f4e4bc",
              }}
            >
              <div className="prose prose-stone max-w-none">
                <h2 className="text-2xl font-serif font-bold text-[#4a2f18] border-b-2 border-[#8b5a2b]/30 pb-3 mb-6 flex items-center gap-3">
                  <span className="text-[#8b5a2b]">️</span> История села
                </h2>

                {/* СВИТОК ИСТОРИИ ЗЫРЯНСКА */}
                <div className="space-y-4 text-[#2c1e12] leading-relaxed font-light text-base md:text-lg font-cusaiv">
                  <p>
                    Зырянск — село в Прибайкальском районе Бурятии. Первое
                    письменное упоминание — 1735 год, когда Г. Ф. Миллер записал
                    деревню Зырянскую. Хотя некоторые источники относят её
                    основание к 1679 году. На разных исторических картах
                    встречаются варианты: «Зыряново», «Зырянское», «Зырянская».
                  </p>

                  <p>
                    До того как село стало единым, на его месте было три
                    отдельные деревни. Зырянская стояла на левом берегу Итанцы.
                    Утаты (Утатайская) — на правом, возвышенном берегу. Ловцова
                    — тоже на левом, у высохшего озера. Они жили каждая своей
                    жизнью, но потом слились в одно село. Ловцова исчезла почти
                    бесследно, Утаты — оставили после себя поле, крапиву и
                    землянки, которые я нашёл в 2026 году.
                  </p>

                  <p>
                    В XIX веке на горе Кынгора стояла часовня — в архивном
                    документе 1817 года она числится как часовня Параскевы
                    Пятницы. и ещё одна Никольская часовня на месте, где сейчас
                    администрация. В исчезнувшем селе Утаты была часовня во имя
                    Николая Чудотворца. Все три были разрушены после революции.
                    Сейчас на Кынгоре стоит крест, который поставил Геннадий
                    Севергин в 2000-х.
                  </p>

                  <p>
                    В советское время Зырянск стал центром колхоза «Путь
                    социализма». В 1934 году объединились коммуна «Революция» и
                    артель «Верный путь» — 30 и 90 дворов. В 1957 году колхоз
                    слили с соседними сёлами в «Путь к коммунизму». Тогда же
                    село жило: работали фермы, была школа, клуб, даже своя ГЭС.
                  </p>

                  <p>
                    ГЭС начали строить в 1940 году. Она давала свет в дома и на
                    фермы, работала до 1960 года. Выдавала не больше 50 кВт —
                    хватало для деревни, но не для промышленности. После
                    демонтажа от неё остались бетонные блоки и следы плотины. Я
                    нашёл это место и отметил на карте.
                  </p>

                  <p>
                    Вокруг села были свинотоварная (СТФ) и молочно-товарная
                    (МТФ) фермы. СТФ давно не работает, от неё остались только
                    бетонные плиты. МТФ держалась дольше, но сгорела — теперь
                    там пепелище.
                  </p>

                  <p>
                    На топографической карте 1988 года в районе Утатов отмечено
                    кладбище. Местные говорят, что ничего там не было. Я
                    поставил на это место вопросительный знак — возможно, ошибка
                    картографов, а может, могилы просто забыли.
                  </p>

                  <p>
                    Есть ещё старое кладбище — оно действует до сих пор. Ближе
                    ко входу лежат недавние могилы, а дальше — едва заметные
                    бугорки. Там хоронили поколения, которых уже никто не
                    помнит. Кости у дороги — подтверждение того, что дорога
                    прошла прямо через старые захоронения. Их возраст — примерно
                    100–200 лет.
                  </p>

                  <p>
                    В 2026 году я нашёл здесь не только карты и кости. Я
                    встретил религиозную общину. У них кнопочные телефоны и вера
                    в индийского гуру Саи Баба. На карте ничего не отмечал, дабы
                    никого не обидеть.
                  </p>

                  <p>
                    Существовало и место эвенкийского хутора — он стоял напротив
                    моего дома, в лесу. В 1980-х ещё были видны остатки домов.
                    Сейчас там поле. Сведений о названии хутора не сохранилось.
                  </p>

                  <p>
                    В лесу на новом кладбище есть надпись «МИРУ МИР», высаженная
                    деревьями. Часть букв не прижилась — теперь это недописанное
                    послание. Я дорисовал их на карте чёрным, чтобы они снова
                    стали видны.
                  </p>

                  <p>
                    Вся эта история — не из учебников. Я собирал её по рассказам
                    старожилов, по картам, по обрывкам газет и по тому, что сам
                    нашёл, пока ходил по полям. Это карта не официальной
                    истории, а той, которую я увидел своими глазами.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
