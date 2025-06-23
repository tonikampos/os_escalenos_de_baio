// Aplicación principal de Trivia Galega
class TriviaApp {
  constructor() {
    this.currentScreen = 'loading';
    this.gameEngine = null;
    this.isInstalled = false;
    this.deferredPrompt = null;
    
    this.init();
  }

  // Inicializa a aplicación
  async init() {
    this.bindEvents();
    this.checkInstallation();
    this.registerServiceWorker();
    
    // Simula carga inicial
    await this.loadResources();
    
    // Inicializa o motor do xogo
    this.gameEngine = new GameEngine();
    
    // Mostra a pantalla principal
    this.showScreen('home');
  }

  // Asocia eventos globais
  bindEvents() {
    // Eventos de instalación PWA
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton();
    });

    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.hideInstallButton();
      console.log('PWA instalada correctamente');
    });

    // Eventos de conexión
    window.addEventListener('online', () => {
      this.showConnectionStatus(true);
    });

    window.addEventListener('offline', () => {
      this.showConnectionStatus(false);
    });

    // Eventos de teclado
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcuts(e);
    });

    // Eventos de xestos táctiles
    this.bindTouchEvents();

    // Visibilidade da páxina
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.gameEngine?.currentGame && !this.gameEngine.isPaused) {
        this.gameEngine.pauseGame();
      }
    });
  }

  // Asocia eventos táctiles
  bindTouchEvents() {
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      this.handleSwipeGesture(touchStartY, touchEndY);
    });
  }

  // Manexo de xestos de deslizamento
  handleSwipeGesture(startY, endY) {
    const threshold = 50; // Píxeles mínimos para detectar deslizamento
    const diff = startY - endY;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Deslizamento cara arriba
        console.log('Swipe up detected');
      } else {
        // Deslizamento cara abaixo
        console.log('Swipe down detected');
      }
    }
  }

  // Manexo de atallos de teclado
  handleKeyboardShortcuts(e) {
    // Esc para pausar ou volver
    if (e.key === 'Escape') {
      if (this.currentScreen === 'game' && this.gameEngine?.currentGame) {
        this.gameEngine.pauseGame();
      } else if (this.currentScreen !== 'home') {
        this.goHome();
      }
    }

    // Espazo para pausar/continuar
    if (e.key === ' ' && this.currentScreen === 'game') {
      e.preventDefault();
      if (this.gameEngine?.currentGame) {
        if (this.gameEngine.isPaused) {
          this.gameEngine.resumeGame();
        } else {
          this.gameEngine.pauseGame();
        }
      }
    }

    // Números para seleccionar respostas
    if (this.currentScreen === 'game' && /^[1-4]$/.test(e.key)) {
      const answerIndex = parseInt(e.key) - 1;
      const buttons = document.querySelectorAll('.answer-btn');
      if (buttons[answerIndex] && !buttons[answerIndex].disabled) {
        buttons[answerIndex].click();
      }
    }
  }

  // Carga recursos iniciais
  async loadResources() {
    return new Promise((resolve) => {
      // Simula carga de recursos
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  // Mostra unha pantalla específica
  showScreen(screenName) {
    // Oculta todas as pantallas
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    // Mostra a pantalla solicitada
    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
      targetScreen.classList.add('active');
      this.currentScreen = screenName;
      
      // Executa accións específicas da pantalla
      this.onScreenChange(screenName);
    }
  }

  // Executa accións cando cambia a pantalla
  onScreenChange(screenName) {
    switch (screenName) {
      case 'home':
        this.updateHomeScreen();
        break;
      case 'game':
        this.updateGameScreen();
        break;
      case 'results':
        this.updateResultsScreen();
        break;
      case 'settings':
        this.updateSettingsScreen();
        break;
    }
  }

  // Actualiza a pantalla principal
  updateHomeScreen() {
    if (this.gameEngine) {
      this.gameEngine.loadUserStats();
    }
  }

  // Actualiza a pantalla de xogo
  updateGameScreen() {
    // A pantalla de xogo actualízase desde o GameEngine
  }

  // Actualiza a pantalla de resultados
  updateResultsScreen() {
    // Os resultados actualízanse desde o GameEngine
  }

  // Actualiza a pantalla de configuración
  updateSettingsScreen() {
    this.loadSettings();
  }

  // Carga a configuración na interface
  loadSettings() {
    if (!this.gameEngine) return;

    const settings = this.gameEngine.storageManager.getSettings();
    
    const soundEffectsCheckbox = document.getElementById('sound-effects');
    const vibrationCheckbox = document.getElementById('vibration');

    if (soundEffectsCheckbox) {
      soundEffectsCheckbox.checked = settings.soundEffects || false;
      soundEffectsCheckbox.onchange = () => {
        this.updateSetting('soundEffects', soundEffectsCheckbox.checked);
      };
    }

    if (vibrationCheckbox) {
      vibrationCheckbox.checked = settings.vibration || false;
      vibrationCheckbox.onchange = () => {
        this.updateSetting('vibration', vibrationCheckbox.checked);
      };
    }
  }

  // Actualiza unha configuración
  updateSetting(key, value) {
    if (this.gameEngine) {
      this.gameEngine.storageManager.updateSettings({ [key]: value });
    }
  }

  // Verifica se a PWA está instalada
  checkInstallation() {
    // Detección de instalación en diferentes navegadores
    if (window.navigator.standalone === true) {
      this.isInstalled = true; // iOS Safari
    } else if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true; // Android Chrome
    }
  }

  // Mostra o botón de instalación
  showInstallButton() {
    // Crea e mostra un botón de instalación se non existe
    let installButton = document.getElementById('install-button');
    
    if (!installButton) {
      installButton = document.createElement('button');
      installButton.id = 'install-button';
      installButton.className = 'btn btn-primary install-btn';
      installButton.innerHTML = '📱 Instalar App';
      installButton.onclick = () => this.installApp();
      
      // Engádeo á pantalla principal
      const homeContent = document.querySelector('.home-content');
      if (homeContent) {
        homeContent.appendChild(installButton);
      }
    }
  }

  // Oculta o botón de instalación
  hideInstallButton() {
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.remove();
    }
  }

  // Instala a PWA
  async installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('Usuario aceptou a instalación');
      } else {
        console.log('Usuario rexeitou a instalación');
      }
      
      this.deferredPrompt = null;
    }
  }

  // Rexistra o Service Worker
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker rexistrado:', registration);
        
        // Escoita actualizacións
        registration.addEventListener('updatefound', () => {
          this.showUpdateAvailable();
        });
      } catch (error) {
        console.error('Erro ao rexistrar Service Worker:', error);
      }
    }
  }

  // Mostra notificación de actualización dispoñible
  showUpdateAvailable() {
    // Crea unha notificación de actualización
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
      <div class="update-content">
        <span>Nova versión dispoñible!</span>
        <button onclick="window.location.reload()" class="btn btn-small">Actualizar</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove automáticamente despois de 10 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 10000);
  }

  // Mostra o estado da conexión
  showConnectionStatus(isOnline) {
    let statusElement = document.getElementById('connection-status');
    
    if (!statusElement) {
      statusElement = document.createElement('div');
      statusElement.id = 'connection-status';
      statusElement.className = 'connection-status';
      document.body.appendChild(statusElement);
    }
    
    statusElement.textContent = isOnline ? '🟢 Conectado' : '🔴 Sen conexión';
    statusElement.className = `connection-status ${isOnline ? 'online' : 'offline'}`;
    
    // Oculta despois de 3 segundos se está online
    if (isOnline) {
      setTimeout(() => {
        if (statusElement) {
          statusElement.style.display = 'none';
        }
      }, 3000);
    }
  }

  // Navega á pantalla principal
  goHome() {
    // Para o xogo se está en curso
    if (this.gameEngine?.currentGame) {
      this.gameEngine.quitGame();
    }
    
    this.showScreen('home');
  }
}

