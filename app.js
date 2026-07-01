const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];
const storageKey = "project180_logs_v1";

let timer = { idx:0, seconds:0, interval:null, steps:[] };

function getLogs(){ return JSON.parse(localStorage.getItem(storageKey) || "[]"); }
function saveLogs(logs){ localStorage.setItem(storageKey, JSON.stringify(logs)); }

function showPage(id){
  $$(".page").forEach(p => p.classList.remove("active"));
  $("#" + id).classList.add("active");
  $$(".nav").forEach(n => n.classList.toggle("active", n.dataset.page === id));
  if(id === "progress") drawCharts();
}

function workoutById(id){ return WORKOUTS.find(w => w.id === id); }

function makeWorkoutCard(w){
  const card = document.createElement("article");
  card.className = "workout-card";
  card.innerHTML = `
    <div class="workout-banner"><span class="tag">${w.type}</span><span>${w.duration}</span></div>
    <h3>${w.week}.${w.dayNum} ${w.day} — ${w.title}</h3>
    <p>${w.subtitle}<br><strong>${w.phase}:</strong> ${w.progression}</p>
    <button>Open Workout</button>`;
  card.querySelector("button").onclick = () => openWorkout(w.id);
  return card;
}

function openWorkout(id){
  const w = workoutById(id);
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-head">
        <div>
          <p class="eyebrow">${w.type} • Week ${w.week} • Day ${w.dayNum}</p>
          <h2>${w.day} — ${w.title}</h2>
          <p class="hero-text">${w.subtitle}. ${w.progression}</p>
        </div>
        <button class="close">Close</button>
      </div>
      <div class="gtx-screen">
        ${blockHtml("Warm Up", w.warmup)}
        ${blockHtml("Block 1", w.block1)}
        ${blockHtml("Block 2", w.block2)}
        ${blockHtml("Core", w.core)}
      </div>
      <h3>Starting Targets</h3>
      <div class="targets">${Object.entries(w.targets).map(([k,v]) => `<div class="target"><span>${k}</span><strong>${v}</strong></div>`).join("")}</div>
      <div style="display:flex;gap:12px;margin-top:22px;flex-wrap:wrap">
        <button onclick="window.app.loadTimerWorkout('${w.id}'); window.app.showPage('timer'); document.querySelector('.modal')?.remove()">Start Timer</button>
        <button class="secondary" onclick="window.app.prepareLog('${w.id}'); window.app.showPage('log'); document.querySelector('.modal')?.remove()">Log This Workout</button>
      </div>
    </div>`;
  modal.querySelector(".close").onclick = () => modal.remove();
  modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
  document.body.appendChild(modal);
}

function blockHtml(title, items){
  return `<div class="gtx-block"><h4>${title}</h4><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
}

function renderWorkoutLists(){
  const wk = $("#weekFilter").value;
  const list = $("#workoutList");
  list.innerHTML = "";
  WORKOUTS.filter(w => String(w.week) === wk).forEach(w => list.appendChild(makeWorkoutCard(w)));
  const weekCards = $("#weekCards");
  weekCards.innerHTML = "";
  WORKOUTS.filter(w => w.week === 1).forEach(w => weekCards.appendChild(makeWorkoutCard(w)));
}

function populateSelects(){
  ["#timerWorkoutSelect","#logWorkoutSelect"].forEach(sel => {
    const el = $(sel);
    el.innerHTML = WORKOUTS.map(w => `<option value="${w.id}">W${w.week}D${w.dayNum} ${w.day} — ${w.title}</option>`).join("");
  });
}

function prepareLog(id){
  $("#logWorkoutSelect").value = id;
  $("#logForm").date.value = new Date().toISOString().slice(0,10);
}

function renderLogs(){
  const logs = getLogs().slice().reverse();
  const recent = $("#recentLogs");
  if(!logs.length){ recent.innerHTML = `<p class="hero-text">No logs yet. Save your first workout after training.</p>`; }
  else {
    recent.innerHTML = logs.slice(0,8).map(l => {
      const w = workoutById(l.workoutId);
      return `<div class="log-row"><strong>${l.date}</strong><span>${w ? w.title : l.workoutId}</span><span>${l.calories || "—"} cal • RPE ${l.rpe || "—"}</span><span>${l.notes || ""}</span></div>`;
    }).join("");
  }
  const done = new Set(getLogs().map(l => l.workoutId)).size;
  $("#workoutsDone").textContent = `${done} / 20`;
  $("#completionPct").textContent = `${Math.round(done/20*100)}%`;
  const last = getLogs().at(-1);
  $("#lastWeight").textContent = last?.weight ? `${last.weight} lb` : "—";
  $("#lastCalories").textContent = last?.calories ? `${last.calories}` : "—";
  const rpes = getLogs().map(l => Number(l.rpe)).filter(Boolean);
  $("#avgRpe").textContent = rpes.length ? (rpes.reduce((a,b)=>a+b,0)/rpes.length).toFixed(1) : "—";
}

