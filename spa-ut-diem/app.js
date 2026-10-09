/* Khung trang mẫu theo tiệm (v2) — đọc window.SITE_CONFIG (config.js) + window.SITE_I18N (i18n.js).
 * kind = "spa" | "restaurant" | "shop". Hỗ trợ: nhiều ngôn ngữ (C.langs), nhiều cơ sở (C.branches),
 * xe đón (C.booking.pickup), giá "Liên hệ" (price: null), giá theo thời lượng (variants),
 * chế độ đặt chỗ: local | worker | telegram | external (nút sang form sẵn có) | none (chỉ gọi/chỉ đường).
 * Không cần sửa file này khi làm cho tiệm mới. */
(function(){
"use strict";
var C = window.SITE_CONFIG, ALL = window.SITE_I18N, KIND = C.kind || "spa";
var LANGS = C.langs || ["vi","en","ko","zh","ru"];
var SHORT = {vi:"VI",en:"EN",ko:"KO",zh:"中文",ru:"RU",ja:"JA",fr:"FR"};
var VIA = C.contactVia || ["phone","whatsapp","zalo","telegram","kakao","wechat","line","messenger"];
var VIA_NAME = {whatsapp:"WhatsApp",telegram:"Telegram",kakao:"KakaoTalk",wechat:"WeChat",messenger:"Messenger",line:"LINE",zalo:"Zalo",email:"Email"};
var VIA_DEFAULT = {vi:"zalo",en:"whatsapp",ko:"kakao",zh:"wechat",ru:"telegram",ja:"line",fr:"whatsapp"};
var OCC = C.occasions || ["none","birthday","anniversary","honeymoon","business","other"];
var BK = C.booking || {}, MODE = BK.mode || "local", HASFORM = (MODE!=="none" && MODE!=="external");
var ITEMS = C.items || [];
var BR = C.branches || [];
var lang = LANGS[0], viaTouched = false, ref = makeRef();
var $ = function(s,r){return (r||document).querySelector(s)}, $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

function pick(o,l){ if(o==null) return ""; if(typeof o==="string"||typeof o==="number") return String(o); l=l||lang; return o[l]!=null?o[l]:(o.en!=null?o.en:(o.vi||"")); }
function t(k){ var O=C.i18n||{}, K=ALL[KIND]||{}, c=ALL.common;
  var v=(O[lang]&&O[lang][k])||(K[lang]&&K[lang][k])||(c[lang]&&c[lang][k])||(O.en&&O.en[k])||(K.en&&K.en[k])||c.en[k]||k;
  return String(v).replace(/\{name\}/g,C.name); }
function vnd(n){ return n.toLocaleString("vi-VN")+" ₫"; }
function usdN(n){ var v=n/C.usdRate; return (v>=100?Math.round(v):(Math.round(v*10)/10).toFixed(v<10?1:0)).toString().replace(/\.0$/,""); }
function usd(n){ return "≈ US$"+usdN(n); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]}); }
function icon(id,cls){ return '<svg class="i'+(cls?' '+cls:'')+'"><use href="#i-'+id+'"/></svg>'; }
function pad(n){ return String(n).padStart(2,"0"); }
function iso(d){ return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function toM(s){ var p=s.split(":"); return +p[0]*60 + +p[1]; }
function makeRef(){ var d=new Date(); return (C.refPrefix||"BK")+"-"+String(d.getFullYear()).slice(2)+pad(d.getMonth()+1)+pad(d.getDate())+"-"+Math.floor(1000+Math.random()*9000); }
function guests(n){ if(lang==="ru"){ var m10=n%10,m100=n%100, f=(m10===1&&m100!==11)?"гость":(m10>=2&&m10<=4&&(m100<12||m100>14))?"гостя":"гостей"; return n+" "+f; }
  if(lang==="fr") return n+" "+(n>1?"personnes":"personne");
  if(lang==="en") return n+" "+(n>1?"guests":"guest");
  return n+(lang==="ko"||lang==="zh"||lang==="ja"?"":" ")+t("guests_unit"); }
function mins(m){ return m+(lang==="ko"||lang==="zh"||lang==="ja"?"":" ")+t("minutes"); }
function fmtDate(s){ if(!s) return ""; var d=new Date(s+"T12:00:00"); try{ return d.toLocaleDateString(t("_html"),{weekday:"short",day:"numeric",month:"short",year:"numeric"}); }catch(e){ return s; } }
function catName(id){ for(var i=0;i<(C.categories||[]).length;i++) if(C.categories[i].id===id) return pick(C.categories[i].name); return ""; }
function branchById(id){ for(var i=0;i<BR.length;i++) if(BR[i].id===id) return BR[i]; return null; }

/* lựa chọn đặt lịch (spa): mỗi biến thể thời lượng là 1 lựa chọn */
function options(){ var o=[]; ITEMS.forEach(function(x){ if(x.bookable===false) return;
  if(x.variants&&x.variants.length) x.variants.forEach(function(v){ o.push({id:x.id+"@"+v.min, item:x, min:v.min, price:v.price}); });
  else o.push({id:x.id, item:x, min:x.minutes, price:x.price}); }); return o; }
function optById(id){ var o=options(); for(var i=0;i<o.length;i++) if(o[i].id===id) return o[i]; return null; }

/* hiển thị giá */
function priceBlock(x){ // khối giá trên thẻ
  if(x.variants&&x.variants.length){
    return '<div class="vars">'+x.variants.map(function(v){ return '<div class="var"><span class="vm">'+esc(mins(v.min))+'</span><span class="lead-dots"></span><span class="vp">'+(v.price!=null?vnd(v.price):esc(t("price_contact")))+'</span></div>'; }).join("")+
      (x.variants.some(function(v){return v.price!=null})?'<small class="vu">'+esc(t("from"))+' '+usd(Math.min.apply(null,x.variants.filter(function(v){return v.price!=null}).map(function(v){return v.price})))+'</small>':'')+'</div>';
  }
  if(x.price==null){ return '<div class="price contact">'+esc(x.fromUsd?t("from")+" US$"+x.fromUsd:t("price_contact"))+(x.fromUsd?'<small>'+esc(t("price_from_src"))+'</small>':'')+'</div>'; }
  return '<div class="price">'+(x.from?'<span class="fr">'+esc(t("from"))+'</span> ':'')+vnd(x.price)+(x.unit?' <span style="font-size:15px">'+esc(pick(x.unit))+'</span>':'')+'<small>'+usd(x.price)+'</small></div>';
}
function priceShort(x){
  if(x.variants&&x.variants.length) return x.variants.map(function(v){ return v.min+"′ "+(v.price!=null?vnd(v.price):t("price_contact")); }).join(" · ");
  if(x.price==null) return x.fromUsd?t("from")+" US$"+x.fromUsd:t("price_contact");
  return (x.from?t("from")+" ":"")+vnd(x.price);
}

/* ---------- ngôn ngữ ---------- */
function detect(){
  var q=(location.search.match(/[?&]lang=([a-z]{2})/i)||[])[1];
  if(q && LANGS.indexOf(q.toLowerCase())>-1) return q.toLowerCase();
  try{ var s=localStorage.getItem("site_lang_"+(C.slug||"")); if(s && LANGS.indexOf(s)>-1) return s; }catch(e){}
  var list=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"vi"];
  for(var i=0;i<list.length;i++){ var c=String(list[i]).slice(0,2).toLowerCase(); if(LANGS.indexOf(c)>-1) return c; }
  return C.fallbackLang || (LANGS.indexOf("en")>-1?"en":LANGS[0]);
}
var cjkLoaded={};
function loadCJK(l){ // chỉ tải font Hàn/Trung/Nhật khi cần
  var fam = l==="ko" ? "Noto+Serif+KR:wght@400;500&family=Noto+Sans+KR:wght@300;400;500"
          : l==="zh" ? "Noto+Serif+TC:wght@400;500&family=Noto+Sans+TC:wght@300;400;500"
          : l==="ja" ? "Noto+Serif+JP:wght@400;500&family=Noto+Sans+JP:wght@300;400;500" : "";
  if(!fam || cjkLoaded[l]) return; cjkLoaded[l]=1;
  var k=document.createElement("link"); k.rel="stylesheet"; k.href="https://fonts.googleapis.com/css2?family="+fam+"&display=swap"; document.head.appendChild(k);
}
function setLang(l, save){
  lang=l; if(save){ try{localStorage.setItem("site_lang_"+(C.slug||""),l)}catch(e){} }
  document.documentElement.lang=t("_html"); loadCJK(l);
  $$("[data-i18n]").forEach(function(el){ el.textContent=t(el.getAttribute("data-i18n")); });
  $$("[data-i18n-ph]").forEach(function(el){ el.placeholder=t(el.getAttribute("data-i18n-ph")); });
  $("#langCode").textContent=SHORT[l];
  $$("#langList button,#ftLangs button").forEach(function(b){ b.setAttribute("aria-current", b.dataset.l===l); });
  document.title=C.name+" — "+pick(C.tagline);
  render();
}

