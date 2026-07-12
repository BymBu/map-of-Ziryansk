import Image from "next/image";

export default function LocationDetails({
  location,
  onClose,
}: {
  location: any;
  onClose: () => void;
}) {
  return (
    <div className="locationDetail absolute top-4 right-4 w-80 bg-[#1a1612] text-[#e3d5b8] p-5 rounded-sm border border-[#3e2723] shadow-2xl z-[1000] overflow-hidden group">
      
      {/* Фоновый узор (Роза ветров) */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>

      {/* Металлические уголки (декор) */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-5 border-l-5 border-[#8b5a2b] opacity-50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-5 border-r-5 border-[#8b5a2b] opacity-50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-5 border-l-5 border-[#8b5a2b] opacity-50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-5 border-r-5 border-[#8b5a2b] opacity-50" />

      {/* Заголовок с пером */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          {/* Иконка пера */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37]">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
          <h2 className="text-xl font-serif font-bold leading-tight text-[#f4e4bc]">
            {location.name}
          </h2>
        </div>
        
        {/* Кнопка закрытия в виде печати/крестика */}
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center rounded-full border border-[#5c3a1e] text-[#8b5a2b] hover:bg-[#3e2723] hover:text-[#f4e4bc] transition-colors"
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

      {/* Описание */}
      <p className="text-[15px] text-[#c4b5a0] leading-relaxed mb-5 font-light relative z-10">
        {location.description}
      </p>

      {/* Галерея артефактов */}
      {location.images?.length > 0 && (
        <div className="space-y-3 relative z-10">
          <div className="text-[15px] uppercase tracking-widest text-[#5c3a1e] font-bold border-t border-[#3e2723] pt-2">
            Архивные материалы
          </div>
          <div className="grid grid-cols-2 gap-2">
            {location.images.map((img: string, idx: number) => (
              <div
                key={idx}
                className="relative aspect-square rounded-sm overflow-hidden bg-[#0f0c09] border border-[#3e2723] group-hover:border-[#5c3a1e] transition-colors"
              >

                <div className="absolute inset-0 flex items-center justify-center text-[10px] text-[#5c3a1e] font-mono">
                  REF-{String(idx + 1).padStart(2, '0')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}