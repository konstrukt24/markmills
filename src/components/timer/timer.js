'use client';

import { useState, useEffect } from 'react';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    
    const fetchRemainingTime = async () => {
      try {
        const response = await fetch('/api/timer');
        const data = await response.json();
        setRemainingTime(data.remainingTime);
      } catch (error) {
        console.error('Ошибка при получении данных таймера:', error);
      }
    };

    // Изначальный запрос времени с сервера
    fetchRemainingTime();

    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []);

  return (
    <div className="container">
        <p className='container'>До новых правил ограбления осталось: <br /> {remainingTime}</p>
    </div>
  );
};

export default Timer;
