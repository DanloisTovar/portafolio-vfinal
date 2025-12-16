# 📝 Guía de Commits - Portafolio V3

Este proyecto utiliza **Conventional Commits** para mantener un historial de cambios claro, consistente y profesional.

## 📋 Estructura de un Commit

```
<tipo>(<scope>): <asunto>

<cuerpo>
```

### Ejemplo Completo

```
feat(navbar): agregar botón de login en navegación

Se agregó un botón de login interactivo en la barra de navegación.
El botón incluye animaciones smooth y abre un modal de autenticación.
Se utilizó React con Tailwind CSS para los estilos.
```

---

## 🔤 Tipos de Commit Permitidos

| Tipo       | Descripción                                         | Ejemplo                                     |
| ---------- | --------------------------------------------------- | ------------------------------------------- |
| `feat`     | Nueva funcionalidad                                 | `feat(auth): agregar login con Google`      |
| `fix`      | Corrección de bug                                   | `fix(navbar): corregir menú responsivo`     |
| `docs`     | Cambios en documentación                            | `docs: actualizar guía de instalación`      |
| `style`    | Formateo, limpieza de código                        | `style: eliminar espacios en blanco`        |
| `refactor` | Refactorización de código sin cambiar funcionalidad | `refactor(api): simplificar lógica`         |
| `test`     | Agregar o modificar tests                           | `test: agregar tests para Counter`          |
| `chore`    | Tareas de mantenimiento, dependencias               | `chore(deps): actualizar React`             |
| `perf`     | Optimización de rendimiento                         | `perf(images): optimizar carga de imágenes` |

---

## 🎯 Scope (Alcance)

El **scope es obligatorio** en este proyecto y especifica qué área del proyecto afecta el commit.

### Scopes Sugeridos

```
auth       - Autenticación y autorización
navbar     - Navegación principal
components - Componentes reutilizables
pages      - Páginas (home, about, etc)
styles     - Estilos globales o temas
api        - Llamadas a API
tests      - Tests unitarios o E2E
config     - Configuración del proyecto
setup      - Configuración inicial
docs       - Documentación
deps       - Dependencias
```

### Ejemplos de Scope

```bash
✅ feat(auth): agregar login con contraseña
✅ fix(pages): corregir 404 en página de contacto
✅ refactor(components): mejorar performance del Counter
❌ feat: agregar navbar (falta scope)
```

---

## 📏 Reglas de Validación

Tu proyecto valida automáticamente estos requisitos:

### 1. **Scope Obligatorio**

- Siempre debes especificar un scope entre paréntesis
- Formato: `tipo(scope): descripción`

### 2. **Longitud del Asunto**

- **Mínimo**: 5 caracteres
- **Máximo**: 72 caracteres
- Mantén el asunto conciso pero descriptivo

Ejemplo:

```
✅ feat(navbar): agregar menú responsivo
❌ feat(navbar): n                    (muy corto)
❌ feat(navbar): agregar navbar completamente nueva con estilos, animations, mobile menu responsive (muy largo)
```

### 3. **Sin Punto Final**

- El asunto NO debe terminar con punto (.)
- El cuerpo SÍ puede tener puntos

```
✅ feat(auth): agregar login
❌ feat(auth): agregar login.
```

### 4. **Cuerpo Detallado** (Opcional pero Recomendado)

- Si incluyes cuerpo, debe tener mínimo **10 caracteres**
- Usa el cuerpo para explicar el **QUÉ** y el **POR QUÉ**, no el CÓMO

Ejemplo:

```
feat(navbar): agregar botón de login

Se añadió botón de login interactivo en la navbar principal.
Mejora la experiencia de usuario permitiendo acceso rápido a la autenticación.
```

---

## ✅ Ejemplos de Commits Correctos

### Feat (Nueva Funcionalidad)

```bash
git commit -m "feat(dashboard): crear panel de administración"
```

### Fix (Corrección)

```bash
git commit -m "fix(login): corregir validación de email" -m "El regex no validaba correctamente dominios con múltiples puntos. Se actualizó la expresión regular."
```

### Docs (Documentación)

```bash
git commit -m "docs(setup): agregar instrucciones de instalación"
```

### Refactor (Refactorización)

```bash
git commit -m "refactor(api): extraer lógica de autenticación a servicio"
```

### Test (Tests)

```bash
git commit -m "test(counter): agregar tests para incremento y decremento"
```

### Chore (Mantenimiento)

```bash
git commit -m "chore(deps): actualizar TypeScript a v5.9"
```

---

## ❌ Ejemplos de Commits Incorrectos

```bash
# ❌ Sin scope
git commit -m "feat: agregar navbar"

# ❌ Scope vacío
git commit -m "feat(): agregar navbar"

# ❌ Tipo no permitido
git commit -m "update(navbar): agregar botón"

# ❌ Asunto muy corto
git commit -m "feat(auth): add"

# ❌ Asunto con punto final
git commit -m "feat(navbar): agregar menú."

# ❌ Asunto muy largo
git commit -m "feat(navbar): agregar navbar completamente nueva con menú responsive, animaciones suaves, integración con React Router, estilos con Tailwind CSS y soporte para temas oscuros"
```

---

## 🎓 Git Hooks Automáticos

Este proyecto tiene **Husky** configurado para validar commits automáticamente:

### Pre-commit (Antes de confirmar)

```bash
✅ ESLint - Lint de código
✅ Prettier - Formateo automático
✅ Stylelint - Lint de estilos
```

