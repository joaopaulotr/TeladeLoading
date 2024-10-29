

const phrases = [
  "Carregando dados...",
  "Preparando o conteúdo...",
  "Aguarde um momento...",
  "Estamos quase prontos..."
];

const secondphrases = [
  "Aguarde enquanto configuramos...",
  "Quase lá...",
  "Só mais um instante...",
  "Finalizando os últimos detalhes..."
];


let currentIndex = 0;
const phraseElement = document.getElementById("phrase");
const secondphraseElement = document.getElementById("subphrase");

function changePhrase() {
  phraseElement.textContent = phrases[currentIndex];
  secondphraseElement.textContent = secondphrases[currentIndex];
  currentIndex = (currentIndex + 1) % phrases.length; 
}

changePhrase(); 
setInterval(changePhrase, 4500);
