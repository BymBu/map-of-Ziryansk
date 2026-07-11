export interface LocationPoint {
  id: string;
  name: string;
  coords: [number, number]; // [lat, lng]
  type: 'history' | 'mystery' | 'nature' | 'sect';
  description: string;
  images: string[]; // Пути к фото в public
  confidence?: boolean; // true - уверен, false - вопросительный знак
}

export const locations: LocationPoint = [
  // {
  //   id: 'Zyryansk',
  //   name: 'Зырянск',
  //   coords: [52.264682, 107.779104], // Примерные координаты, поставишь свои
  //   type: 'history',
  //   description: 'Село.',
  //   images: ['/zyryansk/master-1.jpg', '/zyryansk/master-2.jpg'],
  //   confidence: true
  // },

];