/* ---------- render theo ngôn ngữ ---------- */
function render(){
  var H=C.hours||{}, KH=!!H.open, open=KH?toM(H.open):0, close=KH?toM(H.close):0, now=new Date(), nm=now.getHours()*60+now.getMinutes(), isOpen=KH&&nm>=open&&nm<close;
  var hrs=KH?pick(H.days)+" · "+H.open+" – "+H.close+(H.note?" ("+pick(H.note)+")":""):pick(H.text);
  $("#heroTitle").innerHTML=pick(C.heroTitle)||esc(C.name);
  $("#heroTag").textContent=pick(C.tagline);
  if(C.eyebrow) $("#eyebrow").textContent=pick(C.eyebrow);
  $("#openDot").className="dot"+(isOpen?"":" off")+(KH?"":" na");
  $("#openTxt").textContent=KH?(isOpen?t("open_now"):t("closed_now"))+" · "+H.open+" – "+H.close:hrs;
  $("#drawerMeta").textContent=C.phone+(KH?" · "+H.open+" – "+H.close:"");
  if(MODE==="none"){ $$(".cta-main").forEach(function(a){ a.textContent=t("cta_call"); }); }

  // about
  $("#aboutTitle").textContent=pick(C.about.title);
  $("#aboutText").innerHTML=pick(C.about.text).split("\n").map(function(p){return "<p>"+esc(p)+"</p>"}).join("");
  $("#aboutSig").textContent=pick(C.about.signature);
  $("#aboutImg").alt=pick(C.about.title);

  // why
  $("#whyGrid").innerHTML=(C.highlights||[]).map(function(h,i){
    return '<div class="why-item rv'+(i?' d'+Math.min(i,2):'')+'">'+icon(h.icon)+'<span class="n">0'+(i+1)+'</span><h3>'+esc(pick(h.title))+'</h3><p>'+esc(pick(h.text))+'</p></div>';
  }).join("");

  // offer
  var cardItems = ITEMS.filter(function(x){ return x.image && (KIND==="spa" ? x.card!==false : x.featured); });
  var cards='';
  if(cardItems.length){
    cards='<div class="cards">'+cardItems.map(function(s,i){
      var meta = s.minutes ? mins(s.minutes) : (s.variants? s.variants.map(function(v){return v.min+"′"}).join(" · ") : catName(s.category));
      if(s.metaText) meta=pick(s.metaText);
      var bookBtn = (KIND==="spa" && HASFORM && s.bookable!==false) ? '<button type="button" class="link pick" data-id="'+esc(s.variants?s.id+"@"+s.variants[0].min:s.id)+'">'+esc(t("choose"))+icon("arrow")+'</button>' : '';
      return '<article class="card rv'+(i%3?' d'+(i%3):'')+'"><div class="ph"><img src="'+esc(s.image)+'" alt="'+esc(pick(s.name))+'" loading="lazy" width="960" height="720"></div>'+
        '<div class="bd"><div class="meta">'+esc(meta)+'</div><h3>'+esc(pick(s.name))+'</h3><p>'+esc(pick(s.desc))+'</p>'+
        '<div class="row">'+priceBlock(s)+bookBtn+'</div></div></article>';
    }).join("")+'</div>'+(cardItems.length>1?'<div class="swipe">'+esc(t("swipe"))+icon("arrow")+'</div>':'');
  }
  if(KIND!=="spa" || C.showMenuList){
    if(cards) cards = '<div class="center rv" style="margin-top:64px"><span class="kicker">'+esc(t("signature"))+'</span></div>'+cards.replace('<div class="cards">','<div class="cards" style="margin-top:36px">');
    cards += '<div class="menu">'+(C.categories||[]).map(function(c){
      var rows=ITEMS.filter(function(x){return x.category===c.id && x.inList!==false}).map(function(m){
        var multi = m.variants && m.variants.length>1;
        var pr = m.variants ? m.variants.map(function(v){return '<span class="pv">'+v.min+"′ "+esc(v.price!=null?vnd(v.price):t("price_contact"))+'</span>'}).join("") : esc(m.price==null?(m.fromUsd?t("from")+" US$"+m.fromUsd:t("price_contact")):(m.from?t("from")+" ":"")+vnd(m.price));
        var us = (!m.variants && m.price!=null) ? usd(m.price) : "";
        return '<div class="mi"><div class="top"><span class="nm">'+esc(pick(m.name))+'</span><span class="lead-dots"></span><span class="pr'+(m.price==null&&!m.variants&&!m.fromUsd?' pc':'')+(multi?' multi':'')+'">'+pr+'</span></div>'+
               '<div class="ds"><span>'+esc(pick(m.desc))+(m.unit?' · '+esc(pick(m.unit)):'')+'</span><span class="usd">'+us+'</span></div></div>';
      }).join("");
      return '<div class="menu-cat rv"><h3>'+esc(pick(c.name))+'</h3>'+(c.note?'<p class="cnote">'+esc(pick(c.note))+'</p>':'')+'<div class="orn"><svg class="i" style="width:120px;height:12px" viewBox="0 0 120 12"><use href="#i-orn"/></svg></div>'+rows+'</div>';
    }).join("")+'</div>';
  }
  if(C.menuLink) cards += '<p class="center rv" style="margin-top:56px"><a class="link" target="_blank" rel="noopener" href="'+esc(C.menuLink)+'">'+esc(t("menu_full"))+icon("arrow")+'</a></p>';
  $("#offerBody").innerHTML=cards;

  // gallery
  $("#gal").innerHTML=(C.gallery||[]).map(function(g,i){ return '<figure class="rv'+(i%3?' d'+(i%3):'')+'"><img src="'+esc(g.src)+'" alt="'+esc(pick(g.alt))+'" loading="lazy"></figure>'; }).join("");

  // reviews — không đăng review dựng sẵn; chỉ dẫn link Google
  var rb='<div class="quote"><span class="qm">“</span><p>'+esc(t("reviews_real"))+'</p><div class="who">— '+esc(t("reviews_title"))+'</div></div>';
  if(C.reviewsLink) rb+='<p style="margin-top:34px"><a class="link" target="_blank" rel="noopener" href="'+esc(C.reviewsLink)+'">'+esc(t("reviews_link"))+icon("arrow")+'</a></p>';
  $("#revBody").innerHTML=rb;

  // visit
  $("#vHours").textContent=hrs; $("#vAddr").textContent=pick(C.address); $("#vPhone").textContent=C.phone+(C.phone2?" · "+C.phone2:"");
  if(BR.length>1){
    $("#vBranches").innerHTML='<b>'+esc(t("branches_title"))+'</b>'+BR.map(function(b,i){ return '<div class="br"><span class="bn">'+esc(pick(b.name))+'</span><span>'+esc(pick(b.address))+'</span>'+(b.mapsLink?'<a class="link" target="_blank" rel="noopener" href="'+esc(b.mapsLink)+'">'+esc(t("directions"))+icon("arrow")+'</a>':'')+'</div>'; }).join("");
    $("#vBranches").hidden=false; $("#vAddrRow").hidden=true;
  }
  if(C.directionsSteps&&C.directionsSteps.length){
    $("#dirSteps").innerHTML='<b>'+esc(t("dir_steps"))+'</b><ol>'+C.directionsSteps.map(function(s){ return '<li>'+esc(pick(s))+'</li>'; }).join("")+'</ol>'+(C.directionsNote?'<p class="dnote">'+esc(pick(C.directionsNote))+'</p>':'');
    $("#dirSteps").hidden=false;
  }
  // external booking card
  if(MODE==="external"){
    $("#tInner").innerHTML='<div class="done ext"><p>'+esc(t("ext_body"))+'</p><p style="margin-top:26px"><a class="btn btn-moss" target="_blank" rel="noopener" href="'+esc(BK.url)+'">'+esc(t("ext_btn"))+'</a></p>'+
      '<p style="margin-top:18px;font-size:13px">'+esc(t("ext_or"))+' <a href="tel:'+esc(C.phoneLink)+'" style="border-bottom:1px solid">'+esc(C.phone)+'</a></p></div>';
  }
  // footer
  $("#ftHours").textContent=hrs; $("#ftAddr").textContent=BR.length>1?BR.map(function(b){return pick(b.name)}).join(" · "):pick(C.address); $("#ftPhone").textContent=C.phone;
  $("#ftTag").textContent=pick(C.tagline);
  $("#ftCopy").textContent=C.name;

  renderFormOptions(); updateSummary(); observe();
}

