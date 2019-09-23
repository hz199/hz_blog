// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//       this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }

// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//       console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//       console.log("tick tock");
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;