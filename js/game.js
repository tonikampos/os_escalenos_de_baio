// Lóxica principal do xogo de trivia
class GameEngine {
  constructor() {
    this.questionsManager = new QuestionsManager();
    this.currentGame = null;
    this.timer = null;
    this.isPaused = false;
    this.timeLeft = 0;
    this.gameSettings = {
      easy: { questions: 10, timePerQuestion: 30, points: 10 },
      medium: { questions: 15, timePerQuestion: 20, points: 15 },
      hard: { questions: 20, timePerQuestion: 15, points: 20 }
    };
    
    this.initializeGame();
  }

  // Inicializa o xogo
  initializeGame() {
    this.bindEvents();
    this.loadUserStats();
  }

  // Asocia eventos aos elementos
  bindEvents() {
    // Events del cronómetro se pueden agregar aquí
  }

  // Carga as estatísticas do usuario
  loadUserStats() {
    if (storageManager && storageManager.getCurrentUser()) {
      const stats = storageManager.getStats();
      this.updateStatsDisplay(stats);
    }
  }

  // Actualiza a visualización das estatísticas
  updateStatsDisplay(stats) {
    const totalQuestionsElement = document.getElementById('total-questions');
    const bestScoreElement = document.getElementById('best-score');
    const gamesPlayedElement = document.getElementById('games-played');

    if (totalQuestionsElement) {
      totalQuestionsElement.textContent = this.questionsManager.getAllQuestions().length;
    }
    if (bestScoreElement) {
      bestScoreElement.textContent = stats.bestScore || 0;
    }
    if (gamesPlayedElement) {
      gamesPlayedElement.textContent = stats.gamesPlayed || 0;
    }
  }

  // Iniciar xogo con configuración personalizada
  startGame(difficulty = 'medium', questionsCount = null, timePerQuestion = null) {
    if (!storageManager.getCurrentUser()) {
      alert('Debes seleccionar un usuario primeiro');
      return;
    }

    // Usar configuración personalizada ou por defecto
    const settings = this.gameSettings[difficulty] || this.gameSettings.medium;
    
    this.currentGame = {
      difficulty: difficulty,
      questionsCount: questionsCount || settings.questions,
      timePerQuestion: timePerQuestion || settings.timePerQuestion,
      pointsPerQuestion: settings.points,
      currentQuestion: 0,
      score: 0,
      correctAnswers: 0,
      startTime: Date.now(),
      questions: []
    };    // Seleccionar preguntas
    this.selectGameQuestions();
    
    // Mostrar primeira pregunta
    this.showQuestion();
    
    // Iniciar cronómetro da pregunta
    this.startQuestionTimer();
  }// Seleccionar preguntas para o xogo
  selectGameQuestions() {
    // Usar o método existente do QuestionsManager
    this.questionsManager.prepareGameQuestions(
      'mixed', // Sempre mixto para simplificar
      this.currentGame.questionsCount
    );
    
    // Asegurar que temos as preguntas
    this.currentGame.questions = this.questionsManager.currentQuestions || [];
  }

  // Mostra a pregunta actual (sen cronómetro)
  showQuestion() {
    if (!this.currentGame) return;

    const question = this.questionsManager.getCurrentQuestion();
    console.log('SHOW QUESTION:', question); // Debug temporal
    
    if (!question) {
      console.log('NON HAI MÁIS PREGUNTAS - REMATANDO XOGO'); // Debug temporal
      this.endGame();
      return;
    }

    // Actualiza a interface
    this.updateQuestionDisplay(question);
    this.updateProgress();
    
    // Non iniciar cronómetro xa que o usuario controla
  }

