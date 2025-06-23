// Xestor de almacenamento local para a aplicación de trivia
class StorageManager {
  constructor() {
    this.prefix = 'triviaGalega_';
    this.version = '1.0.0';
    this.initializeStorage();
  }

  // Inicializa o almacenamento con valores por defecto
  initializeStorage() {
    if (!this.getItem('initialized')) {
      this.setItem('initialized', true);
      this.setItem('version', this.version);
      this.setItem('stats', {
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
        }
      });
      this.setItem('settings', {
        soundEffects: true,
        vibration: true,
        theme: 'light',
        language: 'gl',
        notifications: true
      });
      this.setItem('gameHistory', []);
    }
  }

  // Obtén un elemento do almacenamento
  getItem(key) {
    try {
      const item = localStorage.getItem(this.prefix + key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Erro ao obter elemento do almacenamento:', error);
      return null;
    }
  }

  // Garda un elemento no almacenamento
  setItem(key, value) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Erro ao gardar elemento no almacenamento:', error);
      return false;
    }
  }

  // Elimina un elemento do almacenamento
  removeItem(key) {
    try {
      localStorage.removeItem(this.prefix + key);
      return true;
    } catch (error) {
      console.error('Erro ao eliminar elemento do almacenamento:', error);
      return false;
    }
  }

  // Limpa todo o almacenamento da aplicación
  clearAll() {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
      this.initializeStorage();
      return true;
    } catch (error) {
      console.error('Erro ao limpar almacenamento:', error);
      return false;
    }
  }

  // Obtén as estatísticas do xogador
  getStats() {
    return this.getItem('stats') || {};
  }

  // Actualiza as estatísticas despois dun xogo
  updateStats(gameResult) {
    const stats = this.getStats();
    
    // Estatísticas básicas
    stats.gamesPlayed++;
    stats.totalQuestions += gameResult.totalQuestions;
    stats.correctAnswers += gameResult.correctAnswers;
    stats.totalTime += gameResult.totalTime;
    stats.averageTime = Math.round(stats.totalTime / stats.totalQuestions);
    
    // Mellor puntuación
    if (gameResult.score > stats.bestScore) {
      stats.bestScore = gameResult.score;
    }
    
    // Mellor precisión
    const accuracy = Math.round((gameResult.correctAnswers / gameResult.totalQuestions) * 100);
    if (accuracy > stats.bestAccuracy) {
      stats.bestAccuracy = accuracy;
    }
    
    // Rachas
    if (gameResult.correctAnswers === gameResult.totalQuestions) {
      stats.streaks.current++;
      if (stats.streaks.current > stats.streaks.best) {
        stats.streaks.best = stats.streaks.current;
      }
    } else {
      stats.streaks.current = 0;
    }
    
    // Estatísticas por dificultade
    if (gameResult.difficulty && stats.difficultyStats[gameResult.difficulty]) {
      stats.difficultyStats[gameResult.difficulty].played++;
      stats.difficultyStats[gameResult.difficulty].correct += gameResult.correctAnswers;
    }
    
    // Garda as estatísticas actualizadas
    this.setItem('stats', stats);
    
    return stats;
  }

  // Obtén a configuración
  getSettings() {
    return this.getItem('settings') || {};
  }

  // Actualiza a configuración
  updateSettings(newSettings) {
    const currentSettings = this.getSettings();
    const updatedSettings = { ...currentSettings, ...newSettings };
    this.setItem('settings', updatedSettings);
    return updatedSettings;
  }

  // Garda un resultado de xogo no historial
  saveGameResult(gameResult) {
    const history = this.getGameHistory();
    const gameRecord = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...gameResult
    };
    
    history.unshift(gameRecord);
    
    // Mantén só os últimos 50 xogos
    if (history.length > 50) {
      history.splice(50);
    }
    
    this.setItem('gameHistory', history);
    return gameRecord;
  }

  // Obtén o historial de xogos
  getGameHistory() {
    return this.getItem('gameHistory') || [];
  }

  // Obtén o historial filtrado por data
  getGameHistoryByDate(days = 7) {
    const history = this.getGameHistory();
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return history.filter(game => 
      new Date(game.timestamp) >= cutoffDate
    );
  }

  // Obtén estatísticas do historial
  getHistoryStats(days = 30) {
    const history = this.getGameHistoryByDate(days);
    
    if (history.length === 0) {
      return {
        gamesPlayed: 0,
        averageScore: 0,
        averageAccuracy: 0,
        totalTime: 0,
        bestGame: null
      };
    }
    
    const totalScore = history.reduce((sum, game) => sum + game.score, 0);
    const totalCorrect = history.reduce((sum, game) => sum + game.correctAnswers, 0);
    const totalQuestions = history.reduce((sum, game) => sum + game.totalQuestions, 0);
    const totalTime = history.reduce((sum, game) => sum + game.totalTime, 0);
    const bestGame = history.reduce((best, game) => 
      game.score > (best?.score || 0) ? game : best, null
    );
    
    return {
      gamesPlayed: history.length,
      averageScore: Math.round(totalScore / history.length),
      averageAccuracy: Math.round((totalCorrect / totalQuestions) * 100),
      totalTime: totalTime,
      bestGame: bestGame
    };
  }

  // Exporta todos os datos
  exportData() {
    const data = {
      version: this.version,
      exportDate: new Date().toISOString(),
      stats: this.getStats(),
      settings: this.getSettings(),
      history: this.getGameHistory()
    };
    
    return JSON.stringify(data, null, 2);
  }

  // Importa datos (para futuras funcionalidades)
  importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.stats) {
        this.setItem('stats', data.stats);
      }
      
      if (data.settings) {
        this.setItem('settings', data.settings);
      }
      
      if (data.history) {
        this.setItem('gameHistory', data.history);
      }
      
      return true;
    } catch (error) {
      console.error('Erro ao importar datos:', error);
      return false;
    }
  }

  // Obtén o tamaño do almacenamento usado
  getStorageSize() {
    let total = 0;
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(this.prefix)) {
        total += localStorage.getItem(key).length;
      }
    });
    
    return {
      bytes: total,
      kb: Math.round(total / 1024 * 100) / 100,
      mb: Math.round(total / (1024 * 1024) * 100) / 100
    };
  }

  // Verifica se o almacenamento está dispoñible
  isStorageAvailable() {
    try {
      const test = 'storage_test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }

  // Migra datos de versións antigas (para futuras actualizacións)
  migrateData() {
    const currentVersion = this.getItem('version');
    
    if (!currentVersion || currentVersion !== this.version) {
      console.log('Migrando datos á versión', this.version);
      // Aquí iría a lóxica de migración
      this.setItem('version', this.version);
    }
  }

  // Crea unha copia de seguridade
  createBackup() {
    const backup = {
      timestamp: new Date().toISOString(),
      version: this.version,
      data: this.exportData()
    };
    
    // Garda a copia en formato comprimido se é posible
    try {
      return btoa(JSON.stringify(backup));
    } catch (error) {
      return JSON.stringify(backup);
    }
  }

  // Restaura unha copia de seguridade
  restoreBackup(backupData) {
    try {
      let backup;
      
      // Intenta descomprimir se é necesario
      try {
        backup = JSON.parse(atob(backupData));
      } catch {
        backup = JSON.parse(backupData);
      }
      
      if (backup.data) {
        return this.importData(backup.data);
      }
      
      return false;
    } catch (error) {
      console.error('Erro ao restaurar copia de seguridade:', error);
      return false;
    }
  }
}

// Exporta o xestor de almacenamento
window.StorageManager = StorageManager;
