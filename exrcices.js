// let calificaciones = {
//     nombre: 'javs',
//     ingles: 10,
//     programcion: 9,
//     HTML: 8,
// }

// let media = (calificaciones.ingles + calificaciones.programcion + calificaciones.HTML) / 3;
// console.log(`Alumno ${calificaciones.nombre} media de las calificaciones ${media} `);

// let descuentos = {
//     precio: 0,
//     descuento: 0,
//     precioNeto: function(){
//         return this.precio * (1 - this.descuento/100);
//     }
// }

// descuentos.precio = parseFloat(prompt('precio bruto'));
// descuentos.descuento = parseFloat(prompt('precio bruto'));
// console.log(`El precio neto es ${descuentos.precioNeto()} euros`)

// class Piedra{
//     constructor(masa, volumen) {
//         this.masa = masa;
//         this.volumen = volumen;
//     }
//     densidad(){
//         return this.masa/this.volumen
//     }
// }

// let oro = new Piedra(194, 10);
// console.log(`la densida del oro es ${oro.densidad()}`)


// class Efectivo{
//     constructor(nombre, saldo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     ingresar(cantidad){
//         this.saldo += cantidad;
//     }

//     retirar(cantidad){
//         if(cantidad <= this.saldo){
//             this.saldo -= cantidad;
//         }
        
//     }
// }

// let miCuenta = new Efectivo('javier', 0);
// miCuenta.ingresar(1000);
// console.log(`Mi saldo actual es: ${miCuenta.saldo}`);

// miCuenta.retirar(100);
// console.log(`Mi saldo actual es: ${miCuenta.saldo}`);

// miCuenta.ingresar(200);
// console.log(`Mi saldo actual es: ${miCuenta.saldo}`);

// class Ficha{
//     constructor(nombre, sesiones, numsesiones){
//         this.nombre = nombre;
//         this.sesiones = [];
//         this.numsesiones = 0;
//     }
//     anotar(km){
//         this.sesiones[this.numsesiones] = km;
//         this.numsesiones++;
//     }

//     media(){
//         let media = 0;
//         for(let i = 0; i < this.sesiones.length; i++){
//             media += this.sesiones[i];
//         }
//         return media/this.numsesiones;
//     }
// }

// let newperson = new Ficha('Tomas');
// newperson.anotar(8);
// newperson.anotar(10);
// newperson.anotar(6);
// console.log(`Media de kilometros ${newperson.media()}`)

// class Figura{
//     constructor(color){
//         this.color = color;
//     }

//     obtenerColor(){
//         return this.color;
//     }
// }

// class Rectangulo extends Figura{
//     constructor(color, altura, ancho){
//         super(color);
//         this.ancho = ancho;
//         this.altura = altura;
//     }
//     calcularAreaRectangulo(){
//         return this.ancho * this.altura;
//     }
// }

// class Circulo extends Figura{
//     constructor(color, radio){
//         super(color);
//         this.radio = radio;
//     }
//     calcularAreaCirculo(){
//         return Math.PI * this.radio ** 2
//     }
// }

// class Triangulo extends Figura{
//     constructor(color, base, altura){
//         super(color);
//         this.base = base;
//         this.altura = altura;
//     }
//     calcularAreaTriangulo(){
//         return (this.base * this.altura)/2
//     }
// }

// let areaRectangulo = new Rectangulo('rojo', 5, 10);

// console.log(`Area del rectangulo es ${areaRectangulo.calcularAreaRectangulo()}`)

