import { motion, AnimatePresence } from "framer-motion";
import { usePaperSound } from "../hooks/usePaperSound";
import ViewCounter from "./ViewCounter";
import CloudinaryImage from "./CloudinaryImage";

interface IntroModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function IntroModal({ isVisible, onClose }: IntroModalProps) {
  const playPaperSound = usePaperSound();

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
                      src="/me.png" // Локальная картинка, CloudinaryImage обработает её корректно или можно оставить Image если она в public
                      alt="Вячеслав"
                      width={320}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full pointer-events-none" />
                  </div>

                  <div className="text-center md:text-left space-y-4">
                    <p className="text-sm md:text-base text-[#3e2723] leading-relaxed opacity-90">
                      Меня зовут Вячеслав. Мне 18 лет. Я FullStack Web
                      разработчик. <br />Я вырос здесь. Летом 2026 года я взял
                      карты и пошел искать то, что осталось от старой жизни.
                      Остатки ГЭС, кости у дороги, землянки в Утатах, деревню
                      Ловцова, и прочие следы истории, которые сохранила земля.
                    </p>
                    <p className="text-base md:text-lg italic text-[#5c3a1e] leading-snug">
                      для лучшего опыта используйте компьютер
                    </p>

                    <div className="pt-4 border-t border-[#8b5a2b]/30 text-sm md:text-base text-[#3e2723]">
                      <p className="mb-2 font-bold uppercase tracking-wider text-[#5c3a1e] text-[14px] md:text-xs">
                        Связь с автором карты
                      </p>
                      <p className="leading-relaxed opacity-90 text-xs md:text-sm">
                        Если вы хотите заказать сайт или реализовать бизнес-идею
                        — я на связи.
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
                    <ViewCounter />
                  </div>
                </div>

