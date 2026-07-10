
'use client';

import dynamic from 'next/dynamic';

// Импортируем саму карту динамически внутри клиентского компонента
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white font-mono">
      <p>Инициализация спутниковой связи... [Зырянск]</p>
    </div>
  ),
});

export default function MapWrapper() {
  return <InteractiveMap />;
}