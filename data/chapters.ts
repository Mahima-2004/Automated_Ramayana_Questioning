export type ChapterLanguage = 'sa' | 'kn' | 'en'

export interface Chapter {
  id: number
  title: string
  description: string
  icon: string
  pages: number
  pdfUrl: string | string[] // Can be single PDF or array for multiple PDFs
  startPage?: number
  endPage?: number
  language: ChapterLanguage
}

// Sanskrit Chapters (Complete 7 Kandas)
export const sanskritChapters: Chapter[] = [
  {
    id: 1,
    title: 'बालकाण्डः - बाल्यस्य अध्यायः',
    description: 'श्रीरामस्य जननं अयोध्यायां च आद्यवर्षाणि',
    icon: '🕉️',
    pages: 0, // Will be calculated
    pdfUrl: '/chapters/Valmiki_Ramayana_1_-_Bala-kanda.pdf',
    language: 'sa',
  },
  {
    id: 2,
    title: 'अयोध्याकाण्डः - अयोध्यायाः अध्यायः',
    description: 'रामस्य वनवासः अयोध्यायां च घटनाः',
    icon: '🪔',
    pages: 0,
    pdfUrl: [
      '/chapters/Valmiki_Ramayana_2_-_Ayodhya-kanda_Purvarddha.pdf',
      '/chapters/Valmiki_Ramayana_3_-_Ayodhya-kanda_Uttararddha.pdf',
    ],
    language: 'sa',
  },
  {
    id: 3,
    title: 'अरण्यकाण्डः - अरण्यस्य अध्यायः',
    description: 'रामसीतालक्ष्मणानां वनजीवनम्',
    icon: '🪷',
    pages: 0,
    pdfUrl: '/chapters/Valmiki_Ramayana_4_-_Aranya-kanda.pdf',
    language: 'sa',
  },
  {
    id: 4,
    title: 'किष्किन्धाकाण्डः - किष्किन्धायाः अध्यायः',
    description: 'रामः हनुमन्तं मिलति वानरराज्यं च',
    icon: '📿',
    pages: 0,
    pdfUrl: '/chapters/Valmiki_Ramayana_5_-_Kiskindha-kanda.pdf',
    language: 'sa',
  },
  {
    id: 5,
    title: 'सुन्दरकाण्डः - सुन्दरस्य अध्यायः',
    description: 'हनुमतः लङ्काप्रवेशः सीतान्वेषणं च',
    icon: '🦅',
    pages: 0,
    pdfUrl: '/chapters/Valmiki_Ramayana_6_-_Sundara-kanda.pdf',
    language: 'sa',
  },
  {
    id: 6,
    title: 'युद्धकाण्डः - युद्धस्य अध्यायः',
    description: 'रावणेन सह युद्धं रामस्य विजयः च',
    icon: '⚔️',
    pages: 0,
    pdfUrl: [
      '/chapters/Valmiki_Ramayana_7_-_Yuddha-kanda_Purvarddha.pdf',
      '/chapters/Valmiki_Ramayana_8_-_Yuddha-kanda_Uttararddha.pdf',
    ],
    language: 'sa',
  },
  {
    id: 7,
    title: 'उत्तरकाण्डः - उत्तरस्य अध्यायः',
    description: 'रामस्य अयोध्याप्रत्यागमनं चरमघटनाः च',
    icon: '👑',
    pages: 0,
    pdfUrl: [
      '/chapters/Valmiki_Ramayana_9_-_Uttara-kanda_Purvarddha.pdf',
      '/chapters/Valmiki_Ramayana_10_-_Uttara-kanda_Uttararddha.pdf',
    ],
    language: 'sa',
  },
]

