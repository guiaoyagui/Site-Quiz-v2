const perguntasPorNivel = {
  iniciante: [
    {
      pergunta: "Qual é a ave de rapina marinha...?",
      opcoes: [
        {
          texto: "Coruja-Pescadora-de-Blakiston Japão",
          imagem: "img/animais/coruja-pescadora-de-blakiston-japao.jpg",
        },
        {
          texto: "Águia-Marinha-de-Steller",
          imagem: "img/animais/aguia-marinha-de-steller.jpg",
        },
        { texto: "Grou-Japonês", imagem: "img/animais/grou-japones.jpg" },
        {
          texto: "Phalacrocorax capillatus Japan",
          imagem: "img/animais/phalacrocorax-capillatus-japan.jpg",
        },
      ],
      correta: 1,
    },
    {
      pergunta: "Que tipo de cervo... ?",
      opcoes: [
        { texto: "Serow japonês", imagem: "img/animais/serow-japones.jpg" },
        { texto: "Javali Japones", imagem: "img/animais/javali-japones.jpg" },
        { texto: "Cervus nippon", imagem: "img/animais/cervus-nippon.jpg" },
        { texto: "Tanuki", imagem: "img/animais/tanuki.jpg" },
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a ave de rapina noturna...?",
      opcoes: [
        {
          texto: "Águia-Marinha-de-Steller",
          imagem: "img/animais/aguia-marinha-de-steller.jpg",
        },
        {
          texto: "Pica-Pau-Japonês",
          imagem: "img/animais/pica-pau-japones.jpg",
        },
        {
          texto: "Coruja-Pescadora-de-Blakiston Japão",
          imagem: "img/animais/coruja-pescadora-de-blakiston-japao.jpg",
        },
        { texto: "Grou-Japonês", imagem: "img/animais/grou-japones.jpg" },
      ],
      correta: 2,
    },
    // Continue com os demais seguindo esse padrão...
  ],
};

function selectDifficulty(nivel) {
  nivelSelecionado = nivel;
  perguntasSelecionadas = perguntasPorNivel[nivel];
  currentQuestionIndex = 0;

  document.getElementById("difficulty-selection").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  showQuestion();
}

// Exibir pergunta com imagens
function showQuestion() {
  const question = perguntasSelecionadas[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.pergunta;

  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  question.opcoes.forEach((opcao, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "answer-option";

    const img = document.createElement("img");
    img.src = opcao.imagem;
    img.alt = opcao.texto;
    img.className = "answer-image";

    const label = document.createElement("p");
    label.textContent = opcao.texto;
    label.className = "answer-label";

    const button = document.createElement("button");
    button.appendChild(img);
    button.appendChild(label);
    button.className = "answer-btn";
    button.onclick = () => selectAnswer(index);

    wrapper.appendChild(button);
    answersContainer.appendChild(wrapper);
  });

  document.getElementById("next-btn").disabled = true;
}
function selectAnswer(index) {
  const question = perguntasSelecionadas[currentQuestionIndex];
  const all = document.querySelectorAll(".answer-btn");

  all.forEach((option, i) => {
    option.onclick = null;
    if (i === question.correta) {
      option.classList.add("correct");
    } else if (i === index) {
      option.classList.add("wrong");
    }
  });

  document.getElementById("next-btn").disabled = false;
}

function startQuiz() {
  document.querySelector(".quiz-box").style.display = "none";
  document.getElementById("difficulty-selection").style.display = "block";
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
