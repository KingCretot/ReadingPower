/* KCE mastery gate: a lesson opens only after the lesson before it (same world/unit) is mastered. */
(function(){
var CFG = {"kind": "rf", "mastery": 90, "unit": "unit", "hub": "index.html", "hubs": ["index.html", "KCE_RP_Hub.html"], "list": [{"f": "KCE_RP_U1L1_Un.html", "id": "U1L1", "prev": null, "label": "Unit 1, Lesson 1"}, {"f": "KCE_RP_U1L2_Re.html", "id": "U1L2", "prev": "U1L1", "label": "Unit 1, Lesson 2"}, {"f": "KCE_RP_U1L3_Pre.html", "id": "U1L3", "prev": "U1L2", "label": "Unit 1, Lesson 3"}, {"f": "KCE_RP_U1L4_Dis.html", "id": "U1L4", "prev": "U1L3", "label": "Unit 1, Lesson 4"}, {"f": "KCE_RP_U1L5_Mis.html", "id": "U1L5", "prev": "U1L4", "label": "Unit 1, Lesson 5"}, {"f": "KCE_RP_U1L6_Over.html", "id": "U1L6", "prev": "U1L5", "label": "Unit 1, Lesson 6"}, {"f": "KCE_RP_U1L7_PrefixMix.html", "id": "U1L7", "prev": "U1L6", "label": "Unit 1, Lesson 7"}, {"f": "KCE_RP_U1L8_PrefixPower.html", "id": "U1L8", "prev": "U1L7", "label": "Unit 1 Capstone"}, {"f": "KCE_RP_U2L1_FulLess.html", "id": "U2L1", "prev": null, "label": "Unit 2, Lesson 1"}, {"f": "KCE_RP_U2L2_ErEst.html", "id": "U2L2", "prev": "U2L1", "label": "Unit 2, Lesson 2"}, {"f": "KCE_RP_U2L3_Ly.html", "id": "U2L3", "prev": "U2L2", "label": "Unit 2, Lesson 3"}, {"f": "KCE_RP_U2L4_EdIng.html", "id": "U2L4", "prev": "U2L3", "label": "Unit 2, Lesson 4"}, {"f": "KCE_RP_U2L5_Tion.html", "id": "U2L5", "prev": "U2L4", "label": "Unit 2, Lesson 5"}, {"f": "KCE_RP_U2L6_MentNess.html", "id": "U2L6", "prev": "U2L5", "label": "Unit 2, Lesson 6"}, {"f": "KCE_RP_U2L7_SuffixMix.html", "id": "U2L7", "prev": "U2L6", "label": "Unit 2, Lesson 7"}, {"f": "KCE_RP_U2L8_SuffixStar.html", "id": "U2L8", "prev": "U2L7", "label": "Unit 2 Capstone"}, {"f": "KCE_RP_U3L1_Port.html", "id": "U3L1", "prev": null, "label": "Unit 3, Lesson 1"}, {"f": "KCE_RP_U3L2_Form.html", "id": "U3L2", "prev": "U3L1", "label": "Unit 3, Lesson 2"}, {"f": "KCE_RP_U3L3_Spect.html", "id": "U3L3", "prev": "U3L2", "label": "Unit 3, Lesson 3"}, {"f": "KCE_RP_U3L4_Dict.html", "id": "U3L4", "prev": "U3L3", "label": "Unit 3, Lesson 4"}, {"f": "KCE_RP_U3L5_Tract.html", "id": "U3L5", "prev": "U3L4", "label": "Unit 3, Lesson 5"}, {"f": "KCE_RP_U3L6_Struct.html", "id": "U3L6", "prev": "U3L5", "label": "Unit 3, Lesson 6"}, {"f": "KCE_RP_U3L7_RootMix.html", "id": "U3L7", "prev": "U3L6", "label": "Unit 3, Lesson 7"}, {"f": "KCE_RP_U3L8_RootDetective.html", "id": "U3L8", "prev": "U3L7", "label": "Unit 3 Capstone"}, {"f": "KCE_RP_U4L1_ContextClues.html", "id": "U4L1", "prev": null, "label": "Unit 4, Lesson 1"}, {"f": "KCE_RP_U4L2_Synonyms.html", "id": "U4L2", "prev": "U4L1", "label": "Unit 4, Lesson 2"}, {"f": "KCE_RP_U4L3_Antonyms.html", "id": "U4L3", "prev": "U4L2", "label": "Unit 4, Lesson 3"}, {"f": "KCE_RP_U4L4_MultiMeaning.html", "id": "U4L4", "prev": "U4L3", "label": "Unit 4, Lesson 4"}, {"f": "KCE_RP_U4L5_Shades.html", "id": "U4L5", "prev": "U4L4", "label": "Unit 4, Lesson 5"}, {"f": "KCE_RP_U4L6_Relationships.html", "id": "U4L6", "prev": "U4L5", "label": "Unit 4, Lesson 6"}, {"f": "KCE_RP_U4L7_Reference.html", "id": "U4L7", "prev": "U4L6", "label": "Unit 4, Lesson 7"}, {"f": "KCE_RP_U4L8_WordWizard.html", "id": "U4L8", "prev": "U4L7", "label": "Unit 4 Capstone"}, {"f": "KCE_RP_U5L1_Similes.html", "id": "U5L1", "prev": null, "label": "Unit 5, Lesson 1"}, {"f": "KCE_RP_U5L2_Metaphors.html", "id": "U5L2", "prev": "U5L1", "label": "Unit 5, Lesson 2"}, {"f": "KCE_RP_U5L3_Idioms.html", "id": "U5L3", "prev": "U5L2", "label": "Unit 5, Lesson 3"}, {"f": "KCE_RP_U5L4_Personification.html", "id": "U5L4", "prev": "U5L3", "label": "Unit 5, Lesson 4"}, {"f": "KCE_RP_U5L5_Hyperbole.html", "id": "U5L5", "prev": "U5L4", "label": "Unit 5, Lesson 5"}, {"f": "KCE_RP_U5L6_Sound.html", "id": "U5L6", "prev": "U5L5", "label": "Unit 5, Lesson 6"}, {"f": "KCE_RP_U5L7_Imagery.html", "id": "U5L7", "prev": "U5L6", "label": "Unit 5, Lesson 7"}, {"f": "KCE_RP_U5L8_FigureItOut.html", "id": "U5L8", "prev": "U5L7", "label": "Unit 5 Capstone"}, {"f": "KCE_RP_U6L1_MainIdea.html", "id": "U6L1", "prev": null, "label": "Unit 6, Lesson 1"}, {"f": "KCE_RP_U6L2_CharacterSetting.html", "id": "U6L2", "prev": "U6L1", "label": "Unit 6, Lesson 2"}, {"f": "KCE_RP_U6L3_Theme.html", "id": "U6L3", "prev": "U6L2", "label": "Unit 6, Lesson 3"}, {"f": "KCE_RP_U6L4_Plot.html", "id": "U6L4", "prev": "U6L3", "label": "Unit 6, Lesson 4"}, {"f": "KCE_RP_U6L5_Inferences.html", "id": "U6L5", "prev": "U6L4", "label": "Unit 6, Lesson 5"}, {"f": "KCE_RP_U6L6_POV.html", "id": "U6L6", "prev": "U6L5", "label": "Unit 6, Lesson 6"}, {"f": "KCE_RP_U6L7_CompareContrast.html", "id": "U6L7", "prev": "U6L6", "label": "Unit 6, Lesson 7"}, {"f": "KCE_RP_U6L8_StoryMaster.html", "id": "U6L8", "prev": "U6L7", "label": "Unit 6 Capstone"}, {"f": "KCE_RP_U7L1_KeyDetails.html", "id": "U7L1", "prev": null, "label": "Unit 7, Lesson 1"}, {"f": "KCE_RP_U7L2_TextFeatures.html", "id": "U7L2", "prev": "U7L1", "label": "Unit 7, Lesson 2"}, {"f": "KCE_RP_U7L3_TextStructure.html", "id": "U7L3", "prev": "U7L2", "label": "Unit 7, Lesson 3"}, {"f": "KCE_RP_U7L4_Purpose.html", "id": "U7L4", "prev": "U7L3", "label": "Unit 7, Lesson 4"}, {"f": "KCE_RP_U7L5_FactOpinion.html", "id": "U7L5", "prev": "U7L4", "label": "Unit 7, Lesson 5"}, {"f": "KCE_RP_U7L6_Evidence.html", "id": "U7L6", "prev": "U7L5", "label": "Unit 7, Lesson 6"}, {"f": "KCE_RP_U7L7_Summarize.html", "id": "U7L7", "prev": "U7L6", "label": "Unit 7, Lesson 7"}, {"f": "KCE_RP_U7L8_NonfictionNinja.html", "id": "U7L8", "prev": "U7L7", "label": "Unit 7 Capstone"}, {"f": "KCE_RP_U8L1_Expression.html", "id": "U8L1", "prev": null, "label": "Unit 8, Lesson 1"}, {"f": "KCE_RP_U8L2_MorphContext.html", "id": "U8L2", "prev": "U8L1", "label": "Unit 8, Lesson 2"}, {"f": "KCE_RP_U8L3_RootContext.html", "id": "U8L3", "prev": "U8L2", "label": "Unit 8, Lesson 3"}, {"f": "KCE_RP_U8L4_VocabContext.html", "id": "U8L4", "prev": "U8L3", "label": "Unit 8, Lesson 4"}, {"f": "KCE_RP_U8L5_FigContext.html", "id": "U8L5", "prev": "U8L4", "label": "Unit 8, Lesson 5"}, {"f": "KCE_RP_U8L6_SummarizeConclude.html", "id": "U8L6", "prev": "U8L5", "label": "Unit 8, Lesson 6"}, {"f": "KCE_RP_U8L7_Synthesize.html", "id": "U8L7", "prev": "U8L6", "label": "Unit 8, Lesson 7"}, {"f": "KCE_RP_U8L8_ReadingPowerhouse.html", "id": "U8L8", "prev": "U8L7", "label": "Unit 8 Capstone"}]};
var TKEY='kce_teacher_mode_v2', OKEY='kce_gate_unlocked_v2', PIN='9110', SPIN='1111';
var ROOT=(function(){var s=document.currentScript&&document.currentScript.src||'';return s.slice(0,s.lastIndexOf('/')+1);})();
function rd(k){try{return JSON.parse(localStorage.getItem(k)||'{}')||{}}catch(e){return {}}}
function passed(id){
  if(!id) return true;
  if(CFG.kind==='mf'){var p=rd('kce_mathfoundations_progress')[id];return !!(p&&p.passed);}
  return rd('kce_rf_pass')[id]!==undefined;
}
function teacher(){try{return localStorage.getItem(TKEY)==='1'}catch(e){return false}}
function unlockedByPin(id){return !!rd(OKEY)[id];}
function byFile(f){for(var i=0;i<CFG.list.length;i++){if(CFG.list[i].f===f)return CFG.list[i];}return null;}
function byId(id){for(var i=0;i<CFG.list.length;i++){if(CFG.list[i].id===id)return CFG.list[i];}return null;}
function isOpen(e){return !e.prev||passed(e.id)||teacher()||passed(e.prev)||unlockedByPin(e.id);}
function rel(url){var u=url.split('#')[0].split('?')[0];if(u.indexOf(ROOT)!==0)return null;try{return decodeURIComponent(u.slice(ROOT.length));}catch(e){return u.slice(ROOT.length);}}
function css(){if(document.getElementById('kcegate-css'))return;var s=document.createElement('style');s.id='kcegate-css';s.textContent=
'.kg-ov{position:fixed;inset:0;z-index:2147483000;background:rgba(10,31,61,.96);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Inter,system-ui,sans-serif}'+
'.kg-box{background:#fff;border-radius:18px;max-width:460px;width:100%;padding:30px 26px;text-align:center;border-top:6px solid #C9A84C;box-shadow:0 20px 60px rgba(0,0,0,.35)}'+
'.kg-box h2{font-family:Fraunces,Georgia,serif;color:#0A1F3D;margin:8px 0 10px;font-size:26px}.kg-box p{color:#4a5666;font-size:16px;line-height:1.5;margin:0 0 18px}'+
'.kg-lock{font-size:46px}.kg-btn{display:block;width:100%;text-decoration:none;font-weight:700;font-size:16px;padding:13px;border-radius:12px;background:#0A1F3D;color:#fff;border:none;cursor:pointer;margin-bottom:10px}'+
'.kg-t{margin-top:14px;font-size:13px;color:#7d8794}.kg-t input{width:110px;padding:8px;border:2px solid #E7E0CF;border-radius:8px;font-size:15px;text-align:center}.kg-t button{padding:8px 12px;border-radius:8px;border:none;background:#C9A84C;color:#0A1F3D;font-weight:700;cursor:pointer;margin-left:6px}'+
'.card.kg-locked{opacity:.62}.card.kg-locked:hover{transform:none;box-shadow:none;border-color:#E7E0CF}'+
'.btn.kg-lockbtn{background:#eceae4!important;color:#6b7684!important;cursor:not-allowed}'+
'.tag.kg-pass{display:inline-block;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:1px;text-transform:uppercase;padding:3px 9px;border-radius:999px;background:#e6f4ea;color:#1e7a3c;margin:0 4px 4px 0}'+
'.kg-bar{max-width:1080px;margin:18px auto 0;padding:12px 24px;font-size:13px;color:#7d8794}.kg-bar button{background:none;border:none;color:#0047BA;text-decoration:underline;cursor:pointer;font:inherit;padding:0}';
document.head.appendChild(s);}
function lessonGuard(){
  var e=byFile(rel(location.href)); if(!e||isOpen(e)) return;
  css();
  var prev=byId(e.prev);
  var ov=document.createElement('div');ov.className='kg-ov';ov.innerHTML=
   '<div class="kg-box"><div class="kg-lock">🔒</div><h2>Not unlocked yet</h2>'+
   '<p>Master <b>'+(prev?prev.label:'the lesson before this one')+'</b> first (score '+CFG.mastery+' or higher). Then this lesson opens.</p>'+
   (prev?'<a class="kg-btn" href="'+ROOT+encodeURI(prev.f)+'">Go to '+prev.label+'</a>':'')+
   '<a class="kg-btn" style="background:#C9A84C;color:#0A1F3D" href="'+ROOT+(e.h||CFG.hub)+'">Back to the course page</a>'+
   '<div class="kg-t">Unlock code: <input type="password" inputmode="numeric" id="kgpin"><button id="kgok">Unlock</button><div id="kgmsg"></div></div></div>';
  document.body.appendChild(ov);document.documentElement.style.overflow='hidden';
  document.getElementById('kgok').onclick=function(){
    var kgv=document.getElementById('kgpin').value;if(kgv===PIN||kgv===SPIN){if(kgv===SPIN){try{fetch('https://formspree.io/f/maeqzabe',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({type:'Student unlock code 1111 used',page:location.href,lesson:e.id,label:e.label,timestamp:new Date().toISOString()})})}catch(z){}}var m=rd(OKEY);m[e.id]=true;try{localStorage.setItem(OKEY,JSON.stringify(m))}catch(x){}
      ov.remove();document.documentElement.style.overflow='';}
    else{document.getElementById('kgmsg').textContent='That code is not right.';}
  };
}
function hub(){
  css();
  var as=document.querySelectorAll('a.btn');
  for(var i=0;i<as.length;i++){
    var a=as[i],e=byFile(rel(a.href));if(!e)continue;
    var card=a.closest('.card');
    if(passed(e.id)&&card&&!card.querySelector('.kg-pass,.t-pass')){
      var tg=card.querySelector('.tags');if(!tg){tg=document.createElement('div');tg.className='tags';a.parentNode.parentNode.insertBefore(tg,a.parentNode);}
      var t=document.createElement('span');t.className='tag kg-pass';t.textContent='✓ Mastered';tg.appendChild(t);}
    if(!isOpen(e)){
      var prev=byId(e.prev);var sp=document.createElement('span');sp.className='btn primary kg-lockbtn';
      sp.textContent='🔒 Master '+(prev?prev.label:'the previous lesson')+' first';a.parentNode.replaceChild(sp,a);
      if(card)card.classList.add('kg-locked');}
  }
  var bar=document.createElement('div');bar.className='kg-bar';
  bar.innerHTML=teacher()?'<b>Teacher mode is on</b> for this device: every lesson is open. <button id="kgtm">Turn teacher mode off</button>'
    :'Lessons unlock in order within each '+CFG.unit+'. Master a lesson ('+CFG.mastery+'+) to open the next one. <button id="kgtm">Teacher: open all lessons on this device</button>';
  var main=document.querySelector('main');(main&&main.parentNode||document.body).insertBefore(bar,main?main.nextSibling:null);
  document.getElementById('kgtm').onclick=function(){
    if(teacher()){try{localStorage.removeItem(TKEY)}catch(x){}location.reload();return;}
    var p=prompt('Teacher code');if(p===PIN){try{localStorage.setItem(TKEY,'1')}catch(x){}location.reload();}else if(p!==null)alert('That code is not right.');
  };
}
window.KCEGate={isOpen:isOpen,passed:passed};
function run(){ if(CFG.hubs.indexOf(rel(location.href)||'')>-1||rel(location.href)==='') hub(); else lessonGuard(); }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
