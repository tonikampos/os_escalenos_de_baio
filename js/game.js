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
    this.currentGame.questions = this.questionsManager.prepareGameQuestions(
      this.currentGame.difficulty,
      this.currentGame.questionsCount
    );
  }

  // Mostra a pregunta actual
  showQuestion() {
    if (!this.currentGame) return;

    const question = this.questionsManager.getCurrentQuestion();
    if (!question) {
      this.endGame();
      return;
    }

    // Actualiza a interface
    this.updateQuestionDisplay(question);
    this.startQuestionTimer();
    this.updateProgress();
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
    if (!this.currentGame || this.isPaused) return;

    this.stopTimer();
    
    const question = this.questionsManager.getCurrentQuestion();
    const isCorrect = selectedIndex === question.correct;
    const timeForQuestion = this.currentGame.timePerQuestion - this.timeLeft;
    
    // Garda a resposta
    const answerRecord = {
      questionId: question.id,
      question: question.question,
      selectedAnswer: question.answers[selectedIndex],
      correctAnswer: question.answers[question.correct],
      isCorrect: isCorrect,
      timeUsed: timeForQuestion
    };
    
    this.currentGame.answers.push(answerRecord);
    this.currentGame.timeUsed += timeForQuestion;

    // Actualiza puntuación
    if (isCorrect) {
      this.currentGame.correctAnswers++;
      const timeBonus = Math.max(0, this.timeLeft * 2); // Bono por tempo restante
      const points = this.currentGame.settings.points + timeBonus;
      this.currentGame.score += points;
    } else {
      this.currentGame.wrongAnswers++;
    }

    // Mostra feedback visual
    this.showAnswerFeedback(selectedIndex, question.correct, isCorrect);

    // Continúa co xogo despois dunha pausa
    setTimeout(() => {
      this.nextQuestion();
    }, 2000);
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
    const settings = this.storageManager.getSettings();
    
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
  // Pasa á seguinte pregunta
  nextQuestion() {
    if (!this.currentGame) return;

    this.questionsManager.nextQuestion();
    this.currentGame.currentQuestion++;

    if (this.questionsManager.hasMoreQuestions()) {
      this.showQuestion();
    } else {
      this.endGame();
    }
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
    if (!storageManager.getCurrentUser()) {
      alert('Debes seleccionar un usuario primeiro');
      return;
    }

    // Configuración simple: sen dificultades, só número de preguntas
    this.currentGame = {
      difficulty: 'mixed', // Sempre mixto para simplificar
      questionsCount: questionsCount,
      timePerQuestion: 25, // Tempo fixo
      pointsPerQuestion: 15, // Puntos fixos
      currentQuestion: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      startTime: Date.now(),
      questions: [],
      answers: [],
      timeUsed: 0
    };

    // Seleccionar preguntas
    this.selectGameQuestions();
    
    if (this.currentGame.questions.length === 0) {
      alert('Erro: Non se puideron cargar as preguntas');
      return;
    }
    
    // Mostrar primeira pregunta
    this.showQuestion();
    
    // Iniciar cronómetro da pregunta
    this.startQuestionTimer();
  }
}

// Exporta o motor do xogo
window.GameEngine = GameEngine;
