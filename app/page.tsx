'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const getFontClass = () => {
    if (language === 'kn') return 'font-kannada'
    if (language === 'sa') return 'font-devanagari'
    return 'font-playfair'
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Language Selector - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl mx-auto">
          {/* Main Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-7xl md:text-8xl font-cinzel font-bold mb-4 text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.9)] drop-shadow-[0_0_60px_rgba(0,0,0,0.7)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)]">
              {t('home.title')}
          </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mx-auto mb-4"></div>
            <h2 className={`text-3xl md:text-4xl font-playfair font-semibold text-white mb-4 drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] ${getFontClass()}`}>
              {t('home.subtitle')}
          </h2>
            <p className={`text-xl text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)] max-w-md mx-auto ${getFontClass()}`}>
              {t('home.description')}
            </p>
          </div>

          {/* Ornate Card - Fully transparent to show background */}
          <div className="rounded-3xl p-10 relative overflow-hidden">

            <div className="relative z-10 space-y-6">
              <div className="text-center mb-8">
                <p className={`text-white/90 font-playfair text-lg mb-2 ${getFontClass()}`}>
                  {t('home.startJourney')}
                </p>
                <div className="flex items-center justify-center gap-2 text-gold-400">
                  <div className="h-px w-16 bg-gold-500"></div>
                  <span className="text-2xl">✨</span>
                  <div className="h-px w-16 bg-gold-500"></div>
                </div>
        </div>
        
        <div className="space-y-4">
                <button
                  onClick={() => router.push('/login')}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-gold-600 via-gold-500 to-saffron-500 hover:from-gold-500 hover:via-saffron-500 hover:to-saffron-600 text-white font-cinzel font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 text-xl border-2 border-gold-400/50"
                >
                  <span className={`relative z-10 flex items-center justify-center gap-3 ${getFontClass()}`}>
                    <span className="text-2xl">🪔</span>
                    <span>{t('home.enterPortal')}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>

                <button
                  onClick={() => router.push('/register')}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-royal-600 via-royal-500 to-royal-700 hover:from-royal-500 hover:via-royal-600 hover:to-royal-800 text-white font-cinzel font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-royal-500/50 transform hover:scale-105 text-xl border-2 border-royal-400/50"
                >
                  <span className={`relative z-10 flex items-center justify-center gap-3 ${getFontClass()}`}>
                    <span className="text-2xl">✨</span>
                    <span>{t('home.startJourney')}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </div>

              <div className="pt-6 border-t border-gold-500/30">
                <p className={`text-center text-sm text-white/70 font-playfair ${getFontClass()}`}>
                  <span className="text-gold-400">{t('home.demoAccess')}</span> demo@example.com / demo123
                </p>
              </div>
            </div>
          </div>

          {/* Bottom decorative text */}
          <div className="text-center mt-12">
            <p className={`text-white/60 font-playfair text-sm italic ${getFontClass()}`}>
              "{t('home.quote')}"
            </p>
            <p className={`text-white/50 text-xs mt-2 ${getFontClass()}`}>
              {t('home.quoteTransliteration')}
            </p>
          </div>
        </div>
        </div>
      </div>
  )
}