// Kannada Chapters (Currently 4, will be updated later)
export const kannadaChapters: Chapter[] = [
  {
    id: 1,
    title: 'ಬಾಲ ಕಾಂಡ - ಬಾಲ್ಯದ ಅಧ್ಯಾಯ',
    description: 'ಶ್ರೀ ರಾಮನ ಜನನ ಮತ್ತು ಅಯೋಧ್ಯೆಯಲ್ಲಿ ಅವರ ಆರಂಭಿಕ ವರ್ಷಗಳು',
    icon: '🕉️',
    pages: 27,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 1,
    endPage: 27,
    language: 'kn',
  },
  {
    id: 2,
    title: 'ಅಯೋಧ್ಯಾ ಕಾಂಡ - ಅಯೋಧ್ಯೆಯ ಅಧ್ಯಾಯ',
    description: 'ರಾಮನ ವನವಾಸ ಮತ್ತು ಅಯೋಧ್ಯೆಯಲ್ಲಿ ನಡೆದ ಘಟನೆಗಳು',
    icon: '🪔',
    pages: 60,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 27,
    endPage: 86,
    language: 'kn',
  },
  {
    id: 3,
    title: 'ಅರಣ್ಯ ಕಾಂಡ - ಅರಣ್ಯದ ಅಧ್ಯಾಯ',
    description: 'ರಾಮ, ಸೀತೆ ಮತ್ತು ಲಕ್ಷ್ಮಣರ ಕಾಡಿನ ಜೀವನ',
    icon: '🪷',
    pages: 34,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 86,
    endPage: 119,
    language: 'kn',
  },
  {
    id: 4,
    title: 'ಕಿಷ್ಕಿಂಧಾ ಕಾಂಡ - ಕಿಷ್ಕಿಂಧೆಯ ಅಧ್ಯಾಯ',
    description: 'ರಾಮನು ಹನುಮಂತನನ್ನು ಭೇಟಿಯಾಗುವುದು ಮತ್ತು ವಾನರ ರಾಜ್ಯ',
    icon: '📿',
    pages: 43,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 119,
    endPage: 161,
    language: 'kn',
  },
  {
    id: 5,
    title: 'ಸುಂದರ ಕಾಂಡ - ಸುಂದರ ಅಧ್ಯಾಯ',
    description: 'ಹನುಮಂತನ ಲಂಕಾ ಪ್ರಯಾಣ ಮತ್ತು ಸೀತೆಗಾಗಿ ಶೋಧ',
    icon: '🦅',
    pages: 70,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 161,
    endPage: 230,
    language: 'kn',
  },
  {
    id: 6,
    title: 'ಯುದ್ಧ ಕಾಂಡ - ಯುದ್ಧದ ಅಧ್ಯಾಯ',
    description: 'ರಾವಣನೊಂದಿಗೆ ಯುದ್ಧ ಮತ್ತು ರಾಮನ ವಿಜಯ',
    icon: '⚔️',
    pages: 69,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 230,
    endPage: 298,
    language: 'kn',
  },
  {
    id: 7,
    title: 'ಉತ್ತರ ಕಾಂಡ - ಕೊನೆಯ ಅಧ್ಯಾಯ',
    description: 'ರಾಮನ ಅಯೋಧ್ಯೆಗೆ ಮರಳುವಿಕೆ ಮತ್ತು ಕೊನೆಯ ಘಟನೆಗಳು',
    icon: '👑',
    pages: 20,
    pdfUrl: '/chapters/janapriya-valmiki-ramayana.pdf',
    startPage: 298,
    endPage: 317,
    language: 'kn',
  },
]

// English Chapters (Complete 7 Kandas - Split PDFs)
export const englishChapters: Chapter[] = [
  {
    id: 1,
    title: 'Bala Kanda - The Chapter of Childhood',
    description: 'The birth of Lord Rama and his early years in Ayodhya',
    icon: '🕉️',
    pages: 185,
    pdfUrl: '/chapters/English-Bala-Kanda.pdf',
    language: 'en',
  },
  {
    id: 2,
    title: 'Ayodhya Kanda - The Chapter of Ayodhya',
    description: 'Rama\'s exile and events in Ayodhya',
    icon: '🪔',
    pages: 322,
    pdfUrl: '/chapters/English-Ayodhya-Kanda.pdf',
    language: 'en',
  },
  {
    id: 3,
    title: 'Aranya Kanda - The Chapter of the Forest',
    description: 'The forest life of Rama, Sita, and Lakshmana',
    icon: '🪷',
    pages: 186,
    pdfUrl: '/chapters/English-Aranya-Kanda.pdf',
    language: 'en',
  },
  {
    id: 4,
    title: 'Kishkindha Kanda - The Chapter of Kishkindha',
    description: 'Rama meets Hanuman and the monkey kingdom',
    icon: '📿',
    pages: 182,
    pdfUrl: '/chapters/English-Kishkindha-Kanda.pdf',
    language: 'en',
  },
  {
    id: 5,
    title: 'Sundara Kanda - The Chapter of Sundara',
    description: 'Hanuman\'s journey to Lanka and search for Sita',
    icon: '🦅',
    pages: 226,
    pdfUrl: '/chapters/English-Sundara-Kanda.pdf',
    language: 'en',
  },
  {
    id: 6,
    title: 'Yuddha Kanda - The Chapter of War',
    description: 'The war with Ravana and Rama\'s victory',
    icon: '⚔️',
    pages: 0, // Full volume, will be calculated
    pdfUrl: '/chapters/English-Yuddha-Kanda.pdf',
    language: 'en',
  },
  {
    id: 7,
    title: 'Uttara Kanda - The Final Chapter',
    description: 'Rama\'s return to Ayodhya and final events',
    icon: '👑',
    pages: 0, // Full volume, will be calculated
    pdfUrl: '/chapters/English-Uttara-Kanda.pdf',
    language: 'en',
  },
]

// Helper function to get chapters by language
export function getChaptersByLanguage(language: ChapterLanguage): Chapter[] {
  switch (language) {
    case 'sa':
      return sanskritChapters
    case 'kn':
      return kannadaChapters
    case 'en':
      return englishChapters
    default:
      return kannadaChapters
  }
}

// Default export for backward compatibility (Kannada)
export const chapters = kannadaChapters
