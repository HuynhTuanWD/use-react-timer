# use-react-timer

A minimal timer hook for react and react native.

![Use case](https://raw.githubusercontent.com/HuynhTuanWD/use-react-timer/master/example/timer-use-case.gif)

# Installation

### npm
`npm install use-react-timer`
### yarn
`yarn add use-react-timer`

# API

https://github.com/HuynhTuanWD/use-react-timer

## useTimer

`useTimer(endAt)` returns a object, the values of the object is day, hour, min, sec, isRunning. 
Argument `endAt` is `Date` type, the date that you want to compare to now time for timer. 

### Apply timer with useTimer function

Example: 

```javascript
import React from "react";
import { useTimer } from "use-react-timer";

let endAt = new Date();
endAt.setDate(new Date().getDate() + 2);

const Timer = () => {
  const { day, hour, min, sec, isRunning } = useTimer(endAt);
  return (
    <div className="timer">
      <span>{day}{':'}</span>
      <span>{hour}{':'}</span>
      <span>{min}{':'}</span>
      <span>{sec}</span>
    </div>
  );
};

export default Timer;

```

## License

MIT