                {/* ПРАВАЯ КОЛОНКА: История */}
                <div className="w-full md:w-2/3 prose prose-stone max-w-none">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2f18] border-b-2 border-[#8b5a2b]/40 pb-3 mb-6 flex items-center gap-3">
                    История села
                  </h2>

                  <div className="space-y-5 text-[#2c1e12] leading-[1.7] font-light text-base md:text-lg lg:text-xl ">
                    <p>
                      Зырянск — село в Прибайкальском районе Бурятии. Первое
                      письменное упоминание — 1735 год, когда Г. Ф. Миллер
                      записал деревню Зырянскую. Хотя некоторые источники
                      относят её основание к 1679 году. На разных исторических
                      картах встречаются варианты: «Зыряново», «Зырянское»,
                      «Зырянская».
                    </p>

                    <p>
                      До того как село стало единым, на его месте было три
                      отдельные деревни: Зырянская — на левом берегу Итанцы,
                      Утаты — на правом, возвышенном берегу, и Ловцова — тоже на
                      левом, у высохшего озера. Название Ловцова, по рассказам,
                      произошло от фамилии местного жителя. Во время сильного
                      ливня на Утатах река вышла из берегов — ворота домов
                      уносило водой. Тогда жители Утатов перебрались в Зырянск.
                    </p>

                    {/* ГИМН ЗЫРЯНСКА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/gimn-zyryanska.jpg"
                        alt="Гимн Зырянска. Слова П. Павловой, музыка Н. Богданова"
                        width={800}
                        className="w-full h-auto object-contain rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Гимн Зырянска. Слова П. Павловой, музыка Н. Богданова
                      </p>
                    </div>

                    <p>
                      В XIX веке на горе Кынгора стояла часовня Параскевы
                      Пятницы, а в Утатах — часовня Николая Чудотворца. Ещё одна
                      Никольская часовня стояла на месте нынешней администрации.
                      Все три были разрушены после революции. Сейчас на Кынгоре
                      — крест, установленный Геннадием Севергиным.
                    </p>

                    <p>
                      В 1916 году в Зырянске проживал 1061 житель. Село стало
                      центром колхоза «Путь социализма», а позже — совхоза
                      «Зырянский». Одна из улиц носит имя председателя колхоза
                      Артамона Абакумовича Хмелева.
                    </p>

                    {/* ФОТО: СОБРАНИЕ КОЛХОЗА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-1.jpg"
                        alt="Собрание колхоза в Зырянске. 1930-е годы. В первом ряду — Баталов Иван Никанорович"
                        width={800}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Собрание колхоза в Зырянске. В первом ряду — Баталов
                        Иван Никанорович
                      </p>
                    </div>

                    <p>
                      В годы войны колхоз «Путь социализма» выдал семьям
                      военнослужащих 86 пар ичижных головок, шерсти на 120 пар
                      тёплых чулков и 40 пар обуви. Но многие семьи голодали.
                      Отощавшую скотину нельзя было забить. По ночам матери
                      ходили на скотомогильники, несли домой то, что удалось
                      отрубить, варили и кормили детей.
                    </p>

                    {/* КАРТИНЫ ХУДОЖНИКА ПУШКАРЁВА */}
                    <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          src: "pushkarev-zyryansk.jpg",
                          alt: "С. Пушкарёв. Зырянск, 1975 г.",
                        },
                        {
                          src: "ziryansk-3.jpg",
                          alt: "С. Пушкарёв. Старая мельница, 1938 г.",
                        },
                        {
                          src: "ges-6.jpg",
                          alt: "С. Пушкарёв. Память детства, май 1995 г.",
                        },
                      ].map((img, i) => (
                        <div
                          key={i}
                          className="rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2"
                        >
                          <CloudinaryImage
                            src={`https://res.cloudinary.com/xv01jkbw/image/upload/photos/${img.src}`}
                            alt={img.alt}
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                            {img.alt}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* ФОТО ХУДОЖНИКА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2 max-w-sm mx-auto">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/pushkarev-photo.jpg"
                        alt="Семён Иванович Пушкарёв — художник-любитель из Зырянска"
                        width={500}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Семён Иванович Пушкарёв, художник-любитель (на фото
                        справа)
                      </p>
                    </div>

                    <p>
                      После войны в 1950 году завершили строительство второй
                      очереди Зырянской ГЭС. Свет пришёл в Ангыр, Батурино и
                      Нестерово. ГЭС была сложным гидротехническим сооружением —
                      спрямили устье Ангыра. Директором был Георгий Михайлович
                      Юртвенсон. В 1956 году турбину заменили на дизельную, а в
                      1960-х село подключили к Братской ГЭС. На ГЭС также была
                      мельница.
                    </p>

                    {/* ПРАВЛЕНИЕ КОЛХОЗА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-2.jpg"
                        alt="Правление колхоза в Зырянске. 1930-е годы"
                        width={800}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Правление колхоза в Зырянске. 1930-е годы
                      </p>
                    </div>

                    <p>
                      На пике развития совхоз «Зырянский» имел 508 коров, 1619
                      голов молодняка и 103 лошади. До революции сеяли 8052
                      гектара. В 2004 году — всего 300. Всё рухнуло в 1990-е —
                      не от снарядов, а от «реформ».
                    </p>

                    {/* АРХИВНЫЕ ДОКУМЕНТЫ */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/trud-book.jpg"
                            alt="Трудовая книжка работницы совхоза «Зырянский»"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-base text-center text-[#5c3a1e] mt-1 italic">
                            Трудовая книжка — записи о работе в совхозе
                          </p>
                        </div>
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/salary-1.jpg"
                            alt="Поощрения и достижения работников совхоза"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-base text-center text-[#5c3a1e] mt-1 italic">
                            Поощрения работников за труд на фермах
                          </p>
                        </div>
                      </div>
                      <p className="text-base text-center text-[#5c3a1e] mt-3 italic">
                        Трудовая книжка и вкладыш с поощрениями — документы,
                        показывающие, как люди работали в совхозе «Зырянский»
                      </p>
                    </div>

                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/sber-1.jpg"
                            alt="Сберегательная книжка Сбербанка СССР"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-base text-center text-[#5c3a1e] mt-1 italic">
                            Сберегательная книжка Сбербанка
                          </p>
                        </div>
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/sber-2.jpg"
                            alt="Сберегательная книжка СССР"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-base text-center text-[#5c3a1e] mt-1 italic">
                            Сберегательная книжка СССР
                          </p>
                        </div>
                      </div>
                      <p className="text-base text-center text-[#5c3a1e] mt-3 italic">
                        Сберегательные книжки — свидетельства того, как люди
                        копили и жили в советское время
                      </p>
                    </div>

                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/order.jpg"
                        alt="Ордер на выдачу квартиры рабочему совхоза «Зырянский»"
                        width={800}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Ордер на выдачу квартиры рабочему совхоза. Жильё давали
                        тем, кто работал
                      </p>
                    </div>

                    {/* РУКОПИСНАЯ КАРТА СОВХОЗА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/map-sovxoz.jpg"
                        alt="Рукописная карта совхоза «Зырянский», нарисована от руки"
                        width={800}
                        className="w-full h-auto object-contain rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Карта совхоза «Зырянский», нарисованная от руки. На ней
                        обозначены поля, фермы и границы
                      </p>
                    </div>

                    <p>
                      Вокруг села были свинотоварная и молочно-товарная фермы.
                      СТФ давно не работает, от неё остались бетонные плиты. МТФ
                      держалась дольше, но сгорела.
                    </p>

                    <p>
                      Из Зырянска на фронт ушло 149 человек, 67 из них погибли.
                      Среди известных земляков — Колмаков Павел Антонович,
                      Почётный гражданин Прибайкальского района и Бурятии;
                      Хмелев Алексей Иванович, кавалер двух орденов Ленина; Иван
                      Шульгин, полковник КГБ; Тарасов Дмитрий Семенович, главный
                      бухгалтер Улан-Удэнского авиазавода.
                    </p>

                    <p>
                      На карте 1988 года в районе Утатов отмечено кладбище. По
                      слухам, там был скотомогильник или даже место расстрела —
                      точных данных нет. Я поставил на это место вопросительный
                      знак.
                    </p>

                    <p>
                      Есть и старое кладбище — оно действует до сих пор. Ближе
                      ко входу — свежие могилы, дальше — едва заметные бугорки.
                      Кости у дороги — подтверждение того, что дорога прошла
                      через захоронения. Их возраст — 100–200 лет.
                    </p>

                    <p>
                      В 2026 году я встретил религиозную общину. У них кнопочные
                      телефоны и вера в индийского гуру Саи Баба. На карте я
                      ничего не отмечал.
                    </p>

                    <p>
                      Вся эта история — не из учебников. Я собирал её по
                      рассказам старожилов, по картам, по обрывкам газет, по
                      книге ⟪Итанца⟫ (Виталий Помулев) и по тому, что сам нашёл
                      в полях. Это карта не официальной истории, а той, которую
                      я увидел своими глазами.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#8b5a2b]/30 text-sm md:text-base text-[#3e2723] text-center">
                    <p className="mb-2 font-bold uppercase tracking-wider text-[#5c3a1e] text-[14px] md:text-xs">
                      Благодарность
                    </p>
                    <p className="leading-relaxed opacity-90 text-xs md:text-sm">
                      Хочу выразить благодарность в помощи создания
                      интерактивной карты моему брату Максиму,
                      родственникам-старожилам, библиотеке, школе за материал.
                    </p>
                    <div className="mt-2 space-y-1 font-mono text-[14px] md:text-xxs text-[#5c3a1e]">
                      <p>
                        Открытый исходный код этой карты:{" "}
                        <a
                          href="https://github.com/BymBu/map-of-Ziryansk"
                          className="underline hover:text-[#8b5a2b]"
                        >
                          Ссылка
                        </a>
                      </p>
                      <p>
                        Другой мой проект - 3D Байкал:{" "}
                        <a
                          href="https://it-baikal.vercel.app/"
                          className="underline hover:text-[#8b5a2b]"
                        >
                          Ссылка
                        </a>
                      </p>
                    </div>
                  </div>
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
                Начать исследование
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
