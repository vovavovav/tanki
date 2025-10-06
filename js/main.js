// main.js (defer)
(async function(){
  try {
    const res = await fetch('/meta.json', {cache: "no-cache"});
    if(!res.ok) return;
    const meta = await res.json();
    // Обновим title и description (на случай, если нужно править через json)
    if(meta.title) {
      document.title = meta.title;
      const elTitle = document.querySelector('title');
      if(elTitle) elTitle.textContent = meta.title;
      // og и прочие можно тоже менять при желании
    }
    if(meta.description){
      const desc = document.querySelector('meta[name="description"]');
      if(desc) desc.setAttribute('content', meta.description);
    }
  } catch (err) {
    console.warn('Не удалось загрузить meta.json', err);
  }
})();
