const $=s=>document.querySelector(s),C=['#f5c400','#1a4fd6','#e0201b','#5a1f9c','#f2700f','#0f8a43','#8c1c1c','#111'];
const bl=n=>`<i class="bl${n>8?' s':''}" data-n="${n}" style="--c:${C[(n-1)%8]}"></i>`;
const G='https://github.com/divyanshsaini251-ops/';
const SK=[['Languages','JavaScript (ES6+)|TypeScript|Python|SQL|HTML5|CSS3'],['Frontend','React.js|Vite|React Router|Redux|Context API|Axios|Tailwind CSS|Bootstrap|Responsive Design'],['Backend','Node.js|Express.js|Flask|RESTful API Design|Authentication & Authorization|RBAC'],['Databases','MongoDB|Mongoose|PostgreSQL|Prisma ORM|MySQL|Flask-SQLAlchemy'],['Security & Testing','JWT|bcrypt|AES-256-GCM|Jest|Supertest|API Testing|Protected Routes'],['Tools & DevOps','Git|GitHub|GitHub Actions|Docker|Postman|Vercel|Render|VS Code'],['Core CS','Data Structures & Algorithms|OOP|DBMS|Agile Basics']];
const PJ=[[9,'DocWatch','Secure Document Management System','React + TypeScript + Vite, Node.js + Express, PostgreSQL + Prisma, JWT, Docker, GitHub Actions',['Tracks expiry of passports, licenses, insurance and warranties with reminders, email and in-app alerts, a dashboard and a calendar view.','Workspace RBAC, AES-256-GCM encrypted uploads, immutable versions, signed download links and audit history.','Jest and Supertest integration tests, Docker setup and GitHub Actions CI.'],G+'DocWatch','#1fae63','#09592d'],
[10,'ShopEase','E-Commerce Web Application','React.js + Vite, Node.js + Express, MongoDB + Mongoose, JWT, bcrypt, Vercel, Render',['Product search, category filters, pagination, a persistent cart and multi-step checkout.','JWT auth with customer and admin roles, bcrypt hashing and server-side price recalculation at checkout.','Frontend on Vercel, backend on Render.'],G+'E-commerce-web-application','#2a8fe0','#0b3a78'],
[11,'TaskFlow','Task Manager with Role-Based Access','React.js + Vite, Python Flask, MySQL, REST API, JWT, bcrypt',['CRUD tasks with priority tags, due dates, status filters, keyword search and modal editing.','Admin and standard user roles on a Flask REST API with MySQL, JWT and bcrypt.','React Context, hooks, Router and Axios for protected routes and API calls.'],G+'Task-Manager','#d8453b','#6e1410']];
const EX=[[3,'Junior AI Executive','Flo','Jaipur, Rajasthan','Jun 2026 – Sep 2026','Applied Python and AI tools to automate routine business workflows, and tested, documented and refined AI-based solutions with the team.'],
[2,'Full Stack Developer','Bluebird Infotech','Kota, Rajasthan','May 2025 – Aug 2025','Built full-stack features with React.js, Node.js/Express and MongoDB, including REST APIs, authentication flows and Git-based team delivery.'],
[1,'JavaScript Developer','Appinop Technologies','Jaipur, Rajasthan','Jun 2024 – Aug 2024','Built responsive, cross-browser interfaces with JavaScript, HTML5 and CSS3, connected them to REST APIs and fixed bugs as part of the team.']];
$('#sk').innerHTML=SK.map((k,i)=>`<div class="cd">${bl(i+1)}<h3>${k[0]}</h3><p>${k[1].split('|').map(x=>`<span class="ch">${x}</span>`).join('')}</p></div>`).join('');
$('#pj').innerHTML=PJ.map((p,i)=>`<article class="cd"><div class="th" style="--a:${p[6]};--b:${p[7]}">${bl(p[0])}<b class="bg">Table ${i+1}</b></div><h3>${p[1]}</h3><h4>${p[2]}</h4><em>${p[3]}</em><ul>${p[4].map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn" href="${p[5]}" target="_blank" rel="noopener">View on GitHub</a></article>`).join('');
$('#ex').innerHTML=EX.map(e=>`<div class="lv cd"><span class="lb">LV ${e[0]}</span><div><h3 style="margin-top:0">${e[1]}</h3><h4>${e[2]}, ${e[3]}</h4><small>${e[4]}</small><p style="margin:6px 0 0">${e[5]}</p><div class="xp"><i></i></div></div></div>`).join('');
$('#ed').innerHTML=[[13,'B.Tech, Computer Science & Engineering','Poornima University, Jaipur','2022 – 2026, 74.10%'],[12,'Class XII (RBSE)','Abhigyan Senior Secondary School, Kota','2022, 80.20%']].map(e=>`<div class="cd">${bl(e[0])}<h3>${e[1]}</h3><h4>${e[2]}</h4><em>${e[3]}</em></div>`).join('');
$('#nm').innerHTML=[...'Divyansh Saini'].map((c,i)=>c==' '?'<span style="width:.35em"></span>':`<span style="animation-delay:${i*.07+1.3}s">${c}</span>`).join('');
const RL=['MERN Stack Developer','Full-Stack Developer','React.js Developer','Node.js Developer'];let ri=0,ci=0,dl=0;
(function ty(){const w=RL[ri];ci+=dl?-1:1;$('#ty').textContent=w.slice(0,ci);let t=dl?35:75;if(!dl&&ci==w.length){dl=1;t=1500}else if(dl&&ci==0){dl=0;ri=(ri+1)%RL.length;t=300}setTimeout(ty,t)})();
setTimeout(()=>$('#ld').classList.add('x'),1600);

