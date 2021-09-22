const refs = {
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),
  clockface: document.querySelector(".js-clockface"),
};

class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init ();
  }
  //при загрузке ничего не отображается
  init(){
    const time = this.getTimeComponents(0);
    this.onTick(time)}

   start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {

      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
//просто ссілка на на функцию  updateClockface
      this.onTick(time)
     // updateClockface(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    //для очистки
     const time = this.getTimeComponents(0);
    this.onTick(time);
  }

pad(value) {
    return String(value).padStart(2, '0');
  }

    getTimeComponents(time){
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {hours, mins, secs};
  }
}

const timer = new Timer(
  {
    //передали в объекте настроек как свойство таймера
    onTick: updateClockface
  }
);

/*{
  intervalId: null,
  isActive:false,
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {

      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);
      updateClockface(time)
      //console.log(`${hours}:${mins}:${secs}`);

      //console.log('start->currentTime',currentTime );

      //всегда будет одиноковое
      //console.log('start->startTime', startTime);
      //console.log('12234');
      //console.log(currentTime - startTime);
      //console.log('xx:xx:xx');
      //console.log(timeComponents);


      console.log(time);

    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },

};

 timer.start();*/

//вешается событие и візіваются методы модели

refs.startBtn.addEventListener(`click`, timer.start.bind(timer));
refs.stopBtn.addEventListener(`click`,timer.stop.bind(timer));

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;


}


  //Метод pad
  //Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2 - х знаков

  function pad(value) {
    return String(value).padStart(2, '0');
  }
// 1 -> 01
// 2 -> 02
//10 -> 10


  //- Принимает время в миллисекундах
  // - Высчитывает сколько в них вмещается часов/минут/секунд
  // - Возвращает обьект со свойствами hours, mins, secs

  function getTimeComponents(time){
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {hours, mins, secs};
};


