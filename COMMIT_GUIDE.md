# Guía de Commits Convencionales

Este proyecto utiliza **Conventional Commits** para mantener un historial de cambios limpio, organizado y profesional.

## Formato de Commit

```
<tipo>(<scope>): <descripción>

[body opcional]

[footer opcional]
```

## Tipos Permitidos

| Tipo         | Uso                         | Ejemplo                                  |
| ------------ | --------------------------- | ---------------------------------------- |
| **feat**     | Nueva funcionalidad         | `feat(navbar): agregar menú desplegable` |
| **fix**      | Corrección de bug           | `fix(auth): corregir error de login`     |
| **chore**    | Mantenimiento general       | `chore(deps): actualizar dependencias`   |
| **docs**     | Documentación               | `docs(readme): agregar instrucciones`    |
| **style**    | Estilos y formato           | `style(buttons): ajustar colores`        |
| **refactor** | Refactorización de código   | `refactor(auth): optimizar función`      |
| **test**     | Tests                       | `test(counter): agregar tests unitarios` |
| **perf**     | Optimización de rendimiento | `perf(images): optimizar carga`          |

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
