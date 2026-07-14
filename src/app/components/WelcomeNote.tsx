export default function WelcomeNote({ setShowIntro }: { setShowIntro: () => void }) {
  return (
    <>
      <div className="hidden md:block absolute top-6 left-6 z-[1000] max-w-xs">
        <div className="bg-[#f4e4bc]/95 backdrop-blur-sm border-2 border-[#8b5a2b] rounded-sm shadow-lg p-4 text-[#3e2723]">
          <div className="h-0.5 w-full bg-[#8b5a2b]/30 mb-3" />
          <h3 className="font-serif font-bold text-[#5c3a1e] text-sm uppercase tracking-wider mb-3">
            Как пользоваться картой
          </h3>
          <div className="space-y-3 text-[15px] leading-relaxed opacity-95 font-light">
            <p><span className="font-bold text-[#5c3a1e]">Лучше всего смотреть с компьютера.</span></p>
            <p>️<span className="font-bold text-[#5c3a1e]">Подведите мышку</span> к значкам — появится подсказка. Нажмите ЛКМ для подробного описания и изображений.</p>
            <p>Кнопки <span className="font-bold text-[#5c3a1e]">«1988», «1982»</span> показывают старые карты.</p>
            <p className="text-[15px] opacity-80 pt-2 border-t border-[#8b5a2b]/20">
              ⚠️ Некоторые метки маленькие. Приближайте карту колесиком мыши.
            </p>
          </div>
          <div className="mt-4 flex justify-end opacity-40">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
            </svg>
          </div>
        </div>
        
        <button onClick={() => setShowIntro(true)} className="mt-2 w-full h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-lg shadow-lg flex items-center justify-center text-[#5c3a1e] hover:bg-[#d4c5a9] transition-transform active:scale-95 font-serif text-base font-bold">
          Показать приветствие заново
        </button>
      </div>

      <button 
        onClick={() => setShowIntro(true)}
        className="md:hidden fixed bottom-[calc(70vh+1rem)] right-5 z-[1001] w-12 h-12 bg-[#e3d5b8] border-2 border-[#8b5a2b] rounded-full shadow-lg flex items-center justify-center text-[#5c3a1e] active:scale-95"
        aria-label="Показать инструкцию"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </button>
    </>
  );
}