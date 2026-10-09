/* Khung trang dùng chung — đọc window.SITE_CONFIG (config.js) + window.SITE_I18N (i18n.js).
 * kind = "spa" | "restaurant". Không cần sửa file này khi làm cho tiệm mới. */
(function(){
"use strict";
var C = window.SITE_CONFIG, ALL = window.SITE_I18N, KIND = C.kind || "spa";
var LANGS = ["vi","en","ko","zh","ru"], SHORT = {vi:"VI",en:"EN",ko:"KO",zh:"中文",ru:"RU"};
var VIA = ["phone","whatsapp","telegram","kakao","wechat","messenger","line"];
var VIA_NAME = {whatsapp:"WhatsApp",telegram:"Telegram",kakao:"KakaoTalk",wechat:"WeChat",messenger:"Messenger",line:"LINE"};
var VIA_DEFAULT = {vi:"phone",en:"whatsapp",ko:"kakao",zh:"wechat",ru:"telegram"};
var OCC = ["none","birthday","anniversary","honeymoon","business","other"];
var ITEMS = C.items || C.services || [];
var lang = "vi", viaTouched = false, ref = makeRef();
var $ = function(s,r){return (r||document).querySelector(s)}, $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

function pick(o,l){ if(o==null) return ""; if(typeof o==="string") return o; l=l||lang; return o[l]||o.en||o.vi||""; }
function t(k){ var K=ALL[KIND]||{}, c=ALL.common; return (K[lang]&&K[lang][k])||(c[lang]&&c[lang][k])||(K.en&&K.en[k])||c.en[k]||k; }
function vnd(n){ return n.toLocaleString("vi-VN")+" ₫"; }
function usd(n){ var v=n/C.usdRate; return "≈ US$"+(v>=100?Math.round(v):(Math.round(v*10)/10).toFixed(v<10?1:0)).toString().replace(/\.0$/,""); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]}); }
function icon(id,cls){ return '<svg class="i'+(cls?' '+cls:'')+'"><use href="#i-'+id+'"/></svg>'; }
function pad(n){ return String(n).padStart(2,"0"); }
function iso(d){ return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function toM(s){ var p=s.split(":"); return +p[0]*60 + +p[1]; }
function makeRef(){ var d=new Date(); return (C.refPrefix||"BK")+"-"+String(d.getFullYear()).slice(2)+pad(d.getMonth()+1)+pad(d.getDate())+"-"+Math.floor(1000+Math.random()*9000); }
function guests(n){ if(lang==="ru"){ var m10=n%10,m100=n%100, f=(m10===1&&m100!==11)?"гость":(m10>=2&&m10<=4&&(m100<12||m100>14))?"гостя":"гостей"; return n+" "+f; }
  return n+(lang==="ko"||lang==="zh"?"":" ")+t("guests_unit"); }
function itemById(id){ for(var i=0;i<ITEMS.length;i++) if(ITEMS[i].id===id) return ITEMS[i]; return null; }
function fmtDate(s){ if(!s) return ""; var d=new Date(s+"T12:00:00"); try{ return d.toLocaleDateString(t("_html"),{weekday:"short",day:"numeric",month:"short",year:"numeric"}); }catch(e){ return s; } }

/* ---------- ngôn ngữ ---------- */
function detect(){
  var q=(location.search.match(/[?&]lang=([a-z]{2})/i)||[])[1];
  if(q && LANGS.indexOf(q.toLowerCase())>-1) return q.toLowerCase();
  try{ var s=localStorage.getItem("site_lang"); if(s && LANGS.indexOf(s)>-1) return s; }catch(e){}
  var list=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"vi"];
  for(var i=0;i<list.length;i++){ var c=String(list[i]).slice(0,2).toLowerCase(); if(LANGS.indexOf(c)>-1) return c; }
  return "en";
}
var cjkLoaded={};
function loadCJK(l){ // chỉ tải font Hàn/Trung khi cần → trang nhẹ cho các ngôn ngữ khác
  var fam = l==="ko" ? "Noto+Serif+KR:wght@400;500&family=Noto+Sans+KR:wght@300;400;500" : l==="zh" ? "Noto+Serif+SC:wght@400;500&family=Noto+Sans+SC:wght@300;400;500" : "";
  if(!fam || cjkLoaded[l]) return; cjkLoaded[l]=1;
  var k=document.createElement("link"); k.rel="stylesheet"; k.href="https://fonts.googleapis.com/css2?family="+fam+"&display=swap"; document.head.appendChild(k);
}
function setLang(l, save){
  lang=l; if(save){ try{localStorage.setItem("site_lang",l)}catch(e){} }
  document.documentElement.lang=t("_html"); loadCJK(l);
  $$("[data-i18n]").forEach(function(el){ el.textContent=t(el.getAttribute("data-i18n")); });
  $$("[data-i18n-ph]").forEach(function(el){ el.placeholder=t(el.getAttribute("data-i18n-ph")); });
  $("#langCode").textContent=SHORT[l];
  $$("#langList button,#ftLangs button").forEach(function(b){ b.setAttribute("aria-current", b.dataset.l===l); });
  document.title=C.name+" — "+pick(C.tagline);
  render();
}

