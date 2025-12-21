'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LoginPage() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getFontClass = () => {
    if (language === 'kn') return 'font-kannada'
    if (language === 'sa') return 'font-devanagari'
    return 'font-playfair'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/dashboard')
      } else {
        setError(data.message || t('login.error'))
      }
    } catch (err) {
      setError(t('register.errorOccurred'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {/* Language Selector - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Epic Header */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl font-cinzel font-bold mb-4">
              <span className={`bg-gradient-to-r from-gold-400 via-gold-500 to-saffron-400 bg-clip-text text-transparent ${getFontClass()}`}>
                {t('login.title')}
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4"></div>
            <p className={`text-xl text-white font-playfair drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] ${getFontClass()}`}>
              {t('login.subtitle')}
            </p>
            <p className={`text-white/70 text-sm mt-2 ${getFontClass()}`}>
              {t('login.welcomeBack')}
            </p>
          </div>

          {/* Ornate Form Card - Very transparent to show background */}
          <div className="bg-transparent backdrop-blur-none rounded-3xl p-10 border-2 border-gold-500/20 shadow-2xl relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none"></div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-500 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gold-500 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-gold-500 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold-500 rounded-br-3xl"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label className={`block text-sm font-cinzel font-semibold text-gold-300 mb-3 drop-shadow-md ${getFontClass()}`}>
                  ✉️ {t('login.email')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full px-5 py-4 bg-transparent backdrop-blur-none border-2 border-gold-500/30 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl text-white placeholder-white/50 ${getFontClass()}`}
                  placeholder={t('login.enterEmail')}
                />
              </div>
              <div>
                <label className={`block text-sm font-cinzel font-semibold text-gold-300 mb-3 drop-shadow-md ${getFontClass()}`}>
                  🪔 {t('login.password')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`w-full px-5 py-4 bg-transparent backdrop-blur-none border-2 border-gold-500/30 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl text-white placeholder-white/50 ${getFontClass()}`}
                  placeholder={t('login.enterPassword')}
                />
              </div>
              {error && (
                <div className={`bg-red-900/50 border-2 border-red-500/50 text-red-200 px-5 py-4 rounded-xl shadow-lg backdrop-blur-sm ${getFontClass()}`}>
                  <div className="flex items-center gap-3 font-playfair">
                    <span className="text-xl">🪷</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full group relative overflow-hidden bg-gradient-to-r from-gold-600 via-gold-500 to-saffron-500 hover:from-gold-500 hover:via-saffron-500 hover:to-saffron-600 text-white font-cinzel font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xl border-2 border-gold-400/50 ${getFontClass()}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <span className="animate-spin text-2xl">🕉️</span>
                      <span>{t('login.loggingIn')}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl">🪔</span>
                      <span>{t('login.enterPortal')}</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </form>

            <div className="relative z-10 mt-8 pt-6 border-t border-gold-500/30 space-y-4">
              <p className={`text-center text-sm text-white/80 font-playfair ${getFontClass()}`}>
                {t('login.noAccount')}{' '}
                <button
                  onClick={() => router.push('/register')}
                  className={`text-gold-400 hover:text-gold-300 font-cinzel font-bold underline transition-colors ${getFontClass()}`}
                >
                  {t('login.startJourney')}
                </button>
              </p>
              <button
                onClick={() => router.push('/')}
                className={`w-full text-white/70 hover:text-white text-sm font-playfair py-2 transition-colors ${getFontClass()}`}
              >
                {t('login.backToHome')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
