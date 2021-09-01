//ARRAY de preguntas
var Questions = [
    {
        id: 0,
        q: '¿Cuál es la película protagonizada por Keanue Reeves donde lucha contra el código informático?',
        a:  [{ text: "MadMan", isCorrect: false },
            { text: "Suicide Squad", isCorrect: false },
            { text: "Matrix", isCorrect: true },
            { text: "CyberPunk", isCorrect: false }
        ]
    },
    {
        id: 1,
        q: '¿Cuál es la película en la que Will Smith lucha contra los robots?',
        a:  [{ text: "Irobot", isCorrect: true },
            { text: "Pixels", isCorrect: false },
            { text: "Bad Boys", isCorrect: false },
            { text: "Focus", isCorrect: false }
            ]
            },

    {
        id: 2,
        q: '¿Puedes nombrar el programa de televisión en el que Desmond usa una computadora para salvar la isla y, en última instancia, el mundo?',
        a:  [{ text: "Lost", isCorrect: true },
            { text: "Lupin", isCorrect: false },
            { text: "Back to the future", isCorrect: false },
            { text: "Suits", isCorrect: false }
      
    ]
    },
    {
        id: 3,
        q: '¿Puedes nombrar el videojuego en el que pirateas el mundo para cometer varios delitos?',
        a:  [{ text: "Cyberpunk", isCorrect: false },
            { text: "God of War", isCorrect: false },
            { text: "Watch Dogs", isCorrect: true },
            { text: "Rust", isCorrect: false }
     
    ]
    },

    {
        id: 4,
        q: '¿Cuál es la película que más Oscars ha ganado en la historia?',
        a:  [{ text: "Titanic", isCorrect: false },
            { text: "Ben Hur", isCorrect: false },
            { text: "El señor de los anillos", isCorrect: false },
            { text: "Todas las anteriores", isCorrect: true}
    ]
    },
    {
        id: 5,
        q: '¿Cuántas estatuillas Oscar tiene la película más premiada?',
        a:  [{ text: "15", isCorrect: false },
            { text: "12", isCorrect: false },
            { text: "11", isCorrect: true },
            { text: "10", isCorrect: false}
    ]
    },
    {
        id: 6,
        q: ' ¿En qué película de la Saga de Star Wars la princesa Leia empieza a usar la fuerza?',
        a:  [{ text: "Episodio V", isCorrect: false },
            { text: "Episodio VI", isCorrect: true },
            { text: "Episodio VII", isCorrect: false },
            { text: "Episodio III", isCorrect: false}
    ]
    },
    {
        id: 7,
        q: '¿Cuál fue la primera directora en ganar un Oscar de la Academia?',
        a:  [{ text: "Kathryn Bigelow", isCorrect: true},
            { text: "Gale Anne Hurd", isCorrect: false },
            { text: "Linda Hamilton", isCorrect: false },
            { text: "Leslie Hamilton", isCorrect: false}
    ]   
    },
    {
        id: 8,
        q: '¿Cuál es la película más taquilllera de la historia?',
        a:  [{ text: "Matrix", isCorrect: false},
        { text: "Rescatando al Soldado Ryan", isCorrect: false },
        { text: "Avengers: Endgame", isCorrect: true },
        { text: "Titanic", isCorrect: false}
        ]
    },

    { id: 9,
        q: "Que te parecio el quiz? ",
        a: [{ text: "Muy bueno", isCorrect: undefined},
        {text: "Malo", isCorrect: undefined},
        { text: "Mas o menos", isCorrect: undefined },
        { text: "Horrible", isCorrect: undefined},
    ]
    },
];


var start = true;

function iterar(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");

question.innerText = Questions[id].q;

// Opciones
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Texto de la opción
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Correcto o falso de la opción
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

//En esta parte cuando el usuario aprete cualquiera de las cuatro opciones la seleccionada se convertira de color amarrilo y las otras de celeste

//opcion 1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

//opcion 2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

//opcion 3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

//opcion 4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

//declarando la variable del boton comprobar
const evaluate = document.getElementsByClassName("Comprobar");

// metodo de evaluación usando un evento donde presionando un click se ejecuta el codigo
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correcto";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Falso";
        result[0].style.color = "red";
    }
    if (selected == "undefined") {
        result[0].innerHTML = "Gracias por ayudarnos"
        result[0].style.color = "black";
    }
})
}

if (start) {
iterar("0");
}

// boton "siguiente"
const next = document.getElementsByClassName('Siguiente')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
    id++;
    iterar(id);
    console.log(id);
}

})

//Esto es para luego de darle click al boton "siguiente" la opción elegida por el usuario se vuelva al color original
function myFunction() {
    document.getElementById("op1").style.backgroundColor = "lightskyblue";
    document.getElementById("op2").style.backgroundColor = "lightskyblue";
    document.getElementById("op3").style.backgroundColor = "lightskyblue";
    document.getElementById("op4").style.backgroundColor = "lightskyblue";
  }

  //boton de reseteo para volver al principio del quiz
  const reset = document.getElementsByClassName('restartButton')[0];
  var id= 0

  reset.addEventListener("click", () => {
    if (id < 10) {
        id = 0;
        iterar(id)
        console.log(id);
    }
  })

//almacenamiento de datos en el storage y recuperación a traves de console.log
  localStorage.setItem('Creador', 'Andrés')
  localStorage.Apellido = 'Garcia Skinner'

  let firstName = localStorage.getItem('Creador'),
    lastName  = localStorage.Apellido

 console.log(`Hola, mi nombre es ${firstName} ${lastName} y soy el creador de este quiz`)

 //Objetos (en este caso el array de las preguntas) javascript en Jason. Usando el console.log se puede ver todo el array escrito del codigo.
 const enJSON = JSON.stringify(Questions);
 console.log(enJSON);
 console.log(typeof Questions);
 console.log(typeof enJSON);
 
 //con este metodo escribiendo "Questions" en la consola se devuelve cada pregunta (solo la pregunta y no las opciones a responder como es el caso de arriba) con su respectivo id así quedando más ordenado que la parte de arriba.
const producto2 = JSON.parse(localStorage.getItem("Questions"));
console.log(Questions.id);     