/* ---------- phần tĩnh (1 lần) ---------- */
function initStatic(){
  document.body.classList.add("has-demo","k-"+KIND); var sd=function(){ document.documentElement.style.setProperty("--demo-h",$("#demoBar").offsetHeight+"px"); }; sd(); addEventListener("resize",sd);
  var mark = C.mark || (KIND==="restaurant" ? "fish" : "lotus");
  $("#brand").innerHTML=icon(mark,"mk")+'<span class="bn-full">'+esc(C.name)+'</span>'+(C.shortName?'<span class="bn-short">'+esc(C.shortName)+'</span>':'');
  if(C.shortName) document.body.classList.add("has-short");
  $("#ftBrand").textContent=C.name; $("#tBrand").textContent=C.name; $("#refNo").textContent=ref;
  var pic=$("#heroPic");
  pic.innerHTML=(C.heroImageMobile?'<source media="(max-width:700px)" srcset="'+esc(C.heroImageMobile)+'">':'')+'<img src="'+esc(C.heroImage)+'" alt="" fetchpriority="high" style="object-position:'+esc(C.heroFocus||"50% 50%")+'">';
  var pre=$("#heroPreload"); pre.href = (C.heroImageMobile && innerWidth<=700) ? C.heroImageMobile : C.heroImage;
  $("#aboutImg").src=C.about.image;
  var common=ALL.common;
  $("#langList").innerHTML=LANGS.map(function(l){ return '<li><button type="button" data-l="'+l+'" lang="'+common[l]._html+'">'+common[l]._name+'<span></span></button></li>'; }).join("");
  $("#ftLangs").innerHTML=LANGS.map(function(l){ return '<button type="button" data-l="'+l+'" lang="'+common[l]._html+'">'+common[l]._name+'</button>'; }).join("");
  var lw=$("#lang");
  lw.firstElementChild.addEventListener("click",function(e){ e.stopPropagation(); var o=lw.classList.toggle("open"); this.setAttribute("aria-expanded",o); });
  document.addEventListener("click",function(e){ var b=e.target.closest("[data-l]"); if(b){ setLang(b.dataset.l,true); lw.classList.remove("open"); return; } if(!e.target.closest("#lang")) lw.classList.remove("open"); });
  $("#burger").addEventListener("click",function(){ document.body.classList.toggle("menu-open"); });
  $$("#drawer a").forEach(function(a){ a.addEventListener("click",function(){ document.body.classList.remove("menu-open"); }); });
  var site=$("#site"), dock=$("#dock"), hero=$("#hero");
  function onScroll(){ var y=scrollY, h=hero.offsetHeight; site.classList.toggle("solid", y>h-90); dock.classList.toggle("show", y>h*.7); }
  addEventListener("scroll",onScroll,{passive:true}); onScroll();
  if(MODE!=="none" && "IntersectionObserver" in window){ new IntersectionObserver(function(es){ dock.classList.toggle("away", es[0].isIntersecting); },{rootMargin:"-30% 0px -30% 0px"}).observe($("#book")); }
  // contacts
  $("#dirBtn").href=C.mapsLink; $("#callBtn").href=$("#dockCall").href="tel:"+C.phoneLink;
  var ch=[]; if(C.zalo) ch.push(["Zalo","https://zalo.me/"+C.zalo]); if(C.whatsapp) ch.push(["WhatsApp","https://wa.me/"+C.whatsapp]); if(C.telegramUser) ch.push(["Telegram","https://t.me/"+C.telegramUser]);
  if(C.messenger) ch.push(["Messenger",C.messenger]); if(C.kakao) ch.push(["KakaoTalk",C.kakao]); if(C.email) ch.push(["Email","mailto:"+C.email]); if(C.website) ch.push([t("website"),C.website]);
  $("#chats").innerHTML=ch.map(function(c){ return '<a target="_blank" rel="noopener" href="'+esc(c[1])+'">'+esc(c[0])+'</a>'; }).join(""); if(!ch.length) $("#chats").hidden=true;
  if(C.mapsEmbed){ var mb=$("#mapBox"), load=function(){ if(mb.querySelector("iframe")) return; mb.insertAdjacentHTML("beforeend",'<iframe title="map" referrerpolicy="no-referrer-when-downgrade" src="'+esc(C.mapsEmbed)+'"></iframe>'); };
    if("IntersectionObserver" in window){ var io=new IntersectionObserver(function(es){ if(es[0].isIntersecting){ load(); io.disconnect(); } },{rootMargin:"400px"}); io.observe(mb); } else load(); }
  // không có form: CTA thành nút gọi, ẩn mục đặt chỗ
  if(MODE==="none"){
    $("#book").hidden=true; $$(".nav-book").forEach(function(a){ a.hidden=true; });
    $$(".cta-main").forEach(function(a){ a.href="tel:"+C.phoneLink; a.removeAttribute("data-i18n"); });
  }
  // dải tác giả
  var dz=C.designer; if(dz&&(dz.zalo||dz.telegram)){ var L=[];
    if(dz.zalo) L.push('<a target="_blank" rel="noopener" href="'+esc(dz.zalo.url)+'"><img src="'+esc(dz.zalo.qr)+'" alt="QR Zalo" width="58" height="58" loading="lazy"><span><b>Zalo</b>'+esc(dz.zalo.label)+'</span></a>');
    if(dz.telegram) L.push('<a target="_blank" rel="noopener" href="'+esc(dz.telegram.url)+'"><img src="'+esc(dz.telegram.qr)+'" alt="QR Telegram" width="58" height="58" loading="lazy"><span><b>Telegram</b>'+esc(dz.telegram.label)+'</span></a>');
    $("#dzLinks").innerHTML=L.join(""); $("#designer").hidden=false; }
  if(HASFORM) buildForm();
}

