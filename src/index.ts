import { useEffect, useRef, useState } from "react";

function padWithZeroes(number: number, length: number) {
  let result = "" + number;
  while (result.length < length) {
    result = "0" + result;
  }
  return result;
}

export const useTimer = (endAt: Date) => {
  const [isRunning, setIsRunning] = useState(true);
  const [elapsed, setElapsed] = useState<number>(() => {
    const curElapsed = Date.parse(endAt.toString()) - Date.now();
    if (curElapsed < 0) {
      setIsRunning(false);
      return 0;
    }
    return curElapsed;
  });
  const refPrevNowTime = useRef(Date.now());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setElapsed((prevElapsed) => {
        const now = Date.now();
        const interval = now - refPrevNowTime.current;
        refPrevNowTime.current = now;
        if (prevElapsed - interval <= 0) {
          setIsRunning(false);
          clearInterval(timerInterval);
          return 0;
        }
        return prevElapsed - interval;
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);
  const sec = padWithZeroes(parseInt((elapsed / 1000).toString()) % 60, 2);
  const min = padWithZeroes(parseInt((elapsed / 1000 / 60).toString()) % 60, 2);
  const hour = padWithZeroes(
    parseInt((elapsed / 1000 / 60 / 60).toString()) % 24,
    2
  );
  const day = padWithZeroes(
    parseInt((elapsed / 1000 / 60 / 60 / 24).toString()),
    2
  );
  return { sec, min, hour, day, isRunning };
};
