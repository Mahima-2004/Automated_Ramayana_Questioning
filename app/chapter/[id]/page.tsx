'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import { getChaptersByLanguage, type ChapterLanguage } from '@/data/chapters'
import PDFViewer from '@/components/PDFViewer'
import Quiz from '@/components/Quiz'
import Chatbot from '@/components/Chatbot'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ChapterPage() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const { t, language } = useLanguage()
  const chapterId = parseInt(params.id as string)
  const [user, setUser] = useState<any>(null)
  const [showQuiz, setShowQuiz] = useState(false)
  const chapterLanguage = (searchParams.get('lang') || language) as ChapterLanguage
  const chapters = getChaptersByLanguage(chapterLanguage)
  const chapter = chapters.find((ch) => ch.id === chapterId)

  const getFontClass = () => {
    if (chapterLanguage === 'kn') return 'font-kannada'
    if (chapterLanguage === 'sa') return 'font-devanagari'
    return 'font-playfair'
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/login')
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  if (!user || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gold-500 mx-auto mb-6"></div>
            <div className={`text-2xl text-gold-400 font-cinzel font-semibold ${getFontClass()}`}>
              {chapterLanguage === 'sa' ? 'पवित्रग्रन्थः लोड् क्रियते...' : 
               chapterLanguage === 'kn' ? 'ಪವಿತ್ರ ಅಧ್ಯಾಯವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...' :
               'Loading sacred chapter...'}
            </div>
          </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-gold-600/10 floating">📖</div>
        <div className="absolute bottom-10 right-10 text-5xl text-gold-600/10 floating" style={{ animationDelay: '1s' }}>🕉️</div>
      </div>

      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Epic Chapter Header - Very transparent */}
          <div className="bg-transparent backdrop-blur-none rounded-3xl p-8 md:p-10 mb-8 border-2 border-gold-500/20 shadow-2xl relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-500 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gold-500 rounded-tr-3xl"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
              <div className="flex items-center gap-6">
                <div className="text-7xl floating">{chapter.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-3xl font-cinzel font-bold text-gold-400 ${getFontClass()}`}>
                      {chapterLanguage === 'sa' ? `अध्यायः ${chapter.id}` :
                       chapterLanguage === 'kn' ? `ಅಧ್ಯಾಯ ${chapter.id}` :
                       `Chapter ${chapter.id}`}
                    </span>
                    <div className="h-px w-16 bg-gradient-to-r from-gold-500 to-transparent"></div>
                  </div>
                  <h1 className={`text-4xl md:text-5xl font-cinzel font-bold mb-3 ${getFontClass()}`}>
                    <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-saffron-400 bg-clip-text text-transparent">
                      {chapter.title}
                    </span>
                  </h1>
                  <p className={`text-white text-lg font-playfair drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] max-w-2xl ${getFontClass()}`}>
                    {chapter.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => router.push('/dashboard')}
                  className={`bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-cinzel font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-gray-400/50 ${getFontClass()}`}
                >
                  {chapterLanguage === 'sa' ? '← पृष्ठं प्रति गच्छत' :
                   chapterLanguage === 'kn' ? '← ಹಿಂದಿರುಗಿ' :
                   '← Back'}
                </button>
                <button
                  onClick={() => setShowQuiz(!showQuiz)}
                  className={`font-cinzel font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 ${getFontClass()} ${
                    showQuiz
                      ? 'bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white border-royal-400/50'
                      : 'bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white border-gold-400/50'
                  }`}
                >
                  {showQuiz 
                    ? (chapterLanguage === 'sa' ? '📖 पवित्रग्रन्थः' :
                       chapterLanguage === 'kn' ? '📖 ಪವಿತ್ರ ಪಠ್ಯ' :
                       '📖 Sacred Text')
                    : (chapterLanguage === 'sa' ? '❓ ज्ञानपरीक्षा' :
                       chapterLanguage === 'kn' ? '❓ ಜ್ಞಾನ ಪರೀಕ್ಷೆ' :
                       '❓ Knowledge Test')
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Content Area - Very transparent */}
          {showQuiz ? (
            <div className="bg-transparent backdrop-blur-none rounded-3xl p-6 md:p-8 border-2 border-royal-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-royal-500 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-royal-500 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-royal-500 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-royal-500 rounded-br-3xl"></div>
              <div className="relative z-10">
                <Quiz chapterId={chapterId} />
              </div>
            </div>
          ) : (
            <div className="bg-transparent backdrop-blur-none rounded-3xl p-6 md:p-8 border-2 border-gold-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold-500 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold-500 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold-500 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold-500 rounded-br-3xl"></div>
              <div className="relative z-10">
                <PDFViewer 
                  chapterId={chapterId} 
                  pdfUrl={Array.isArray(chapter.pdfUrl) ? chapter.pdfUrl[0] : chapter.pdfUrl}
                  startPage={chapter.startPage}
                  endPage={chapter.endPage}
                  multiplePdfs={Array.isArray(chapter.pdfUrl) ? chapter.pdfUrl : undefined}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot chapterId={chapterId} />
    </div>
  )
}