/* ---------- reveal ---------- */
var rio = "IntersectionObserver" in window ? new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); rio.unobserve(e.target); } }); },{rootMargin:"0px 0px -8% 0px"}) : null;
function observe(){ $$(".rv:not(.in)").forEach(function(el){ if(rio) rio.observe(el); else el.classList.add("in"); }); }

/* ---------- form ---------- */
function F(label, inner, cls, req){ return '<label class="f'+(cls?' '+cls:'')+'"><span><span data-i18n="'+label+'">'+esc(t(label))+'</span>'+(req?' <span class="req">*</span>':'')+'</span>'+inner+'</label>'; }
function buildForm(){
  var maxP=BK.maxPeople||(KIND==="spa"?10:30), defP=KIND==="spa"?1:2, n=0, R=["I.","II.","III.","IV.","V.","VI."];
  var h='<form id="bf" novalidate><div class="t-body"><div class="t-form">';
  h+='<fieldset class="fs"><legend><i>'+R[n++]+'</i><span data-i18n="sec_guest"></span></legend><div class="grid2">';
  h+=F("f_name",'<input name="name" autocomplete="name" required maxlength="80">',"full",1);
  h+='<div class="contact-row full">'+F("f_via",'<select name="via" id="via"></select>')+F("f_contact",'<input name="contact" autocomplete="tel" required maxlength="80" data-i18n-ph="f_contact_ph">',"",1)+'</div>';
  h+='</div></fieldset>';
  if(KIND==="spa" || BR.length>1){
    h+='<fieldset class="fs"><legend><i>'+R[n++]+'</i><span data-i18n="'+(KIND==="spa"?"sec_service":"f_branch")+'"></span></legend><div class="grid2">';
    if(BR.length>1) h+=F("f_branch",'<select name="branch" id="branch" required></select>',"full",1);
    if(KIND==="spa") h+=F("f_service",'<select name="service" id="service" required></select>',"full",1);
    h+='</div></fieldset>';
  }
  h+='<fieldset class="fs"><legend><i>'+R[n++]+'</i><span data-i18n="sec_time"></span></legend><div class="grid2">';
  h+=F("f_date",'<input type="date" name="date" id="date" required>',"",1)+F("f_time",'<select name="time" id="time" required></select>',"",1);
  h+=F("f_people",'<div class="stepper"><button type="button" data-step="-1" aria-label="-">−</button><input type="number" name="people" id="people" min="1" max="'+maxP+'" value="'+defP+'" inputmode="numeric"><button type="button" data-step="1" aria-label="+">+</button></div>',"",0);
  if(KIND==="restaurant") h+=F("f_occasion",'<select name="occasion" id="occasion"></select>');
  h+='</div></fieldset>';
  if(BK.pickup){
    h+='<fieldset class="fs"><legend><i>'+R[n++]+'</i><span data-i18n="sec_pickup"></span></legend><div class="grid2">';
    h+='<label class="chk full"><input type="checkbox" name="pickup" id="pickup"><span><span data-i18n="f_pickup"></span><small data-i18n="f_pickup_hint"></small></span></label>';
    h+=F("f_pickup_place",'<input name="pickupPlace" id="pickupPlace" maxlength="160" data-i18n-ph="f_pickup_ph">',"full pk",0);
    h+='</div></fieldset>';
  }
  h+='<fieldset class="fs"><legend><i>'+R[n++]+'</i><span data-i18n="'+(KIND==="restaurant"?"sec_extra":"f_note")+'"></span></legend><div class="grid2">';
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
  f.addEventListener("input",updateSummary); f.addEventListener("change",function(e){ if(e.target.id==="date") fillTimes(); if(e.target.id==="via") viaTouched=true; if(e.target.id==="pickup") $(".pk").classList.toggle("on",e.target.checked); updateSummary(); });
  f.addEventListener("click",function(e){ var b=e.target.closest("[data-step]"); if(!b) return; var p=$("#people"); p.value=Math.max(1,Math.min(+p.max,(parseInt(p.value,10)||1)+(+b.dataset.step))); updateSummary(); });
  f.addEventListener("submit",submit);
  document.addEventListener("click",function(e){ var b=e.target.closest(".pick"); if(!b) return; $("#service").value=b.dataset.id; updateSummary(); $("#book").scrollIntoView({behavior:"smooth"}); });
}
function fillTimes(){
  var sel=$("#time"); if(!sel) return; var cur=sel.value, o=toM((C.hours&&C.hours.open)||"08:00"), c=toM((C.hours&&C.hours.close)||"21:00")-(C.lastBookingBeforeClose||60), step=C.slotMinutes||30;
  var today=$("#date").value===iso(new Date()), now=new Date(), nm=now.getHours()*60+now.getMinutes()+30, opts=['<option value="">--:--</option>'];
  for(var m=o;m<=c;m+=step){ var v=pad(Math.floor(m/60))+":"+pad(m%60); opts.push('<option'+(today&&m<nm?' disabled':'')+'>'+v+'</option>'); }
  sel.innerHTML=opts.join(""); sel.value=cur; if(sel.selectedOptions[0]&&sel.selectedOptions[0].disabled) sel.value="";
}
function renderFormOptions(){
  if(!$("#bf")) return;
  var v=$("#via"), vv=v.value;
  v.innerHTML=VIA.map(function(k){ return '<option value="'+k+'">'+esc(k==="phone"?t("via_phone"):VIA_NAME[k])+'</option>'; }).join("");
  var dv=(C.viaDefault&&C.viaDefault[lang])||VIA_DEFAULT[lang]; if(VIA.indexOf(dv)<0) dv=VIA[0];
  v.value=viaTouched&&vv?vv:dv;
  var b=$("#branch"); if(b){ var bv=b.value; b.innerHTML='<option value="">'+esc(t("f_branch_choose"))+'</option>'+BR.map(function(x){ return '<option value="'+esc(x.id)+'">'+esc(pick(x.name))+' — '+esc(pick(x.short||x.address))+'</option>'; }).join(""); b.value=bv; }
  var s=$("#service"); if(s){ var sv=s.value, groups={}, order=[];
    options().forEach(function(o){ var g=o.item.category||"_"; if(!groups[g]){groups[g]=[];order.push(g);} groups[g].push(o); });
    s.innerHTML='<option value="">'+esc(t("f_choose"))+'</option>'+order.map(function(g){
      var inner=groups[g].map(function(o){ return '<option value="'+esc(o.id)+'">'+esc(pick(o.item.name))+(o.min?' · '+esc(mins(o.min)):'')+(o.price!=null?' · '+vnd(o.price):'')+'</option>'; }).join("");
      return g==="_"||!catName(g)?inner:'<optgroup label="'+esc(catName(g))+'">'+inner+'</optgroup>'; }).join("");
    s.value=sv; }
  var oc=$("#occasion"); if(oc){ var ov=oc.value||"none"; oc.innerHTML=OCC.map(function(k){ return '<option value="'+k+'">'+esc(t("occ_"+k))+'</option>'; }).join(""); oc.value=ov; }
}
function readForm(){
  var f=$("#bf"), s=KIND==="spa"?optById(f.service.value):null, people=Math.max(1,Math.min(+f.people.max,parseInt(f.people.value,10)||1));
  return { f:f, s:s, people:people, br:f.branch?branchById(f.branch.value):null };
}
function updateSummary(){
  if(!$("#sum")) return;
  var r=readForm(), f=r.f, rows=[];
  if(BR.length>1) rows.push([t("f_branch"), r.br?pick(r.br.name):t("sum_empty")]);
  if(KIND==="spa") rows.push([t("f_service"), r.s?pick(r.s.item.name)+(r.s.min?" · "+mins(r.s.min):""):t("sum_empty")]);
  rows.push([t("f_date"), f.date.value?fmtDate(f.date.value):t("sum_empty")]);
  rows.push([t("f_time"), f.time.value||t("sum_empty")]);
  rows.push([t("f_people"), guests(r.people)]);
  if(f.pickup) rows.push([t("sec_pickup"), f.pickup.checked?t("pickup_yes"):t("pickup_no")]);
  if(KIND==="restaurant" && f.occasion && f.occasion.value!=="none") rows.push([t("f_occasion"), t("occ_"+f.occasion.value)]);
  var h=rows.map(function(x){ return '<div class="sumrow"><span class="k">'+esc(x[0])+'</span><span class="d"></span><span class="v">'+esc(x[1])+'</span></div>'; }).join("");
  if(KIND==="spa"){ var tot=r.s&&r.s.price!=null?(r.s.item.perBooking?r.s.price:r.s.price*r.people):0;
    h+='<div class="sumtotal"><span class="k">'+esc(t("total"))+'</span><div><div class="v">'+(tot?vnd(tot):(r.s?esc(t("price_contact")):"—"))+'</div>'+(tot?'<small>'+usd(tot)+'</small>':'')+'</div></div>'; }
  $("#sum").innerHTML=h;
}

