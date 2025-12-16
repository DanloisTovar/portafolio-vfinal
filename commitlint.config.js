export default {
  extends: ['@commitlint/config-conventional'], // usa la convención estándar

  rules: {
    // Tipo de commit obligatorio y restringido a los más usados
    'type-enum': [
      2,
      'always',
      [
        'feat', // nueva funcionalidad
        'fix', // corrección de bug
        'chore', // tareas de mantenimiento
        'docs', // documentación
        'style', // estilo, formato o limpieza de código
        'refactor', // refactorización de código
        'test', // pruebas
        'perf', // optimización de rendimiento
      ],
    ],

    // Scope obligatorio para mayor claridad en cambios
    'scope-empty': [2, 'never'],

    // Título obligatorio con longitud mínima y máxima
    'subject-min-length': [2, 'always', 5],
    'subject-max-length': [2, 'always', 72],

    // Cuerpo opcional pero si existe debe tener mínimo 10 caracteres
    'body-min-length': [2, 'always', 10],

    // No permitir puntos al final del subject
    'subject-full-stop': [2, 'never', '.'],
  },
};

// ============================================================
// EXPLICACIÓN DE LAS REGLAS:
// ============================================================

// 'type-enum': Define los tipos de commit permitidos para mantener consistencia.
// 'scope-empty': Obliga a definir un scope para mayor claridad en cambios grandes.
// 'subject-min-length' y 'subject-max-length': Aseguran que el título sea conciso pero descriptivo.
// 'body-min-length': Fomenta descripciones detalladas cuando se incluye un cuerpo.
// 'subject-full-stop': Evita puntos al final del título para mantener un formato limpio.

// ============================================================
// GUÍA DE COMMIT SEGÚN TIPO:
// ============================================================

// ✅ feat(navbar): agregar botón de login
// Cuando: Añades una nueva funcionalidad

// ✅ fix(login): corregir error de validación de email
// Cuando: Corriges un bug existente

// ✅ chore(deps): actualizar dependencias
// Cuando: Actualizas librerías o mantenimiento general

// ✅ docs(readme): actualizar guía de instalación
// Cuando: Cambios en documentación

// ✅ style(buttons): ajustar estilos de botones
// Cuando: Cambios visuales, formato o limpieza

// ✅ refactor(auth): optimizar código de autenticación
// Cuando: Reorganizas código sin cambiar funcionamiento

// ✅ test(counter): agregar tests al componente contador
// Cuando: Añades o modificas tests

// ✅ perf(images): optimizar carga de imágenes
// Cuando: Mejoras el rendimiento

// ============================================================
// DESCRIPCIÓN DETALLADA DE REGLAS:
// ============================================================

// 1️⃣ 'scope-empty': [2, 'never']
// ⚙️ Significado: El scope nunca puede estar vacío
// 📌 Ejemplo: feat(navbar): ... ← navbar es el scope
// 💡 Beneficio: Organiza commits grandes y facilita filtrado en changelogs

// 2️⃣ 'subject-min-length': [2, 'always', 5]
// ⚙️ Significado: El título debe tener mínimo 5 caracteres
// 📌 Ejemplo: feat: corregir error ✅ | feat: x ❌
// 💡 Beneficio: Evita títulos vagos, mantiene claridad

// 3️⃣ 'subject-max-length': [2, 'always', 72]
// ⚙️ Significado: El título debe tener máximo 72 caracteres
// 📌 Ejemplo: feat: agregar navbar responsivo con animaciones ✅
// 💡 Beneficio: Commit limpio, visible en herramientas y changelogs

// 4️⃣ 'body-min-length': [2, 'always', 10]
// ⚙️ Significado: Si hay body (descripción), debe tener mínimo 10 caracteres
// 📌 Ejemplo:
//    feat(navbar): agregar botón de login
//    Se añadió el botón de login en la navbar ✅
// 💡 Beneficio: Garantiza descripciones claras y detalladas

// 5️⃣ 'subject-full-stop': [2, 'never', '.']
// ⚙️ Significado: El título NO puede terminar con punto
// 📌 Ejemplo: fix: corregir bug ✅ | fix: corregir bug. ❌
// 💡 Beneficio: Consistencia con la convención estándar

// ============================================================
// NIVEL DE SEVERIDAD [2]:
// ============================================================
// 0 = desactivada
// 1 = warning (aviso)
// 2 = error (falla el commit)

// ============================================================
// MÁS INFORMACIÓN:
// ============================================================
// Convención: https://www.conventionalcommits.org/
// Documentación: https://commitlint.js.org/#/guides-local-setup
