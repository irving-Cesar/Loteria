let jogo = document.getElementById("jogo")
let loc = document.createElement("h3")
let qntdade = document.getElementById("quantidade")
let texto = document.getElementById("text")
let resultado = [01,06,09,10,11,12,13,15,16,17,18,21,22,23,24]
let contArray = 0;
let arrayLoka = [];
let ajuda = [];
var counts = {};

function getRandomInt(qnt) {
    loc.innerText = ""
    qnt = qntdade.value
    let sorteado = 0;
    const maxNumbers = 25;
    const minNumbers = 1;
    let list = []; 
    list2 = [];


    (function() {
        
        function countItems(arr) {
            const countMap = Object.create(null);
          
            for (const element of arr) {
              countMap[element] = (countMap[element] || 0) + 1;
            }
          
            return Object.entries(countMap).map(([value, count]) => ({
              num: value,
              qnt: count
            }));
        }

        for (let k = 1; k <= qnt; k++) {

            for (let i = 0; i <= 14; i++) {
                sorteado = Math.floor((Math.random() * (minNumbers | maxNumbers) + 1));

                if (list.includes(sorteado)) {
                    i--
                    continue;
                } else {
                    list[i] = sorteado;
                    arrayLoka.push(list[i])
                }   

            }

            for (let m = 0; m <= list.length - 1; m++) {

                if (resultado.includes(list[m])) {
                    contArray++
                }
                if (contArray >= 14) {
                    // console.log("Jogo premiado (14 pontos): ", k, "\nNúmeros: " , list.sort((a, b) => a - b).join(" "))
                    // alert("14 pontos! \n"+ "Jogo sorteado: " + k + "! \nNúmeros: " + list.sort((a, b) => a - b).join(" "))
                    if (contArray == 15) {
                        console.log("Jogo premiado (15 pontos): ", k, "\nNúmeros: ", list.sort((a, b) => a - b).join(" "))
                        alert("15 pontos! \n"+ "Jogo sorteado: " + k + "! \nNúmeros: " + list.sort((a, b) => a - b).join(" "))               
                    }                   
                } 
                
            }
            contArray = 0

        }
        list = [];
        ajuda[0] = countItems(arrayLoka)

        ajuda[0] = ajuda[0].sort(function(a , b) {
            //Ordenando de forma decrescente os valores do objeto `ajuda`
            return (a.qnt < b.qnt) ? 1 : ((b.qnt < a.qnt) ? -1 : 0);
        })

        for (let i = 0; i <= 14; i++) {
            list.push(ajuda[0][i].num)
        }

        if (ajuda[0].length >= 25) {
            for (let i = 10; i <= 24; i++) {
                list2.push(ajuda[0][i].num)
            }
        }

        
        loc.innerText += (list.sort((a, b) => a - b).join(" ")) + "\n" + list2.sort((a, b) => a - b).join(" "); // Separando números que foram mais/menos sorteados 
        loc.style.margin = "auto"
        jogo.appendChild(loc);

    })();
}

function taticaCruz () {
    let numPrimos = [];
    

    let arrNumeros = [
        {
            numeros: [1,2]
        },
        {
            numeros: [3,8,13,18,23]
        },
        {
            numeros: [4,5]
        },
        {
            numeros: [6,7]
        },
        {
            numeros: [9,10]
        },
        {
            numeros: [11,12]
        },
        {
            numeros: [14,15]
        },
        {
            numeros: [16,17]
        },
        {
            numeros: [19,20]
        },
        {
            numeros: [21, 22]
        },
        {
            numeros: [24,25]
        }
    ]
       
}
