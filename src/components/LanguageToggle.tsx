import FlagIcon from './FlagIcon';

interface Props {
  currentLang: 'es' | 'en';
}

export default function LanguageToggle({ currentLang }: Props) {
  const toggleLang = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    // Simple redirect for now, can be improved to preserve path
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${currentLang}`, `/${newLang}`);
    window.location.href = newPath;
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
