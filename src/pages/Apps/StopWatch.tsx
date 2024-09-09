import { useEffect, useState } from "react";
import Main from "../../components/Main";

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<string[]>([]);
  const [isStartedAgain, setIsStartedAgain] = useState<boolean>(false);
  const [lastStoppedAt, setLastStoppedAt] = useState<number>(0);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const fnStartStop = () => {
    setIsRunning((x) => !x);
    if (isRunning) {
      setLastStoppedAt(time);
    }
    if (laps.length > 0) {
      setIsStartedAgain(true);
    }
  };

  const fnReset = () => {
    setTime(0);
    setLaps([]);
  };

  const recordLap = () => {
    let _time = time;
    _time = time - lastStoppedAt;
    if (isStartedAgain) {
      setIsStartedAgain(false);
    }
    // let _laps = [...laps, displayTimer(_time)];
    // _laps.reverse();
    let _laps = [...laps];
    _laps.unshift(displayTimer(_time));
    setLaps(_laps);
  };

  function displayTimer(time: number): string {
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    return `${hours} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} : ${milliseconds.toString().padStart(2, "0")}`;
  }

  return (
    <Main className="dashboard-app-container">
      <h1>Stopwatch</h1>
      <section>
        <div className="stopwatch">
          <h3>{displayTimer(time)}</h3>
          <div className="buttons-group">
            <button onClick={fnStartStop}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={fnReset}>Reset</button>
            <button disabled={!isRunning} onClick={recordLap}>
              Lap
            </button>
          </div>
          <div className={`${laps.length > 0 ? "laps" : "laps-empty"}`}>
            {laps.map((lap) => (
              <div>{lap}</div>
            ))}
          </div>
        </div>
      </section>
    </Main>
  );
};

export default StopWatch;