/* ---------- gửi ---------- */
function ownerText(b){ // tin cho chủ tiệm, luôn tiếng Việt
  var head = KIND==="restaurant"?"🍽 YÊU CẦU ĐẶT BÀN":KIND==="shop"?"🏺 ĐĂNG KÝ THAM QUAN":"🌿 YÊU CẦU ĐẶT LỊCH";
  var L=[head+" — "+C.name, "Mã: "+b.ref];
  if(b.branchName) L.push("Cơ sở: "+b.branchName);
  L.push("Khách: "+b.name, "Liên hệ: "+b.contact+" ("+b.via+")");
  if(b.serviceName) L.push("Dịch vụ: "+b.serviceName);
  L.push("Ngày giờ: "+b.date+" "+b.time, (KIND==="spa"?"Số người: ":"Số khách: ")+b.people);
  if(b.pickup) L.push("Xe đón: CÓ — "+(b.pickupPlace||"(chưa ghi chỗ đón)"));
  if(b.occasion) L.push("Dịp: "+b.occasion); if(b.allergy) L.push("Dị ứng/ăn kiêng: "+b.allergy);
  if(b.total) L.push("Tạm tính: "+vnd(b.total)); L.push("Ngôn ngữ khách: "+b.lang.toUpperCase()); if(b.note) L.push("Ghi chú: "+b.note);
  return L.join("\n");
}
function submit(e){
  e.preventDefault();
  var r=readForm(), f=r.f, err=$("#err"); err.textContent="";
  if(f.website.value) return;
  if(!f.name.value.trim()||!f.contact.value.trim()||(KIND==="spa"&&!r.s)||(BR.length>1&&!r.br)||!f.date.value||!f.time.value){ err.textContent=t("err_required"); return; }
  if(new Date(f.date.value+"T"+f.time.value+":00").getTime()<Date.now()){ err.textContent=t("err_past"); return; }
  var b={ kind:KIND, shop:C.slug, ref:ref, name:f.name.value.trim(), contact:f.contact.value.trim(), via:f.via.value==="phone"?"Điện thoại":VIA_NAME[f.via.value],
    date:f.date.value, time:f.time.value, people:r.people, note:f.note.value.trim(), lang:lang, createdAt:new Date().toISOString() };
  if(r.br){ b.branch=r.br.id; b.branchName=pick(r.br.name,"vi"); }
  if(r.s){ b.service=r.s.id; b.serviceName=pick(r.s.item.name,"vi")+(r.s.min?" ("+r.s.min+"')":""); if(r.s.price!=null) b.total=r.s.item.perBooking?r.s.price:r.s.price*r.people; }
  if(f.pickup){ b.pickup=f.pickup.checked; b.pickupPlace=f.pickupPlace.value.trim(); }
  if(KIND==="restaurant"){ b.occasion=f.occasion.value!=="none"?viText("occ_"+f.occasion.value):""; b.allergy=f.allergy.value.trim(); }
  b.text=ownerText(b);
  try{ var key=(C.slug||KIND)+"_bookings", all=JSON.parse(localStorage.getItem(key)||"[]"); all.push(b); localStorage.setItem(key,JSON.stringify(all)); }catch(x){}
  var btn=$("#sb"), p;
  var chat = (r.br&&r.br.telegramChatId) || BK.telegramChatId;
  if(MODE==="worker"&&BK.workerUrl) p=fetch(BK.workerUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});
  else if(MODE==="telegram"&&BK.telegramBotToken&&chat) // CHỈ THỬ NGHIỆM — token lộ ra trình duyệt
    p=fetch("https://api.telegram.org/bot"+BK.telegramBotToken+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:chat,text:b.text})});
  else { done(b,true); return; }
  btn.disabled=true; btn.textContent=t("sending");
  p.then(function(res){ if(!res.ok) throw new Error(res.status); done(b,false); })
   .catch(function(){ err.textContent=t("err_send")+" "+C.phone; })
   .then(function(){ if(document.body.contains(btn)){ btn.disabled=false; btn.textContent=t("submit"); } });
}
function viText(k){ var keep=lang; lang="vi"; var s=t(k); lang=keep; return s; }
function done(b,isLocal){
  var rows=[[t("ok_ref"),b.ref],[t("f_name"),b.name]];
  if(b.branch) rows.push([t("f_branch"),pick(branchById(b.branch).name)]);
  if(b.service){ var o=optById(b.service); rows.push([t("f_service"),pick(o.item.name)+(o.min?" · "+mins(o.min):"")]); }
  rows.push([t("f_date"),fmtDate(b.date)+" · "+b.time],[t("f_people"),guests(b.people)]);
  if(b.pickup) rows.push([t("sec_pickup"),t("pickup_yes")]);
  if(b.total) rows.push([t("total"),vnd(b.total)]);
  $("#tInner").innerHTML='<div class="done"><div class="ck">'+icon("check")+'</div><h3>'+esc(t("ok_title"))+'</h3><p>'+esc(t("ok_body"))+'</p>'+
    '<div class="receipt">'+rows.map(function(x){ return '<div class="sumrow"><span class="k">'+esc(x[0])+'</span><span class="d"></span><span class="v">'+esc(x[1])+'</span></div>'; }).join("")+'</div>'+
    (isLocal?'<p style="font-size:13px">'+esc(t("ok_demo"))+'</p>':'')+'<p style="margin-top:26px"><button class="link" type="button" onclick="location.reload()">'+esc(t("ok_again"))+'</button></p></div>';
  $("#ticket").scrollIntoView({behavior:"smooth",block:"start"});
}

initStatic();
setLang(detect(),false);
})();
