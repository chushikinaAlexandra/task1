const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let secondsCount = seconds%100
    let minutes = Math.floor((seconds%10000)/100)
    let hours = Math.floor((seconds%10000000)/10000)
    let timeInSeconds = (hours*60+minutes)*60+secondsCount
    let timer = setInterval(function(){
      if (timeInSeconds==0) {
        document.getElementById('timerEl').innerHTML = 'Отсчет завершен'
      }
      else {
        let secondsCount = timeInSeconds%60
        let minutes = Math.floor(timeInSeconds/60)%60
        let hours = Math.floor(timeInSeconds/60/60)
        document.getElementById('timerEl').innerHTML = `${hours.toString().length==1 ? '0'+ hours : hours}:${minutes.toString().length==1 ? '0'+ minutes : minutes}:${secondsCount.toString().length==1 ? '0'+ secondsCount : secondsCount}`
        timeInSeconds-=1
      }
    }, 1000)
    };
}


const animateTimer = createTimerAnimator();


inputEl.addEventListener('input', (event) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  // let num = event.target.value.match(/\d{2}\:\d{2}\:\d{2}?/)
  // if (num){
  //   event.target.value=event.target.value.replace(/\D/g, "")
  // }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value.replace(/\D/g, ""));
  animateTimer(seconds);
  inputEl.value = '';
});
