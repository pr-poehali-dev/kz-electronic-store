import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { useLanguage, languageLabels, Lang } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languageLabels[lang];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 h-11 px-3 rounded-xl bg-brand-gray hover:bg-gray-200 font-semibold text-sm transition"
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:inline">{current.code}</span>
        <Icon
          name="ChevronDown"
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-border rounded-xl shadow-xl overflow-hidden z-50 animate-fade-in">
          {(Object.keys(languageLabels) as Lang[]).map((key) => {
            const item = languageLabels[key];
            const active = key === lang;
            return (
              <button
                key={key}
                onClick={() => {
                  setLang(key);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition ${
                  active
                    ? "bg-brand-blue text-white"
                    : "hover:bg-brand-gray text-foreground"
                }`}
              >
                <span className="text-xl">{item.flag}</span>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className={`text-xs ${active ? "opacity-80" : "text-muted-foreground"}`}>
                    {item.code}
                  </div>
                </div>
                {active && <Icon name="Check" size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
