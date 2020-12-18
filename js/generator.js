let motyIni = ['Mejor compañía',
    'Peor compañía',
    'Mejor personaje',
    'Peor personaje',
    'Mejor juego',
    'Peor juego', 
    'Mejor Pokemon',
    'Peor Pokemon',
    'Mejor minijuego',
    'Peor minijuego',
    'Mejor pozo de horas',
    'Mejor bug',
    'Peor bug',
    'Mejor apologia por el comunismo',
    'Mejor salto temporal',
    'BAE',
    'Mejor vehículo volador',
    'Mejor robado',
    'Peor robo',
    'Juego con bicho',
    'Juego de 1998',
    'Mejor juego de la década',
    'Peor juego de la década',
    'Mejor canción',
    'Escena de pelea',
    'Escena de llorar'

]

let motyFin = ['que explota a la gente',
    'que lucha por la preservación',
    'que lucha contra la preservación',
    'que apoya el capitalismo',
    'que lucha contra el capitalismo',
    'que provoca el apocalipsis',
    'de pescar',
    'de comer',
    'de matar el tiempo',
    'que te da un besito de buenas noches',
    'a que tirar ficha',
    'escoria pero...',
    'para sobrevivir al confinamiento',
    'de 2020',
    'qué creías que era de 2020 pero no',
    'que nunca pondrán en el Smash',
    'para acabar en la Audiencia Nacional',
    'con sectas',
    'porque los noventa fueron una cosa',
    'de principios de los 2000'

]


const generateMoty = () => {
    let motyIniRand = motyIni[Math.floor(Math.random() * motyIni.length)]
    let motyFinRand = motyFin[Math.floor(Math.random() * motyFin.length)]


        document.querySelector('.premio').innerHTML = `<i>${motyIniRand} ${motyFinRand}</i>`


  

}
