
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonStop = document.querySelector('#stop');
const buttonSet = document.querySelector('#set');
const buttonSoundON = document.querySelector('#sound-on');
const buttonSoundOff = document.querySelector('#sound-off');
let minutes;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

function countDown(){
  setTimeout(() => {
    seconds = Number(secondsDisplay.textContent);
    minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');

    if(minutes <= 0) {
      buttonPlay.classList.remove('hide');
      buttonPause.classList.add('hide');
      buttonStop.classList.add('hide');
      buttonSet.classList.remove('hide');

      return
    }

    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes -1).padStart(2, '0');
      }
      
      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');

        
  countDown();  
  }, 1000);}
  

buttonPlay.addEventListener("click", function(){
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonStop.classList.remove('hide');
  buttonSet.classList.add('hide');
  countDown();
});

buttonPause.addEventListener('click', function(){
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
});

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonStop.classList.add('hide');
  buttonSet.classList.remove('hide');
});

buttonSoundON.addEventListener('click', function(){
  buttonSoundON.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOff.classList.add('hide');
  buttonSoundON.classList.remove('hide');
});

buttonSet.addEventListener('click', function(){
  minutes = prompt('Quantos minutos');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
})