/* ---------- render nội dung theo ngôn ngữ ---------- */
function render(){
  var open=toM(C.hours.open), close=toM(C.hours.close), now=new Date(), nm=now.getHours()*60+now.getMinutes(), isOpen=nm>=open&&nm<close;
  var hrs=pick(C.hours.days)+" · "+C.hours.open+" – "+C.hours.close;
  $("#heroTitle").innerHTML=pick(C.heroTitle)?pick(C.heroTitle):esc(C.name);
  $("#heroTag").textContent=pick(C.tagline);
  $("#openDot").className="dot"+(isOpen?"":" off");
  $("#openTxt").textContent=(isOpen?t("open_now"):t("closed_now"))+" · "+C.hours.open+" – "+C.hours.close;
  $("#drawerMeta").textContent=C.phone+" · "+C.hours.open+" – "+C.hours.close;

  // about
  $("#aboutTitle").textContent=pick(C.about.title);
  $("#aboutText").innerHTML=pick(C.about.text).split("\n").map(function(p){return "<p>"+esc(p)+"</p>"}).join("");
  $("#aboutSig").textContent=pick(C.about.signature);
  $("#aboutImg").alt=pick(C.about.title);

  // why
  $("#whyGrid").innerHTML=(C.highlights||[]).map(function(h,i){
    return '<div class="why-item rv'+(i?' d'+Math.min(i,2):'')+'">'+icon(h.icon)+'<span class="n">0'+(i+1)+'</span><h3>'+esc(pick(h.title))+'</h3><p>'+esc(pick(h.text))+'</p></div>';
  }).join("");

  // offer: spa = thẻ có ảnh; restaurant = món đặc trưng + thực đơn chấm dẫn
  var cardItems = KIND==="restaurant" ? ITEMS.filter(function(x){return x.featured}) : ITEMS;
  var cards='<div class="cards">'+cardItems.map(function(s,i){
    var meta = s.minutes ? s.minutes+" "+t("minutes") : pick((C.categories||[]).filter(function(c){return c.id===s.category}).map(function(c){return c.name})[0]);
    return '<article class="card rv'+(i%3?' d'+(i%3):'')+'"><div class="ph"><img src="'+esc(s.image)+'" alt="'+esc(pick(s.name))+'" loading="lazy" width="960" height="720"></div>'+
      '<div class="bd"><div class="meta">'+esc(meta)+'</div><h3>'+esc(pick(s.name))+'</h3><p>'+esc(pick(s.desc))+'</p>'+
      '<div class="row"><div class="price">'+vnd(s.price)+(s.unit?' <span style="font-size:15px">'+esc(pick(s.unit))+'</span>':'')+'<small>'+usd(s.price)+'</small></div>'+
      (KIND==="spa"?'<button type="button" class="link pick" data-id="'+esc(s.id)+'">'+esc(t("choose"))+icon("arrow")+'</button>':'')+'</div></div></article>';
  }).join("")+'</div><div class="swipe">'+esc(t("swipe"))+icon("arrow")+'</div>';
  if(KIND==="restaurant"){
    cards = '<div class="center rv" style="margin-top:72px"><span class="kicker">'+esc(t("signature"))+'</span></div>'+cards.replace('<div class="cards">','<div class="cards" style="margin-top:40px">');
    cards += '<div class="menu">'+(C.categories||[]).map(function(c){
      var rows=ITEMS.filter(function(x){return x.category===c.id}).map(function(m){
        return '<div class="mi"><div class="top"><span class="nm">'+esc(pick(m.name))+'</span><span class="lead-dots"></span><span class="pr">'+vnd(m.price)+'</span></div>'+
               '<div class="ds"><span>'+esc(pick(m.desc))+(m.unit?' · '+esc(pick(m.unit)):'')+'</span><span class="usd">'+usd(m.price)+'</span></div></div>';
      }).join("");
      return '<div class="menu-cat rv"><h3>'+esc(pick(c.name))+'</h3><div class="orn"><svg class="i" style="width:120px;height:12px" viewBox="0 0 120 12"><use href="#i-orn"/></svg></div>'+rows+'</div>';
    }).join("")+'</div>';
  }
  $("#offerBody").innerHTML=cards;

  // gallery
  $("#gal").innerHTML=(C.gallery||[]).map(function(g,i){ return '<figure class="rv'+(i%3?' d'+(i%3):'')+'"><img src="'+esc(g.src)+'" alt="'+esc(pick(g.alt))+'" loading="lazy"></figure>'; }).join("");

  // reviews — chỉ review thật trong config
  var revs=C.reviews||[], rb;
  if(revs.length){
    rb='<div class="rv-list">'+revs.map(function(r){ return '<div class="quote"><span class="qm">“</span><p>'+esc(r.text)+'</p><div class="stars">'+"★★★★★".slice(0,Math.max(0,Math.min(5,r.stars|0)))+'</div><div class="who">'+esc(r.author)+(r.source?' · '+esc(r.source):'')+'</div></div>'; }).join("")+'</div>';
  } else {
    rb='<div class="quote"><span class="qm">“</span><p>'+esc(t("reviews_empty"))+'</p><div class="who">— '+esc(t("reviews_title"))+'</div></div>';
  }
  if(C.reviewsLink) rb+='<p style="margin-top:34px"><a class="link" target="_blank" rel="noopener" href="'+esc(C.reviewsLink)+'">'+esc(t("reviews_link"))+icon("arrow")+'</a></p>';
  $("#revBody").innerHTML=rb;

  // visit + footer
  $("#vHours").textContent=hrs; $("#vAddr").textContent=C.address; $("#vPhone").textContent=C.phone;
  $("#ftHours").textContent=hrs; $("#ftAddr").textContent=C.address; $("#ftPhone").textContent=C.phone;
  $("#ftTag").textContent=pick(C.tagline);
  $("#ftCopy").textContent="© "+new Date().getFullYear()+" "+C.name;

  renderFormOptions(); updateSummary(); observe();
}

