// const NOTIFICATION_DELAY = 3000;
// let timeId = null;
// let counter = 0;
// const max = 3;

// const btn = document.querySelector('.btn-0');
// btn.addEventListener('click', onBtnClose);

// function onBtnShow() {
//   if (counter === max) {
//     return;
//   }
//   btn.classList.add('is-visible');

//   timeId = setTimeout(() => {
//     console.log('Привет');
//     onBtnClose();
//   }, NOTIFICATION_DELAY);

//   counter += 1;
// }

// onBtnShow();

// function onBtnClose() {
//   btn.classList.remove('is-visible');
//   clearTimeout(timeId);

//   setTimeout(() => {
//     onBtnShow();
//   }, NOTIFICATION_DELAY);
// }

// таймер

const refs = {
  startBtn: document.querySelector('.timer-start'),
  stopBtn: document.querySelector('.timer-stop'),
  clockface: document.querySelector('.clockface'),
};

// refs.clockface.textContent = `00:00:00`;
// плагин
// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;
//     this.init();
//   }

//   init() {
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = new Date();
//     console.log(startTime);
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = new Date();
//       const detalTime = currentTime - startTime;
//       const time = this.getTimeComponents(detalTime);

//       //   updateClockFace(time);
//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   pad(value) {
//     return String(value).padStart(2, 0);
//   }

//   getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }
// }

// const timer = new Timer({ onTick: updateClockFace });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));

// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockFace({ days, hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

const date = new Date('Jan 1 2026 00:00:00');
let gap = null;

function counts() {
  let now = new Date();
  gap = date - now;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let mins = Math.floor(gap / 1000 / 60) % 60;
  let secs = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    days = days + 7;
    hours = hours + 24;
    mins = mins + 60;
    secs = secs + 60;
    // document.querySelector('.group').textContent = 'Акція закінчена';
  }
  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.mins').textContent = mins;
  document.querySelector('.secs').textContent = secs;
}
counts();
setInterval(counts, 1000);
