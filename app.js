let daily = document.getElementById('daily-change');
let week = document.getElementById('weekly-change');
let month = document.getElementById('monthly-change');
let work = document.getElementById('work-hours');
let play = document.getElementById('play-hours');
let study = document.getElementById('study-hours');
let exercise = document.getElementById('exercise-hours');
let social = document.getElementById('social-hours');
let selfcare = document.getElementById('selfcare-hours');
let statework = document.getElementById('state-change-work');
let stateplay = document.getElementById('state-change-play');
let statestudy = document.getElementById('state-change-study');
let stateexercise = document.getElementById('state-change-exercise');
let statesocial = document.getElementById('state-change-social');
let stateselfcare = document.getElementById('state-change-selfcare');

/* create function to click the daily data and using the addeventlistener */
function clickdailyevent(){
let url = "./data.json";
fetch(url)
.then(response => response.json())
.then(data=>{
work.innerHTML =  `${data[0].timeframes.dailys.current}hrs`;
play.innerHTML =  `${data[1].timeframes.dailys.current}hrs`;
study.innerHTML =  `${data[2].timeframes.dailys.current}hrs`;
exercise.innerHTML =  `${data[3].timeframes.dailys.current}hrs`;
social.innerHTML =  `${data[4].timeframes.dailys.current}hrs`;
selfcare.innerHTML =  `${data[5].timeframes.dailys.current}hrs`;
statework.innerHTML = `Day - ${data[0].timeframes.dailys.previous}hrs`;
stateplay.innerHTML = `Day - ${data[1].timeframes.dailys.previous}hrs`;
statestudy.innerHTML = `Day - ${data[2].timeframes.dailys.previous}hrs`;
stateexercise.innerHTML = `Day - ${data[3].timeframes.dailys.previous}hrs`;
statesocial.innerHTML = `Day - ${data[4].timeframes.dailys.previous}hrs`;
stateselfcare.innerHTML = `Day - ${data[5].timeframes.dailys.previous}hrs`;
})
}
daily.addEventListener('click',clickdailyevent);

/* create function to click the weekly data and using the addeventlistener */
function clickweeklyevent(){
  let url = "./data.json";
  fetch(url)
  .then(response => response.json())
  .then(data=>{
  work.innerHTML =  `${data[0].timeframes.weekly.current}hrs`;
  play.innerHTML =  `${data[1].timeframes.weekly.current}hrs`;
  study.innerHTML =  `${data[2].timeframes.weekly.current}hrs`;
  exercise.innerHTML =  `${data[3].timeframes.weekly.current}hrs`;
  social.innerHTML =  `${data[4].timeframes.weekly.current}hrs`;
  selfcare.innerHTML =  `${data[5].timeframes.weekly.current}hrs`;
  statework.innerHTML = `Week - ${data[0].timeframes.weekly.previous}hrs`;
stateplay.innerHTML = `Week - ${data[1].timeframes.weekly.previous}hrs`;
statestudy.innerHTML = `Week - ${data[2].timeframes.weekly.previous}hrs`;
stateexercise.innerHTML = `Week - ${data[3].timeframes.weekly.previous}hrs`;
statesocial.innerHTML = `Week - ${data[4].timeframes.weekly.previous}hrs`;
stateselfcare.innerHTML = `Week - ${data[5].timeframes.weekly.previous}hrs`;
  })
  }
  week.addEventListener('click',clickweeklyevent);

  /* create function to click the weekly data and using the addeventlistener */
function clickmonthlyevent(){
  let url = "./data.json";
  fetch(url)
  .then(response => response.json())
  .then(data=>{
  work.innerHTML =  `${data[0].timeframes.monthly.current}hrs`;
  play.innerHTML =  `${data[1].timeframes.monthly.current}hrs`;
  study.innerHTML =  `${data[2].timeframes.monthly.current}hrs`;
  exercise.innerHTML =  `${data[3].timeframes.monthly.current}hrs`;
  social.innerHTML =  `${data[4].timeframes.monthly.current}hrs`;
  selfcare.innerHTML =  `${data[5].timeframes.monthly.current}hrs`;
  statework.innerHTML = `Month - ${data[0].timeframes.monthly.previous}hrs`;
stateplay.innerHTML = `Month - ${data[1].timeframes.monthly.previous}hrs`;
statestudy.innerHTML = `Month - ${data[2].timeframes.monthly.previous}hrs`;
stateexercise.innerHTML = `Month - ${data[3].timeframes.monthly.previous}hrs`;
statesocial.innerHTML = `Month - ${data[4].timeframes.monthly.previous}hrs`;
stateselfcare.innerHTML = `Month - ${data[5].timeframes.monthly.previous}hrs`;
  })
  }
  month.addEventListener('click',clickmonthlyevent);