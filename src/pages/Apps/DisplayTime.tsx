import { useEffect, useState } from "react";

const DisplayTime = () => {
  const [time, setTime] = useState<number>(new Date().getTime());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(time + 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  function displayTime(time: Date): string {
    const addZero = (str: string): string => {
      if (parseInt(str) < 10) {
        str = "0" + str;
      }
      return str;
    };

    let hh: string = addZero(time.getHours().toString());
    let mm: string = addZero(time.getMinutes().toString());
    let ss: string = addZero(time.getSeconds().toString());

    let amOrPm: "am" | "pm" = "am";

    if (parseInt(hh) < 12) {
      if (parseInt(hh) === 0) {
        hh = "12";
      }
      amOrPm = "am";
    } else if (parseInt(hh) >= 12) {
      amOrPm = "pm";
      if (parseInt(hh) > 12) {
        hh = (parseInt(hh) - 12).toString();
      }
    }
    return `${hh} : ${mm} : ${ss} : ${amOrPm}`;
  }

  return <>{displayTime(new Date(time))}</>;
};

export default DisplayTime;