// Funcións globais para os eventos dos botóns
window.startGame = (difficulty = 'medium') => {
  window.app.gameEngine.startGame(difficulty);
  window.app.showScreen('game');
};

window.showSettings = () => {
  window.app.showScreen('settings');
};

window.goHome = () => {
  window.app.goHome();
};

window.pauseGame = () => {
  if (window.app.gameEngine) {
    window.app.gameEngine.pauseGame();
  }
};

window.resumeGame = () => {
  if (window.app.gameEngine) {
    window.app.gameEngine.resumeGame();
  }
};

window.quitGame = () => {
  if (window.app.gameEngine) {
    window.app.gameEngine.quitGame();
  }
};

window.shareResults = () => {
  if (window.app.gameEngine?.currentGame) {
    const gameResult = window.app.gameEngine.calculateGameResult();
    window.app.gameEngine.shareResults(gameResult);
  }
};

window.resetAllData = () => {
  if (confirm('Estás seguro de que queres borrar todos os datos? Esta acción non se pode desfacer.')) {
    if (window.app.gameEngine) {
      window.app.gameEngine.resetStats();
      alert('Todos os datos foron borrados correctamente.');
      window.app.goHome();
    }
  }
};

// Inicializa a aplicación cando o DOM estea listo
document.addEventListener('DOMContentLoaded', () => {
  window.app = new TriviaApp();
});

// Estilos adicionais para notificacións
const additionalStyles = `
  .install-btn {
    margin-top: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: white;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  }

  .install-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  }

  .update-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4a90e2;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1001;
    animation: slideInRight 0.3s ease-out;
  }

  .update-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .connection-status {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .connection-status.online {
    background: #27ae60;
    color: white;
  }

  .connection-status.offline {
    background: #e74c3c;
    color: white;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// Engade os estilos adicionais
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