### Commit-msg (Validar mensaje)

```bash
✅ Commitlint - Valida formato de commit
```

Si alguna validación falla, el commit será rechazado. Debes corregir los errores y reintentar.

---

## 📱 Commits en Diferentes Escenarios

### Nuevo Feature

```bash
git commit -m "feat(components): crear componente de Card reutilizable" \
  -m "Se creó un componente Card genérico que puede usarse en todo el proyecto.
Incluye soporte para títulos, descripciones, imágenes y acciones.
Completamente estilizado con Tailwind CSS."
```

### Corrección de Bug

```bash
git commit -m "fix(auth): validar token expirado en login" \
  -m "El sistema no validaba si el token JWT estaba expirado.
Se agregó validación antes de procesar la autenticación.
Ahora redirige correctamente al login si el token es inválido."
```

### Actualización de Dependencias

```bash
git commit -m "chore(deps): actualizar React a 18.3.1" \
  -m "Se actualizó React de 18.2.0 a 18.3.1.
Incluye mejoras de rendimiento y correcciones de bugs."
```

---

## 🔗 Referencias Útiles

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint Documentation](https://commitlint.js.org/)
- [Git Commit Best Practices](https://chris.beams.io/posts/git-commit/)

---

## 💡 Consejos Profesionales

1. **Comittea frecuentemente** - Cambios pequeños y enfocados son más fáciles de revisar
2. **Escribe mensajes claros** - Imagina que alguien revisará esto en 6 meses
3. **Usa el cuerpo** - Para commits complejos, siempre añade explicación detallada
4. **Revisa antes de commiter** - `git diff` te ayuda a verificar cambios
5. **Mantén el historial limpio** - No hagas rebase público, evita conflictos

---

## ⚙️ Configuración Actual

La configuración de Commitlint en este proyecto incluye:

```javascript
{
  'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'perf']],
  'scope-empty': [2, 'never'],
  'subject-min-length': [2, 'always', 5],
  'subject-max-length': [2, 'always', 72],
  'body-min-length': [2, 'always', 10],
  'subject-full-stop': [2, 'never', '.']
}
```

¡Feliz commiteando! 🚀
| **chore** | Mantenimiento general | `chore(deps): actualizar dependencias` |
| **docs** | Documentación | `docs(readme): agregar instrucciones` |
| **style** | Estilos y formato | `style(buttons): ajustar colores` |
| **refactor** | Refactorización de código | `refactor(auth): optimizar función` |
| **test** | Tests | `test(counter): agregar tests unitarios` |
| **perf** | Optimización de rendimiento | `perf(images): optimizar carga` |

## Scope (Obligatorio)

El scope es la **parte del proyecto que afecta el cambio**. Algunos ejemplos:

- `navbar` - Cambios en la navegación
- `auth` - Cambios en autenticación
- `api` - Cambios en API
- `components` - Cambios en componentes
- `styles` - Cambios en estilos globales
- `config` - Cambios en configuración

## Reglas de Validación

✅ **Lo que SÍ está permitido:**

```bash
git commit -m "feat(navbar): agregar botón de login"
git commit -m "fix(auth): corregir validación de email"
git commit -m "chore(deps): actualizar React a v18"
git commit -m "docs(readme): agregar guía de instalación"
git commit -m "test(counter): agregar tests unitarios"
```

❌ **Lo que NO está permitido:**

```bash
# ❌ Sin scope
git commit -m "feat: agregar botón"

# ❌ Título muy corto (menos de 5 caracteres)
git commit -m "feat(ui): add x"

# ❌ Título muy largo (más de 72 caracteres)
git commit -m "feat(nav): agregar barra de navegación responsiva con dropdowns y animaciones"

# ❌ Punto al final
git commit -m "feat(navbar): agregar botón de login."

# ❌ Tipo no permitido
git commit -m "build(deps): actualizar"
```

## Ejemplos Completos

### Ejemplo 1: Solo título

```bash
git commit -m "feat(navbar): agregar navegación responsiva"
```

### Ejemplo 2: Con descripción detallada

```bash
git commit -m "feat(auth): implementar autenticación con JWT

Se implementó sistema de autenticación usando JWT tokens.
Los tokens se almacenan en localStorage con expiración de 1 hora.
Se agregaron endpoints para login, logout y refresh token."
```

## Reglas Técnicas

| Regla            | Min/Max              | Razón                             |
| ---------------- | -------------------- | --------------------------------- |
| Scope            | Obligatorio          | Organiza cambios por área         |
| Título           | 5-72 caracteres      | Legible en todas las herramientas |
| Body (si existe) | Mínimo 10 caracteres | Descripción clara                 |
| Punto final      | Prohibido            | Consistencia con estándar         |

## Ventajas de Esta Configuración

✅ **Historial limpio**: Commits bien organizados  
✅ **Changelogs automáticos**: Se generan de forma automática  
✅ **Fácil búsqueda**: Filtrar por tipo o scope  
✅ **Documentación**: El código cuenta su propia historia  
✅ **Profesional**: Sigue estándares de la industria

## Generación de CHANGELOG

Cuando sea necesario, genera el changelog con:

```bash
pnpm changelog
```

Esto genera `CHANGELOG.md` automáticamente basado en los commits.

## Referencias

- **Conventional Commits**: https://www.conventionalcommits.org/
- **Commitlint**: https://commitlint.js.org/
- **Semantic Versioning**: https://semver.org/

---

💡 **Tip**: Usa descriptores claros y específicos en el scope para máxima claridad.
