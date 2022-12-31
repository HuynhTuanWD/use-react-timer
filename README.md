# use-react-timer
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

A minimal timer hook, countdown time for react and react native. Just `<1kB`

![Use case](https://raw.githubusercontent.com/HuynhTuanWD/use-react-timer/master/example/timer-use-case.gif)

## Installation

### npm
`npm install use-react-timer`
### yarn
`yarn add use-react-timer`

## Live examples (Sandbox)

[![Edit hovndn](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-react-timer-p5yx28?file=/src/Timer.tsx)

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

## API
`useInfiniteScroll(listRef, loadMore)`
| name                           | type                               | description                                                        |
| ------------------------------ | ---------------------------------- | -------------------------------------------------------------------|
| **day**                        | string                             | day of countdown                                                   |
| **hour**                       | string                             | hour of countdown                                                  |
| **min**                        | string                             | minute of countdown                                                |
| **sec**                        | string                             | second of countdown                                                |
| **isRunning**                  | boolean                            | returns a boolean value whether countdown is running or tap to end |
## License

MIT