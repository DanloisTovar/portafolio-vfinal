export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/danloistovar',
  github: 'https://github.com/DanloisTovar',
  whatsapp: 'https://wa.me/34624573175',
  email: 'mailto:danlois.tovar@gmail.com',
};

export const NAV_LINKS = {
  es: [
    { label: 'Inicio', href: '#home', icon: 'home' },
    { label: 'Sobre Mí', href: '#sobre-mi', icon: 'about' },
    { label: 'Experiencia', href: '#experiencia', icon: 'experience' },
    { label: 'Proyectos', href: '#projects', icon: 'projects' },
    { label: 'Habilidades', href: '#skills', icon: 'skills' },
    { label: 'Novedades', href: '#news', icon: 'news' },
    { label: 'Contacto', href: '#contact', icon: 'contact' },
  ],
  en: [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About Me', href: '#sobre-mi', icon: 'about' },
    { label: 'Experience', href: '#experiencia', icon: 'experience' },
    { label: 'Projects', href: '#projects', icon: 'projects' },
    { label: 'Skills', href: '#skills', icon: 'skills' },
    { label: 'News', href: '#news', icon: 'news' },
    { label: 'Contact', href: '#contact', icon: 'contact' },
  ],
};

export const PROJECT_LINKS = [
  {
    id: 'portfolio',
    url: 'https://danloistovar.vercel.app/',
    repo: 'https://github.com/DanloisTovar/portafolio-vfinal.git',
  },
  {
    id: 'workgroup',
    url: 'https://www.workgroup.com.ar/website.v3/',
    repo: null,
  },
  {
    id: 'lati',
    url: 'https://www.latisrl.com.ar/',
    repo: null,
  },
];

export const SHARE_TEMPLATES = {
  whatsapp: (url: string, text: string) =>
    `https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`,
  twitter: (url: string, text: string) =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  linkedin: (url: string) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
};
