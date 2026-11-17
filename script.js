var IMG={
 "i0503": "images/i0503.jpg",
 "i0508": "images/i0508.jpg",
 "i0509": "images/i0509.jpg",
 "i0510": "images/i0510.jpg",
 "i0511": "images/i0511.jpg",
 "i0512": "images/i0512.jpg",
 "i0513": "images/i0513.jpg",
 "i0514": "images/i0514.jpg",
 "i0515": "images/i0515.jpg",
 "i0516": "images/i0516.jpg",
 "i0517": "images/i0517.jpg",
 "i0518": "images/i0518.jpg",
 "i0520": "images/i0520.jpg",
 "i0525": "images/i0525.jpg",
 "i0526": "images/i0526.jpg",
 "lstand": "images/lstand.jpg",
 "lsofa": "images/lsofa.jpg",
 "lsnow": "images/lsnow.jpg"
};;
(function(){
document.querySelectorAll('[data-img]').forEach(function(e){e.style.backgroundImage='url('+IMG[e.dataset.img]+')';var p=e.closest('.ph');if(p)p.classList.add('img')});
var d=document,$=function(s){return d.querySelector(s)};
var hd=$('header');
/* header + parallax */
var bg=$('#herobg');
function onScroll(){var y=window.scrollY;hd.classList.toggle('solid',y>40||d.body.classList.contains('open'));if(y<window.innerHeight&&!matchMedia('(prefers-reduced-motion:reduce)').matches)bg.style.transform='translate3d(0,'+(y*.25)+'px,0)'}
addEventListener('scroll',onScroll,{passive:true});onScroll();
/* reveal */
var els=d.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}else els.forEach(function(el){el.classList.add('on')});
/* mobile nav */
var bu=$('#burger');
function setNav(o){d.documentElement.classList.toggle('open',o);hd.classList.toggle('open',o);d.body.classList.toggle('open',o);bu.setAttribute('aria-expanded',o);d.body.style.overflow=o?'hidden':'';onScroll()}
bu.onclick=function(){setNav(!d.body.classList.contains('open'))};
d.querySelectorAll('nav a').forEach(function(a){a.onclick=function(){setNav(false)}});
/* language */
var en=false;
$('#lang').onclick=function(){en=!en;d.documentElement.lang=en?'en':'ru';this.innerHTML=en?'<i>RU</i> <i>/</i> <b>EN</b>':'<b>RU</b> <i>/</i> <i>EN</i>';d.querySelectorAll('[data-en]').forEach(function(n){n.textContent=n.getAttribute(en?'data-en':'data-ru')})};
/* reviews */
var sl=d.querySelectorAll('.slide'),i=0,t;
function show(n){sl[i].classList.remove('on');i=(n+sl.length)%sl.length;sl[i].classList.add('on');$('#cnt').textContent='0'+(i+1)+' / 0'+sl.length}
function auto(){clearInterval(t);t=setInterval(function(){show(i+1)},7000)}
$('#next').onclick=function(){show(i+1);auto()};$('#prev').onclick=function(){show(i-1);auto()};auto();
/* gallery */
var G=[{n:'Женские портреты',c:['i0512','i0511','i0509','i0508','i0510','i0525','i0526']},
{n:'Фотосессия беременности',c:['i0513','i0514','i0515','i0516','i0517','i0518','i0520']},
{n:'Love Story',c:['lstand','lsofa','lsnow']}];
var g=0,k=0,lb=$('#lb'),last;
function draw(){var s=G[g];var f=$('#frame');f.style.background='center/contain no-repeat url('+IMG[s.c[k]]+')';f.textContent='';$('#lbt').textContent=s.n.toUpperCase();$('#lbc').textContent=(k+1)+' / '+s.c.length}
function open(n,btn){g=n;k=0;last=btn;draw();lb.classList.add('show');d.body.style.overflow='hidden';$('#lbx').focus()}
function close(){lb.classList.remove('show');d.body.style.overflow='';if(last)last.focus()}
function step(s){var m=G[g].c.length;k=(k+s+m)%m;draw()}
d.querySelectorAll('.tile').forEach(function(b){b.onclick=function(){open(+b.dataset.g,b)}});
$('#lbx').onclick=close;$('#lbn').onclick=function(){step(1)};$('#lbp').onclick=function(){step(-1)};
d.addEventListener('keydown',function(e){if(!lb.classList.contains('show')){if(e.key==='Escape'&&d.body.classList.contains('open'))setNav(false);return}
 if(e.key==='Escape')close();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
})();
