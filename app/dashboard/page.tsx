'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import { getChaptersByLanguage, type ChapterLanguage } from '@/data/chapters'
import Chatbot from '@/components/Chatbot'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DashboardPage() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [user, setUser] = useState<any>(null)

  // Use global language for chapters
  const chapters = getChaptersByLanguage(language as ChapterLanguage)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/login')
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  const handleChapterClick = (chapterId: number) => {
    // Pass the current global language
    router.push(`/chapter/${chapterId}?lang=${language}`)
  }

  const getFontClass = () => {
    if (language === 'kn') return 'font-kannada'
    if (language === 'sa') return 'font-devanagari'
    return 'font-playfair'
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gold-500 mx-auto mb-6"></div>
          <div className={`text-2xl text-gold-400 font-cinzel font-semibold ${getFontClass()}`}>{t('dashboard.loading')}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Language Selectors - Top Right */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        <LanguageSelector />
      </div>

      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Epic Header - Very transparent */}
          <div className="bg-transparent backdrop-blur-none rounded-3xl p-8 md:p-10 mb-10 border-2 border-gold-500/20 shadow-2xl relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold-500 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold-500 rounded-tr-3xl"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-5xl floating">🕉️</div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-2">
                      <span className={`bg-gradient-to-r from-gold-400 via-gold-500 to-saffron-400 bg-clip-text text-transparent ${getFontClass()}`}>
                        {t('dashboard.welcome', { name: user.name })}
                      </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-transparent"></div>
                  </div>
                </div>
                <p className={`text-white text-xl drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] ${getFontClass()}`}>
                  {t('dashboard.exploreKandas')}
                </p>
                <p className={`text-white/70 text-sm mt-2 ${getFontClass()}`}>
                  {chapters.length === 7
                    ? (language === 'sa' ? 'सप्त पवित्रकाण्डानि अन्विष्यत' :
                      language === 'en' ? 'Explore Seven Sacred Kandas' :
                        'ಏಳು ಪವಿತ್ರ ಕಾಂಡಗಳನ್ನು ಅನ್ವೇಷಿಸಿ')
                    : (language === 'kn' ? t('dashboard.exploreFourKandas') :
                      `${chapters.length} ${language === 'en' ? 'Sacred Kandas' : 'ಪವಿತ್ರ ಕಾಂಡಗಳು'}`)
                  }
                </p>
              </div>
              <button
                onClick={handleLogout}
                className={`bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-cinzel font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-red-400/50 ${getFontClass()}`}
              >
                {t('dashboard.logoutButton')}
              </button>
            </div>
          </div>

          {/* Epic Chapter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className="group relative bg-transparent backdrop-blur-none rounded-3xl p-8 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 border-2 border-gold-500/20 hover:border-gold-500/40 shadow-xl hover:shadow-2xl overflow-hidden"
                onClick={() => handleChapterClick(chapter.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-gold-500/50 rounded-tl-2xl group-hover:border-gold-500 transition-colors"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-3 border-r-3 border-gold-500/50 rounded-tr-2xl group-hover:border-gold-500 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-3 border-l-3 border-gold-500/50 rounded-bl-2xl group-hover:border-gold-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-gold-500/50 rounded-br-2xl group-hover:border-gold-500 transition-colors"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-br from-gold-500/30 to-saffron-500/30 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300 border-2 border-gold-500/30">
                      <span className="text-5xl">{chapter.icon}</span>
                    </div>
                    <div className="bg-gradient-to-br from-gold-600 to-gold-700 text-white rounded-full w-14 h-14 flex items-center justify-center font-cinzel font-bold text-xl shadow-lg border-2 border-gold-400">
                      {chapter.id}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className={`text-xl font-cinzel font-bold text-gold-400 mb-2 group-hover:text-gold-300 transition-colors ${getFontClass()}`}>
                      {t('dashboard.chapter')} {chapter.id}
                    </h2>
                    <h3 className={`text-2xl font-playfair font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] ${language === 'sa' ? 'font-devanagari' : language === 'kn' ? 'font-kannada' : ''}`}>
                      {chapter.title}
                    </h3>
                    <div className="h-px w-16 bg-gradient-to-r from-gold-500 to-transparent mb-3"></div>
                    <p className={`text-white text-sm font-playfair line-clamp-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.9)] drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)] ${language === 'sa' ? 'font-devanagari' : language === 'kn' ? 'font-kannada' : ''}`}>
                      {chapter.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gold-500/20">
                    <div className={`flex items-center gap-2 text-sm text-gold-300 font-playfair ${getFontClass()}`}>
                      <span className="text-lg">📖</span>
                      <span>{chapter.pages > 0 ? `${chapter.pages} ${t('dashboard.pages')}` : t('dashboard.pages')}</span>
                    </div>
                    <button className={`bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white font-cinzel font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover:scale-110 border border-gold-400/50 ${getFontClass()}`}>
                      {t('dashboard.read')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}
