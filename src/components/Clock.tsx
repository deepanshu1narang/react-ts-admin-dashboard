import { useEffect, useRef } from "react";

const Clock = () => {
  const hourHandle = useRef<HTMLDivElement | null>(null);
  const minuteHandle = useRef<HTMLDivElement | null>(null);
  const secondHandle = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const ss = date.getSeconds();
      const mm = date.getMinutes();
      const hh = date.getHours();

      if (secondHandle.current) {
        secondHandle.current.style.transform = `rotate(${ss * 6}deg)`;
      }
      if (minuteHandle.current) {
        minuteHandle.current.style.transform = `rotate(${mm * 6}deg)`;
      }
      if (hourHandle.current) {
        hourHandle.current.style.transform = `rotate(${hh * 30 + mm / 2}deg)`;
      }
    };

    updateClock(); // Set initial position

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <div ref={hourHandle} className="hor">
          <div className="hr" />
        </div>
        <div ref={minuteHandle} className="min">
          <div className="mn" />
        </div>
        <div ref={secondHandle} className="sec">
          <div className="sc" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
