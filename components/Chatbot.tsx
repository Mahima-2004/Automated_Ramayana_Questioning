'use client'

import { useState, useRef, useEffect } from 'react'
import { chapters } from '@/data/chapters'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatbotProps {
  chapterId?: number
}

export default function Chatbot({ chapterId }: ChatbotProps) {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: t('chatbot.welcome'),
    },
  ])

  // Update welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: t('chatbot.welcome'),
      },
    ])
  }, [language, t])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const chapter = chapterId ? chapters.find((ch) => ch.id === chapterId) : null

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          chapterId: chapterId || null,
          chapterTitle: chapter?.title || null,
          chapterDescription: chapter?.description || null,
          language: language,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.response },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: t('chatbot.error'),
          },
        ])
      }
    } catch (error) {
      console.error('Chatbot error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: t('chatbot.errorOccurred'),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white shadow-2xl hover:shadow-gold-500/50 transform hover:scale-110 transition-all duration-300 border-2 border-gold-400/50 flex items-center justify-center text-3xl epic-glow ${
          isOpen ? 'rotate-180' : ''
        }`}
        aria-label={t('chatbot.openChatbot')}
      >
        <span className="text-4xl">💬</span>
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-96 h-[600px] bg-transparent backdrop-blur-none rounded-3xl border-2 border-gold-500/30 shadow-2xl flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-gold-600/20 to-saffron-600/20 border-b-2 border-gold-500/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🕉️</div>
              <div>
                <h3 className={`text-lg font-cinzel font-bold text-gold-300 drop-shadow-lg ${language === 'kn' ? 'font-kannada' : language === 'sa' ? 'font-devanagari' : ''}`}>
                  {t('chatbot.title')}
                </h3>
                {chapter && (
                  <p className={`text-xs text-white/70 drop-shadow-md ${language === 'kn' ? 'font-kannada' : language === 'sa' ? 'font-devanagari' : ''}`}>
                    {t(`chapters.${chapter.id}.title`)}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors text-2xl"
              aria-label={t('chatbot.close')}
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-black/20 to-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-gold-600/30 to-saffron-600/30 border border-gold-500/50 text-white'
                      : 'bg-gradient-to-r from-royal-600/30 to-royal-700/30 border border-royal-500/50 text-white'
                  }`}
                >
                  <p className="text-sm font-kannada drop-shadow-md leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-royal-600/30 to-royal-700/30 border border-royal-500/50 rounded-2xl p-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-gold-500/30 p-4 bg-gradient-to-t from-black/20 to-transparent">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.placeholder')}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-transparent backdrop-blur-none border-2 border-gold-500/30 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300 text-white placeholder-white/50 font-kannada text-sm drop-shadow-md"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white font-cinzel font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-gold-400/50"
              >
                {loading ? '⏳' : '📤'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