/* router */
let cur='home';const P=['home','play','skills','tables','career','chat'];
function show(){let id=location.hash.slice(1);if(!P.includes(id))id='home';cur=id;P.forEach(p=>$('#'+p).classList.toggle('on',p==id));document.querySelectorAll('#tab a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+id));scrollTo(0,0)}
addEventListener('hashchange',show);show();
function toast(t){const e=$('#ts');e.textContent=t;e.classList.add('on');clearTimeout(e.h);e.h=setTimeout(()=>e.classList.remove('on'),2400)}

/* chat */
const EM='divyanshsaini251@gmail.com',QM=['Hi Divyansh! I saw your portfolio and loved it.','We have an open role and would like to talk.','Can we schedule an interview?','Good shot! Let us connect.'];
$('#qc').innerHTML=QM.map(m=>`<button type="button" class="ch q">${m}</button>`).join('');
function sync(){const n=$('#cn').value.trim(),m=($('#cm').value.trim()||QM[0])+(n?'\n\n'+n:'');
 $('#se').href='mailto:'+EM+'?subject='+encodeURIComponent('Portfolio message'+(n?' from '+n:''))+'&body='+encodeURIComponent(m);
 $('#sw').href='https://wa.me/916377808960?text='+encodeURIComponent(m)}
$('#qc').onclick=e=>{const b=e.target.closest('.q');if(b){$('#cm').value=b.textContent;sync()}};
$('#cn').oninput=$('#cm').oninput=sync;sync();
document.addEventListener('click',e=>{const c=e.target.closest('[data-cp]');if(!c)return;const v=c.dataset.cp,f=()=>toast('Copy blocked, select the text instead');try{navigator.clipboard.writeText(v).then(()=>toast('Copied '+v),f)}catch(x){f()}});

/* sound */
let ac,mute=0;
function snd(v,f){if(mute||!ac||v<.04)return;const t=ac.currentTime,o=ac.createOscillator(),gn=ac.createGain();o.type='triangle';o.frequency.value=f;gn.gain.setValueAtTime(Math.min(.45,v),t);gn.gain.exponentialRampToValueAtTime(.001,t+.09);o.connect(gn);gn.connect(ac.destination);o.start(t);o.stop(t+.1)}
$('#mu').onclick=()=>{mute=!mute;$('#mu').textContent=mute?'🔇':'🔊'};

/* pool game */
const cv=$('#cv'),g=cv.getContext('2d'),TW=800,TH=400,RB=34,R=11.5,PW=150;
const D=Math.min(devicePixelRatio||1,2);cv.width=TW*D;cv.height=TH*D;g.setTransform(D,0,0,D,0,0);
const pk=[[RB-6,RB-6,26],[TW-RB+6,RB-6,26],[RB-6,TH-RB+6,26],[TW-RB+6,TH-RB+6,26],[TW/2,RB-10,23],[TW/2,TH-RB+10,23]];
let bs=[],cue,potted=[],shots=0,aim=null,fire=null,tb;
function dm(t,x,y){t.save();t.translate(x,y);t.rotate(.785);t.fillRect(-3.5,-3.5,7,7);t.restore()}
function mkTable(){tb=document.createElement('canvas');tb.width=TW*D;tb.height=TH*D;const t=tb.getContext('2d');t.scale(D,D);
 let w=t.createLinearGradient(0,0,0,TH);w.addColorStop(0,'#7a4522');w.addColorStop(.5,'#4a260f');w.addColorStop(1,'#7a4522');t.fillStyle=w;t.fillRect(0,0,TW,TH);
 t.strokeStyle='rgba(255,255,255,.14)';t.lineWidth=2;t.strokeRect(3,3,TW-6,TH-6);
 t.fillStyle='#0b5c31';t.fillRect(RB-9,RB-9,TW-2*RB+18,TH-2*RB+18);
 const f=t.createRadialGradient(TW/2,TH/2,40,TW/2,TH/2,TW*.62);f.addColorStop(0,'#21b366');f.addColorStop(1,'#08572c');t.fillStyle=f;t.fillRect(RB,RB,TW-2*RB,TH-2*RB);
 t.fillStyle='#f3e6c4';for(let i=1;i<8;i++){if(i==4)continue;const x=RB+(TW-2*RB)*i/8;dm(t,x,RB/2-1);dm(t,x,TH-RB/2+1)}
 for(let i=1;i<4;i++){const y=RB+(TH-2*RB)*i/4;dm(t,RB/2-1,y);dm(t,TW-RB/2+1,y)}
 t.strokeStyle='rgba(255,255,255,.25)';t.lineWidth=1.5;t.beginPath();t.moveTo(TW*.25,RB);t.lineTo(TW*.25,TH-RB);t.stroke();
 t.fillStyle='rgba(255,255,255,.35)';for(const x of[TW*.25,TW*.7]){t.beginPath();t.arc(x,TH/2,2.5,0,7);t.fill()}
 for(const p of pk){const q=t.createRadialGradient(p[0],p[1],2,p[0],p[1],p[2]);q.addColorStop(0,'#000');q.addColorStop(.85,'#060606');q.addColorStop(1,'#2a1608');t.fillStyle=q;t.beginPath();t.arc(p[0],p[1],p[2]*.92,0,7);t.fill()}}
function mk(n,x,y){const b={n,x,y,vx:0,vy:0,c:n?C[(n-1)%8]:'#f4f4f4',roll:0,hd:0,s:1,t:0};bs.push(b);return b}
function rack(){bs=[];potted=[];shots=0;aim=fire=null;$('#tray').innerHTML='';const o=[1,9,2,10,8,3,11,4,12,5,13,6,14,7,15],ax=TW*.7,ay=TH/2,dx=R*1.74,dy=R*2.02;let k=0;
 for(let r=0;r<5;r++)for(let j=0;j<=r;j++)mk(o[k++],ax+r*dx,ay+(j-r/2)*dy);cue=mk(0,TW*.25,ay);upd()}
function upd(){$('#sc').textContent='Shots '+shots+', potted '+potted.length+'/15'}
function pot(b){b.t=1;b.vx=b.vy=0;snd(.4,110);if(b!==cue){potted.push(b.n);$('#tray').insertAdjacentHTML('beforeend',bl(b.n));upd();if(potted.length==15)toast('Table cleared! Say hi: divyanshsaini251@gmail.com')}else toast('Scratch! Cue ball is back on the table.')}
function phys(){const d=.25,m=RB+R;
 for(const b of bs){if(b.t)continue;b.x+=b.vx*d;b.y+=b.vy*d;b.vx*=.995;b.vy*=.995;
  let sp=Math.hypot(b.vx,b.vy);if(sp<.5){b.vx*=.985;b.vy*=.985}
  if(sp<.04){b.vx=b.vy=0}else{b.hd=Math.atan2(b.vy,b.vx);b.roll+=sp*d/R}
  if(b.x<m){b.x=m;b.vx=Math.abs(b.vx)*.85;snd(sp/30,170)}if(b.x>TW-m){b.x=TW-m;b.vx=-Math.abs(b.vx)*.85;snd(sp/30,170)}
  if(b.y<m){b.y=m;b.vy=Math.abs(b.vy)*.85;snd(sp/30,170)}if(b.y>TH-m){b.y=TH-m;b.vy=-Math.abs(b.vy)*.85;snd(sp/30,170)}
  for(const p of pk)if(Math.hypot(b.x-p[0],b.y-p[1])<p[2]){pot(b);break}}
 for(let i=0;i<bs.length;i++){const a=bs[i];if(a.t)continue;
  for(let j=i+1;j<bs.length;j++){const b=bs[j];if(b.t)continue;const dx=b.x-a.x,dy=b.y-a.y,e=Math.hypot(dx,dy);
   if(e<2*R&&e>0){const nx=dx/e,ny=dy/e,o=(2*R-e)/2;a.x-=nx*o;a.y-=ny*o;b.x+=nx*o;b.y+=ny*o;
    const dot=(a.vx-b.vx)*nx+(a.vy-b.vy)*ny;if(dot>0){a.vx-=dot*nx;a.vy-=dot*ny;b.vx+=dot*nx;b.vy+=dot*ny;snd(dot/22,850+Math.random()*250)}}}}}
function ball(b){const r=R*b.s;if(r<.5)return;g.save();g.translate(b.x,b.y);
 g.fillStyle='rgba(0,0,0,.35)';g.beginPath();g.ellipse(r*.25,r*.35,r,r*.9,0,0,7);g.fill();
 g.beginPath();g.arc(0,0,r,0,7);g.clip();g.fillStyle=b.n>8?'#fff':b.c;g.fillRect(-r,-r,2*r,2*r);g.rotate(b.hd);
 if(b.n>8){g.fillStyle=b.c;g.fillRect(-r,-r*.55,2*r,r*1.1)}
 const px=Math.sin(b.roll)*r*.6,vis=Math.cos(b.roll);
 if(b.n&&vis>-.2){g.fillStyle='#fff';g.beginPath();g.ellipse(px,0,r*.42*Math.max(.35,vis),r*.42,0,0,7);g.fill();g.fillStyle='#111';g.font='bold '+r*.55+'px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText(b.n,px,1)}
 g.rotate(-b.hd);const gr=g.createRadialGradient(-r*.35,-r*.4,r*.1,0,0,r);gr.addColorStop(0,'rgba(255,255,255,.8)');gr.addColorStop(.25,'rgba(255,255,255,.12)');gr.addColorStop(1,'rgba(0,0,0,.45)');
 g.fillStyle=gr;g.fillRect(-r,-r,2*r,2*r);g.restore()}
function guide(a){const ux=Math.cos(a),uy=Math.sin(a),m=RB+R;let t=1e9,hit=null;
 const tx=ux>0?(TW-m-cue.x)/ux:ux<0?(m-cue.x)/ux:1e9,ty=uy>0?(TH-m-cue.y)/uy:uy<0?(m-cue.y)/uy:1e9;t=Math.min(tx,ty);
 for(const b of bs){if(b===cue||b.t)continue;const fx=cue.x-b.x,fy=cue.y-b.y,B=fx*ux+fy*uy,c=fx*fx+fy*fy-4*R*R,ds=B*B-c;if(ds>=0){const s=-B-Math.sqrt(ds);if(s>0&&s<t){t=s;hit=b}}}
 const ex=cue.x+ux*t,ey=cue.y+uy*t;g.setLineDash([7,7]);g.lineWidth=2;g.strokeStyle='rgba(255,255,255,.7)';g.beginPath();g.moveTo(cue.x,cue.y);g.lineTo(ex,ey);g.stroke();g.setLineDash([]);
 g.beginPath();g.arc(ex,ey,R,0,7);g.stroke();
 if(hit){const dx=hit.x-ex,dy=hit.y-ey,l=Math.hypot(dx,dy)||1;g.strokeStyle='rgba(255,230,120,.9)';g.beginPath();g.moveTo(hit.x,hit.y);g.lineTo(hit.x+dx/l*70,hit.y+dy/l*70);g.stroke()}}
const rdy=()=>!fire&&!cue.t&&!bs.some(b=>!b.t&&(b.vx||b.vy));
function draw(){g.drawImage(tb,0,0,TW,TH);
 if(aim&&aim.d>8&&rdy())guide(aim.a);
 for(const b of bs)ball(b);
 const s=fire||(aim&&aim.d>8&&rdy()?aim:null);
 if(s){const a=s.a,pull=fire?(1-fire.f/6)*fire.d:s.d,gap=R+5+pull*.6,c=Math.cos(a),n=Math.sin(a),x0=cue.x-c*gap,y0=cue.y-n*gap,x1=x0-c*320,y1=y0-n*320;
  const gr=g.createLinearGradient(x0,y0,x1,y1);gr.addColorStop(0,'#efdcae');gr.addColorStop(.1,'#c98a3a');gr.addColorStop(1,'#3b1e0c');
  g.lineCap='round';g.lineWidth=5;g.strokeStyle=gr;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke();g.strokeStyle='#58c8ff';g.lineWidth=5;g.beginPath();g.moveTo(x0,y0);g.lineTo(x0+c*2,y0+n*2);g.stroke()}}
function gframe(){
 if(cur=='play'){
  if(fire&&++fire.f>=6){const p=fire.d/PW*26;cue.vx=Math.cos(fire.a)*p;cue.vy=Math.sin(fire.a)*p;shots++;upd();snd(.45,300);fire=null}
  for(const b of bs)if(b.t){b.t++;b.s=Math.max(0,1-b.t/16);if(b===cue&&b.t>70){b.t=0;b.s=1;b.x=TW*.25;b.y=TH/2;b.vx=b.vy=0;if(bs.some(o=>o!==b&&!o.t&&Math.hypot(o.x-b.x,o.y-b.y)<2*R))b.x-=3*R}}
  for(let k=0;k<4;k++)phys();
  draw();$('#pm i').style.height=(aim&&rdy()?Math.min(100,aim.d/PW*100):0)+'%'}
 requestAnimationFrame(gframe)}
function pt(e){const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)*TW/r.width,y=(e.clientY-r.top)*TH/r.height,vx=cue.x-x,vy=cue.y-y;return{a:Math.atan2(vy,vx),d:Math.min(PW,Math.hypot(vx,vy))}}
cv.addEventListener('pointerdown',e=>{try{ac=ac||new(window.AudioContext||window.webkitAudioContext)()}catch(x){}if(!rdy())return;cv.setPointerCapture(e.pointerId);aim=pt(e)});
cv.addEventListener('pointermove',e=>{if(aim)aim=pt(e)});
cv.addEventListener('pointerup',e=>{if(!aim)return;const s=pt(e);aim=null;if(s.d>10&&rdy())fire={a:s.a,d:s.d,f:0}});
cv.addEventListener('pointercancel',()=>{aim=null});
$('#rk').onclick=rack;
mkTable();rack();gframe();
