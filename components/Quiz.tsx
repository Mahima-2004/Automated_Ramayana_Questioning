'use client'

import { useState } from 'react'
import { questions } from '@/data/questions'

import { useLanguage } from '@/contexts/LanguageContext'

interface QuizProps {
  chapterId: number
}

export default function Quiz({ chapterId }: QuizProps) {
  const { language } = useLanguage()
  const chapterQuestions = questions[language]?.[chapterId] || []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState<boolean[]>(
    new Array(chapterQuestions.length).fill(false)
  )

  const currentQuestion = chapterQuestions[currentQuestionIndex]

  const handleAnswerSelect = (answer: string) => {
    if (answered[currentQuestionIndex]) return
    setSelectedAnswer(answer)
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    const newAnswered = [...answered]
    newAnswered[currentQuestionIndex] = true
    setAnswered(newAnswered)

    setTimeout(() => {
      if (currentQuestionIndex < chapterQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  const handleReset = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setAnswered(new Array(chapterQuestions.length).fill(false))
  }

  if (chapterQuestions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-600 text-xl font-medium">
          {language === 'sa' ? 'अस्य अध्यायस्य कृते प्रश्नाः न उपलब्धाः।' :
            language === 'en' ? 'Questions not available for this chapter yet.' :
              'ಈ ಅಧ್ಯಾಯಕ್ಕೆ ಇನ್ನೂ ಪ್ರಶ್ನೆಗಳು ಲಭ್ಯವಿಲ್ಲ.'}
        </p>
      </div>
    )
  }

  if (showResult) {
    const percentage = Math.round((score / chapterQuestions.length) * 100)
    const isExcellent = percentage >= 80
    const isGood = percentage >= 60

    return (
      <div className="text-center py-8">
        <div className="text-7xl mb-6">
          {isExcellent ? '🎉' : isGood ? '👍' : '📚'}
        </div>
        <h2 className="text-5xl md:text-6xl font-cinzel font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-saffron-400 bg-clip-text text-transparent mb-8 epic-glow">
          {language === 'sa' ? 'ज्ञानपरीक्षा समाप्ता!' :
            language === 'en' ? 'Quiz Completed!' :
              'ಕ್ವಿಜ್ ಪೂರ್ಣಗೊಂಡಿದೆ!'}
        </h2>
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>
        <div className={`rounded-3xl p-10 mb-8 bg-transparent backdrop-blur-none border-2 border-gold-500/20 shadow-2xl relative overflow-hidden ${isExcellent
          ? 'border-green-300/50'
          : isGood
            ? 'border-blue-300/50'
            : 'border-amber-300/50'
          }`}>
          <p className="text-4xl font-cinzel font-bold text-white mb-4 drop-shadow-2xl">
            {language === 'sa' ? 'भवतः अङ्काः: ' :
              language === 'en' ? 'Your Score: ' :
                'ನಿಮ್ಮ ಅಂಕ: '} <span className="text-gold-300">{score}</span> / <span className="text-gold-300">{chapterQuestions.length}</span>
          </p>
          <p className="text-3xl text-gold-200 mb-4 font-playfair">
            {language === 'sa' ? 'प्रतिशतम्: ' :
              language === 'en' ? 'Percentage: ' :
                'ಶೇಕಡಾವಾರು: '} <span className="font-cinzel font-bold text-gold-300">{percentage}%</span>
          </p>
          <p className="text-xl text-white/90 mt-6 font-playfair drop-shadow-lg">
            {isExcellent
              ? (language === 'sa' ? 'अत्युत्तमम्! भवान् एतं अध्यायम् अवगतवान्! 🌟' :
                language === 'en' ? 'Excellent! You have mastered this chapter! 🌟' :
                  'ಅತ್ಯುತ್ತಮ ಕೆಲಸ! ನೀವು ಈ ಅಧ್ಯಾಯವನ್ನು ಮಾಸ್ಟರ್ ಮಾಡಿದ್ದೀರಿ! 🌟')
              : isGood
                ? (language === 'sa' ? 'उत्तमम्! पठनं अनुवर्तताम्! 💪' :
                  language === 'en' ? 'Good job! Keep learning! 💪' :
                    'ಒಳ್ಳೆಯ ಕೆಲಸ! ಕಲಿಯುವುದನ್ನು ಮುಂದುವರಿಸಿ! 💪')
                : (language === 'sa' ? 'सुधारार्थं अभ्यासं करोतु! 📖' :
                  language === 'en' ? 'Keep practicing to improve! 📖' :
                    'ಸುಧಾರಿಸಲು ಅಭ್ಯಾಸ ಮಾಡುವುದನ್ನು ಮುಂದುವರಿಸಿ! 📖')
            }
          </p>
        </div>
        <button
          onClick={handleReset}
          className="bg-gradient-to-r from-gold-600 via-gold-500 to-saffron-600 hover:from-gold-500 hover:via-saffron-500 hover:to-saffron-700 text-white font-cinzel font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 text-xl border-2 border-gold-400/50 epic-glow"
        >
          {language === 'sa' ? '🔄 पुनः आरभत' :
            language === 'en' ? '🔄 Retake Quiz' :
              '🔄 ಕ್ವಿಜ್ ಮತ್ತೆ ತೆಗೆದುಕೊಳ್ಳಿ'}
        </button>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-8 bg-transparent backdrop-blur-none rounded-2xl p-6 border-2 border-gold-500/20 shadow-xl">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold-300 drop-shadow-2xl">
            ❓ {language === 'sa' ? 'प्रश्नः' :
              language === 'en' ? 'Question' :
                'ಪ್ರಶ್ನೆ'} {currentQuestionIndex + 1} / {chapterQuestions.length}
          </h2>
          <div className="bg-transparent backdrop-blur-none px-6 py-3 rounded-xl shadow-lg border-2 border-gold-400/30">
            <span className="text-lg font-cinzel font-bold text-white drop-shadow-lg">
              {language === 'sa' ? 'अङ्काः: ' :
                language === 'en' ? 'Score: ' :
                  'ಅಂಕ: '} <span className="text-gold-300 font-extrabold">{score}</span> / {chapterQuestions.length}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-800/50 rounded-full h-4 shadow-inner border border-gold-500/20">
          <div
            className="bg-gradient-to-r from-gold-500 via-saffron-500 to-gold-600 h-4 rounded-full transition-all duration-500 shadow-lg epic-glow"
            style={{
              width: `${((currentQuestionIndex + 1) / chapterQuestions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-transparent backdrop-blur-none rounded-3xl p-10 mb-8 border-2 border-gold-500/20 shadow-2xl relative overflow-hidden">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-gold-500/50 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-3 border-r-3 border-gold-500/50 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-3 border-l-3 border-gold-500/50 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-gold-500/50 rounded-br-2xl"></div>

        <h3 className="text-3xl font-cinzel font-bold text-white mb-8 leading-relaxed drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)] relative z-10">
          {currentQuestion.question}
        </h3>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option
            const isCorrect = option === currentQuestion.correctAnswer
            const isAnswered = answered[currentQuestionIndex]

            let buttonClass =
              'w-full text-left py-5 px-8 rounded-xl border-2 transition-all duration-300 font-playfair font-semibold text-lg shadow-xl hover:shadow-2xl transform relative overflow-hidden'

            if (isAnswered) {
              if (isCorrect) {
                buttonClass += ' bg-gradient-to-r from-green-100 to-emerald-100 border-green-500 text-green-800 scale-105'
              } else if (isSelected && !isCorrect) {
                buttonClass += ' bg-gradient-to-r from-red-100 to-rose-100 border-red-500 text-red-800'
              } else {
                buttonClass += ' bg-gray-50 border-gray-300 text-gray-600'
              }
            } else if (isSelected) {
              buttonClass += ' bg-gradient-to-r from-primary-100 to-orange-100 border-primary-500 text-primary-800 scale-105'
            } else {
              buttonClass += ' bg-transparent backdrop-blur-none border-gold-500/30 text-white hover:border-gold-400 hover:scale-105 drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]'
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-saffron-600 text-white font-cinzel font-bold mr-4 text-center leading-10 shadow-lg border-2 border-gold-400">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
                {isAnswered && isCorrect && (
                  <span className="float-right text-2xl">✓</span>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <span className="float-right text-2xl">✗</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        <button
          onClick={() => {
            if (currentQuestionIndex > 0) {
              setCurrentQuestionIndex(currentQuestionIndex - 1)
              setSelectedAnswer(null)
            }
          }}
          disabled={currentQuestionIndex === 0}
          className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-cinzel font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-gray-400/50"
        >
          {language === 'sa' ? '← पूर्वम्' :
            language === 'en' ? '← Previous' :
              '← ಹಿಂದಿನ'}
        </button>
        <button
          onClick={handleSubmitAnswer}
          disabled={!selectedAnswer || answered[currentQuestionIndex]}
          className="bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white font-cinzel font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-gold-400/50"
        >
          {answered[currentQuestionIndex]
            ? currentQuestion.correctAnswer === selectedAnswer
              ? (language === 'sa' ? '✓ सत्यम्!' :
                language === 'en' ? '✓ Correct!' :
                  '✓ ಸರಿ!')
              : (language === 'sa' ? '✗ असत्यम्!' :
                language === 'en' ? '✗ Incorrect!' :
                  '✗ ತಪ್ಪು!')
            : (language === 'sa' ? 'उत्तरं ददातु →' :
              language === 'en' ? 'Submit Answer →' :
                'ಉತ್ತರ ಸಲ್ಲಿಸಿ →')}
        </button>
      </div>
    </div>
  )
}
