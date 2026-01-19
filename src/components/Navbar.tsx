import { useState } from 'react';
import { Menu, X, Code, Home, User, Cpu, Briefcase, LayoutGrid, Newspaper, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const IconMap = {
  home: Home,
  about: User,
  skills: Cpu,
  experience: Briefcase,
  projects: LayoutGrid,
  news: Newspaper,
  contact: Mail,
};

interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: keyof typeof IconMap;
}

interface Props {
  items: readonly NavItem[];
  currentLang: 'es' | 'en';
}

export default function Navbar({ items, currentLang }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit">
        <div className={twMerge(
          "flex items-center justify-between gap-2 p-2 rounded-full border border-white/20 shadow-lg transition-all duration-300",
          "bg-white/30 dark:bg-black/30 backdrop-blur-md",
          "shadow-[0_0_15px_rgba(59,130,246,0.3),0_0_30px_rgba(59,130,246,0.2)] dark:shadow-[0_0_15px_rgba(96,165,250,0.4),0_0_30px_rgba(96,165,250,0.3)]",
          "hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6),0_0_40px_rgba(96,165,250,0.4)]",
          "animate-neon-pulse",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <a href={`/${currentLang}#home`} className="flex items-center gap-2 pl-2 hover:opacity-80 transition-opacity whitespace-nowrap">
            <div className="p-1.5 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400">
              <Code size={25} />
            </div>
            <span className="font-bold text-sm sm:text-base font-orbitron">Danlois Tovar </span>
          </a>

          <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-1"></div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="p-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-1"></div>
            <ThemeToggle />
            <LanguageToggle currentLang={currentLang} />
          </div>
        </div>
      </nav>

      {/* Full screen menu overlay */}
      <div className={clsx(
        "fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500",
        "bg-white/90 dark:bg-black/90 backdrop-blur-xl",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-8 text-2xl font-light w-full max-w-md">
          {items.map((item) => {
            const Icon = item.icon ? IconMap[item.icon] : null;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 w-full px-8 py-2 justify-center"
              >
                {Icon && (
                  <div className="p-2 rounded-xl bg-blue-600/5 dark:bg-blue-400/5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-600/10 dark:group-hover:bg-blue-400/10 transition-all">
                    <Icon size={24} />
                  </div>
                )}
                <span className="group-hover:translate-x-2 transition-transform">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
