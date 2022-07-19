
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonStop = document.querySelector('#stop');
const buttonSet = document.querySelector('#set');
const buttonSoundON = document.querySelector('#sound-on');
const buttonSoundOff = document.querySelector('#sound-off');


buttonPlay.addEventListener("click", function(){
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonStop.classList.remove('hide');
  buttonSet.classList.add('hide');
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

})
