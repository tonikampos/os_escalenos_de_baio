#!/bin/bash

echo ""
echo "============================================"
echo "    TRIVIA GALEGA - INSTALACION RAPIDA"
echo "============================================"
echo ""
echo "Instalando servidor local para tu juego..."
echo ""

# Verificar si Python está instalado
if command -v python3 &> /dev/null; then
    echo "Python3 detectado! Iniciando servidor..."
    echo ""
    echo "El juego se abrirá en: http://localhost:8000"
    echo ""
    echo "Para parar el servidor: Ctrl+C"
    echo ""
    
    # Abrir en navegador (funciona en Mac y la mayoría de Linux)
    if command -v open &> /dev/null; then
        open http://localhost:8000
    elif command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:8000
    fi
    
    python3 -m http.server 8000
    exit 0
fi

# Verificar si Python2 está instalado
if command -v python &> /dev/null; then
    echo "Python detectado! Iniciando servidor..."
    echo ""
    echo "El juego se abrirá en: http://localhost:8000"
    echo ""
    
    if command -v open &> /dev/null; then
        open http://localhost:8000
    elif command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:8000
    fi
    
    python -m SimpleHTTPServer 8000
    exit 0
fi

# Verificar si Node.js está instalado
if command -v node &> /dev/null; then
    echo "Node.js detectado! Instalando servidor..."
    echo ""
    npx serve . -p 8000
    exit 0
fi

# Verificar si PHP está instalado
if command -v php &> /dev/null; then
    echo "PHP detectado! Iniciando servidor..."
    echo ""
    echo "El juego se abrirá en: http://localhost:8000"
    echo ""
    
    if command -v open &> /dev/null; then
        open http://localhost:8000
    elif command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:8000
    fi
    
    php -S localhost:8000
    exit 0
fi

# Si no hay servidor disponible
echo ""
echo "No se detectaron servidores (Python/Node.js/PHP)."
echo "Abriendo directamente el archivo HTML..."
echo ""
echo "NOTA: Para la experiencia completa de PWA,"
echo "instala Python y ejecuta este script de nuevo."
echo ""

if command -v open &> /dev/null; then
    open index.html
elif command -v xdg-open &> /dev/null; then
    xdg-open index.html
else
    echo "Abre manualmente el archivo index.html en tu navegador"
fi

echo ""
echo "¡Gracias por jugar a Trivia Galega!"
