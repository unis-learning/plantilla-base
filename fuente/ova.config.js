/* =========================================================
   CURSO · Catálogo de componentes
   ---------------------------------------------------------
   Cliente:   UNIS Virtual · Universidad del Istmo
   Insumo:    ../insumos/ (DI, figuras, medios, preguntas; ver insumos/LEEME.md)
   Preset visual: unis  (ver instituciones/unis/INSTITUCION.md)
   Versión template: hibrida

   Plantilla base de UNIS Virtual (UNIS-001): la estructura de las plantilla-base de la
   RED con la piel de UNIS. Los temas los escribe scripts/generar-plantilla.js desde el
   catálogo y no se editan a mano; las pantallas fijas (portada, contenido, introducción,
   evaluación, referencias y créditos) van a mano, en «usted» (D4). El texto de los ejemplos
   es del kit: la plantilla no tiene DI.
   ========================================================= */

module.exports = {

  brand: {
    // Logo aprobado «UNIS Virtual» en blanco: el que va sobre el menú guinda. En la versión
    // «clara» la piel lo cambia por el guinda. En móvil va el mismo logo completo (D17).
    name: '',
    sub:  '',
    logo:       'assets/img/logos/un-logo-blanco.svg',
    logoMobile: 'assets/img/logos/un-logo-blanco.svg',
  },

  course: {
    code:             'Unidad 1',
    name:             'Catálogo de componentes',
    subtitle:         'Plantilla base del recurso educativo',
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'unis',
    pdf:              '',
    portadaFullBleed: true,
  },

  /* TEXTOS DE LA INTERFAZ · lo que el motor pinta fuera del contenido del curso. `voz` es el tratamiento
     (tú o usted) de los textos que escribe el motor, como los de Relacionar (KIT-016). Es la voz de
     instituciones/unis/catalogo.json; tests/voz-curso.test.js avisa si se separan. El texto de
     progreso del menú es el del motor (D20). */
  textos: {
    voz: 'usted',
  },

  /* MENÚ · la estructura RED:
       - `tipo: 'especial'`  → secciones estructurales que tiene toda unidad
                               (inicio, contenido, introducción, conclusión,
                               evaluación, glosario, referencias, créditos). Icono, no número.
       - `tipo: 'tema'`      → contenido temático, numerado 1, 2, 3…
     Las `secciones` con `ancla` aparecen en el menú como sub-ítems y bajan a la
     `.un-seccion` con ese `id` (único en todo el curso). */
  menu: [
    { id: 'portada',      titulo: 'Inicio',                  tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',      titulo: 'Contenido de la unidad',  tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion', titulo: 'Introducción',            tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: 'Qué va a lograr en esta unidad', ancla: 'que-va-a-lograr' },
                   { titulo: 'Cómo está organizada la unidad', ancla: 'como-esta-organizada' } ] },

    /* PLANTILLA BASE: cada tema reúne una familia de componentes del catálogo; el texto de los
       ejemplos es un solo tema («Cómo se escribe un artículo académico»). */
    { id: 'tema1',        titulo: 'Texto y énfasis',         tipo: 'tema',
      secciones: [ { titulo: 'Subtítulos', ancla: 'subtitulos' },
                   { titulo: 'Listas', ancla: 'listas' },
                   { titulo: 'Tablas', ancla: 'tablas' },
                   { titulo: 'Bloque destacado', ancla: 'bloques-de-texto' },
                   { titulo: 'Descarga', ancla: 'descarga' },
                   { titulo: 'Recursos y enlaces', ancla: 'recursos-y-enlaces' },
                   { titulo: 'Citas', ancla: 'citas' },
                   { titulo: 'Banner destacado', ancla: 'banner-destacado' },
                   { titulo: 'Comparativo', ancla: 'comparativo' },
                   { titulo: 'Bloque de código', ancla: 'bloque-de-codigo' } ] },

    { id: 'tema2',        titulo: 'Figuras, video y pódcast', tipo: 'tema',
      secciones: [ { titulo: 'Imagen con leyenda', ancla: 'imagenes-y-figuras' },
                   { titulo: 'Figura pendiente', ancla: 'figura-pendiente' },
                   { titulo: 'Ilustración explicativa', ancla: 'ilustracion-explicativa' },
                   { titulo: 'Video', ancla: 'video' },
                   { titulo: 'Pódcast · con foto', ancla: 'podcast' } ] },

    { id: 'tema3',        titulo: 'Componentes básicos', tipo: 'tema',
      secciones: [ { titulo: 'Acordeón', ancla: 'acordeones' },
                   { titulo: 'Carrusel', ancla: 'carrusel-y-slide' },
                   { titulo: 'Carrusel de fotos', ancla: 'carrusel-de-fotos' },
                   { titulo: 'Slide', ancla: 'slide' },
                   { titulo: 'Pestañas', ancla: 'pestanas' },
                   { titulo: 'Pestañas verticales', ancla: 'pestanas-verticales' },
                   { titulo: 'Botón de ventana modal', ancla: 'ventana-modal' },
                   { titulo: 'Ejemplo de uso del botón de ventana modal - con imagen', ancla: 'ejemplo-boton-ventana-modal' } ] },

    { id: 'tema4',        titulo: 'Componentes de pasos y líneas de tiempo', tipo: 'tema',
      secciones: [ { titulo: 'Acordeón numerado', ancla: 'acordeon-numerado' },
                   { titulo: 'Ruta en zigzag', ancla: 'ruta-en-zigzag' },
                   { titulo: 'Ruta de inicio a meta', ancla: 'ruta-de-inicio-a-meta' },
                   { titulo: 'Slider de pasos', ancla: 'slider-de-pasos' },
                   { titulo: 'Listado de pasos vertical', ancla: 'listado-de-pasos-vertical' },
                   { titulo: 'Listado de pasos con tarjetas', ancla: 'listado-de-pasos-con-tarjetas' },
                   { titulo: 'Línea de tiempo tipo 1', ancla: 'linea-de-tiempo-tipo-1' },
                   { titulo: 'Línea de tiempo tipo 2', ancla: 'linea-de-tiempo-tipo-2' },
                   { titulo: 'Línea de tiempo tipo 3', ancla: 'linea-de-tiempo-tipo-3' } ] },

    { id: 'tema5',        titulo: 'Tarjetas', tipo: 'tema',
      secciones: [ { titulo: 'Tarjetas con icono - izquierda', ancla: 'tarjetas-con-icono-izquierda' },
                   { titulo: 'Ejemplo de uso de tarjetas con icono - izquierda', ancla: 'ejemplo-tarjetas-con-icono-izquierda' },
                   { titulo: 'Tarjetas con icono - centrado', ancla: 'tarjetas-con-icono-centrado' },
                   { titulo: 'Ejemplo de uso de tarjetas con icono', ancla: 'ejemplo-tarjetas-con-icono' },
                   { titulo: 'Tarjetas conectadas - clara', ancla: 'tarjetas-conectadas' },
                   { titulo: 'Tarjetas conectadas - oscura', ancla: 'tarjetas-conectadas-oscura' },
                   { titulo: 'Ejemplo de uso de tarjetas conectadas', ancla: 'ejemplo-tarjetas-conectadas' },
                   { titulo: 'Tarjetas con foto', ancla: 'tarjetas-con-foto' },
                   { titulo: 'Tarjetas con foto y descripción', ancla: 'tarjetas-con-foto-y-descripcion' },
                   { titulo: 'Tarjetas que giran', ancla: 'tarjetas-que-giran' },
                   { titulo: 'Tarjeta con botón', ancla: 'tarjeta-con-boton' } ] },

    { id: 'tema6',        titulo: 'Infografías e interactivos', tipo: 'tema',
      secciones: [ { titulo: 'Imagen con puntos interactivos (hotspots)', ancla: 'imagen-con-puntos-interactivos' },
                   { titulo: 'Tarjeta con cifra destacada - clara', ancla: 'tarjeta-con-cifra-destacada' },
                   { titulo: 'Tarjeta con cifra destacada - oscura', ancla: 'tarjeta-con-cifra-destacada-oscura' },
                   { titulo: 'Bloque con Cifra destacada - clara', ancla: 'cifra-destacada' },
                   { titulo: 'Bloque con Cifra destacada - oscura', ancla: 'cifra-destacada-oscura' },
                   { titulo: 'Proceso escalonado', ancla: 'proceso-escalonado' },
                   { titulo: 'Proceso escalonado - en fila', ancla: 'proceso-escalonado-en-fila' },
                   { titulo: 'Antes y después', ancla: 'antes-y-despues' } ] },

    { id: 'tema7',        titulo: 'Actividades para practicar', tipo: 'tema',
      secciones: [ { titulo: 'Pregunta', ancla: 'pregunta' },
                   { titulo: 'Verdadero o falso', ancla: 'verdadero-o-falso' },
                   { titulo: 'Relacionar', ancla: 'relacionar' },
                   { titulo: 'Ordenar', ancla: 'ordenar-y-clasificar' },
                   { titulo: 'Clasificar', ancla: 'clasificar' },
                   { titulo: 'Lista de verificación', ancla: 'lista-de-verificacion' },
                   { titulo: 'Para reflexionar', ancla: 'para-reflexionar' },
                   { titulo: 'Presentación de la evaluación', ancla: 'presentacion-de-la-evaluacion' },
                   { titulo: 'Presentación de la evaluación - sin imagen', ancla: 'presentacion-sin-imagen' } ] },

    /* Conclusión y Glosario: ocultos por defecto, como en las otras instituciones de la RED.
       Sus pantallas siguen en contenido/; para mostrarlas, quite el // de su línea. */
    // { id: 'conclusion',   titulo: 'Conclusión',              tipo: 'especial', icon: 'mdi:flag-outline' },
    { id: 'evaluacion',   titulo: 'Evaluación',              tipo: 'especial', icon: 'mdi:clipboard-check-outline' },
    // { id: 'glosario',     titulo: 'Glosario',                tipo: 'especial', icon: 'mdi:book-open-variant-outline' },
    { id: 'referencias',  titulo: 'Referencias',             tipo: 'especial', icon: 'mdi:bookmark-outline' },
    /* Créditos: pantalla propia después de Referencias (KIT-018; en UNIS desde UNIS-001 T6), con los
       cargos y las personas de la sección «Créditos» del Word. */
    { id: 'creditos',     titulo: 'Créditos',                tipo: 'especial', icon: 'mdi:account-group-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias. Estilo de la línea: autor y año sin
     negrilla, título de la obra en cursiva, URL en texto sin hipervínculo. */
  referencias: [],

  creditos: {
    institucion: 'UNIS Virtual · Universidad del Istmo',
  },
};