  // Actualiza a visualización da pregunta
  updateQuestionDisplay(question) {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');

    if (questionText) {
      questionText.textContent = question.question;
    }

    if (answersContainer) {
      answersContainer.innerHTML = '';
      
      question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => this.selectAnswer(index);
        answersContainer.appendChild(button);
      });
    }
  }
  // Selecciona unha resposta
  selectAnswer(selectedIndex) {
    console.log('=== SELECTANSWER INICIADO ==='); // Debug temporal
    console.log('Índice seleccionado:', selectedIndex); // Debug temporal
    
    if (!this.currentGame || this.isPaused) {
      console.log('Xogo non dispoñible ou en pausa'); // Debug temporal
      return;
    }

    // Deshabilitar todas as respostas inmediatamente
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
    });

    const question = this.questionsManager.getCurrentQuestion();
    console.log('Pregunta actual obtida:', question); // Debug temporal
    
    if (!question) {
      console.log('NON SE PUIDO OBTER A PREGUNTA ATUAL'); // Debug temporal
      return;
    }
    
    const isCorrect = selectedIndex === question.correct;
    
    console.log('É correcta?', isCorrect); // Debug temporal
    console.log('Resposta correcta era:', question.correct); // Debug temporal
    
    // Gardar resposta no historial
    const answerRecord = {
      questionId: question.id,
      question: question.question,
      selectedAnswer: question.answers[selectedIndex],
      correctAnswer: question.answers[question.correct],
      isCorrect: isCorrect,
      timeUsed: 0 // Sen tempo xa que o usuario controla
    };
    
    this.currentGame.answers.push(answerRecord);

    // Actualizar puntuación
    if (isCorrect) {
      this.currentGame.correctAnswers++;
      const points = this.currentGame.pointsPerQuestion; // Sen bonus de tempo
      this.currentGame.score += points;
      console.log('Sumando puntos:', points); // Debug temporal
    } else {
      this.currentGame.wrongAnswers++;
      console.log('Resposta incorrecta'); // Debug temporal
    }    // Mostrar feedback visual
    this.showAnswerFeedback(selectedIndex, question.correct, isCorrect);

    // Mostrar botón "Seguinte pregunta" ou "Rematar"
    this.showNextButton();
    
    console.log('=== SELECTANSWER REMATADO ==='); // Debug temporal
  }

  // Mostra feedback da resposta
  showAnswerFeedback(selectedIndex, correctIndex, isCorrect) {
    const buttons = document.querySelectorAll('.answer-btn');
    
    buttons.forEach((button, index) => {
      button.disabled = true;
      
      if (index === selectedIndex) {
        button.classList.add(isCorrect ? 'correct' : 'incorrect');
      }
      
      if (index === correctIndex && !isCorrect) {
        button.classList.add('correct');
      }
    });

    // Efectos de son e vibración
    this.playFeedbackEffects(isCorrect);
  }

  // Reproduce efectos de son e vibración
  playFeedbackEffects(isCorrect) {
    const settings = storageManager.getSettings(); // CORRIXIDO: era this.storageManager
    
    if (settings.vibration && navigator.vibrate) {
      if (isCorrect) {
        navigator.vibrate([100, 50, 100]); // Patrón para resposta correcta
      } else {
        navigator.vibrate([200, 100, 200, 100, 200]); // Patrón para resposta incorrecta
      }
    }

    if (settings.soundEffects) {
      // Aquí pódense engadir sons (require arquivos de audio)
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (isCorrect) {
          this.playTone(audioContext, 523.25, 0.3); // Do agudo
        } else {
          this.playTone(audioContext, 196.00, 0.5); // Sol baixo
        }
      } catch (error) {
        console.log('Audio non dispoñible');
      }
    }
  }

  // Reproduce un ton
  playTone(audioContext, frequency, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }
  // Pasa á seguinte pregunta (controlado polo usuario)
  nextQuestion() {
    console.log('=== NEXTQUESTION INICIADO ==='); // Debug temporal
    
    if (!this.currentGame) {
      console.log('Non hai xogo activo'); // Debug temporal
      return;
    }

    // Eliminar botón de seguinte
    const nextButton = document.getElementById('next-question-btn');
    if (nextButton) {
      nextButton.remove();
    }

    this.currentGame.currentQuestion++;
    console.log('Nova pregunta número:', this.currentGame.currentQuestion); // Debug temporal

    // Verificar se hai máis preguntas
    if (this.currentGame.currentQuestion < this.currentGame.questionsCount) {
      console.log('Hai máis preguntas, continuando...'); // Debug temporal
      
      // Mover ao seguinte no QuestionsManager
      this.questionsManager.nextQuestion();
      
      // Reactivar respostas para a nova pregunta
      const answerButtons = document.querySelectorAll('.answer-btn');
      answerButtons.forEach(btn => {
        btn.disabled = false;
        btn.style.pointerEvents = 'auto';
        btn.classList.remove('correct', 'incorrect');
      });
      
      this.showQuestion();
    } else {
      console.log('Non hai máis preguntas, rematando xogo'); // Debug temporal
      this.endGame();
    }
    
    console.log('=== NEXTQUESTION REMATADO ==='); // Debug temporal
  }
  // Comeza o cronómetro dunha pregunta
  startQuestionTimer() {
    this.timeLeft = this.currentGame.timePerQuestion;
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      if (!this.isPaused) {
        this.timeLeft--;
        this.updateTimerDisplay();

        if (this.timeLeft <= 0) {
          this.timeUp();
        }
      }
    }, 1000);
  }
  // Actualiza a visualización do cronómetro
  updateTimerDisplay() {
    const timerText = document.getElementById('timer-text');
    const timerCircle = document.querySelector('.timer-circle');
    
    if (timerText) {
      timerText.textContent = this.timeLeft;
    }

    // Actualiza a animación do cronómetro circular
    if (timerCircle) {
      const percentage = (this.timeLeft / this.currentGame.timePerQuestion) * 100;
      timerCircle.style.setProperty('--timer-percentage', percentage + '%');
      
      // Cambia cor cando queda pouco tempo
      if (this.timeLeft <= 5) {
        timerCircle.classList.add('warning');
      } else {
        timerCircle.classList.remove('warning');
      }
    }
  }

  // Detén o cronómetro
  stopTimer() {
    // Método baleiro para evitar erros, pero xa non fai nada
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  // Manexo de tempo esgotado
  timeUp() {
    this.stopTimer();
      // Marca como resposta incorrecta
    const question = this.questionsManager.getCurrentQuestion();
    const answerRecord = {
      questionId: question.id,
      question: question.question,
      selectedAnswer: null,
      correctAnswer: question.answers[question.correct],
      isCorrect: false,
      timeUsed: this.currentGame.timePerQuestion
    };
    
    this.currentGame.answers.push(answerRecord);
    this.currentGame.wrongAnswers++;
    this.currentGame.timeUsed += this.currentGame.timePerQuestion;

    // Mostra a resposta correcta
    this.showAnswerFeedback(-1, question.correct, false);
    
    setTimeout(() => {
      this.nextQuestion();
    }, 2000);
  }

  // Actualiza a visualización do xogo
  updateGameDisplay() {
    this.updateProgress();
    this.updateScoreDisplay();
  }

  // Actualiza o progreso
  updateProgress() {
    const progress = this.questionsManager.getProgress();
    const questionCounter = document.getElementById('question-counter');
    
    if (questionCounter) {
      questionCounter.textContent = `${progress.current}/${progress.total}`;
    }
  }

  // Actualiza a puntuación
  updateScoreDisplay() {
    const currentScore = document.getElementById('current-score');
    
    if (currentScore && this.currentGame) {
      currentScore.textContent = `${this.currentGame.score} pts`;
    }
  }

  // Pausa o xogo
  pauseGame() {
    if (this.currentGame && !this.isPaused) {
      this.isPaused = true;
      this.showPauseModal();
    }
  }

  // Retoma o xogo
  resumeGame() {
    if (this.currentGame && this.isPaused) {
      this.isPaused = false;
      this.hidePauseModal();
    }
  }

  // Mostra o modal de pausa
  showPauseModal() {
    const modal = document.getElementById('pause-modal');
    if (modal) {
      modal.classList.add('active');
    }
  }

  // Oculta o modal de pausa
  hidePauseModal() {
    const modal = document.getElementById('pause-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  // Abandona o xogo
  quitGame() {
    if (this.currentGame) {
      this.stopTimer();
      this.currentGame = null;
      this.isPaused = false;
      this.hidePauseModal();
      
      // Volve á pantalla principal
      window.app.showScreen('home');    }
  }

  // Remata o xogo
  endGame() {
    if (!this.currentGame) return;

    this.stopTimer();
    
    // Calcula estatísticas finais
    const gameResult = this.calculateGameResult();
    
    // Garda o resultado usando o novo sistema de usuarios
    if (storageManager && storageManager.getCurrentUser()) {
      storageManager.updateStats(gameResult);
    }
    
    // Mostra os resultados
    this.showResults(gameResult);
    
    // Limpa o xogo actual
    this.currentGame = null;
    this.isPaused = false;
  }
  // Calcula o resultado do xogo
  calculateGameResult() {
    const totalTime = Date.now() - this.currentGame.startTime;
    const accuracy = Math.round((this.currentGame.correctAnswers / this.currentGame.questionsCount) * 100);
    
    return {
      difficulty: this.currentGame.difficulty,
      totalQuestions: this.currentGame.questionsCount,
      correctAnswers: this.currentGame.correctAnswers,
      wrongAnswers: this.currentGame.questionsCount - this.currentGame.correctAnswers,
      score: this.currentGame.score,
      accuracy: accuracy,
      totalTime: Math.round(totalTime / 1000), // en segundos
      averageTimePerQuestion: Math.round((totalTime / 1000) / this.currentGame.questionsCount)
    };
  }

  // Mostra os resultados
  showResults(gameResult) {
    // Actualiza os elementos da pantalla de resultados
    const finalScore = document.getElementById('final-score');
    const correctAnswers = document.getElementById('correct-answers');
    const wrongAnswers = document.getElementById('wrong-answers');
    const accuracy = document.getElementById('accuracy');
    const resultsIcon = document.getElementById('results-icon');
    const resultsTitle = document.getElementById('results-title');

    if (finalScore) finalScore.textContent = gameResult.score;
    if (correctAnswers) correctAnswers.textContent = gameResult.correctAnswers;
    if (wrongAnswers) wrongAnswers.textContent = gameResult.wrongAnswers;
    if (accuracy) accuracy.textContent = gameResult.accuracy + '%';

    // Personaliza a mensaxe segundo o rendemento
    if (resultsIcon && resultsTitle) {
      if (gameResult.accuracy >= 90) {
        resultsIcon.textContent = '🏆';
        resultsTitle.textContent = 'Excelente!';
      } else if (gameResult.accuracy >= 70) {
        resultsIcon.textContent = '🎉';
        resultsTitle.textContent = 'Moi ben!';
      } else if (gameResult.accuracy >= 50) {
        resultsIcon.textContent = '👍';
        resultsTitle.textContent = 'Ben feito!';
      } else {
        resultsIcon.textContent = '💪';
        resultsTitle.textContent = 'Segue intentando!';
      }
    }

    // Actualiza as estatísticas na pantalla principal
    this.loadUserStats();
    
    // Mostra a pantalla de resultados
    window.app.showScreen('results');
  }

  // Comparte os resultados
  shareResults(gameResult) {
    if (navigator.share) {
      navigator.share({
        title: 'Trivia Galega - Meus Resultados',
        text: `Acabo de conseguir ${gameResult.score} puntos con ${gameResult.accuracy}% de precisión en Trivia Galega! 🧠`,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores sen Web Share API
      const text = `Acabo de conseguir ${gameResult.score} puntos con ${gameResult.accuracy}% de precisión en Trivia Galega! 🧠`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        alert('Resultado copiado ao portapapeis!');
      }
    }
  }

  // Obtén estatísticas do xogo
  getGameStats() {
    return this.storageManager.getStats();
  }

  // Reestablece todas as estatísticas
  resetStats() {
    return this.storageManager.clearAll();
  }  // Iniciar xogo simple (só con número de preguntas)
  startSimpleGame(questionsCount) {
    console.log('Iniciando xogo simple con', questionsCount, 'preguntas'); // Debug temporal
    
    if (!storageManager.getCurrentUser()) {
      alert('Debes seleccionar un usuario primeiro');
      return;
    }
    
    // Configurar xogo
    this.currentGame = {
      questionsCount: questionsCount,
      currentQuestion: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      startTime: Date.now(),
      pointsPerQuestion: 10, // Puntos fixos sen bonus de tempo
      answers: [],
      timeUsed: 0
    };

    // Seleccionar e preparar preguntas
    this.selectGameQuestions();
    
    // Mostrar primeira pregunta
    this.showQuestion();
    
    console.log('Xogo iniciado correctamente'); // Debug temporal
  }

  // Mostra o botón para pasar á seguinte pregunta
  showNextButton() {
    // Eliminar botón anterior se existe
    const existingButton = document.getElementById('next-question-btn');
    if (existingButton) {
      existingButton.remove();
    }

    const gameContent = document.querySelector('.game-content');
    const button = document.createElement('button');
    button.id = 'next-question-btn';
    button.className = 'btn btn-primary next-btn';
    
    // Verificar se é a última pregunta
    if (this.currentGame.currentQuestion + 1 >= this.currentGame.questionsCount) {
      button.textContent = '🏆 Ver Resultados';
      button.onclick = () => this.endGame();
    } else {
      button.textContent = '➡️ Seguinte Pregunta';
      button.onclick = () => this.nextQuestion();
    }
    
    gameContent.appendChild(button);
  }
}

// Exporta o motor do xogo
window.GameEngine = GameEngine;