/* ---------- phần tĩnh (1 lần) ---------- */
function initStatic(){
  $("#demoBar").hidden=!C.isDemo; if(C.isDemo){ document.body.classList.add("has-demo"); var sd=function(){ document.documentElement.style.setProperty("--demo-h",$("#demoBar").offsetHeight+"px"); }; sd(); addEventListener("resize",sd); }
  var mark = KIND==="restaurant" ? "fish" : "lotus";
  $("#brand").innerHTML=icon(mark,"mk")+'<span class="bn-full">'+esc(C.name)+'</span>'+(C.shortName?'<span class="bn-short">'+esc(C.shortName)+'</span>':'');
  if(C.shortName) document.body.classList.add("has-short");
  $("#ftBrand").textContent=C.name; $("#tBrand").textContent=C.name; $("#refNo").textContent=ref;
  // hero
  var pic=$("#heroPic");
  pic.innerHTML=(C.heroImageMobile?'<source media="(max-width:700px)" srcset="'+esc(C.heroImageMobile)+'">':'')+'<img src="'+esc(C.heroImage)+'" alt="" fetchpriority="high" style="object-position:'+esc(C.heroFocus||"50% 50%")+'">';
  var pre=$("#heroPreload"); pre.href = (C.heroImageMobile && innerWidth<=700) ? C.heroImageMobile : C.heroImage;
  $("#aboutImg").src=C.about.image;
  // lang menus
  $("#langList").innerHTML=LANGS.map(function(l){ return '<li><button type="button" data-l="'+l+'" lang="'+ALL.common[l]._html+'">'+ALL.common[l]._name+'<span></span></button></li>'; }).join("");
  $("#ftLangs").innerHTML=LANGS.map(function(l){ return '<button type="button" data-l="'+l+'" lang="'+ALL.common[l]._html+'">'+ALL.common[l]._name+'</button>'; }).join("");
  var lw=$("#lang");
  lw.firstElementChild.addEventListener("click",function(e){ e.stopPropagation(); var o=lw.classList.toggle("open"); this.setAttribute("aria-expanded",o); });
  document.addEventListener("click",function(e){ var b=e.target.closest("[data-l]"); if(b){ setLang(b.dataset.l,true); lw.classList.remove("open"); return; } if(!e.target.closest("#lang")) lw.classList.remove("open"); });
  // drawer
  $("#burger").addEventListener("click",function(){ document.body.classList.toggle("menu-open"); });
  $$("#drawer a").forEach(function(a){ a.addEventListener("click",function(){ document.body.classList.remove("menu-open"); }); });
  // header + dock on scroll
  var site=$("#site"), dock=$("#dock"), hero=$("#hero");
  function onScroll(){ var y=scrollY, h=hero.offsetHeight; site.classList.toggle("solid", y>h-90); dock.classList.toggle("show", y>h*.7); }
  addEventListener("scroll",onScroll,{passive:true}); onScroll();
  if("IntersectionObserver" in window){ new IntersectionObserver(function(es){ dock.classList.toggle("away", es[0].isIntersecting); },{rootMargin:"-30% 0px -30% 0px"}).observe($("#book")); }
  // contacts
  $("#dirBtn").href=C.mapsLink; $("#callBtn").href=$("#dockCall").href="tel:"+C.phoneLink;
  var ch=[]; if(C.whatsapp) ch.push(["WhatsApp","https://wa.me/"+C.whatsapp]); if(C.telegramUser) ch.push(["Telegram","https://t.me/"+C.telegramUser]);
  if(C.messenger) ch.push(["Messenger",C.messenger]); if(C.kakao) ch.push(["KakaoTalk",C.kakao]);
  $("#chats").innerHTML=ch.map(function(c){ return '<a target="_blank" rel="noopener" href="'+esc(c[1])+'">'+c[0]+'</a>'; }).join(""); if(!ch.length) $("#chats").hidden=true;
  // map lazy
  if(C.mapsEmbed){ var mb=$("#mapBox"), load=function(){ if(mb.querySelector("iframe")) return; mb.insertAdjacentHTML("beforeend",'<iframe title="map" referrerpolicy="no-referrer-when-downgrade" src="'+esc(C.mapsEmbed)+'"></iframe>'); };
    if("IntersectionObserver" in window){ var io=new IntersectionObserver(function(es){ if(es[0].isIntersecting){ load(); io.disconnect(); } },{rootMargin:"400px"}); io.observe(mb); } else load(); }
  // dải tác giả (tuỳ chọn, config.designer)
  var dz=C.designer; if(dz&&(dz.zalo||dz.telegram)){ var L=[];
    if(dz.zalo) L.push('<a target="_blank" rel="noopener" href="'+esc(dz.zalo.url)+'"><img src="'+esc(dz.zalo.qr)+'" alt="QR Zalo" width="58" height="58" loading="lazy"><span><b>Zalo</b>'+esc(dz.zalo.label)+'</span></a>');
    if(dz.telegram) L.push('<a target="_blank" rel="noopener" href="'+esc(dz.telegram.url)+'"><img src="'+esc(dz.telegram.qr)+'" alt="QR Telegram" width="58" height="58" loading="lazy"><span><b>Telegram</b>'+esc(dz.telegram.label)+'</span></a>');
    $("#dzLinks").innerHTML=L.join(""); $("#designer").hidden=false; }
  buildForm();
}

