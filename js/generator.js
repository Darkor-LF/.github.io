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
    'Mejor apología por el comunismo',
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
    'Escena de llorar',
    'Mejor distopía',
    'Peor distopía',
    'Mejor apología por el capitalismo',
    'Juego cyberpunk',
    'JRPG',
    'Shooter',
    'Plataformas',
    'Juego de acción',
    'Juego de puzzles',
    'Tycoon',
    'Metroidvania',
    'Roguelike',
    'Mejor juego indie',
    'Peor juego indie',
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
    'de principios de los 2000',
    'por culpa de las TERFs',
    'que tiene gatos',
    'que tiene perros',
    'desarrollado por nazis',
    'desarrollado por comunistas bolcheviques bolivarianos',
    'con señoras que te pisan la cara',
    'con señores que son escoria pero te gustan',
    'desarrollado por Hatsune Miku',
    'que solo jugarías en la Game Boy Advance Tribal',
    'que te brickea la PS4'
    'donde sale el Papa',
    'donde sale Rajoy',
    'donde sale Rosalía',
    'donde sale Jesucristo',
    'donde sale la Reina de Inglaterra',
    'que programó Taylor Swift una tarde de 2020 que estaba aburrida',
]



const generateMoty = () => {
    let motyIniRand = motyIni[Math.floor(Math.random() * motyIni.length)]
    let motyFinRand = motyFin[Math.floor(Math.random() * motyFin.length)]

console.log(motyIni.length,Math.floor(Math.random() * motyIni.length))
        document.querySelector('.premio').innerHTML = `<i>${motyIniRand} ${motyFinRand}</i>`


  

}
