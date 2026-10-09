/* Phiên dịch giọng nói 2 chiều (BẢN THỬ) — Khách ⇄ Nhân viên.
 * Nghe: Web Speech API (SpeechRecognition) · Dịch: MyMemory (miễn phí, KHÔNG cần key) · Đọc: speechSynthesis.
 * Không chứa key/bí mật. Khi bán thật: thay hàm translate() bằng gọi Cloudflare Worker → Gemini (key giấu trong Worker). */
(function(){
"use strict";
var G = { en:{sr:"en-US",mt:"en",name:"English"}, ko:{sr:"ko-KR",mt:"ko",name:"한국어"}, zh:{sr:"zh-CN",mt:"zh-CN",name:"中文"},
          ru:{sr:"ru-RU",mt:"ru",name:"Русский"}, ja:{sr:"ja-JP",mt:"ja",name:"日本語"}, fr:{sr:"fr-FR",mt:"fr",name:"Français"} };
var VI = {sr:"vi-VN",mt:"vi"};
var S = {
 vi:{fab:"Nói chuyện với nhân viên",title:"Phiên dịch tại quầy",sub:"Khách và nhân viên lần lượt bấm nút rồi nói — máy dịch và đọc to bản dịch.",guestLang:"Tiếng của khách",guest:"Khách nói",staff:"Nhân viên nói",listen:"Đang nghe… nói xong máy tự dừng",trans:"Đang dịch…",type:"Hoặc gõ câu cần dịch…",asGuest:"Gửi (khách)",asStaff:"Gửi (nhân viên)",noMic:"Trình duyệt này chưa hỗ trợ nghe giọng nói (vd Firefox). Hãy gõ chữ ở ô bên dưới — máy vẫn dịch và đọc to.",micErr:"Không dùng được micro: ",denied:"Bạn chưa cho phép micro. Bật quyền micro cho trang này hoặc gõ chữ.",netErr:"Không dịch được (mạng hoặc dịch vụ bận). Thử lại sau giây lát.",quota:"Đã hết lượt dịch miễn phí hôm nay của bản thử.",replay:"Đọc lại",close:"Đóng",noVoice:"Máy chưa có giọng đọc cho ngôn ngữ này — vẫn hiện chữ.",note:"Bản thử: dịch máy miễn phí (MyMemory), có thể chưa chính xác. Không dùng cho thông tin sức khoẻ, thanh toán. Câu nói được gửi tới dịch vụ dịch bên ngoài.",empty:"Chưa có câu nào. Bấm “Khách nói” hoặc “Nhân viên nói” để bắt đầu.",heard:"Không nghe rõ, vui lòng nói lại."},
 en:{fab:"Talk to our staff",title:"Live interpreter",sub:"Take turns: tap your button and speak — we translate and read it aloud.",guestLang:"Your language",guest:"Guest speaks",staff:"Staff speaks",listen:"Listening… it stops when you finish",trans:"Translating…",type:"Or type what you want to say…",asGuest:"Send (guest)",asStaff:"Send (staff)",noMic:"This browser can’t listen to speech (e.g. Firefox). Type below instead — we still translate and read aloud.",micErr:"Microphone error: ",denied:"Microphone permission is off. Allow it for this page, or type instead.",netErr:"Couldn’t translate (network or service busy). Please try again.",quota:"Today’s free translation quota for this demo is used up.",replay:"Play again",close:"Close",noVoice:"No voice installed for this language — text is shown.",note:"Demo: free machine translation (MyMemory), may be inaccurate. Not for health or payment details. Your sentences are sent to an external translation service.",empty:"Nothing yet. Tap “Guest speaks” or “Staff speaks” to start.",heard:"Didn’t catch that — please try again."},
 ko:{fab:"직원과 대화하기",title:"실시간 통역",sub:"차례로 버튼을 누르고 말씀하세요. 번역해서 소리 내어 읽어 드립니다.",guestLang:"손님 언어",guest:"손님 말하기",staff:"직원 말하기",listen:"듣는 중… 말을 마치면 자동으로 멈춥니다",trans:"번역 중…",type:"또는 입력해 주세요…",asGuest:"보내기 (손님)",asStaff:"보내기 (직원)",noMic:"이 브라우저는 음성 인식을 지원하지 않습니다(예: Firefox). 아래에 입력하시면 번역하고 읽어 드립니다.",micErr:"마이크 오류: ",denied:"마이크 권한이 꺼져 있습니다. 허용하시거나 직접 입력해 주세요.",netErr:"번역하지 못했습니다(네트워크 또는 서비스 혼잡). 잠시 후 다시 시도해 주세요.",quota:"이 데모의 오늘 무료 번역 한도가 끝났습니다.",replay:"다시 듣기",close:"닫기",noVoice:"이 언어의 음성이 기기에 없어 글자로만 표시합니다.",note:"데모: 무료 기계 번역(MyMemory)으로 부정확할 수 있습니다. 건강·결제 정보에는 사용하지 마세요. 문장은 외부 번역 서비스로 전송됩니다.",empty:"아직 대화가 없습니다. ‘손님 말하기’ 또는 ‘직원 말하기’를 눌러 시작하세요.",heard:"잘 듣지 못했습니다. 다시 말씀해 주세요."},
 zh:{fab:"与店员对话",title:"实时翻译",sub:"双方轮流按下按钮说话，系统会翻译并朗读出来。",guestLang:"您的语言",guest:"客人说",staff:"店员说",listen:"正在聆听… 说完会自动停止",trans:"正在翻译…",type:"或在此输入…",asGuest:"发送（客人）",asStaff:"发送（店员）",noMic:"此浏览器不支持语音识别（如 Firefox）。请在下方输入文字，仍可翻译并朗读。",micErr:"麦克风错误：",denied:"麦克风权限未开启。请允许本页面使用麦克风，或改为输入文字。",netErr:"翻译失败（网络或服务繁忙），请稍后再试。",quota:"本演示今日的免费翻译额度已用完。",replay:"重新朗读",close:"关闭",noVoice:"设备没有该语言的语音，仅显示文字。",note:"演示版：免费机器翻译（MyMemory），可能不准确。请勿用于健康或付款信息。您的句子会发送到外部翻译服务。",empty:"还没有对话。请按“客人说”或“店员说”开始。",heard:"没有听清，请再说一次。"},
 ru:{fab:"Поговорить с персоналом",title:"Переводчик",sub:"По очереди нажимайте свою кнопку и говорите — мы переведём и озвучим.",guestLang:"Ваш язык",guest:"Говорит гость",staff:"Говорит персонал",listen:"Слушаю… остановится, когда вы закончите",trans:"Перевожу…",type:"Или напишите текст…",asGuest:"Отправить (гость)",asStaff:"Отправить (персонал)",noMic:"Этот браузер не распознаёт речь (например, Firefox). Напишите текст ниже — мы всё равно переведём и озвучим.",micErr:"Ошибка микрофона: ",denied:"Доступ к микрофону выключен. Разрешите его для этой страницы или напишите текст.",netErr:"Не удалось перевести (сеть или сервис занят). Попробуйте ещё раз.",quota:"Бесплатный лимит перевода на сегодня для демо исчерпан.",replay:"Повторить",close:"Закрыть",noVoice:"На устройстве нет голоса для этого языка — показываем текст.",note:"Демо: бесплатный машинный перевод (MyMemory), возможны неточности. Не используйте для данных о здоровье и оплате. Фразы отправляются во внешний сервис перевода.",empty:"Пока пусто. Нажмите «Говорит гость» или «Говорит персонал».",heard:"Не расслышали — повторите, пожалуйста."},
 ja:{fab:"スタッフと話す",title:"通訳",sub:"交互にボタンを押して話してください。翻訳して読み上げます。",guestLang:"お客様の言語",guest:"お客様が話す",staff:"スタッフが話す",listen:"聞き取り中… 話し終えると自動で止まります",trans:"翻訳中…",type:"または入力してください…",asGuest:"送信（お客様）",asStaff:"送信（スタッフ）",noMic:"このブラウザは音声認識に対応していません（例：Firefox）。下に入力すれば翻訳して読み上げます。",micErr:"マイクのエラー：",denied:"マイクが許可されていません。許可するか、文字を入力してください。",netErr:"翻訳できませんでした（通信またはサービス混雑）。もう一度お試しください。",quota:"本日の無料翻訳の上限に達しました。",replay:"もう一度再生",close:"閉じる",noVoice:"この言語の音声が端末にないため、文字のみ表示します。",note:"デモ版：無料の機械翻訳（MyMemory）のため不正確な場合があります。健康・支払いの情報には使わないでください。文章は外部の翻訳サービスに送信されます。",empty:"まだ会話はありません。「お客様が話す」または「スタッフが話す」を押してください。",heard:"聞き取れませんでした。もう一度お願いします。"},
 fr:{fab:"Parler au personnel",title:"Interprète",sub:"Chacun son tour : appuyez sur votre bouton et parlez — nous traduisons et lisons à voix haute.",guestLang:"Votre langue",guest:"Le client parle",staff:"Le personnel parle",listen:"Écoute… s’arrête quand vous avez fini",trans:"Traduction…",type:"Ou tapez votre phrase…",asGuest:"Envoyer (client)",asStaff:"Envoyer (personnel)",noMic:"Ce navigateur ne reconnaît pas la voix (ex. Firefox). Tapez ci-dessous : nous traduisons et lisons quand même.",micErr:"Erreur micro : ",denied:"Le micro n’est pas autorisé. Autorisez-le pour cette page ou tapez votre texte.",netErr:"Traduction impossible (réseau ou service occupé). Réessayez.",quota:"Le quota gratuit de traduction de cette démo est épuisé pour aujourd’hui.",replay:"Réécouter",close:"Fermer",noVoice:"Aucune voix installée pour cette langue — le texte est affiché.",note:"Démo : traduction automatique gratuite (MyMemory), parfois inexacte. Pas pour la santé ou le paiement. Vos phrases sont envoyées à un service de traduction externe.",empty:"Rien pour l’instant. Appuyez sur « Le client parle » ou « Le personnel parle ».",heard:"Je n’ai pas compris — réessayez."}
};
function pageLang(){ var h=(document.documentElement.lang||"vi").slice(0,2).toLowerCase(); return S[h]?h:"en"; }
function T(k){ return (S[pageLang()]||S.en)[k]; }
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];}); }
function decode(s){ var t=document.createElement("textarea"); t.innerHTML=s; return t.value; }
var SR = window.SpeechRecognition || window.webkitSpeechRecognition, TTS = window.speechSynthesis;
var guest = G[pageLang()] ? pageLang() : "en", rec=null, busy=false, log=[];

