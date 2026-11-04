// Contador de visitas (solo local)
  (function(){
    var n = 1000;
    try{ n = (parseInt(localStorage.getItem('visitas'),10) || 1000) + 1; localStorage.setItem('visitas', n); }catch(e){}
    var s = String(n).padStart(6,'0');
    document.getElementById('contador').innerHTML = s.split('').map(function(d){return '<span>'+d+'</span>';}).join('');
  })();

  // Estado de ánimo
  document.querySelectorAll('.humor button').forEach(function(b){
    b.addEventListener('click', function(){
      document.getElementById('humor-msg').textContent = b.dataset.t;
      document.getElementById('estado-top').textContent = b.dataset.e;
    });
  });
