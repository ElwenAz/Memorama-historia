const app = document.getElementById('app')
let templateHTML = '';
let ArrayCard = []
let ArrayFruit = []
const btn = document.getElementById('btn')
let listFruit = ['prieta<img src="./img/agua-prieta.jpg">',
  'guadalupe<img src="./img/guadalupe.jpg">',
  'guadalupe<img src="./img/carranza.jpg">',
  'ciudadela<img src="./img/ciudadela.jpg">',
  'luis<img src="./img/San-luis.jpg">',
  'prieta<img src="./img/adplu.jpeg">',
  'ciudadela<img src="./img/huefe.jpg">',
  'bucareli<img src="./img/calal.jpeg">',
  'ayala<img src="./img/ayala.jpg">',
  'luis<img src="./img/madero.jpg">',
  'bucareli<img src="./img/bucareli.jpg">',
  'ayala<img src="./img/Zapata.jpeg">']
let count=0;
console.log(ArrayCard.length)
listFruit.forEach(fruit=>(
    templateHTML+=`
    <div class="card">
        <div class="sides front"></div>
        <div class="sides back">${fruit}</div>
    </div>
    `
))

app.innerHTML=templateHTML

app.addEventListener('click',(e)=>{
    let value = e.target.matches('.front')

    if(value && ArrayCard.length<=2){
      console.log(ArrayCard)
       if(count<=1){
          let ElementCard = e.target.parentElement
        let fruit = ElementCard.children[1].textContent
        
        ElementCard.classList.add('rotate')
        ArrayCard=[...ArrayCard,ElementCard]
        ArrayFruit=[...ArrayFruit,fruit]

        VerificationsCards();
       }
    }
})

const VerificationsCards = ()=>{
    if(ArrayCard.length>1){


        if(ArrayFruit[0] === ArrayFruit[1]){
            ArrayCard=""
            ArrayFruit=""
        }else{
            setTimeout(() => { 

                ArrayCard[0].classList.remove('rotate')
                ArrayCard[1].classList.remove('rotate')
                ArrayCard[2].classList.remove('rotate')
                ArrayCard=""
                ArrayFruit=""
            }, 800);
        }
    }
  }


const ramdon = () => {
    for (let index = app.children.length; index >= 0; index--) {
      app.appendChild(app.children[(Math.random() * index) | 0]);
    }
  };

const cards = document.querySelectorAll('.card')

  btn.addEventListener('click',()=>{
    ramdon();

    for(let index of cards){
        index.classList.remove('rotate')
    }
  })

// '🍍' '🍓' 
