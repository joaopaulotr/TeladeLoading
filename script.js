

const phrases = [
  "Seu sonho, nosso compromisso",
  "O caminho para suas conquistas",
  "Consórcio inteligente",
  "Investindo no seu amanhã"
];

const secondphrases = [
  "Planeje e realize conosco",
  "Confiança no seu futuro",
  "Inovação para seu sucesso",
  "Transforme planos em realidade"
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
