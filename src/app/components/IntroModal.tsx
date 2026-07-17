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
                {/* ПРАВАЯ КОЛОНКА: История */}
                <div className="w-full md:w-2/3 prose prose-stone max-w-none text-[#2c1e12]">
                  {/* ГЛАВА 1: НАЧАЛО */}
                  <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a2f18] border-b-2 border-[#8b5a2b]/40 pb-3 mb-6 flex items-center gap-3">
                      📜 От трех деревень к единому селу
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed font-light">
                      <p>
                        Зырянск — село в Прибайкальском районе Бурятии. Первое
                        письменное упоминание относится к 1735 году, когда Г. Ф.
                        Миллер записал деревню Зырянскую. Хотя некоторые
                        источники относят её основание к более раннему периоду —
                        1679 году. На разных исторических картах встречаются
                        варианты названий: «Зыряново», «Зырянское», «Зырянская».
                      </p>
                      <p>
                        До того как село стало единым организмом, на его месте
                        существовали три отдельные деревни:{" "}
                        <strong>Зырянская</strong> — на левом берегу Итанцы,{" "}
                        <strong>Утаты</strong> — на правом, возвышенном берегу,
                        и <strong>Ловцова</strong> — тоже на левом, у высохшего
                        озера. Название Ловцова, по рассказам старожилов,
                        произошло от фамилии местного жителя.
                      </p>
                      <p>
                        История объединения драматична: во время сильного ливня
                        река в Утатах вышла из берегов, и вода смывала ворота
                        домов. Тогда жители Утатов собрали вещи и перебрались к
                        соседям в Зырянск. Так три поселения слились в одно
                        целое.
                      </p>
                    </div>
                  </section>

                  {/* ГЛАВА 2: ДУХОВНОСТЬ */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      ⛪ Часовни и вера предков
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      В XIX веке духовная жизнь села кипела. На горе Кынгора
                      стояла часовня Параскевы Пятницы, а в Утатах — часовня
                      Николая Чудотворца. Ещё одна Никольская часовня
                      располагалась на месте нынешней администрации. К
                      сожалению, все три святыни были разрушены после революции.
                      Сейчас на Кынгоре установлен крест Геннадием Севергиным
                      как память о былой святости этих мест.
                    </p>

                    {/* ГИМН */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/gimn-zyryanska.jpg"
                        alt="Гимн Зырянска"
                        width={800}
                        className="w-full h-auto object-contain rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Гимн Зырянска. Слова П. Павловой, музыка Н. Богданова
                      </p>
                    </div>
                  </section>

                  {/* ГЛАВА 3: СОВЕТСКАЯ ЭПОХА */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      🚜 Колхоз «Путь социализма»
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      В 1916 году в Зырянске проживал 1061 житель. Позже село
                      стало центром колхоза «Путь социализма», а затем — совхоза
                      «Зырянский». Одна из улиц до сих пор носит имя
                      председателя колхоза Артамона Абакумовича Хмелева.
                    </p>

                    {/* ФОТО: СОБРАНИЕ КОЛХОЗА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-1.jpg"
                        alt="Собрание колхоза"
                        width={800}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Собрание колхоза в Зырянске. В первом ряду — Баталов
                        Иван Никанорович
                      </p>
                    </div>

                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      На пике развития совхоз имел 508 коров, 1619 голов
                      молодняка и 103 лошади. Для сравнения: до революции сеяли
                      8052 гектара, а в 2004 году — всего 300. Всё рухнуло в
                      1990-е — не от снарядов, а от «реформ».
                    </p>

                    {/* ФОТО: ПРАВЛЕНИЕ */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2 max-w-md mx-auto">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/ziryansk-2.jpg"
                        alt="Правление колхоза"
                        width={800}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Правление колхоза в Зырянске. 1930-е годы
                      </p>
                    </div>
                  </section>

                  {/* ГЛАВА 4: ТЫЛ И ГОЛОД */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      🎖️ Память поколений и цена победы
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      Из Зырянска на фронт ушло 149 человек, 67 из них погибли.
                      Но война коснулась и тех, кто остался в тылу. В годы войны
                      колхоз выдал семьям военнослужащих 86 пар ичижных головок,
                      шерсти на 120 пар тёплых чулков и 40 пар обуви.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      Однако многие семьи голодали. Отощавшую скотину нельзя
                      было забить. По ночам матери ходили на скотомогильники,
                      несли домой то, что удалось отрубить, варили и кормили
                      детей. Это была тихая, незаметная война за выживание.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90">
                      Среди известных земляков — Колмаков Павел Антонович
                      (Почётный гражданин Прибайкальского района и Бурятии),
                      Хмелев Алексей Иванович (кавалер двух орденов Ленина),
                      Иван Шульгин (полковник КГБ) и Тарасов Дмитрий Семенович
                      (главный бухгалтер Улан-Удэнского авиазавода).
                    </p>
                  </section>

                  {/* ГЛАВА 5: ИСКУССТВО И КУЛЬТУРА */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      🎨 Взгляд художника
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      История села сохранилась не только в документах, но и в
                      картинах местного художника-любителя Семёна Ивановича
                      Пушкарёва.
                    </p>

                    {/* КАРТИНЫ ХУДОЖНИКА */}
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
                          <p className="text-sm text-center text-[#5c3a1e] mt-2 italic leading-tight">
                            {img.alt}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2 max-w-sm mx-auto">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/pushkarev-photo.jpg"
                        alt="Семён Иванович Пушкарёв"
                        width={500}
                        className="w-full h-auto object-cover rounded"
                      />
                      <p className="text-base text-center text-[#5c3a1e] mt-2 italic">
                        Семён Иванович Пушкарёв, художник-любитель (на фото
                        справа)
                      </p>
                    </div>
                  </section>

                  {/* ГЛАВА 6: ГЭС И ПРОМЫШЛЕННОСТЬ */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      ⚡ Энергия реки: Зырянская ГЭС
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      После войны, в 1950 году, завершили строительство второй
                      очереди Зырянской ГЭС. Свет пришёл в Ангыр, Батурино и
                      Нестерово. ГЭС была сложным гидротехническим сооружением —
                      спрямили устье Ангыра. Директором был Георгий Михайлович
                      Юртвенсон.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90">
                      В 1956 году турбину заменили на дизельную, а в 1960-х село
                      подключили к Братской ГЭС. На территории ГЭС также
                      работала мельница. Сейчас от этого мощного объекта
                      остались лишь живописные руины.
                    </p>
                  </section>

                  {/* ГЛАВА 7: АРТЕФАКТЫ */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      📂 Документы эпохи
                    </h3>

                    {/* ТРУДОВАЯ И ПОощрения */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/trud-book.jpg"
                            alt="Трудовая книжка"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-xs text-center text-[#5c3a1e] mt-1 italic">
                            Трудовая книжка работницы совхоза
                          </p>
                        </div>
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/salary-1.jpg"
                            alt="Поощрения"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-xs text-center text-[#5c3a1e] mt-1 italic">
                            Поощрения работников за труд
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* СБЕРКНИЖКИ */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/sber-1.jpg"
                            alt="Сберкнижка 1"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-xs text-center text-[#5c3a1e] mt-1 italic">
                            Сберегательная книжка Сбербанка СССР
                          </p>
                        </div>
                        <div className="rounded-lg border border-[#8b5a2b]/20 p-1 bg-[#f4e4bc]">
                          <CloudinaryImage
                            src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/sber-2.jpg"
                            alt="Сберкнижка 2"
                            width={400}
                            className="w-full h-auto object-cover rounded"
                          />
                          <p className="text-xs text-center text-[#5c3a1e] mt-1 italic">
                            Сберегательная книжка СССР
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ОРДЕР И КАРТА */}
                    <div className="my-6 rounded-lg overflow-hidden shadow-lg border-2 border-[#8b5a2b]/30 bg-[#d4c5a9] p-2">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/order.jpg"
                        alt="Ордер на квартиру"
                        width={800}
                        className="w-full h-auto object-cover rounded mb-4"
                      />
                      <p className="text-sm text-center text-[#5c3a1e] italic mb-4">
                        Ордер на выдачу квартиры рабочему совхоза. Жильё давали
                        тем, кто работал
                      </p>

                      <CloudinaryImage
                        src="https://res.cloudinary.com/xv01jkbw/image/upload/photos/map-sovxoz.jpg"
                        alt="Карта совхоза"
                        width={800}
                        className="w-full h-auto object-contain rounded"
                      />
                      <p className="text-sm text-center text-[#5c3a1e] italic mt-2">
                        Рукописная карта совхоза «Зырянский», нарисованная от
                        руки
                      </p>
                    </div>
                  </section>

                  {/* ГЛАВА 8: ТАЙНЫ И ЗАГАДКИ */}
                  <section className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#5c3a1e] mt-8 mb-4">
                      🔍 Тайны земли и современные дни
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      Вокруг села были свинотоварная и молочно-товарная фермы.
                      СТФ давно не работает, от неё остались бетонные плиты. МТФ
                      держалась дольше, но сгорела.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      На карте 1988 года в районе Утатов отмечено кладбище. По
                      слухам, там был скотомогильник или даже место расстрела —
                      точных данных нет. Я поставил на это место вопросительный
                      знак. Есть и старое кладбище — оно действует до сих пор.
                      Ближе ко входу — свежие могилы, дальше — едва заметные
                      бугорки. Кости у дороги — подтверждение того, что дорога
                      прошла через захоронения. Их возраст — 100–200 лет.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-light opacity-90 mb-4">
                      В 2026 году я встретил религиозную общину. У них кнопочные
                      телефоны и вера в индийского гуру Саи Баба. На карте я
                      ничего не отмечал, оставив это за скобками истории.
                    </p>
                  </section>

                  {/* ФИНАЛ */}
                  <div className="mt-8 p-6 bg-[#d4c5a9]/20 rounded-lg border border-[#8b5a2b]/20 text-center">
                    <p className="text-lg italic text-[#4a2f18] mb-2">
                      «Вся эта история — не из учебников. Я собирал её по
                      рассказам старожилов, по картам, по обрывкам газет, по
                      книге ⟪Итанца⟫ (Виталий Помулев) и по тому, что сам нашёл
                      в полях. Это карта не официальной истории, а той, которую
                      я увидел своими глазами.»
                    </p>
                    <p className="text-sm font-bold text-[#5c3a1e]">
                      — Вячеслав Ерофеев, лето 2026
                    </p>
                  </div>

                  {/* БЛАГОДАРНОСТИ */}
                  <div className="pt-6 border-t border-[#8b5a2b]/30 text-sm text-[#3e2723] text-center mt-8">
                    <p className="mb-2 font-bold uppercase tracking-wider text-[#5c3a1e] text-xs">
                      Благодарность
                    </p>
                    <p className="leading-relaxed opacity-90 text-xs mb-4">
                      Хочу выразить благодарность в помощи создания
                      интерактивной карты моему брату Максиму,
                      родственникам-старожилам, библиотеке и школе за
                      предоставленные материалы.
                    </p>
                    <div className="space-y-1 font-mono text-xs text-[#5c3a1e]">
                      <p>
                        Открытый исходный код:{" "}
                        <a
                          href="https://github.com/BymBu/map-of-Ziryansk"
                          className="underline hover:text-[#8b5a2b]"
                        >
                          GitHub
                        </a>
                      </p>
                      <p>
                        Мой проект 3D Байкал:{" "}
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
