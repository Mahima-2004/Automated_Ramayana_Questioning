import { NextRequest, NextResponse } from 'next/server'

// Using Groq API (Free tier available) - no local training, just direct API calls
// You can get your API key from: https://console.groq.com/keys (FREE)
// Alternative: OpenAI API key from: https://platform.openai.com/api-keys
const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

async function callGroqAPI(message: string, chapterId: number | null, chapterTitle: string | null, chapterDescription: string | null, language: string = 'kn'): Promise<{ success: boolean; response?: string; error?: string }> {
  if (!GROQ_API_KEY) {
    console.log('GROQ_API_KEY is not set or empty')
    return { success: false, error: 'API key not found' }
  }
  
  console.log('Attempting to call Groq API...')
  console.log('API Key prefix:', GROQ_API_KEY.substring(0, 7) + '...')

  try {
    // Build context-aware system prompt based on language
    let systemPrompt = ''
    if (language === 'en') {
      systemPrompt = `You are an expert assistant about the Ramayana epic. You must answer in English. Provide accurate and helpful information about Ramayana.`
    } else if (language === 'sa') {
      systemPrompt = `भवान् रामायणविषये पण्डितः सहायकः अस्ति। भवान् संस्कृतभाषायां उत्तरं देयानि। रामायणविषये निर्दोषं उपयोगि च सूचनां ददातु।`
    } else {
      systemPrompt = `ನೀವು ರಾಮಾಯಣದ ಬಗ್ಗೆ ಪರಿಣಿತರಾದ ಸಹಾಯಕರಾಗಿದ್ದೀರಿ. ನೀವು ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರಿಸಬೇಕು. ರಾಮಾಯಣದ ಬಗ್ಗೆ ನಿಖರವಾದ ಮತ್ತು ಉಪಯುಕ್ತ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ.`
    }

    if (chapterId && chapterTitle) {
      if (language === 'en') {
        systemPrompt += `\n\nCurrently, the user is reading "${chapterTitle}" (Chapter ${chapterId}).`
      } else if (language === 'sa') {
        systemPrompt += `\n\nअधुना, उपयोक्ता "${chapterTitle}" (अध्यायः ${chapterId}) पठति।`
      } else {
        systemPrompt += `\n\nಪ್ರಸ್ತುತ, ಬಳಕೆದಾರರು "${chapterTitle}" (ಅಧ್ಯಾಯ ${chapterId}) ಅನ್ನು ಓದುತ್ತಿದ್ದಾರೆ.`
      }
      if (chapterDescription) {
        if (language === 'en') {
          systemPrompt += `\nDescription of this chapter: ${chapterDescription}`
        } else if (language === 'sa') {
          systemPrompt += `\nअस्य अध्यायस्य विवरणम्: ${chapterDescription}`
        } else {
          systemPrompt += `\nಈ ಅಧ್ಯಾಯದ ವಿವರಣೆ: ${chapterDescription}`
        }
      }
      if (language === 'en') {
        systemPrompt += `\nPay special attention to questions related to this chapter.`
      } else if (language === 'sa') {
        systemPrompt += `\nअस्य अध्यायस्य सम्बद्धानां प्रश्नानां विशेषं ध्यानं ददातु।`
      } else {
        systemPrompt += `\nಈ ಅಧ್ಯಾಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಶ್ನೆಗಳಿಗೆ ವಿಶೇಷ ಗಮನ ನೀಡಿ.`
      }
    }

    if (language === 'en') {
      systemPrompt += `\n\nAnswer the user's question briefly but completely. Answer only in English.`
    } else if (language === 'sa') {
      systemPrompt += `\n\nउपयोक्तृप्रश्नस्य उत्तरं संक्षिप्तं परं पूर्णं च देयानि। संस्कृतभाषायां मात्रं उत्तरं देयानि।`
    } else {
      systemPrompt += `\n\nಬಳಕೆದಾರರ ಪ್ರಶ್ನೆಗೆ ಸಂಕ್ಷಿಪ್ತವಾಗಿ, ಆದರೆ ಸಂಪೂರ್ಣವಾಗಿ ಉತ್ತರಿಸಿ. ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿ ಮಾತ್ರ ಉತ್ತರಿಸಿ.`
    }

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Fast and free model
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      let errorMessage = ''
      try {
        const errorJson = JSON.parse(errorData)
        errorMessage = errorJson.error?.message || errorJson.error?.code || errorData
      } catch {
        errorMessage = errorData
      }
      console.error('Groq API error:', response.status, errorMessage)
      return { success: false, error: errorMessage }
    }
    
    console.log('Groq API call successful')

    const data = await response.json()

    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return { success: true, response: data.choices[0].message.content.trim() }
    }
    
    return { success: false, error: 'No response from API' }
  } catch (error: any) {
    console.error('Groq API error:', error)
    return { success: false, error: error.message || 'Network error' }
  }
}

