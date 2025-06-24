// Xestor de almacenamento local para a aplicación de trivia con soporte multi-usuario
class StorageManager {
  constructor() {
    this.prefix = 'triviaGalega_';
    this.version = '2.0.0';
    this.currentUser = null;
    this.initializeStorage();
  }

  // Inicializa o almacenamento con valores por defecto
  initializeStorage() {
    if (!this.getItem('initialized')) {
      this.setItem('initialized', true);
      this.setItem('version', this.version);
      this.setItem('users', {});
      this.setItem('lastUser', '');
      this.setItem('settings', {
        soundEffects: true,
        vibration: true,
        theme: 'light',
        language: 'gl',
        notifications: true
      });
    }
    // Cargar último usuario se existe
    const lastUser = this.getItem('lastUser');
    if (lastUser) {
      this.currentUser = lastUser;
    }
  }

  // Xestión de usuarios
  setCurrentUser(username) {
    if (!username || username.trim() === '') return false;
    
    this.currentUser = username.trim();
    this.setItem('lastUser', this.currentUser);
    
    // Crear usuario se non existe
    const users = this.getItem('users') || {};
    if (!users[this.currentUser]) {
      users[this.currentUser] = this.getDefaultUserStats();
      this.setItem('users', users);
    }
    
    return true;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUserList() {
    const users = this.getItem('users') || {};
    return Object.keys(users);
  }

  getDefaultUserStats() {
    return {
      gamesPlayed: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      bestScore: 0,
      bestAccuracy: 0,
      totalTime: 0,
      averageTime: 0,
      streaks: {
        current: 0,
        best: 0
      },
      categoryStats: {},
      difficultyStats: {
        easy: { played: 0, correct: 0 },
        medium: { played: 0, correct: 0 },
        hard: { played: 0, correct: 0 }
      },
      gameHistory: []
    };
  }

  // Métodos básicos de almacenamento
  getItem(key) {
    try {
      const fullKey = this.prefix + key;
      const item = localStorage.getItem(fullKey);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting item from storage:', error);
      return null;
    }
  }

  setItem(key, value) {
    try {
      const fullKey = this.prefix + key;
      localStorage.setItem(fullKey, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error setting item in storage:', error);
      return false;
    }
  }

  removeItem(key) {
    try {
      const fullKey = this.prefix + key;
      localStorage.removeItem(fullKey);
      return true;
    } catch (error) {
      console.error('Error removing item from storage:', error);
      return false;
    }
  }

  // Obtener estadísticas do usuario actual
  getStats() {
    if (!this.currentUser) return this.getDefaultUserStats();
    
    const users = this.getItem('users') || {};
    return users[this.currentUser] || this.getDefaultUserStats();
  }

  // Actualizar estadísticas do usuario actual
  updateStats(gameResult) {
    if (!this.currentUser) return;
    
    const users = this.getItem('users') || {};
    let userStats = users[this.currentUser] || this.getDefaultUserStats();
    
    // Actualizar estadísticas
    userStats.gamesPlayed++;
    userStats.totalQuestions += gameResult.totalQuestions;
    userStats.correctAnswers += gameResult.correctAnswers;
    
    if (gameResult.score > userStats.bestScore) {
      userStats.bestScore = gameResult.score;
    }
    
    const accuracy = (gameResult.correctAnswers / gameResult.totalQuestions) * 100;
    if (accuracy > userStats.bestAccuracy) {
      userStats.bestAccuracy = accuracy;
    }
    
    // Actualizar tempo
    userStats.totalTime += gameResult.totalTime;
    userStats.averageTime = userStats.totalTime / userStats.gamesPlayed;
    
    // Actualizar racha
    if (gameResult.correctAnswers === gameResult.totalQuestions) {
      userStats.streaks.current++;
      if (userStats.streaks.current > userStats.streaks.best) {
        userStats.streaks.best = userStats.streaks.current;
      }
    } else {
      userStats.streaks.current = 0;
    }
    
    // Actualizar estadísticas de dificultade
    const difficulty = gameResult.difficulty;
    if (userStats.difficultyStats[difficulty]) {
      userStats.difficultyStats[difficulty].played++;
      userStats.difficultyStats[difficulty].correct += gameResult.correctAnswers;
    }
    
    // Gardar historial de partidas
    userStats.gameHistory.push({
      ...gameResult,
      timestamp: Date.now(),
      date: new Date().toISOString()
    });
    
    // Manter só os últimos 100 xogos
    if (userStats.gameHistory.length > 100) {
      userStats.gameHistory = userStats.gameHistory.slice(-100);
    }
    
    users[this.currentUser] = userStats;
    this.setItem('users', users);
  }

  // Configuracións
  getSettings() {
    return this.getItem('settings') || {
      soundEffects: true,
      vibration: true,
      theme: 'light',
      language: 'gl',
      notifications: true
    };
  }

  updateSettings(newSettings) {
    const currentSettings = this.getSettings();
    const updatedSettings = { ...currentSettings, ...newSettings };
    this.setItem('settings', updatedSettings);
    return updatedSettings;
  }

  // Limpeza
  clearAll() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith(this.prefix));
    keys.forEach(key => localStorage.removeItem(key));
    this.initializeStorage();
  }

  clearUserData(username) {
    if (!username) return false;
    
    const users = this.getItem('users') || {};
    delete users[username];
    this.setItem('users', users);
    
    if (this.currentUser === username) {
      this.currentUser = null;
      this.setItem('lastUser', '');
    }
    
    return true;
  }

  // Exportar/Importar datos
  exportUserData(username) {
    const users = this.getItem('users') || {};
    const userData = users[username];
    
    if (!userData) return null;
    
    return {
      username: username,
      data: userData,
      exportDate: new Date().toISOString(),
      version: this.version
    };
  }

  importUserData(importData) {
    try {
      if (!importData.username || !importData.data) return false;
      
      const users = this.getItem('users') || {};
      users[importData.username] = importData.data;
      this.setItem('users', users);
      
      return true;
    } catch (error) {
      console.error('Error importing user data:', error);
      return false;
    }
  }
}

// Crear instancia global
window.storageManager = new StorageManager();