/* ---------- reveal on scroll ---------- */
var rio = "IntersectionObserver" in window ? new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); rio.unobserve(e.target); } }); },{rootMargin:"0px 0px -8% 0px"}) : null;
function observe(){ $$(".rv:not(.in)").forEach(function(el){ if(rio) rio.observe(el); else el.classList.add("in"); }); }

/* ---------- form ---------- */
function F(label, inner, cls, req){ return '<label class="f'+(cls?' '+cls:'')+'"><span><span data-i18n="'+label+'">'+esc(t(label))+'</span>'+(req?' <span class="req">*</span>':'')+'</span>'+inner+'</label>'; }
function buildForm(){
  var maxP=(C.booking&&C.booking.maxPeople)||(KIND==="restaurant"?30:10), defP=KIND==="restaurant"?2:1;
  var h='<form id="bf" novalidate><div class="t-body"><div class="t-form">';
  h+='<fieldset class="fs"><legend><i>I.</i><span data-i18n="sec_guest"></span></legend><div class="grid2">';
  h+=F("f_name",'<input name="name" autocomplete="name" required maxlength="80">',"full",1);
  h+='<div class="contact-row full">'+F("f_via",'<select name="via" id="via"></select>')+F("f_contact",'<input name="contact" autocomplete="tel" required maxlength="80" data-i18n-ph="f_contact_ph">',"",1)+'</div>';
  h+='</div></fieldset>';
  if(KIND==="spa"){
    h+='<fieldset class="fs"><legend><i>II.</i><span data-i18n="sec_service"></span></legend><div class="grid2">';
    h+=F("f_service",'<select name="service" id="service" required></select>',"full",1);
    h+='</div></fieldset>';
  }
  h+='<fieldset class="fs"><legend><i>'+(KIND==="spa"?"III.":"II.")+'</i><span data-i18n="sec_time"></span></legend><div class="grid2">';
  h+=F("f_date",'<input type="date" name="date" id="date" required>',"",1)+F("f_time",'<select name="time" id="time" required></select>',"",1);
  h+=F("f_people",'<div class="stepper"><button type="button" data-step="-1" aria-label="-">−</button><input type="number" name="people" id="people" min="1" max="'+maxP+'" value="'+defP+'" inputmode="numeric"><button type="button" data-step="1" aria-label="+">+</button></div>',"",0);
  if(KIND==="restaurant") h+=F("f_occasion",'<select name="occasion" id="occasion"></select>');
  h+='</div></fieldset>';
  h+='<fieldset class="fs"><legend><i>'+(KIND==="spa"?"IV.":"III.")+'</i><span data-i18n="'+(KIND==="restaurant"?"sec_extra":"f_note")+'"></span></legend><div class="grid2">';
  if(KIND==="restaurant") h+=F("f_allergy",'<input name="allergy" maxlength="200" data-i18n-ph="f_allergy_ph">',"full");
  h+=F("f_note",'<textarea name="note" maxlength="500" data-i18n-ph="f_note_ph"></textarea>',"full");
  h+='</div></fieldset><div class="hp" aria-hidden="true"><input name="website" tabindex="-1" autocomplete="off"></div></div>';
  h+='<aside class="t-side"><div class="stick"><h4 data-i18n="summary"></h4><div id="sum"></div>'+
     '<button class="btn btn-moss" type="submit" id="sb" data-i18n="submit"></button><p class="err" id="err" role="alert"></p><p class="privacy" data-i18n="privacy"></p></div></aside>';
  h+='</div></form>';
  $("#tInner").innerHTML=h;
  var d=new Date(), dt=$("#date"); dt.min=iso(d); dt.max=iso(new Date(d.getTime()+90*864e5)); dt.value=iso(d);
  fillTimes();
  var f=$("#bf");
  f.addEventListener("input",updateSummary); f.addEventListener("change",function(e){ if(e.target.id==="date") fillTimes(); if(e.target.id==="via") viaTouched=true; updateSummary(); });
  f.addEventListener("click",function(e){ var b=e.target.closest("[data-step]"); if(!b) return; var p=$("#people"); p.value=Math.max(1,Math.min(+p.max,(parseInt(p.value,10)||1)+(+b.dataset.step))); updateSummary(); });
  f.addEventListener("submit",submit);
  document.addEventListener("click",function(e){ var b=e.target.closest(".pick"); if(!b) return; $("#service").value=b.dataset.id; updateSummary(); $("#book").scrollIntoView({behavior:"smooth"}); });
}
function fillTimes(){
  var sel=$("#time"), cur=sel.value, o=toM(C.hours.open), c=toM(C.hours.close)-(C.lastBookingBeforeClose||60), step=C.slotMinutes||30;
  var today=$("#date").value===iso(new Date()), now=new Date(), nm=now.getHours()*60+now.getMinutes()+30, opts=['<option value="">--:--</option>'];
  for(var m=o;m<=c;m+=step){ var v=pad(Math.floor(m/60))+":"+pad(m%60); opts.push('<option'+(today&&m<nm?' disabled':'')+'>'+v+'</option>'); }
  sel.innerHTML=opts.join(""); sel.value=cur; if(sel.selectedOptions[0]&&sel.selectedOptions[0].disabled) sel.value="";
}
function renderFormOptions(){
  if(!$("#bf")) return;
  var v=$("#via"), vv=v.value;
  v.innerHTML=VIA.map(function(k){ return '<option value="'+k+'">'+esc(k==="phone"?t("via_phone"):VIA_NAME[k])+'</option>'; }).join("");
  v.value=viaTouched&&vv?vv:VIA_DEFAULT[lang];
  var s=$("#service"); if(s){ var sv=s.value; s.innerHTML='<option value="">'+esc(t("f_choose"))+'</option>'+ITEMS.map(function(x){ return '<option value="'+esc(x.id)+'">'+esc(pick(x.name))+(x.minutes?' · '+x.minutes+' '+esc(t("minutes")):'')+'</option>'; }).join(""); s.value=sv; }
  var oc=$("#occasion"); if(oc){ var ov=oc.value||"none"; oc.innerHTML=OCC.map(function(k){ return '<option value="'+k+'">'+esc(t("occ_"+k))+'</option>'; }).join(""); oc.value=ov; }
}
function readForm(){
  var f=$("#bf"), s=KIND==="spa"?itemById(f.service.value):null, people=Math.max(1,Math.min(+f.people.max,parseInt(f.people.value,10)||1));
  return { f:f, s:s, people:people };
}
function updateSummary(){
  if(!$("#sum")) return;
  var r=readForm(), f=r.f, rows=[];
  if(KIND==="spa") rows.push([t("f_service"), r.s?pick(r.s.name):t("sum_empty")]);
  rows.push([t("f_date"), f.date.value?fmtDate(f.date.value):t("sum_empty")]);
  rows.push([t("f_time"), f.time.value||t("sum_empty")]);
  rows.push([t("f_people"), guests(r.people)]);
  if(KIND==="restaurant" && f.occasion && f.occasion.value!=="none") rows.push([t("f_occasion"), t("occ_"+f.occasion.value)]);
  var h=rows.map(function(x){ return '<div class="sumrow"><span class="k">'+esc(x[0])+'</span><span class="d"></span><span class="v">'+esc(x[1])+'</span></div>'; }).join("");
  if(KIND==="spa"){ var tot=r.s?r.s.price*r.people:0; h+='<div class="sumtotal"><span class="k">'+esc(t("total"))+'</span><div><div class="v">'+(tot?vnd(tot):"—")+'</div>'+(tot?'<small>'+usd(tot)+'</small>':'')+'</div></div>'; }
  $("#sum").innerHTML=h;
}