// Función para crear un partido
function createMatch(player1, player2) {
    // Estado interno del partido
    const matchState = {
        players: [player1, player2], // Nombres de los jugadores
        scores: [0, 0], // Puntuación de los jugadores (inicialmente 0-0)
        currentRound: 1, // Ronda actual (inicialmente 1)
        currentGameScore: [0, 0], // Puntuación del juego actual (inicialmente 0-0)
        games: [0, 0] // Juegos ganados por los jugadores (inicialmente 0-0)
    };

    // Función para registrar un punto ganado por un jugador
    function pointWonBy(playerIndex) {
        // Incrementar la puntuación del jugador correspondiente en 1
        matchState.scores[playerIndex]++;
        // Obtener las puntuaciones individuales de ambos jugadores
        const [player1Score, player2Score] = matchState.scores;

        // Lógica para calcular la puntuación del juego actual
        if (player1Score === 40 && player2Score === 40) {
            matchState.currentGameScore = ["deuce", "deuce"]; // Empate "deuce"
        } else if (player1Score >= 40 && player1Score > player2Score) {
            matchState.currentGameScore = ["Advantage", matchState.players[0]]; // Ventaja para jugador 1
        } else if (player2Score >= 40 && player2Score > player1Score) {
            matchState.currentGameScore = ["Advantage", matchState.players[1]]; // Ventaja para jugador 2
        } else {
            matchState.currentGameScore = [player1Score, player2Score]; // Puntuación actual
        }

        // Lógica para verificar si se ha ganado un juego
        if (player1Score >= 4 && player1Score - player2Score >= 2) {
            matchState.games[0]++; // Jugador 1 gana un juego
            matchState.scores = [0, 0]; // Reiniciar puntuaciones
        } else if (player2Score >= 4 && player2Score - player1Score >= 2) {
            matchState.games[1]++; // Jugador 2 gana un juego
            matchState.scores = [0, 0]; // Reiniciar puntuaciones
        }
    }

    // Función para obtener la puntuación de la ronda actual
    function getCurrentRoundScore() {
        // Construir y retornar la puntuación de la ronda actual
        return `${matchState.players[0]} ${matchState.currentGameScore[0]}-${matchState.currentGameScore[1]} ${matchState.players[1]}`;
    }

    // Función para obtener la puntuación del juego actual
    function getGameScore() {
        // Construir y retornar la puntuación del juego actual
        return `${matchState.players[0]} ${matchState.games[0]}\n${matchState.players[1]} ${matchState.games[1]}`;
    }

    // Retornar las funciones como propiedades de un objeto
    return {
        pointWonBy,
        getCurrentRoundScore,
        getGameScore
    };
}

// Función para simular un partido
function simulateMatch(player1, player2) {
    // Crear un partido simulado con los jugadores proporcionados
    const game = createMatch(player1, player2);

    // Simular el partido mientras no haya un ganador del juego
    while (!game.getGameScore().includes('1\n') && !game.getGameScore().includes('2\n')) {
        // Generar un número aleatorio entre 1 y 2 para simular el ganador de un punto
        const winner = Math.floor(Math.random() * 2) + 1;
        // Registrar el punto ganado por el jugador
        game.pointWonBy(winner - 1); // Restamos 1 porque los índices de jugador comienzan desde 0
    }

    // Retornar la puntuación final del juego simulado
    return game.getGameScore();
}

// Función para simular el torneo
function simulateTournament(players) {
    const matches = [];

    // Crear todos los posibles partidos entre los jugadores
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            matches.push([players[i], players[j]]);
        }
    }

    let round = 1;

    // Simular cada ronda del torneo hasta que haya un ganador final
    while (matches.length > 1) {
        console.log(`Ronda ${round}`);
        const winners = [];

        // Simular cada partido en la ronda actual
        for (const match of matches) {
            console.log(`Partido entre ${match[0]} y ${match[1]}`);
            // Simular el partido y obtener el resultado
            const result = simulateMatch(match[0], match[1]);
            // Determinar el ganador del partido y agregarlo a la lista de ganadores
            const winnerIndex = result.startsWith('1') ? 0 : 1; // Si el resultado comienza con '1', el jugador 1 ganó
            winners.push(match[winnerIndex]);
            console.log(`Ganador: ${match[winnerIndex]}`);
        }

        round++;
        matches.length = 0; // Vaciar el arreglo de partidos

        // Crear nuevos partidos con los ganadores de la ronda actual
        for (let i = 0; i < winners.length; i += 2) {
            if (winners[i + 1]) {
                matches.push([winners[i], winners[i + 1]]);
            } else {
                matches.push([winners[i]]);
            }
        }
    }

    // Anunciar al ganador final del torneo
    const winner = matches[0][0];
    console.log(`El ganador del torneo es: ${winner}`);
}

// Jugadores del torneo
const tournamentPlayers = ['Alberto C', 'David J', 'Javier M', 'Eduardo A'];

// Simular el torneo
simulateTournament(tournamentPlayers);
