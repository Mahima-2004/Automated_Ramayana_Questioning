'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'kn' as const, name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'sa' as const, name: 'संस्कृतम्', flag: '🕉️' },
  ]

  return (
    <div className="relative group">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'kn' | 'sa')}
        className="appearance-none bg-gradient-to-r from-gold-600/20 to-saffron-600/20 backdrop-blur-sm border-2 border-gold-500/30 rounded-xl px-6 py-3 pr-10 text-white font-cinzel font-semibold cursor-pointer transition-all duration-300 hover:border-gold-500/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-royal-900 text-white">
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gold-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}