/* ---------- gửi ---------- */
function ownerText(b){ // tin cho chủ tiệm, luôn tiếng Việt
  var L=[(KIND==="restaurant"?"🍽 YÊU CẦU ĐẶT BÀN":"🌿 YÊU CẦU ĐẶT LỊCH")+" — "+C.name, "Mã: "+b.ref, "Khách: "+b.name, "Liên hệ: "+b.contact+" ("+b.via+")"];
  if(b.serviceName) L.push("Liệu trình: "+b.serviceName);
  L.push("Ngày giờ: "+b.date+" "+b.time, (KIND==="restaurant"?"Số khách: ":"Số người: ")+b.people);
  if(b.occasion) L.push("Dịp: "+b.occasion); if(b.allergy) L.push("Dị ứng/ăn kiêng: "+b.allergy);
  if(b.total) L.push("Tạm tính: "+vnd(b.total)); L.push("Ngôn ngữ khách: "+b.lang.toUpperCase()); if(b.note) L.push("Ghi chú: "+b.note);
  return L.join("\n");
}
function submit(e){
  e.preventDefault();
  var r=readForm(), f=r.f, err=$("#err"); err.textContent="";
  if(f.website.value) return;
  if(!f.name.value.trim()||!f.contact.value.trim()||(KIND==="spa"&&!r.s)||!f.date.value||!f.time.value){ err.textContent=t("err_required"); return; }
  if(new Date(f.date.value+"T"+f.time.value+":00").getTime()<Date.now()){ err.textContent=t("err_past"); return; }
  var b={ kind:KIND, ref:ref, name:f.name.value.trim(), contact:f.contact.value.trim(), via:f.via.value==="phone"?"Điện thoại":VIA_NAME[f.via.value],
    date:f.date.value, time:f.time.value, people:r.people, note:f.note.value.trim(), lang:lang, createdAt:new Date().toISOString() };
  if(r.s){ b.service=r.s.id; b.serviceName=pick(r.s.name,"vi")+" ("+r.s.minutes+"')"; b.total=r.s.price*r.people; }
  if(KIND==="restaurant"){ b.occasion=f.occasion.value!=="none"?pick(ALL.restaurant.vi["occ_"+f.occasion.value]):""; b.allergy=f.allergy.value.trim(); }
  b.text=ownerText(b);
  try{ var key=KIND+"_bookings", all=JSON.parse(localStorage.getItem(key)||"[]"); all.push(b); localStorage.setItem(key,JSON.stringify(all)); }catch(x){}
  var bk=C.booking||{}, mode=bk.mode||"local", btn=$("#sb"), p;
  if(mode==="worker"&&bk.workerUrl) p=fetch(bk.workerUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});
  else if(mode==="telegram"&&bk.telegramBotToken&&bk.telegramChatId) // CHỈ THỬ NGHIỆM — token lộ ra trình duyệt
    p=fetch("https://api.telegram.org/bot"+bk.telegramBotToken+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:bk.telegramChatId,text:b.text})});
  else { done(b,true); return; }
  btn.disabled=true; btn.textContent=t("sending");
  p.then(function(res){ if(!res.ok) throw new Error(res.status); done(b,false); })
   .catch(function(){ err.textContent=t("err_send")+" "+C.phone; })
   .then(function(){ if(document.body.contains(btn)){ btn.disabled=false; btn.textContent=t("submit"); } });
}
function done(b,isLocal){
  var rows=[[t("ok_ref"),b.ref],[t("f_name"),b.name]];
  if(b.service) rows.push([t("f_service"),pick(itemById(b.service).name)]);
  rows.push([t("f_date"),fmtDate(b.date)+" · "+b.time],[t("f_people"),guests(b.people)]);
  if(b.total) rows.push([t("total"),vnd(b.total)]);
  $("#tInner").innerHTML='<div class="done"><div class="ck">'+icon("check")+'</div><h3>'+esc(t("ok_title"))+'</h3><p>'+esc(t("ok_body"))+'</p>'+
    '<div class="receipt">'+rows.map(function(x){ return '<div class="sumrow"><span class="k">'+esc(x[0])+'</span><span class="d"></span><span class="v">'+esc(x[1])+'</span></div>'; }).join("")+'</div>'+
    (isLocal?'<p style="font-size:13px">'+esc(t("ok_demo"))+'</p>':'')+'<p style="margin-top:26px"><button class="link" type="button" onclick="location.reload()">'+esc(t("ok_again"))+'</button></p></div>';
  $("#ticket").scrollIntoView({behavior:"smooth",block:"start"});
}

initStatic();
setLang(detect(),false);
})();