/* ---------- dịch (bản thử: MyMemory) ---------- */
function translate(text, from, to){
  var u="https://api.mymemory.translated.net/get?q="+encodeURIComponent(text)+"&langpair="+encodeURIComponent(from+"|"+to);
  var ctl = window.AbortController ? new AbortController() : null, tm = setTimeout(function(){ ctl && ctl.abort(); }, 10000);
  return fetch(u, ctl?{signal:ctl.signal}:{}).then(function(r){ return r.json(); }).then(function(d){
    clearTimeout(tm);
    if(d.quotaFinished || d.responseStatus==429) throw new Error("quota");
    if(d.responseStatus!=200 || !d.responseData) throw new Error("svc");
    return decode(d.responseData.translatedText||"");
  });
}
/* ---------- đọc ---------- */
function voiceFor(code){ if(!TTS) return null; var v=TTS.getVoices(), p=code.slice(0,2).toLowerCase();
  return v.filter(function(x){return x.lang.replace("_","-").toLowerCase()===code.toLowerCase();})[0] || v.filter(function(x){return x.lang.slice(0,2).toLowerCase()===p;})[0] || null; }
function speak(text, code){
  if(!TTS || !text) return false; TTS.cancel();
  var u=new SpeechSynthesisUtterance(text); u.lang=code; var v=voiceFor(code); if(v) u.voice=v; u.rate=0.95;
  TTS.speak(u); return !!v || !TTS.getVoices().length;
}
function unlockTTS(){ if(TTS && !unlockTTS.done){ try{ var u=new SpeechSynthesisUtterance(" "); u.volume=0; TTS.speak(u); }catch(e){} unlockTTS.done=true; } }

