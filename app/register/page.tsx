'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

export default function RegisterPage() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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

    if (password !== confirmPassword) {
      setError(t('register.passwordMismatch'))
      return
    }

    if (password.length < 6) {
      setError(t('register.passwordTooShort'))
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/dashboard')
      } else {
        setError(data.message || t('register.registrationFailed'))
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
              <span className={`bg-gradient-to-r from-royal-400 via-royal-500 to-royal-600 bg-clip-text text-transparent ${getFontClass()}`}>
                {t('register.title')}
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-royal-500 to-transparent mx-auto mb-4"></div>
            <p className={`text-xl text-white font-playfair drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] ${getFontClass()}`}>
              {t('register.subtitle')}
            </p>
            <p className={`text-white/70 text-sm mt-2 ${getFontClass()}`}>
              {t('register.startJourney')}
            </p>
          </div>

          {/* Ornate Form Card - Very transparent to show background */}
          <div className="bg-transparent backdrop-blur-none rounded-3xl p-10 border-2 border-royal-500/20 shadow-2xl relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none"></div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-royal-500 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-royal-500 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-royal-500 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-royal-500 rounded-br-3xl"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div>
                <label className={`block text-sm font-cinzel font-semibold text-royal-300 mb-3 drop-shadow-md ${getFontClass()}`}>
                  🪷 {t('register.fullName')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full px-5 py-4 bg-transparent backdrop-blur-none border-2 border-royal-500/30 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 transition-all duration-300 shadow-lg hover:shadow-xl text-white placeholder-white/50 ${getFontClass()}`}
                  placeholder={t('register.enterName')}
                />
              </div>
              <div>
                <label className={`block text-sm font-cinzel font-semibold text-royal-300 mb-3 drop-shadow-md ${getFontClass()}`}>
                  ✉️ {t('register.email')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full px-5 py-4 bg-transparent backdrop-blur-none border-2 border-royal-500/30 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 transition-all duration-300 shadow-lg hover:shadow-xl text-white placeholder-white/50 ${getFontClass()}`}
                  placeholder={t('register.enterEmail')}
                />
              </div>
              <div>
                <label className={`block text-sm font-cinzel font-semibold text-royal-300 mb-3 drop-shadow-md ${getFontClass()}`}>
                  🪔 {t('register.password')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`w-full px-5 py-4 bg-transparent backdrop-blur-none border-2 border-royal-500/30 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 transition-all duration-300 shadow-lg hover:shadow-xl text-white placeholder-white/50 ${getFontClass()}`}
                  placeholder={t('register.enterPassword')}
                />
              </div>
              <div>
                <label className={`block text-sm font-cinzel font-semibold text-royal-300 mb-3 drop-shadow-md ${getFontClass()}`}>
                  🪔 {t('register.confirmPassword')}
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={`w-full px-5 py-4 bg-transparent backdrop-blur-none border-2 border-royal-500/30 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-royal-500 transition-all duration-300 shadow-lg hover:shadow-xl text-white placeholder-white/50 ${getFontClass()}`}
                  placeholder={t('register.confirmPasswordPlaceholder')}
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
                className={`w-full group relative overflow-hidden bg-gradient-to-r from-royal-600 via-royal-500 to-royal-700 hover:from-royal-500 hover:via-royal-600 hover:to-royal-800 text-white font-cinzel font-bold py-5 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-royal-500/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xl border-2 border-royal-400/50 ${getFontClass()}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <span className="animate-spin text-2xl">🕉️</span>
                      <span>{t('register.creating')}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl">🪔</span>
                      <span>{t('register.startJourneyButton')}</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </form>

            <div className="relative z-10 mt-8 pt-6 border-t border-royal-500/30 space-y-4">
              <p className={`text-center text-sm text-white/80 font-playfair ${getFontClass()}`}>
                {t('register.hasAccount')}{' '}
                <button
                  onClick={() => router.push('/login')}
                  className={`text-royal-400 hover:text-royal-300 font-cinzel font-bold underline transition-colors ${getFontClass()}`}
                >
                  {t('register.enterPortal')}
                </button>
              </p>
              <button
                onClick={() => router.push('/')}
                className={`w-full text-white/70 hover:text-white text-sm font-playfair py-2 transition-colors ${getFontClass()}`}
              >
                {t('register.backToHome')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
