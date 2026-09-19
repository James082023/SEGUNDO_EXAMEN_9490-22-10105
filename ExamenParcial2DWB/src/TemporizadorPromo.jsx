import { useEffect, useState } from 'react';

function TemporizadorPromo({ activo }) {
  const [segundos, setSegundos] = useState(30);

  useEffect(() => {
    let timer = null;
    if (activo) {
      timer = setInterval(() => {
        setSegundos((valorActual) => Math.max(valorActual - 1, 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [activo]);

  return (
    <div style={{ color: 'crimson', fontWeight: 'bold' }}>
      Tiempo para aplicar Combo Descuento: {segundos}s
    </div>
  );
}

export default TemporizadorPromo;