/* ---------- giao diện ---------- */
var css = document.createElement("link"); css.rel="stylesheet"; css.href="interpreter.css"; document.head.appendChild(css);
var fab=document.createElement("button"); fab.type="button"; fab.className="ip-fab"; fab.id="ipFab";
var box=document.createElement("div"); box.className="ip-wrap"; box.id="ipWrap"; box.hidden=true; box.setAttribute("role","dialog"); box.setAttribute("aria-modal","true");
document.body.appendChild(fab); document.body.appendChild(box);
var MIC='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM18.5 11.5a6.5 6.5 0 0 1-13 0M12 18v3"/></svg>';
function draw(){
  var L=pageLang();
  fab.innerHTML=MIC+'<span>'+esc(T("fab"))+'</span>'; fab.setAttribute("aria-label",T("fab"));
  box.innerHTML='<div class="ip-sheet"><div class="ip-hd"><div><span class="ip-k">Demo · AI</span><h3>'+esc(T("title"))+'</h3></div><button type="button" class="ip-x" id="ipX" aria-label="'+esc(T("close"))+'">×</button></div>'+
   '<p class="ip-sub">'+esc(T("sub"))+'</p>'+
   '<label class="ip-sel"><span>'+esc(T("guestLang"))+'</span><select id="ipLang">'+Object.keys(G).map(function(k){return '<option value="'+k+'"'+(k===guest?' selected':'')+'>'+G[k].name+'</option>';}).join("")+'</select><span class="ip-arrow">⇄ Tiếng Việt</span></label>'+
   (SR?'':'<p class="ip-warn">'+esc(T("noMic"))+'</p>')+
   '<div class="ip-log" id="ipLog" aria-live="polite"></div><p class="ip-status" id="ipStatus"></p>'+
   '<div class="ip-btns"><button type="button" class="ip-b ip-g" id="ipG"'+(SR?'':' disabled')+'>'+MIC+'<b>'+esc(S[guest].guest)+'</b><small>Khách nói</small></button>'+
   '<button type="button" class="ip-b ip-s" id="ipS"'+(SR?'':' disabled')+'>'+MIC+'<b>Nhân viên nói</b><small>'+esc(L==="vi"?"Tiếng Việt":T("staff"))+'</small></button></div>'+
   '<form class="ip-type" id="ipForm"><input id="ipText" maxlength="450" autocomplete="off" placeholder="'+esc(T("type"))+'"><div><button type="submit" data-w="g">'+esc(T("asGuest"))+'</button><button type="submit" data-w="s">'+esc(T("asStaff"))+'</button></div></form>'+
   '<p class="ip-note">'+esc(T("note"))+'</p></div>';
  renderLog(); bind();
}
function renderLog(){
  var el=document.getElementById("ipLog"); if(!el) return;
  el.innerHTML = log.length ? log.map(function(m,i){ return '<div class="ip-msg '+m.who+'"><span class="ip-who">'+esc(m.who==="g"?S[m.g].guest+" · "+G[m.g].name:"Nhân viên · Tiếng Việt")+'</span>'+
     '<p class="ip-src">'+esc(m.src)+'</p><p class="ip-dst">'+(m.dst==null?'<i>'+esc(T("trans"))+'</i>':esc(m.dst))+'</p>'+
     (m.dst?'<button type="button" class="ip-play" data-i="'+i+'">▶ '+esc(T("replay"))+'</button>':'')+'</div>'; }).join("") : '<p class="ip-empty">'+esc(T("empty"))+'</p>';
  el.scrollTop=el.scrollHeight;
}
function status(s){ var e=document.getElementById("ipStatus"); if(e) e.textContent=s||""; }
function handle(who, text){
  text=(text||"").trim(); if(!text) return;
  var from = who==="g"?G[guest]:VI, to = who==="g"?VI:G[guest], m={who:who,g:guest,src:text,dst:null,to:to.sr};
  log.push(m); renderLog(); status(T("trans"));
  translate(text, from.mt, to.mt).then(function(out){ m.dst=out; renderLog(); status("");
    if(!speak(out, to.sr)) status(T("noVoice"));
  }).catch(function(e){ log.splice(log.indexOf(m),1); renderLog(); status(e.message==="quota"?T("quota"):T("netErr")); });
}
function listen(who){
  if(!SR) return; unlockTTS();
  if(rec){ try{rec.stop();}catch(e){} return; }
  if(TTS) TTS.cancel();
  rec=new SR(); rec.lang = who==="g"?G[guest].sr:VI.sr; rec.interimResults=true; rec.maxAlternatives=1; rec.continuous=false;
  var finalText="", btn=document.getElementById(who==="g"?"ipG":"ipS"); btn.classList.add("on"); status(T("listen"));
  rec.onresult=function(ev){ var interim=""; for(var i=ev.resultIndex;i<ev.results.length;i++){ var r=ev.results[i]; if(r.isFinal) finalText+=r[0].transcript; else interim+=r[0].transcript; } status(interim?("… "+interim):T("listen")); };
  rec.onerror=function(ev){ status(ev.error==="not-allowed"||ev.error==="service-not-allowed"?T("denied"):ev.error==="no-speech"?T("heard"):T("micErr")+ev.error); };
  rec.onend=function(){ btn.classList.remove("on"); rec=null; if(finalText) handle(who, finalText); else if(document.getElementById("ipStatus").textContent===T("listen")) status(T("heard")); };
  try{ rec.start(); }catch(e){ rec=null; btn.classList.remove("on"); status(T("micErr")+e.message); }
}
function bind(){
  document.getElementById("ipX").onclick=close;
  document.getElementById("ipLang").onchange=function(){ guest=this.value; draw(); };
  var g=document.getElementById("ipG"), s=document.getElementById("ipS");
  g.onclick=function(){ listen("g"); }; s.onclick=function(){ listen("s"); };
  var f=document.getElementById("ipForm"), who="g";
  [].forEach.call(f.querySelectorAll("button"),function(b){ b.onclick=function(){ who=b.getAttribute("data-w"); }; });
  f.onsubmit=function(e){ e.preventDefault(); unlockTTS(); var i=document.getElementById("ipText"); handle(who, i.value); i.value=""; };
  document.getElementById("ipLog").onclick=function(e){ var b=e.target.closest(".ip-play"); if(b){ var m=log[+b.getAttribute("data-i")]; speak(m.dst, m.to); } };
}
function open(){ box.hidden=false; document.documentElement.classList.add("ip-open"); setTimeout(function(){ box.classList.add("show"); },10); }
function close(){ if(rec) try{rec.abort();}catch(e){} if(TTS) TTS.cancel(); box.classList.remove("show"); document.documentElement.classList.remove("ip-open"); setTimeout(function(){ box.hidden=true; },250); }
fab.onclick=function(){ unlockTTS(); open(); };
box.addEventListener("click",function(e){ if(e.target===box) close(); });
document.addEventListener("keydown",function(e){ if(e.key==="Escape" && !box.hidden) close(); });
if(TTS && TTS.onvoiceschanged!==undefined) TTS.onvoiceschanged=function(){};
new MutationObserver(function(){ if(G[pageLang()] && !log.length) guest=pageLang(); draw(); }).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
draw();
window.SpaInterpreter={translate:translate,handle:handle,open:open};
})();
