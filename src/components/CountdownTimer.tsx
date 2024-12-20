import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') }
  ];

  return (
    <div className="flex space-x-4 md:space-x-6">
      {timeBlocks.map(({ label, value }) => (
        <div key={label} className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[90px] border border-white/20">
          <div className="text-4xl md:text-5xl font-bold font-mono">{value}</div>
          <div className="text-sm uppercase tracking-wider mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;