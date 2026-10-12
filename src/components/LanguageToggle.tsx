import FlagIcon from './FlagIcon';

interface Props {
  currentLang: 'es' | 'en';
}

export default function LanguageToggle({ currentLang }: Props) {
  const toggleLang = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    const newPath = window.location.pathname.replace(`/${currentLang}`, `/${newLang}`);

    // Preserve the section the user is reading instead of jumping to the top.
    // Prefer the section currently in view; fall back to the URL hash.
    let hash = '';
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const pasadas = sections.filter((s) => s.getBoundingClientRect().top <= 120);
    if (pasadas.length > 0) {
      hash = `#${pasadas[pasadas.length - 1].id}`;
    } else {
      hash = window.location.hash;
    }

    // Flag: la nueva página salta al ancla de forma instantánea (sin animación).
    sessionStorage.setItem('lang-scroll-jump', '1');
    window.location.href = newPath + hash;
  };

  return (
    <button
      onClick={toggleLang}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center gap-1 sm:gap-2 font-medium"
      aria-label="Change language"
    >
      <FlagIcon
        lang={currentLang === 'es' ? 'es' : 'en'}
        className="w-5 h-5 rounded-sm object-cover"
      />
      <span className="uppercase text-sm font-orbitron hidden sm:inline">{currentLang}</span>
    </button>
  );
}
