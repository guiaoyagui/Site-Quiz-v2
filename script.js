// Armazena perguntas por nível
const perguntasPorNivel = {
  iniciante: [
    {
      pergunta:
        "Qual é a ave de rapina marinha, uma das maiores do mundo, que pode ser encontrada nas regiões costeiras do Japão e é conhecida por seu grande bico amarelo e plumagem escura com ombros e cauda brancos?",
      opcoes: [
        "Coruja-Pescadora-de-Blakiston Japão",
        "Águia-Marinha-de-Steller",
        "Grou-Japonês",
        "Phalacrocorax capillatus Japan",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Que tipo de cervo, também conhecido como cervo sika, é nativo do Leste Asiático, incluindo o Japão, e é facilmente reconhecível por suas manchas brancas no dorso durante o verão, sendo um animal comum nos parques de Nara?",
      opcoes: ["Serow japonês", "Javali Japones", "Cervus nippon", "Tanuki"],
      correta: 2,
    },
    {
      pergunta:
        "Qual é a ave de rapina noturna, uma das maiores corujas do mundo e que habita principalmente Hokkaido, conhecida por sua dieta especializada em peixes e por seus 'chifres' de penas?",
      opcoes: [
        "Águia-Marinha-de-Steller",
        "Pica-Pau-Japonês",
        "Coruja-Pescadora-de-Blakiston Japão",
        "Grou-Japonês",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que pequeno mamífero carnívoro, de corpo alongado e pernas curtas, é nativo do Japão e conhecido por sua agilidade e por caçar roedores e pequenos animais, sendo o macho significativamente maior que a fêmea?",
      opcoes: [
        "Musaranho Japonês",
        "Martes melampus",
        "Doninha Japonesa",
        "Lepus brachyurus",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que roedor noturno de grande porte, encontrado nas florestas do Japão, possui uma membrana de pele entre os membros anteriores e posteriores que lhe permite planar longas distâncias entre as árvores?",
      opcoes: [
        "Esquilo Voador Gigante Japonês",
        "Musaranho Japonês",
        "Doninha Japonesa",
        "Pardal-Montês-Japonês",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Que ave majestosa, um dos símbolos nacionais do Japão, é reverenciada como um ícone de sorte, longevidade e fidelidade, famosa por suas elaboradas danças de acasalamento e por sua plumagem predominantemente branca com a coroa vermelha?",
      opcoes: [
        "Phasianus versicolor",
        "Grou-Japonês",
        "Águia-Marinha-de-Steller",
        "Phalacrocorax capillatus Japan",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Qual subespécie de porco selvagem, caracterizada por uma faixa de pelos mais claros do focinho até as bochechas, é encontrada em grande parte do Japão e conhecida por sua robustez e dieta onívora?",
      opcoes: [
        "Urso Negro Japonês",
        "Tanuki",
        "Javali Japones",
        "Serow japonês",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que mamífero lagomorfo, endêmico do arquipélago japonês, é conhecido por sua pelagem que varia de marrom-avermelhado a cinza-amarronzado e por ser um corredor rápido adaptado a diversos habitats, desde florestas a pastagens?",
      opcoes: [
        "Doninha Japonesa",
        "Lepus brachyurus",
        "Prionailurus iriomotensis",
        "Musaranho Japonês",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Qual é o primata nativo do Japão, conhecido por seu nome científico *Macaca fuscata*, que vive mais ao norte do que qualquer outro macaco (exceto humanos) e é famoso por frequentar fontes termais para se aquecer durante o inverno?",
      opcoes: [
        "Tanuki",
        "Urso Negro Japonês",
        "Macaco Japonês",
        "Martes melampus",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que mamífero carnívoro, um tipo de marta nativa das principais ilhas do Japão, possui uma pelagem que varia do amarelo-acastanhado ao marrom escuro e é um predador ágil de pequenos animais e aves?",
      opcoes: [
        "Raposa Vermelha",
        "Doninha Japonesa",
        "Martes melampus",
        "Prionailurus iriomotensis",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que pequeno mamífero insetívoro, de focinho pontudo e olhos minúsculos, é comum em diversos habitats do Japão e conhecido por seu metabolismo extremamente rápido, necessitando comer constantemente?",
      opcoes: [
        "Musaranho Japonês",
        "Esquilo Voador Gigante Japonês",
        "Lepus brachyurus",
        "Pardal-Montês-Japonês",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Que pequena ave passeriforme, com o macho apresentando uma coroa e nuca castanho-avermelhadas e um babador preto, é uma visão comum em áreas rurais e montanhosas do Japão?",
      opcoes: [
        "Pica-Pau-Japonês",
        "Pardal-Montês-Japonês",
        "Phasianus versicolor",
        "Grou-Japonês",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Que ave marinha preta, com um bico longo e adunco, é famosa no Japão por sua utilização na pesca tradicional conhecida como 'ukai', onde pescadores usam essas aves para capturar peixes?",
      opcoes: [
        "Águia-Marinha-de-Steller",
        "Coruja-Pescadora-de-Blakiston Japão",
        "Phalacrocorax capillatus Japan",
        "Pardal-Montês-Japonês",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que ave colorida, também conhecida como Faisão Verde, é a ave nacional do Japão e se destaca pela plumagem iridescente verde no peito, pescoço e costas do macho?",
      opcoes: [
        "Grou-Japonês",
        "Pica-Pau-Japonês",
        "Phasianus versicolor",
        "Pardal-Montês-Japonês",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Qual ave, pertencente à família Picidae e endêmica do Japão, é conhecida por seu bico forte usado para escavar buracos em árvores em busca de insetos, possuindo uma plumagem predominantemente verde e uma crista distinta?",
      opcoes: [
        "Pica-Pau-Japonês",
        "Coruja-Pescadora-de-Blakiston Japão",
        "Pardal-Montês-Japonês",
        "Phasianus versicolor",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Qual é o felino selvagem encontrado exclusivamente na ilha de Iriomote, no Japão, que possui o tamanho aproximado de um gato doméstico, pelagem escura e malhada, e está criticamente ameaçado de extinção?",
      opcoes: [
        "Raposa Vermelha",
        "Prionailurus iriomotensis",
        "Doninha Japonesa",
        "Tanuki",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Que canídeo astuto, cuja subespécie japonesa (*Vulpes vulpes japonica*) é conhecida como 'Kitsune', desempenha um papel importante no folclore japonês, sendo frequentemente retratado como um ser inteligente com habilidades mágicas?",
      opcoes: [
        "Tanuki",
        "Javali Japones",
        "Raposa Vermelha",
        "Martes melampus",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que mamífero herbívoro, uma espécie de cabra-antílope encontrado nas florestas montanhosas do Japão, é considerado um 'monumento natural especial' no país?",
      opcoes: [
        "Cervus nippon",
        "Urso Negro Japonês",
        "Serow japonês",
        "Javali Japones",
      ],
      correta: 2,
    },
    {
      pergunta:
        "Que animal, também chamado de cão-guaxinim, é uma figura proeminente no folclore japonês, muitas vezes retratado como travesso, alegre, mestre do disfarce e associado à boa sorte?",
      opcoes: [
        "Macaco Japonês",
        "Tanuki",
        "Raposa Vermelha",
        "Prionailurus iriomotensis",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Que urso de porte médio, com pelagem predominantemente preta e uma característica mancha branca ou amarelada em forma de 'V' no peito, é encontrado nas ilhas de Honshu e Shikoku, no Japão?",
      opcoes: [
        "Urso Negro Japonês",
        "Ursus arctos lasiotus",
        "Javali Japones",
        "Serow japonês",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Qual é o grande urso marrom, cuja subespécie *lasiotus* habita a ilha de Hokkaido, no Japão, sendo um dos maiores predadores terrestres da região?",
      opcoes: [
        "Urso Negro Japonês",
        "Ursus arctos lasiotus",
        "Tanuki",
        "Serow japonês",
      ],
      correta: 1,
    },
  ],
};

let nivelSelecionado = "";
let perguntasSelecionadas = [];
let currentQuestionIndex = 0;

function startQuiz() {
  document.querySelector(".quiz-box").style.display = "none";
  document.getElementById("difficulty-selection").style.display = "block";
}

function selectDifficulty(nivel) {
  nivelSelecionado = nivel;
  perguntasSelecionadas = perguntasPorNivel[nivel];
  currentQuestionIndex = 0;

  document.getElementById("difficulty-selection").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  showQuestion();
}

function showQuestion() {
  const question = perguntasSelecionadas[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.pergunta;

  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  question.opcoes.forEach((opcao, index) => {
    const button = document.createElement("button");
    button.textContent = opcao;
    button.className = "answer-btn";
    button.onclick = () => selectAnswer(index);
    answersContainer.appendChild(button);
  });

  document.getElementById("next-btn").disabled = true;
}

function selectAnswer(index) {
  const question = perguntasSelecionadas[currentQuestionIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.correta) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
  });

  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < perguntasSelecionadas.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <p class="quiz-title">Você finalizou o nível <strong>${nivelSelecionado}</strong>! 🎉</p>
      <button onclick="location.reload()">Tentar outro nível</button>
    `;
  }
}

document
  .getElementById("toggle-sobre-btn")
  .addEventListener("click", function () {
    const sobreBox = document.getElementById("sobre-box");

    if (sobreBox.classList.contains("hidden")) {
      sobreBox.classList.remove("hidden");
      this.textContent = "▼";
    } else {
      sobreBox.classList.add("hidden");
      this.textContent = "▲";
    }
  });
