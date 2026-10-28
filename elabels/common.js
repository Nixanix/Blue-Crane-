function setLang(lang){
  document.querySelectorAll('[data-lang]').forEach(el=>{
    el.hidden = el.getAttribute('data-lang') !== lang;
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.set===lang);
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
}
document.addEventListener('DOMContentLoaded',()=>{
  const pref = (navigator.language||'en').slice(0,2);
  const map = {en:'en',es:'es',fr:'fr',de:'de',zh:'zh'};
  setLang(map[pref]||'en');
});