function loadTimerWorkout(id){
  $("#timerWorkoutSelect").value = id;
  updateTimerWorkoutDetail();
  resetTimer();
}

function updateTimerWorkoutDetail(){
  const w = workoutById($("#timerWorkoutSelect").value);
  $("#timerWorkoutDetail").innerHTML = `
    <p class="eyebrow">${w.type} • Week ${w.week}</p>
    <h2 style="font-size:28px">${w.day} — ${w.title}</h2>
    <div class="gtx-screen" style="grid-template-columns:1fr 1fr">${blockHtml("Block 1",w.block1)}${blockHtml("Block 2",w.block2)}${blockHtml("Core",w.core)}${blockHtml("Targets",Object.entries(w.targets).map(([k,v])=>`${k}: ${v}`))}</div>`;
  timer.steps = [
    {label:"Warm Up", seconds:360, text:w.warmup.join(" • ")},
    {label:"Block 1", seconds:720, text:w.block1.join(" • ")},
    {label:"Block 2", seconds:720, text:w.block2.join(" • ")},
    {label:"Core", seconds:600, text:w.core.join(" • ")},
    {label:"Cool Down", seconds:180, text:"Walk easy. Bring HR down. Log workout."}
  ];
  timer.idx = 0;
  timer.seconds = timer.steps[0].seconds;
  updateTimerUI();
}

function updateTimerUI(){
  const step = timer.steps[timer.idx] || {label:"Ready",seconds:0,text:""};
  $("#timerLabel").textContent = step.label;
  $("#timerStep").textContent = step.text;
  const m = String(Math.floor(timer.seconds/60)).padStart(2,"0");
  const s = String(timer.seconds%60).padStart(2,"0");
  $("#timerDisplay").textContent = `${m}:${s}`;
}

function startTimer(){
  if(!timer.steps.length) updateTimerWorkoutDetail();
  clearInterval(timer.interval);
  timer.interval = setInterval(() => {
    timer.seconds--;
    if(timer.seconds <= 0) nextTimerStep();
    updateTimerUI();
  }, 1000);
}

function pauseTimer(){ clearInterval(timer.interval); }
function resetTimer(){
  clearInterval(timer.interval);
  if(!timer.steps.length) updateTimerWorkoutDetail();
  timer.idx = 0;
  timer.seconds = timer.steps[0]?.seconds || 0;
  updateTimerUI();
}
function nextTimerStep(){
  timer.idx = Math.min(timer.idx + 1, timer.steps.length - 1);
  timer.seconds = timer.steps[timer.idx]?.seconds || 0;
  updateTimerUI();
}

function exportLogs(){
  const blob = new Blob([JSON.stringify(getLogs(), null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "project180-workout-logs.json";
  a.click();
}

function drawCharts(){
  drawLineChart($("#weightChart"), getLogs().map(l=>l.weight).filter(Boolean).map(Number), "lb");
  drawLineChart($("#calChart"), getLogs().map(l=>l.calories).filter(Boolean).map(Number), "cal");
}

function drawLineChart(canvas, values, suffix){
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#0f141b"; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "#2b3643"; ctx.lineWidth = 1;
  for(let i=0;i<5;i++){ const y=30+i*45; ctx.beginPath(); ctx.moveTo(45,y); ctx.lineTo(canvas.width-20,y); ctx.stroke(); }
  ctx.fillStyle = "#9aa7b5"; ctx.font = "14px system-ui";
  if(values.length < 2){ ctx.fillText("Add at least two logs to draw trend.", 55, 130); return; }
  const min = Math.min(...values), max = Math.max(...values), range = Math.max(1, max-min);
  const xStep = (canvas.width-80)/(values.length-1);
  ctx.strokeStyle = "#39a8ff"; ctx.lineWidth = 4; ctx.beginPath();
  values.forEach((v,i)=>{
    const x = 45 + i*xStep;
    const y = 220 - ((v-min)/range)*170;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.stroke();
  ctx.fillStyle = "#82d1ff";
  values.forEach((v,i)=>{
    const x = 45 + i*xStep;
    const y = 220 - ((v-min)/range)*170;
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill();
  });
  ctx.fillStyle = "#f4f7fb";
  ctx.fillText(`${min}${suffix} - ${max}${suffix}`, 55, 24);
}

$("#weekFilter").addEventListener("change", renderWorkoutLists);
$("#timerWorkoutSelect").addEventListener("change", updateTimerWorkoutDetail);
$("#logForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const logs = getLogs();
  logs.push(data);
  saveLogs(logs);
  e.target.reset();
  e.target.date.value = new Date().toISOString().slice(0,10);
  renderLogs();
  alert("Workout saved.");
});

$$(".nav").forEach(n => n.onclick = () => showPage(n.dataset.page));

window.app = {showPage, openWorkout, loadTimerWorkout, startTimer, pauseTimer, resetTimer, nextTimerStep, prepareLog, exportLogs};

populateSelects();
renderWorkoutLists();
updateTimerWorkoutDetail();
prepareLog("W1D1");
renderLogs();
