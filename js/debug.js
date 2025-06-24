// Debug das preguntas - verificar cantidade
console.log('=== DEBUG PREGUNTAS ===');
console.log('Número total de preguntas:', QUESTIONS_DATABASE.length);
console.log('Primeira pregunta ID:', QUESTIONS_DATABASE[0].id);
console.log('Última pregunta ID:', QUESTIONS_DATABASE[QUESTIONS_DATABASE.length - 1].id);
console.log('Preguntas 130-135:', QUESTIONS_DATABASE.filter(q => q.id >= 130 && q.id <= 135).map(q => `${q.id}: ${q.question.substring(0, 50)}...`));

// Verificar se as novas preguntas están
const pregunta230 = QUESTIONS_DATABASE.find(q => q.id === 230);
if (pregunta230) {
    console.log('✅ Pregunta 230 encontrada:', pregunta230.question);
} else {
    console.log('❌ Pregunta 230 NON encontrada - problema!');
}

// Actualizar o contador na interface
if (document.getElementById('total-questions')) {
    document.getElementById('total-questions').textContent = QUESTIONS_DATABASE.length;
}
