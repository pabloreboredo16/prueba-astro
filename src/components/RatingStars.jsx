import { useState, useEffect } from 'react';

export default function RatingStars({ projectId }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const storageKey = `rating_proyecto_${projectId}`;

  // Cargar la puntuación guardada al montar el componente
  useEffect(() => {
    if (typeof window !== 'undefined' && projectId) {
      const savedRating = localStorage.getItem(storageKey);
      if (savedRating) {
        setRating(Number(savedRating));
      }
    }
  }, [projectId, storageKey]);

  // Guardar la puntuación al seleccionar una estrella
  const handleRating = (value) => {
    setRating(value);
    if (typeof window !== 'undefined' && projectId) {
      localStorage.setItem(storageKey, value.toString());
    }
  };

  return (
    <div style={{ margin: '1.5rem 0', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'inline-block' }}>
      <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Valoración del proyecto:</p>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.8rem',
              color: star <= (hover || rating) ? '#f59e0b' : '#d1d5db',
              transition: 'color 0.2s ease-in-out',
              padding: '0 0.2rem'
            }}
          >
            ★
          </button>
        ))}
      </div>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#6b7280' }}>
        {rating > 0 ? `Puntuación guardada: ${rating} de 5 estrellas` : 'Haz clic en una estrella para puntuar'}
      </p>
    </div>
  );
}