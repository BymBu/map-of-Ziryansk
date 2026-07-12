export default function WelcomeNote({setShowIntro}: {setShowIntro: (mode: string) => void;}) {
  return (
    <div className="absolute top-6 left-6 z-[1000] max-w-xs ">
      <div className="bg-[#f4e4bc]/95 backdrop-blur-sm border-2 border-[#8b5a2b] rounded-sm shadow-lg p-4 text-[#3e2723]">
        {/* Декоративная полоска сверху */}
        <div className="h-0.5 w-full bg-[#8b5a2b]/30 mb-3" />
        <h3 className="font-serif font-bold text-[#5c3a1e] text-sm uppercase tracking-wider mb-2">
          Добро пожаловать
        </h3>
        <p className="text-[16px] leading-relaxed opacity-90 font-light">
          - Наводите курсор на значки, чтобы узнать историю мест. Справа сверху
          просматривайте детальную места, а также картинки
          <br /> - Переключайте слои внизу справа, чтобы сравнить эпохи.
        </p>
        <p className="text-[16px]">
          {" "}
          - Некоторые иконки могут быть маленькими, исследуйте карту внимательно
        </p>

        {/* Маленькая декоративная иконка пера внизу */}
        <div className="mt-3 flex justify-end opacity-40">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
        </div>
      </div>
      <button
        onClick={() => setShowIntro(true)}
        className="mt-1 w-80 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 text-xl"
        title="Сменить слой"
      >
        Приветственное сообщение
      </button>
    </div>
  );
}