async function callOpenAI(message: string, chapterId: number | null, chapterTitle: string | null, chapterDescription: string | null, language: string = 'kn'): Promise<{ success: boolean; response?: string; error?: string }> {
  if (!OPENAI_API_KEY) {
    console.log('OPENAI_API_KEY is not set or empty')
    return { success: false, error: 'API key not found' }
  }
  
  console.log('Attempting to call OpenAI API...')
  console.log('API Key prefix:', OPENAI_API_KEY.substring(0, 7) + '...')

  try {
    // Build context-aware system prompt based on language
    let systemPrompt = ''
    if (language === 'en') {
      systemPrompt = `You are an expert assistant about the Ramayana epic. You must answer in English. Provide accurate and helpful information about Ramayana.`
    } else if (language === 'sa') {
      systemPrompt = `भवान् रामायणविषये पण्डितः सहायकः अस्ति। भवान् संस्कृतभाषायां उत्तरं देयानि। रामायणविषये निर्दोषं उपयोगि च सूचनां ददातु।`
    } else {
      systemPrompt = `ನೀವು ರಾಮಾಯಣದ ಬಗ್ಗೆ ಪರಿಣಿತರಾದ ಸಹಾಯಕರಾಗಿದ್ದೀರಿ. ನೀವು ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರಿಸಬೇಕು. ರಾಮಾಯಣದ ಬಗ್ಗೆ ನಿಖರವಾದ ಮತ್ತು ಉಪಯುಕ್ತ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ.`
    }

    if (chapterId && chapterTitle) {
      if (language === 'en') {
        systemPrompt += `\n\nCurrently, the user is reading "${chapterTitle}" (Chapter ${chapterId}).`
      } else if (language === 'sa') {
        systemPrompt += `\n\nअधुना, उपयोक्ता "${chapterTitle}" (अध्यायः ${chapterId}) पठति।`
      } else {
        systemPrompt += `\n\nಪ್ರಸ್ತುತ, ಬಳಕೆದಾರರು "${chapterTitle}" (ಅಧ್ಯಾಯ ${chapterId}) ಅನ್ನು ಓದುತ್ತಿದ್ದಾರೆ.`
      }
      if (chapterDescription) {
        if (language === 'en') {
          systemPrompt += `\nDescription of this chapter: ${chapterDescription}`
        } else if (language === 'sa') {
          systemPrompt += `\nअस्य अध्यायस्य विवरणम्: ${chapterDescription}`
        } else {
          systemPrompt += `\nಈ ಅಧ್ಯಾಯದ ವಿವರಣೆ: ${chapterDescription}`
        }
      }
      if (language === 'en') {
        systemPrompt += `\nPay special attention to questions related to this chapter.`
      } else if (language === 'sa') {
        systemPrompt += `\nअस्य अध्यायस्य सम्बद्धानां प्रश्नानां विशेषं ध्यानं ददातु।`
      } else {
        systemPrompt += `\nಈ ಅಧ್ಯಾಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಶ್ನೆಗಳಿಗೆ ವಿಶೇಷ ಗಮನ ನೀಡಿ.`
      }
    }

    if (language === 'en') {
      systemPrompt += `\n\nAnswer the user's question briefly but completely. Answer only in English.`
    } else if (language === 'sa') {
      systemPrompt += `\n\nउपयोक्तृप्रश्नस्य उत्तरं संक्षिप्तं परं पूर्णं च देयानि। संस्कृतभाषायां मात्रं उत्तरं देयानि।`
    } else {
      systemPrompt += `\n\nಬಳಕೆದಾರರ ಪ್ರಶ್ನೆಗೆ ಸಂಕ್ಷಿಪ್ತವಾಗಿ, ಆದರೆ ಸಂಪೂರ್ಣವಾಗಿ ಉತ್ತರಿಸಿ. ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿ ಮಾತ್ರ ಉತ್ತರಿಸಿ.`
    }

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      let errorMessage = ''
      try {
        const errorJson = JSON.parse(errorData)
        errorMessage = errorJson.error?.message || errorJson.error?.code || errorData
      } catch {
        errorMessage = errorData
      }
      console.error('OpenAI API error:', response.status, errorMessage)
      console.error('Full error data:', errorData)
      return { success: false, error: errorMessage }
    }
    
    console.log('OpenAI API call successful')

    const data = await response.json()

    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return { success: true, response: data.choices[0].message.content.trim() }
    }
    
    return { success: false, error: 'No response from API' }
  } catch (error: any) {
    console.error('OpenAI API error:', error)
    return { success: false, error: error.message || 'Network error' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message, chapterId, chapterTitle, chapterDescription, language = 'kn' } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Debug: Check if API keys are available
    console.log('GROQ_API_KEY exists:', !!GROQ_API_KEY, 'Length:', GROQ_API_KEY?.length || 0)
    console.log('OPENAI_API_KEY exists:', !!OPENAI_API_KEY, 'Length:', OPENAI_API_KEY?.length || 0)

    // Try Groq API first (free tier, no quota issues)
    let result = await callGroqAPI(message, chapterId, chapterTitle, chapterDescription, language)
    
    // If Groq fails and OpenAI key exists, try OpenAI as fallback
    if (!result.success && OPENAI_API_KEY) {
      console.log('Groq failed, trying OpenAI as fallback...')
      result = await callOpenAI(message, chapterId, chapterTitle, chapterDescription, language)
    }
    
    if (result.success && result.response) {
      return NextResponse.json({
        response: result.response,
      })
    }

    // If both fail, provide helpful message
    let errorMessage = result.error || 'Unknown error'
    let userFriendlyMessage = ''
    
    if (!GROQ_API_KEY && !OPENAI_API_KEY) {
      userFriendlyMessage = `ಕ್ಷಮಿಸಿ, API ಕೀ ಕಂಡುಬಂದಿಲ್ಲ.\n\nದಯವಿಟ್ಟು .env.local ಫೈಲ್‌ನಲ್ಲಿ ಒಂದು API ಕೀ ಸೇರಿಸಿ:\n\n1. Groq (ಉಚಿತ): GROQ_API_KEY=your-key-here\n   ಪಡೆಯಲು: https://console.groq.com/keys\n\n2. OpenAI: OPENAI_API_KEY=sk-your-key-here\n   ಪಡೆಯಲು: https://platform.openai.com/api-keys\n\nಸರ್ವರ್ ಅನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ (Ctrl+C ಮತ್ತು npm run dev)`
    } else if (errorMessage.includes('quota') || errorMessage.includes('insufficient_quota')) {
      userFriendlyMessage = `OpenAI account ನಲ್ಲಿ credits ಮುಗಿದಿದೆ.\n\nGroq API ಬಳಸಲು (ಉಚಿತ):\n1. https://console.groq.com/keys ನಲ್ಲಿ API ಕೀ ಪಡೆಯಿರಿ\n2. .env.local ನಲ್ಲಿ GROQ_API_KEY=your-key-here ಸೇರಿಸಿ\n3. ಸರ್ವರ್ ಅನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ`
    } else if (errorMessage.includes('401') || errorMessage.includes('Invalid API key')) {
      userFriendlyMessage = `API ಕೀ ಅಮಾನ್ಯವಾಗಿದೆ. ದಯವಿಟ್ಟು:\n\n1. API platform ನಲ್ಲಿ ಹೊಸ API ಕೀ ರಚಿಸಿ\n2. .env.local ಫೈಲ್‌ನಲ್ಲಿ ಅದನ್ನು ನವೀಕರಿಸಿ\n3. ಸರ್ವರ್ ಅನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ`
    } else {
      userFriendlyMessage = `ಕ್ಷಮಿಸಿ, API ಗೆ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.\n\nದೋಷ: ${errorMessage}\n\nGroq API (ಉಚಿತ) ಬಳಸಲು:\n1. https://console.groq.com/keys ನಲ್ಲಿ API ಕೀ ಪಡೆಯಿರಿ\n2. .env.local ನಲ್ಲಿ GROQ_API_KEY=your-key-here ಸೇರಿಸಿ\n3. ಸರ್ವರ್ ಅನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ`
    }
    
    return NextResponse.json({
      response: `${userFriendlyMessage}\n\n${chapterTitle ? `ನೀವು "${chapterTitle}" ಅಧ್ಯಾಯವನ್ನು ಓದುತ್ತಿದ್ದೀರಿ.` : ''}`,
    })
  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
