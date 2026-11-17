/* Capa UNIS Virtual · comportamientos de la piel
   ------------------------------------------------------------------
   Cada comportamiento entra con la primera pieza del catálogo de UNIS que lo
   usa (UNIS-001, D20 y criterio 4). Hoy: el sonido de la evaluación. */

/* Sonido de la evaluación (UNIS-001 T3: la evaluación de la plantilla-base)
   ------------------------------------------------------------------
   El motor avisa con eventos y no suena: ova:quiz-respuesta (una Pregunta
   respondida, detail.correcta), ova:empar-comprobado (un Relacionar
   comprobado, detail.aciertos y detail.total) y ova:evalquiz-avance (la
   evaluación pasa a la diapositiva siguiente). Aquí cada uno tiene su señal,
   sintetizada con WebAudio (sin archivos de audio): acierto, dos notas que
   suben; error, dos notas graves que bajan; avance, un toque corto. Sin esta
   capa el curso funciona igual, en silencio. El AudioContext nace en el
   primer evento, que siempre sale de un clic, así el navegador no lo bloquea. */
(() => {
  'use strict';

  const VOLUMEN = 0.1;
  let ctx = null;

  function audio() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // notas: [frecuencia en Hz, duración en s]; cada una con ataque y caída suaves
  function sonar(notas, forma = 'sine') {
    const ac = audio();
    if (!ac) return;
    let t = ac.currentTime;
    for (const [frecuencia, dur] of notas) {
      const osc = ac.createOscillator();
      const vol = ac.createGain();
      osc.type = forma;
      osc.frequency.value = frecuencia;
      vol.gain.setValueAtTime(0, t);
      vol.gain.linearRampToValueAtTime(VOLUMEN, t + 0.02);
      vol.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(vol).connect(ac.destination);
      osc.start(t);
      osc.stop(t + dur + 0.02);
      t += dur * 0.75;
    }
  }

  const acierto = () => sonar([[659.25, 0.14], [987.77, 0.24]]);          // Mi5 → Si5
  const error = () => sonar([[349.23, 0.18], [261.63, 0.28]], 'triangle'); // Fa4 → Do4
  const avance = () => sonar([[880, 0.08]]);                              // La5

  document.addEventListener('ova:quiz-respuesta', e => (e.detail && e.detail.correcta ? acierto : error)());
  document.addEventListener('ova:empar-comprobado', e => {
    const d = e.detail || {};
    (d.total && d.aciertos === d.total ? acierto : error)();
  });
  document.addEventListener('ova:evalquiz-avance', avance);
})();
