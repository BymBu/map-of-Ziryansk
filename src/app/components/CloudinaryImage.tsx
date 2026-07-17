
interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number; // Максимальная ширина для ограничения нагрузки
}

export default function CloudinaryImage({ 
  src, 
  alt, 
  className = "", 
  width = 1200 
}: Props) {
  // Добавляем параметры трансформации прямо в URL Cloudinary
  // w_1200,q_80,c_limit - ресайз до 1200px, качество 80%, без кропа
  const optimizedSrc = src.includes('cloudinary.com')
    ? src.replace('/upload/', `/upload/w_${width},q_80,c_limit,f_auto/`)
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      loading="lazy" // Не грузит картинки вне экрана
      decoding="async" // Разгружает основной поток
      className={`max-w-full h-auto ${className}`}
      style={{ contentVisibility: 'auto' }} // Современный CSS для производительности
    />
  );
}