// Base de datos de preguntas de cultura general en galego
const QUESTIONS_DATABASE = [
  {
    id: 1,
    question: "Cal é a capital de Galicia?",
    answers: ["A Coruña", "Santiago de Compostela", "Vigo", "Ourense"],
    correct: 1,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "En que ano chegou o home á lúa por primeira vez?",
    answers: ["1967", "1968", "1969", "1970"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Quen escribiu 'Dom Quixote de La Mancha'?",
    answers: ["Miguel de Cervantes", "Lope de Vega", "Francisco de Quevedo", "Calderón de la Barca"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Cal é o elemento químico con símbolo 'Au'?",
    answers: ["Prata", "Ouro", "Aluminio", "Argon"],
    correct: 1,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Cantos días ten un ano bisesto?",
    answers: ["364", "365", "366", "367"],
    correct: 2,
    category: "xeral",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Cal é o río más longo de Europa?",
    answers: ["Danubio", "Rin", "Volga", "Dniéper"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "En que cidade se atopa a Torre Eiffel?",
    answers: ["Londres", "Roma", "París", "Berlín"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Quen pintou 'A Guernica'?",
    answers: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco de Goya"],
    correct: 0,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Cal é o planeta máis grande do sistema solar?",
    answers: ["Saturno", "Neptuno", "Júpiter", "Urano"],
    correct: 2,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "En que ano comezou a Segunda Guerra Mundial?",
    answers: ["1938", "1939", "1940", "1941"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Cal é a montaña máis alta do mundo?",
    answers: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Quen compuxo 'A Novena Sinfonía'?",
    answers: ["Mozart", "Beethoven", "Bach", "Chopin"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Cal é a velocidade da luz no baleiro?",
    answers: ["299.792.458 m/s", "300.000.000 m/s", "299.000.000 m/s", "301.000.000 m/s"],
    correct: 0,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "En que continente se atopa o deserto do Sahara?",
    answers: ["Asia", "América", "África", "Oceanía"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Quen foi o primeiro presidente dos Estados Unidos?",
    answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Cal é o océano máis grande?",
    answers: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    correct: 3,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "En que cidade naceu Shakespeare?",
    answers: ["Londres", "Stratford-upon-Avon", "Oxford", "Cambridge"],
    correct: 1,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Cal é a capital de Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Cantos corazóns ten un pulpo?",
    answers: ["1", "2", "3", "4"],
    correct: 2,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "En que ano caeu o muro de Berlín?",
    answers: ["1987", "1988", "1989", "1990"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Cal é o metal máis abondoso na crosta terrestre?",
    answers: ["Ferro", "Aluminio", "Cobre", "Zinc"],
    correct: 1,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Quen escribiu 'Cen anos de soidade'?",
    answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Octavio Paz"],
    correct: 1,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Cal é a lingua máis falada do mundo?",
    answers: ["Inglés", "Español", "Chinés mandarín", "Hindi"],
    correct: 2,
    category: "xeral",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "En que país se inventou o papel?",
    answers: ["India", "China", "Exipto", "Grecia"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Cal é o hueso máis longo do corpo humano?",
    answers: ["Húmero", "Tíbia", "Fémur", "Radio"],
    correct: 2,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "En que cidade se celebraron os primeiros Xogos Olímpicos modernos?",
    answers: ["París", "Londres", "Atenas", "Roma"],
    correct: 2,
    category: "deportes",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Cal é a fórmula química da auga?",
    answers: ["H2O", "CO2", "H2SO4", "NaCl"],
    correct: 0,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Quen pintou 'A última cea'?",
    answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Donatello"],
    correct: 2,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "Cal é o país máis pequeno do mundo?",
    answers: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "En que ano se descubriu América?",
    answers: ["1490", "1491", "1492", "1493"],
    correct: 2,
    category: "historia",
    difficulty: "easy"
  }
];

// Funcións para manexar as preguntas
class QuestionsManager {
  constructor() {
    this.questions = [...QUESTIONS_DATABASE];
    this.currentQuestions = [];
    this.currentIndex = 0;
  }

  // Obtén todas as preguntas
  getAllQuestions() {
    return [...this.questions];
  }

  // Filtra preguntas por dificultade
  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter(q => q.difficulty === difficulty);
  }

  // Filtra preguntas por categoría
  getQuestionsByCategory(category) {
    return this.questions.filter(q => q.category === category);
  }

  // Baralla as preguntas
  shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Baralla as respostas dunha pregunta
  shuffleAnswers(question) {
    const shuffledQuestion = { ...question };
    const answers = [...question.answers];
    const correctAnswer = answers[question.correct];
    
    // Baralla as respostas
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    
    // Atopa o novo índice da resposta correcta
    shuffledQuestion.answers = answers;
    shuffledQuestion.correct = answers.indexOf(correctAnswer);
    
    return shuffledQuestion;
  }

  // Prepara un conxunto de preguntas para un xogo
  prepareGameQuestions(difficulty = 'medium', count = 10) {
    let questions;
    
    if (difficulty === 'mixed') {
      // Mestura de dificultades
      questions = [...this.questions];
    } else {
      questions = this.getQuestionsByDifficulty(difficulty);
    }
    
    // Se non hai suficientes preguntas da dificultade, úsanse todas
    if (questions.length < count) {
      questions = [...this.questions];
    }
    
    // Baralla as preguntas e toma só as necesarias
    const shuffledQuestions = this.shuffleQuestions(questions);
    this.currentQuestions = shuffledQuestions.slice(0, count);
    
    // Baralla as respostas de cada pregunta
    this.currentQuestions = this.currentQuestions.map(q => this.shuffleAnswers(q));
    
    this.currentIndex = 0;
    return this.currentQuestions;
  }

  // Obtén a pregunta actual
  getCurrentQuestion() {
    if (this.currentIndex < this.currentQuestions.length) {
      return this.currentQuestions[this.currentIndex];
    }
    return null;
  }

  // Pasa á seguinte pregunta
  nextQuestion() {
    this.currentIndex++;
    return this.getCurrentQuestion();
  }

  // Verifica se hai máis preguntas
  hasMoreQuestions() {
    return this.currentIndex < this.currentQuestions.length;
  }

  // Obtén o progreso actual
  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.currentQuestions.length,
      percentage: Math.round(((this.currentIndex + 1) / this.currentQuestions.length) * 100)
    };
  }

  // Engade unha nova pregunta (para futuras funcionalidades)
  addQuestion(question) {
    const newId = Math.max(...this.questions.map(q => q.id)) + 1;
    const newQuestion = {
      id: newId,
      ...question,
      category: question.category || 'xeral',
      difficulty: question.difficulty || 'medium'
    };
    
    this.questions.push(newQuestion);
    return newQuestion;
  }

  // Obtén estatísticas das preguntas
  getStats() {
    const categories = {};
    const difficulties = {};
    
    this.questions.forEach(q => {
      categories[q.category] = (categories[q.category] || 0) + 1;
      difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
    });
    
    return {
      total: this.questions.length,
      categories,
      difficulties
    };
  }

  // Busca preguntas por texto
  searchQuestions(searchTerm) {
    const term = searchTerm.toLowerCase();
    return this.questions.filter(q => 
      q.question.toLowerCase().includes(term) ||
      q.answers.some(answer => answer.toLowerCase().includes(term))
    );
  }

  // Obtén preguntas aleatorias por categoría
  getRandomQuestionsByCategory(category, count = 5) {
    const categoryQuestions = this.getQuestionsByCategory(category);
    const shuffled = this.shuffleQuestions(categoryQuestions);
    return shuffled.slice(0, count);
  }

  // Reestablece o xestor
  reset() {
    this.currentQuestions = [];
    this.currentIndex = 0;
  }
}

// Exporta o xestor de preguntas
window.QuestionsManager = QuestionsManager;
