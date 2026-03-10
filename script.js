const btn = document.getElementById('btn-reflexao'); 
const reflexao = document.getElementById('reflexao'); 
const frases = ["A gra‡a transforma at‚ os cora‡äes mais endurecidos.","Onde h  gra‡a, h  perdÆo.","A cada ato de amor, a gra‡a se manifesta.","Deus age em silˆncio, mas Sua gra‡a ‚ vis¡vel em cada detalhe."]; 
btn.addEventListener('click', () =
    const index = Math.floor(Math.random() * frases.length); 
    reflexao.textContent = frases[index]; 
}); 
