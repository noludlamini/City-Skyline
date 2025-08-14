// ---------- Stars ----------
const starsContainer = document.querySelector('.stars');
for(let i=0;i<50;i++){
  const star = document.createElement('div');
  star.style.top = Math.random()*100 + '%';
  star.style.left = Math.random()*100 + '%';
  star.style.animationDelay = Math.random()*2 + 's';
  starsContainer.appendChild(star);
}

// ---------- Shooting Stars ----------
function createShootingStar(){
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.top = Math.random()*50 + '%';
  star.style.left = Math.random()*50 + '%';
  document.body.appendChild(star);
  setTimeout(()=> star.remove(), 2000);
}
setInterval(createShootingStar, 4000);

// ---------- Parallax ----------
document.addEventListener('mousemove', e=>{
  const x = (e.clientX/window.innerWidth - 0.5) * 20;
  const y = (e.clientY/window.innerHeight - 0.5) * 10;

  document.querySelector('.background-buildings').style.transform = `translate(${x/2}px, ${y/2}px)`;
  document.querySelector('.foreground-buildings').style.transform = `translate(${x}px, ${y}px)`;
});

// ---------- Dynamic Twinkling Windows ----------
const allWindows = document.querySelectorAll('.bb1-window, .bb4-window, .fb1c, .fb2-window, .fb3-window, .fb4-window');
function randomWindowTwinkle(){
  const w = allWindows[Math.floor(Math.random()*allWindows.length)];
  w.style.opacity = 0.1;
  setTimeout(()=> w.style.opacity = 1, Math.random()*1500+500);
}
setInterval(randomWindowTwinkle, 300);

// ---------- Create Clouds ----------
function createCloud(topPercent, duration){
  const cloud = document.createElement('div');
  cloud.className = 'cloud';
  cloud.style.top = topPercent + '%';
  cloud.style.animationDuration = duration + 's';
  document.body.appendChild(cloud);
  setTimeout(()=> cloud.remove(), duration * 1000); // remove after animation
}

// Create multiple clouds at random intervals
setInterval(()=>{
  const top = Math.random()*30; // top 0-30% of sky
  const duration = Math.random()*60 + 60; // 60-120s for slow drift
  createCloud(top, duration);
}, 5000);

