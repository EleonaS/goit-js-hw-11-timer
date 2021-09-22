class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
//this.selector = selector
    this.spanDays = document.querySelector(` ${selector} .value[data-value="days"] `);
    this.spanHours = document.querySelector(` ${selector} .value[data-value="hours"] `);
    this.spanMinutes = document.querySelector(` ${selector} .value[data-value="mins"] `);
    this.spanSeconds = document.querySelector(` ${selector} .value[data-value="secs"] `);
  //console.log(targetDate);
  };
  countDowm() {
    const currentTime = new Date();
    this.getTimeComponents(currentTime);
  //  console.log(currentTime);
  };
  showTime() {
    setInterval(() => this.countDowm(), 1000);
  };
  pad(value) {
    return String(value).padStart(2, "0");
  };
  getTimeComponents(currentTime) {
    const time = this.targetDate - currentTime;
//console.log(time);
    this.spanDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.spanHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.spanMinutes.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.spanSeconds.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  };
}

document.body.onload = startTimer;

function startTimer() {
  timer.showTime();
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: '2022,1,1',
});

////
/*const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: '2025,12,31',
});
function startTimer() {
  timer2.showTime();
}*/