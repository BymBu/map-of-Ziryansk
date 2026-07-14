import { useEffect, useRef } from 'react';

export function usePaperSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Предзагружаем звук при монтировании компонента
    audioRef.current = new Audio('/sounds/paper.mp3');
    audioRef.current.preload = 'auto';
    audioRef.current.volume = 0.5; // Тихий, ненавязчивый
    
    // Обработка ошибок загрузки
    audioRef.current.onerror = () => {
      console.warn('Не удалось загрузить звук бумаги');
    };
  }, []);

  const play = () => {
    if (!audioRef.current) return;
    
    // Сбрасываем на начало (если звук еще играет)
    audioRef.current.currentTime = 0;
    
    // Play возвращает Promise, ловим ошибки (например, автовоспроизведение заблокировано)
    audioRef.current.play().catch(err => {
      console.warn('Звук заблокирован браузером:', err);
    });
  };

  return play;
}