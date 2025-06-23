@echo off
echo.
echo ============================================
echo    TRIVIA GALEGA - INSTALACION RAPIDA
echo ============================================
echo.
echo Instalando servidor local para tu juego...
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Python detectado! Iniciando servidor...
    echo.
    echo El juego se abrira en: http://localhost:8000
    echo.
    echo Para parar el servidor: Ctrl+C
    echo.
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Verificar si Node.js está instalado
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo Node.js detectado! Instalando servidor...
    echo.
    npx serve . -p 8000
    goto :end
)

REM Verificar si PHP está instalado
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo PHP detectado! Iniciando servidor...
    echo.
    echo El juego se abrira en: http://localhost:8000
    echo.
    start http://localhost:8000
    php -S localhost:8000
    goto :end
)

REM Si no hay servidor disponible, abrir directamente
echo.
echo No se detectaron servidores (Python/Node.js/PHP).
echo Abriendo directamente el archivo HTML...
echo.
echo NOTA: Para la experiencia completa de PWA,
echo instala Python y ejecuta este script de nuevo.
echo.
pause
start index.html

:end
echo.
echo Gracias por jugar a Trivia Galega!
pause
