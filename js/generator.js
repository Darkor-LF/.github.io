let motyIni = ['Mejor compañía',
    'Peor compañía',
    'Mejor personaje',
    'Peor personaje',
    'Mejor juego',
    'Peor juego'

]

let motyFin = ['explota a la gente',
    'lucha por la preservación',
    'lucha contra la preservación',
    'apoya el capitalismo',
    'lucha contra el capitalismo',
    'provoca el apocalipsis',
    'plato de comida'

]

const generateMoty = () => {
    let motyIniRand = motyIni[Math.floor(Math.random() * motyIni.length)]
    let motyFinRand = motyFin[Math.floor(Math.random() * motyFin.length)]


        document.querySelector('.premio').innerHTML = `<i>${motyIniRand} que ${motyFinRand}</i>`


  

}