import { Languages } from 'lucide-react';

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
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
      aria-label="Change language"
    >
      <span className="text-lg leading-none">{currentLang === 'es' ? '🇪🇸' : '🇺🇸'}</span>
      <span className="uppercase text-sm font-orbitron">{currentLang}</span>
    </button>
  );
}
