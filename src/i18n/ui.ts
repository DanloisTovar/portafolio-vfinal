export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.news': 'Novedades',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.badge1': '¡Hola! 👋',
    'hero.badge2': 'Soy Danlois Tovar 💻',
    'hero.role': 'Desarrollador Front End',
    'hero.description':
      'Enfocado en crear aplicaciones web modernas, optimizadas y escalables. Combino una sólida base técnica en refactorización de código con la entrega de interfaces funcionales de calidad.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.downloadCV': 'Descargar CV',
    'hero.contact': 'Contactar',
    'hero.techStack': 'COMPETENCIAS TÉCNICAS:',
    'about.title': 'Sobre Mí',
    'about.intro': 'Desarrollador Front End',
    'about.description':
      'Desarrollador Web con sólida experiencia en refactorización de código y maquetación responsive. Me especializo en mantenibilidad y escalabilidad, aplicando buenas prácticas de desarrollo.',
    'about.experience':
      'Cuento con una sólida base en Soporte de Integraciones, complementada por mi experiencia en QA. Esta trayectoria me aporta una comprensión profunda del ciclo de vida del dato (JSON/APIs) y una visión detallista para la detección temprana de errores. Esto se traduce en interfaces que no solo son estéticas, sino técnicamente robustas en el manejo de datos y la lógica de negocio.',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Una selección de mis trabajos más recientes y destacados',
    'projects.portfolio.title': 'Portafolio Web — Astro, React, Motion',
    'projects.portfolio.desc':
      'Sitio personal construido con Astro (SSR), React, TypeScript y Tailwind CSS. Animaciones con Motion, efectos visuales interactivos, multi-idioma (i18n es/en), formulario con Astro Actions + Nodemailer y validación con Zod. Despliegue en Vercel.',
    'projects.workgroup.title': 'Workgroup',
    'projects.workgroup.desc':
      'Maquetación responsiva e implementación de componentes UI con Bootstrap, integración con backend en PHP. Enfoque en accesibilidad semántica, optimización de assets para performance y compatibilidad cross‑browser en entorno corporativo.',
    'projects.lati.title': 'Laboratorio de Asistencia Técnica a la Industria (LATI)',
    'projects.lati.desc':
      'Maquetación institucional orientada a claridad y cumplimiento: estructura semántica, optimización básica de SEO y carga, integración con flujo existente en PHP. Entregables consistentes y mantenibles.',
    'projects.eventtwo.title': 'EventTwo Media',
    'projects.eventtwo.desc':
      'Plataforma de eventos en vivo con WordPress Headless como backend. Conciertos, stand-up comedy y conferencias en escenarios globales. Explora eventos por categoría y solicita artistas en tu ciudad. Construido con Astro, React, TypeScript y Tailwind CSS.',
    'skills.title': 'Habilidades',
    'skills.hard': 'Habilidades Técnicas',
    'skills.soft': 'Habilidades Blandas',
    'skills.soft.communication': 'Comunicación Efectiva',
    'skills.soft.problem_solving': 'Resolución de Problemas',
    'skills.soft.teamwork': 'Trabajo en Equipo',
    'skills.soft.adaptability': 'Proactividad y Autogestión',
    'contact.title': 'Contacto',
    'contact.button': 'Envíame un correo',
    'news.title': 'Noticias y Novedades',
    'news.subtitle': 'Lo último en Tecnología, Desarrollo e IA',
    'news.readMore': 'Leer más',
    'news.source': 'Fuente',
    'experience.title': 'Experiencia Laboral',
    'experience.subtitle': 'Mi trayectoria profesional y contribuciones técnicas',
    'experience.job1.role': 'Desarrollador Web / Analista QA / Soporte de Integraciones',
    'experience.job1.company': 'Workgroup S.L., Buenos Aires, Argentina',
    'experience.job1.duration': '2021 - 2025',
    'experience.job1.desc':
      '<strong>Desarrollador Front End:</strong> Lideré la refactorización de 11.000 líneas de código CSS y la maquetación responsive (Bootstrap, HTML5, CSS3), además de desarrollar nuevas funcionalidades con JavaScript y jQuery.<br><br><strong>Analista QA:</strong> Ejecución de testing manual y funcional, diseño de casos de prueba y seguimiento de bugs.<br><br><strong>Soporte de Integraciones:</strong> Resolución de incidencias críticas en integraciones SQL/JSON y soporte técnico a nivel regional.',
    'experience.job2.role': 'Soporte Técnico Nivel 1',
    'experience.job2.company': 'JPH Lions LATAM, Buenos Aires, Argentina',
    'experience.job2.duration': '2018 - 2021',
    'experience.job2.desc':
      'Soporte funcional de aplicaciones web y sistemas (SecurOS). Enlace clave entre usuarios y equipo de desarrollo para la resolución de incidencias.',
    'experience.job3.role': 'Analista en Organización y Sistemas',
    'experience.job3.company': 'Instituto Nacional de Tierras, Caracas, Venezuela',
    'experience.job3.duration': '2007 - 2017',
    'experience.job3.desc':
      'Análisis y levantamiento de procesos organizacionales. Documentación técnica de normas y procedimientos.',
    'qa.showcase.title': 'QA Showcase',
    'qa.showcase.subtitle': 'Documentación y ejemplos de bug hunting.',
    'qa.showcase.testplan': 'Plan de Pruebas (Sanitizado)',
    'qa.showcase.bug_hunting_title': 'Ejemplos de Bug Hunting',
    'qa.showcase.bug1_title': 'Bug 1',
    'qa.showcase.bug1_desc':
      'Validación incorrecta de campos de hora vacíos. El sistema permite guardar horarios con valores 00:00 predeterminados cuando los campos deberían estar vacíos, permitiendo la creación de registros inválidos.',
    'qa.showcase.bug2_title': 'Bug 2',
    'qa.showcase.bug2_desc':
      'Validación incorrecta de campos obligatorios en creación de feriados. El sistema permite guardar registros con campos de fecha y descripción vacíos, permitiendo la creación de feriados inválidos.',
    'qa.showcase.documentation': 'Documentación',
    'qa.showcase.testplan_title': 'Plan de Pruebas Funcionales',
    'qa.showcase.testplan_desc':
      'Diseño y ejecución de casos de prueba exhaustivos cubriendo flujos críticos del sistema, criterios de aceptación y escenarios edge case para garantizar la calidad del software.',
    'qa.showcase.placeholder_image': 'Placeholder: Upload your Test Plan image here',
    'qa.showcase.placeholder_bug1': 'Placeholder: Upload Bug 1 GIF here',
    'qa.showcase.placeholder_bug2': 'Placeholder: Upload Bug 2 GIF here',
    'wordpressProjects.title': 'Proyectos WordPress',
    'wordpressProjects.subtitle': 'Sitios web construidos con WordPress y Elementor',
    'wordpressProjects.project1.title': 'NIDO Coworking',
    'wordpressProjects.project1.desc':
      'Espacio de coworking en un bosque de Asturias. Sitio web con planes, espacios (open space, oficinas, salas de reuniones) y formulario de contacto. Construido con WordPress y Elementor.',
    'wordpressProjects.project2.title': 'Brasa Norte',
    'wordpressProjects.project2.desc':
      'Restaurante de cocina mediterránea a la brasa en Albacete. Sitio web con carta digital, menús especiales, formulario de reservas, galería de imágenes y sistema de opiniones. Construido con WordPress y Elementor.',
    'wordpressProjects.project3.title': 'Clínica Oria',
    'wordpressProjects.project3.desc':
      'Clínica especializada en tratamiento no invasivo de patologías dolorosas de columna y articulaciones en Gijón. Más de 30 años de trayectoria. Sitio web con páginas de tratamientos, blog y formulario de contacto. Construido con WordPress y Elementor.',
    'projects.caseStudy.title': 'Caso de estudio',
    'projects.caseStudy.subtitle': 'Proceso de Refactorización de la página web de Workgroup.',
    'projects.caseStudy.description':
      'Refactorización profunda de CSS: Se redujeron errores en un 70% mediante una revisión exhaustiva de la especificidad de selectores, optimizando componentes Bootstrap y complementándolos con librerías modernas.\n\nEsto resultó en mayor rendimiento (menos conflictos y cálculos CSS), código más predecible y mantenible, y responsividad robusta en todos los dispositivos.',
    'projects.caseStudy.image1.title': 'Imagen 1 (El Caos)',
    'projects.caseStudy.image1.desc':
      'Captura de código antiguo o de la UI antigua (desordenada). Aquí se mostraría una captura de pantalla del código o UI antes de la refactorización. Representa el estado original, posiblemente complejo o desorganizado.',
    'projects.caseStudy.image2.title': 'Imagen 2 (La Solución)',
    'projects.caseStudy.image2.desc':
      'Captura de tu código nuevo (limpio, identado, componentizado). Evidencia la solución limpia, organizada y modular.',
    'projects.caseStudy.button.view': 'Ver en pantalla completa',
    /* fix de español para habilidades de sql */
    'skills.advancedSql.title': 'Muestras Avanzadas de SQL',
    'skills.advancedSql.subtitle':
      'Queries complejas de integración con nombres de tablas sanitizados.',
    'skills.advancedSql.gist_link': 'Ver Gist completo de SQL en GitHub',
    'skills.advancedSql.query1.title': 'Consulta 1: Búsqueda de logs de integración de datos',
    'skills.advancedSql.query1.desc':
      'Búsqueda de logs de integración filtrados por país y endpoint, reduciendo el volumen de datos antes de aplicar una búsqueda textual',
    'skills.advancedSql.query2.title':
      'Consulta 2: Buscar en qué centros de distribución un producto se encuentra habilitado',
    'skills.advancedSql.query2.desc':
      'Determinar en qué centros de distribucion un producto se encuentra habilitado, considerando reglas de producto, depósito y configuración de negocio.',
    'skills.advancedSql.query3.title':
      'Consulta 3: Mostrar todas las promociones de descuento activas',
    'skills.advancedSql.query3.desc':
      'Mostrar todas las promociones de descuento para clientes que se encuentren activas, para una entidad específica, considerando fecha de validez y flags de estado.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I am',
    'hero.badge1': 'Hello! 👋',
    'hero.badge2': 'I am Danlois Tovar 💻',
    'hero.role': 'Front End Developer',
    'hero.description':
      'Focused on creating modern, optimized, and scalable web applications. I combine a strong technical foundation in code refactoring with the delivery of functional interfaces of quality.',
    'hero.viewProjects': 'View projects',
    'hero.downloadCV': 'Download CV',
    'hero.contact': 'Contact',
    'hero.techStack': 'TECHNICAL SKILLS:',
    'about.title': 'About Me',
    'about.intro': 'Front End Developer',
    'about.description':
      'Web Developer with solid experience in code refactoring and responsive layout. I specialize in maintainability and scalability, applying development best practices.',
    'about.experience':
      'I have a solid background in Integration Support, complemented by my experience in QA. This trajectory provides me with a deep understanding of the data lifecycle (JSON/APIs) and a detailed vision for early bug detection. This translates into interfaces that are not only aesthetic but technically robust in data handling and business logic.',
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my most recent and outstanding works',
    'projects.portfolio.title': 'Web Portfolio — Astro, React, Motion',
    'projects.portfolio.desc':
      'Personal site built with Astro (SSR), React, TypeScript, and Tailwind CSS. Motion animations, interactive visual effects, multi-language (i18n es/en), form with Astro Actions + Nodemailer, and Zod validation. Deployed on Vercel.',
    'projects.workgroup.title': 'Workgroup',
    'projects.workgroup.desc':
      'Responsive layout and UI component implementation with Bootstrap, integration with PHP backend. Focus on semantic accessibility, asset optimization for performance, and cross-browser compatibility in a corporate environment.',
    'projects.lati.title': 'Technical Assistance to Industry Laboratory (LATI)',
    'projects.lati.desc':
      'Institutional layout oriented towards clarity and compliance: semantic structure, basic SEO and load optimization, integration with existing PHP flow. Consistent and maintainable deliverables.',
    'projects.eventtwo.title': 'EventTwo Media',
    'projects.eventtwo.desc':
      'Live events platform with WordPress Headless as backend. Concerts, stand-up comedy, and conferences on global stages. Browse events by category and request artists in your city. Built with Astro, React, TypeScript, and Tailwind CSS.',
    'skills.title': 'Skills',
    'skills.hard': 'Hard Skills',
    'skills.soft': 'Soft Skills',
    'skills.soft.communication': 'Effective Communication',
    'skills.soft.problem_solving': 'Problem Solving',
    'skills.soft.teamwork': 'Teamwork',
    'skills.soft.adaptability': 'Proactivity & Self-management',
    'contact.title': 'Contact',
    'contact.button': 'Send me an email',
    'news.title': 'News & Updates',
    'news.subtitle': 'The latest in Tech, Development & AI',
    'news.readMore': 'Read more',
    'news.source': 'Source',
    'experience.title': 'Work Experience',
    'experience.subtitle': 'My professional journey and technical contributions',
    'experience.job1.role': 'Web Developer / QA Analyst / Integration Support',
    'experience.job1.company': 'Workgroup S.L., Buenos Aires, Argentina',
    'experience.job1.duration': '2021 - 2025',
    'experience.job1.desc':
      '<strong>Front End Developer:</strong> Led the refactoring of 11,000 lines of CSS code and responsive layout (Bootstrap, HTML5, CSS3), in addition to developing new features with JavaScript and jQuery.<br><br><strong>QA Analyst:</strong> Execution of manual and functional testing, test case design, and bug tracking.<br><br><strong>Integration Support:</strong> Resolution of critical incidents in SQL/JSON integrations and regional technical support.',
    'experience.job2.role': 'Level 1 Technical Support',
    'experience.job2.company': 'JPH Lions LATAM, Buenos Aires, Argentina',
    'experience.job2.duration': '2018 - 2021',
    'experience.job2.desc':
      'Functional support for web applications and systems (SecurOS). Key liaison between users and development team for incident resolution.',
    'experience.job3.role': 'Organization and Systems Analyst',
    'experience.job3.company': 'National Land Institute, Caracas, Venezuela',
    'experience.job3.duration': '2007 - 2017',
    'experience.job3.desc':
      'Analysis and survey of organizational processes. Technical documentation of norms and procedures.',
    'qa.showcase.title': 'QA Showcase',
    'qa.showcase.subtitle': 'Documentation and bug hunting examples.',
    'qa.showcase.testplan': 'Test Plan (Sanitized)',
    'qa.showcase.bug_hunting_title': 'Bug Hunting Examples',
    'qa.showcase.bug1_title': 'Bug 1',
    'qa.showcase.bug1_desc':
      'Incorrect validation of empty time fields. The system allows saving schedules with default 00:00 values when fields should be empty, permitting the creation of invalid records.',
    'qa.showcase.bug2_title': 'Bug 2',
    'qa.showcase.bug2_desc':
      'Incorrect validation of mandatory fields in holiday creation. The system allows saving records with empty date and description fields, permitting the creation of invalid holidays.',
    'qa.showcase.documentation': 'Documentation',
    'qa.showcase.testplan_title': 'Functional Test Plan',
    'qa.showcase.testplan_desc':
      'Design and execution of comprehensive test cases covering critical system flows, acceptance criteria, and edge case scenarios to ensure software quality.',
    'qa.showcase.placeholder_image': 'Placeholder: Upload your Test Plan image here',
    'qa.showcase.placeholder_bug1': 'Placeholder: Upload Bug 1 GIF here',
    'qa.showcase.placeholder_bug2': 'Placeholder: Upload Bug 2 GIF here',
    'wordpressProjects.title': 'WordPress Projects',
    'wordpressProjects.subtitle': 'Websites built with WordPress and Elementor',
    'wordpressProjects.project1.title': 'NIDO Coworking',
    'wordpressProjects.project1.desc':
      'Coworking space in a forest in Asturias, Spain. Website with plans, spaces (open space, offices, meeting rooms), and contact form. Built with WordPress and Elementor.',
    'wordpressProjects.project2.title': 'Brasa Norte',
    'wordpressProjects.project2.desc':
      'Mediterranean grill restaurant in Albacete, Spain. Website with digital menu, special menus, booking form, image gallery, and customer reviews. Built with WordPress and Elementor.',
    'wordpressProjects.project3.title': 'Clínica Oria',
    'wordpressProjects.project3.desc':
      'Clinic specialized in non-invasive treatment of painful spinal and joint conditions in Gijón, Spain. Over 30 years of experience. Website with treatment pages, blog, and contact form. Built with WordPress and Elementor.',
    'projects.caseStudy.title': 'Case Study',
    'projects.caseStudy.subtitle': 'Refactoring Process of the Workgroup website.',
    'projects.caseStudy.description':
      'Deep CSS refactoring: Errors were reduced by 70% through a thorough review of selector specificity, optimizing Bootstrap components and complementing them with modern libraries.\n\nThis resulted in higher performance (fewer conflicts and CSS calculations), more predictable and maintainable code, and robust responsiveness across all devices.',
    'projects.caseStudy.image1.title': 'Image 1 (The Chaos)',
    'projects.caseStudy.image1.desc':
      'Screenshot of old code or old UI (disorganized). Here a screenshot of the code or UI before refactoring would be shown. Represents the original state, possibly complex or disorganized.',
    'projects.caseStudy.image2.title': 'Image 2 (The Solution)',
    'projects.caseStudy.image2.desc':
      'Screenshot of your new code (clean, indented, componentized). Evidences the clean, organized, and modular solution.',
    'projects.caseStudy.button.view': 'View full screen',
    'skills.advancedSql.title': 'Advanced SQL Samples',
    'skills.advancedSql.subtitle': 'Complex integration queries with sanitized table names.',
    'skills.advancedSql.gist_link': 'View full SQL Gist on GitHub',
    'skills.advancedSql.query1.title': 'Query 1: Search for data integration logs',
    'skills.advancedSql.query1.desc':
      'Search for integration logs filtered by country and endpoint, reducing data volume before applying a text search.',
    'skills.advancedSql.query2.title':
      'Query 2: Check in which dispatch centers a product is enabled',
    'skills.advancedSql.query2.desc':
      'Determine in which dispatch centers a product is enabled, considering product, warehouse, and business configuration rules.',
    'skills.advancedSql.query3.title': 'Query 3: Show all active discount promotions',
    'skills.advancedSql.query3.desc':
      'Show all active customer discount promotions for a specific entity, considering validity date and status flags.',
  },
} as const;
