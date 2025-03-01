// Refactorizar algunas variables como constantes
const STARTING_POKER_CHIPS = 100; // points
const PLAYER = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;
let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

// Crear variables para representar a los jugadores
let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

// Función para agregar mensajes al registro de juego
function addToLog(message) {
    const log = document.getElementById('game-log');
    log.innerHTML += "<p>" + message + "</p>";
    log.scrollTop = log.scrollHeight;
}

// Función para actualizar la interfaz del usuario
function updateUI() {
    document.getElementById('player1-points').textContent = playerOnePoints;
    document.getElementById('player2-points').textContent = playerTwoPoints;
    document.getElementById('player3-points').textContent = playerThreePoints;
}

// Función para simular una ronda del juego
function playRound() {
    // Generar cambios aleatorios para cada jugador
    const p1Change = Math.floor(Math.random() * 30) - 15; // puede ganar o perder
    const p2Change = Math.floor(Math.random() * 30) - 15; // puede ganar o perder
    const p3Change = Math.floor(Math.random() * 30) - 15; // puede ganar o perder
    
    // Aplicar los cambios
    playerOnePoints += p1Change;
    playerTwoPoints += p2Change;
    playerThreePoints += p3Change;
    
    // Asegurar que los puntos no sean negativos
    playerOnePoints = Math.max(0, playerOnePoints);
    playerTwoPoints = Math.max(0, playerTwoPoints);
    playerThreePoints = Math.max(0, playerThreePoints);
    
    // Registrar los resultados
    addToLog(`Ronda completada: ${playerOneName} ${p1Change >= 0 ? '+' : ''}${p1Change}, ${playerTwoName} ${p2Change >= 0 ? '+' : ''}${p2Change}, ${playerThreeName} ${p3Change >= 0 ? '+' : ''}${p3Change}`);
    
    // Actualizar la interfaz
    updateUI();
    
    // Verificar si el juego ha terminado
    checkGameEnd();
}

// Función para verificar si el juego ha terminado
function checkGameEnd() {
    gameHasEnded = (playerOnePoints <= 0 || playerTwoPoints <= 0 || playerThreePoints <= 0);
    
    if (gameHasEnded) {
        let winner = "Nadie";
        if (playerOnePoints > playerTwoPoints && playerOnePoints > playerThreePoints) {
            winner = playerOneName;
        } else if (playerTwoPoints > playerOnePoints && playerTwoPoints > playerThreePoints) {
            winner = playerTwoName;
        } else if (playerThreePoints > playerOnePoints && playerThreePoints > playerTwoPoints) {
            winner = playerThreeName;
        }
        
        addToLog(`¡El juego ha terminado! ${winner} ha ganado con ${Math.max(playerOnePoints, playerTwoPoints, playerThreePoints)} fichas.`);
        
        // Deshabilitar el botón de siguiente ronda
        document.getElementById('next-round').disabled = true;
    }
}

// Función para reiniciar el juego
function resetGame() {
    // Reiniciar variables
    playerOnePoints = STARTING_POKER_CHIPS;
    playerTwoPoints = STARTING_POKER_CHIPS;
    playerThreePoints = STARTING_POKER_CHIPS;
    gameHasEnded = false;
    
    // Actualizar la interfaz
    updateUI();
    
    // Habilitar el botón de siguiente ronda
    document.getElementById('next-round').disabled = false;
    
    // Limpiar el registro de juego
    document.getElementById('game-log').innerHTML = '';
    
    // Mostrar mensaje inicial
    addToLog(`¡Juego reiniciado! El campeonato se decidirá entre estos tres jugadores: ${playerOneName}, ${playerTwoName} y ${playerThreeName}. Cada jugador tiene ${STARTING_POKER_CHIPS} fichas. ¡Que comience el juego!`);
}

// Configurar los eventos cuando la página se cargue
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje inicial
    addToLog(`¡Bienvenido a Texas Holdem! El campeonato se decidirá entre estos tres jugadores: ${playerOneName}, ${playerTwoName} y ${playerThreeName}. Cada jugador tiene ${STARTING_POKER_CHIPS} fichas. ¡Que comience el juego!`);
    
    // Configurar botón de siguiente ronda
    document.getElementById('next-round').addEventListener('click', playRound);
    
    // Configurar botón de reinicio
    document.getElementById('reset-game').addEventListener('click', resetGame);
    
    // Inicializar la interfaz
    updateUI();
});
