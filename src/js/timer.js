const refs = {
  timer: document.getElementById('timer-1'),
  daysSpan: document.querySelector('[data-value="days"]'),
  hoursSpan: document.querySelector('[data-value="hours"]'),
  minsSpan: document.querySelector('[data-value="mins"]'),
  secsSpan: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
  }
};

const timer = new CountdownTimer({
  targetDate: new Date('2021-12-31').getTime('2021-12-31')
});

let intervalForTimer = null;

updateTimer();

function updateTimer() {
//текущая дата
  const currentTime = Date.now();

//Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
  
  time = timer.targetDate - currentTime;
  if (timer.targetDate === currentTime) {
    return 'Время вышло'
  }
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  const resalt = { days, hours, mins, secs };
  console.log(resalt);
  updateClockFace(resalt)

  intervalForTimer = setTimeout(updateTimer, 1000);
}

function updateClockFace({ days, hours, mins, secs }) {
  refs.daysSpan.textContent = days;
  refs.hoursSpan.textContent = hours;
  refs.minsSpan.textContent = mins;
  refs.secsSpan.textContent = secs
}
function pad(value) {
  return String(value).padStart(2, '0');
};

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

/*new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
//const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
//const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
//const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
//const secs = Math.floor((time % (1000 * 60)) / 1000);