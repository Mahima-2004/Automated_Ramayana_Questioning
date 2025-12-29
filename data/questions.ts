export interface Question {
  question: string
  options: string[]
  correctAnswer: string
}

export const questions: Record<string, Record<number, Question[]>> = {
  // Kannada (Existing Questions)
  kn: {
    1: [
      {
        question: 'ಶ್ರೀ ರಾಮನ ತಂದೆ ಯಾರು?',
        options: [
          'ದಶರಥ',
          'ಜನಕ',
          'ವಿಶ್ವಾಮಿತ್ರ',
          'ಭರತ',
        ],
        correctAnswer: 'ದಶರಥ',
      },
      {
        question: 'ರಾಜ ದಶರಥನಿಗೆ ಎಷ್ಟು ಮಕ್ಕಳಿದ್ದರು?',
        options: ['ಇಬ್ಬರು', 'ಮೂವರು', 'ನಾಲ್ಕು', 'ಐದು'],
        correctAnswer: 'ನಾಲ್ಕು',
      },
      {
        question: 'ರಾಮನ ತಾಯಿ ಯಾರು?',
        options: [
          'ಕೌಸಲ್ಯ',
          'ಕೈಕೇಯಿ',
          'ಸುಮಿತ್ರ',
          'ಮಂಡೋದರಿ',
        ],
        correctAnswer: 'ಕೌಸಲ್ಯ',
      },
      {
        question: 'ರಾಮನ ಜನ್ಮವನ್ನು ಯಾರು ಮುನ್ಸೂಚಿಸಿದರು?',
        options: [
          'ವಿಶ್ವಾಮಿತ್ರ',
          'ವಸಿಷ್ಠ',
          'ವಾಲ್ಮೀಕಿ',
          'ನಾರದ',
        ],
        correctAnswer: 'ವಸಿಷ್ಠ',
      },
      {
        question: 'ರಾಮನ ಜನ್ಮಕ್ಕೆ ಮುನ್ನ ದಶರಥನು ಯಾವ ಯಜ್ಞವನ್ನು ನಡೆಸಿದನು?',
        options: [
          'ಪುತ್ರಕಾಮೇಷ್ಟಿ ಯಜ್ಞ',
          'ರಾಜಸೂಯ ಯಜ್ಞ',
          'ಅಶ್ವಮೇಧ ಯಜ್ಞ',
          'ವಾಜಪೇಯ ಯಜ್ಞ',
        ],
        correctAnswer: 'ಪುತ್ರಕಾಮೇಷ್ಟಿ ಯಜ್ಞ',
      },
      {
        question: 'ರಾಮನಿಗೆ ಯಾವ ವಿದ್ಯೆಗಳನ್ನು ಕಲಿಸಿದರು?',
        options: [
          'ವಿಶ್ವಾಮಿತ್ರ',
          'ವಸಿಷ್ಠ',
          'ಜನಕ',
          'ದಶರಥ',
        ],
        correctAnswer: 'ವಿಶ್ವಾಮಿತ್ರ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸಿಯನ್ನು ಕೊಂದನು?',
        options: [
          'ತಾಟಕ',
          'ಶೂರ್ಪಣಖ',
          'ಮಂಡೋದರಿ',
          'ತಾರ',
        ],
        correctAnswer: 'ತಾಟಕ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಯಜ್ಞವನ್ನು ರಕ್ಷಿಸಿದನು?',
        options: [
          'ವಿಶ್ವಾಮಿತ್ರನ ಯಜ್ಞ',
          'ದಶರಥನ ಯಜ್ಞ',
          'ಜನಕನ ಯಜ್ಞ',
          'ವಸಿಷ್ಠನ ಯಜ್ಞ',
        ],
        correctAnswer: 'ವಿಶ್ವಾಮಿತ್ರನ ಯಜ್ಞ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಬಿಲ್ಲನ್ನು ಮುರಿದನು?',
        options: [
          'ಶಿವನ ಧನುಸ್ಸು',
          'ವಿಷ್ಣುವಿನ ಧನುಸ್ಸು',
          'ಇಂದ್ರನ ಧನುಸ್ಸು',
          'ವರಾಹನ ಧನುಸ್ಸು',
        ],
        correctAnswer: 'ಶಿವನ ಧನುಸ್ಸು',
      },
      {
        question: 'ಸೀತೆಯ ಸ್ವಯಂವರವು ಎಲ್ಲಿ ನಡೆಯಿತು?',
        options: [
          'ಮಿಥಿಲ',
          'ಅಯೋಧ್ಯೆ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
        ],
        correctAnswer: 'ಮಿಥಿಲ',
      },
      {
        question: 'ರಾಮನ ಸಹೋದರರ ಹೆಸರುಗಳು ಯಾವುವು?',
        options: [
          'ಲಕ್ಷ್ಮಣ, ಭರತ, ಶತ್ರುಘ್ನ',
          'ಲಕ್ಷ್ಮಣ, ಭರತ, ಹನುಮಂತ',
          'ಲಕ್ಷ್ಮಣ, ಸುಗ್ರೀವ, ಅಂಗದ',
          'ಲಕ್ಷ್ಮಣ, ವಿಭೀಷಣ, ಇಂದ್ರಜಿತ್',
        ],
        correctAnswer: 'ಲಕ್ಷ್ಮಣ, ಭರತ, ಶತ್ರುಘ್ನ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸರನ್ನು ಕೊಂದನು?',
        options: [
          'ಮಾರೀಚ ಮತ್ತು ಸುಬಾಹು',
          'ರಾವಣ ಮತ್ತು ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ ಮತ್ತು ಇಂದ್ರಜಿತ್',
          'ತಾಟಕ ಮತ್ತು ಶೂರ್ಪಣಖ',
        ],
        correctAnswer: 'ಮಾರೀಚ ಮತ್ತು ಸುಬಾಹು',
      },
      {
        question: 'ರಾಮನ ವಿವಾಹವು ಯಾವ ವಿಧಾನದಲ್ಲಿ ನಡೆಯಿತು?',
        options: [
          'ಸ್ವಯಂವರ',
          'ಗಾಂಧರ್ವ',
          'ರಾಕ್ಷಸ',
          'ಬ್ರಾಹ್ಮ',
        ],
        correctAnswer: 'ಸ್ವಯಂವರ',
      },
      {
        question: 'ರಾಮನು ಯಾರೊಂದಿಗೆ ವಿವಾಹವಾದನು?',
        options: [
          'ಸೀತೆ',
          'ಊರ್ಮಿಲ',
          'ಮಂಡವಿ',
          'ಶ್ರುತಕೀರ್ತಿ',
        ],
        correctAnswer: 'ಸೀತೆ',
      },
      {
        question: 'ರಾಮನು ಎಷ್ಟು ವರ್ಷ ವಯಸ್ಸಿನಲ್ಲಿ ವಿವಾಹವಾದನು?',
        options: [
          'ಹದಿನಾರು',
          'ಹದಿನೆಂಟು',
          'ಇಪ್ಪತ್ತು',
          'ಇಪ್ಪತ್ತೆರಡು',
        ],
        correctAnswer: 'ಹದಿನಾರು',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಜ್ಯದ ರಾಜಕುಮಾರ?',
        options: [
          'ಅಯೋಧ್ಯೆ',
          'ಮಿಥಿಲ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
        ],
        correctAnswer: 'ಅಯೋಧ್ಯೆ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ವೇದಗಳನ್ನು ಕಲಿತನು?',
        options: [
          'ನಾಲ್ಕು ವೇದಗಳು',
          'ಮೂರು ವೇದಗಳು',
          'ಎರಡು ವೇದಗಳು',
          'ಒಂದು ವೇದ',
        ],
        correctAnswer: 'ನಾಲ್ಕು ವೇದಗಳು',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಆಯುಧವನ್ನು ಬಳಸಿದನು?',
        options: [
          'ಬಾಣ ಮತ್ತು ಬಿಲ್ಲು',
          'ತ್ರಿಶೂಲ',
          'ಗದೆ',
          'ಕತ್ತಿ',
        ],
        correctAnswer: 'ಬಾಣ ಮತ್ತು ಬಿಲ್ಲು',
      },
      {
        question: 'ರಾಮನು ಯಾವ ದೇವತೆಯ ಅವತಾರ?',
        options: [
          'ವಿಷ್ಣು',
          'ಶಿವ',
          'ಬ್ರಹ್ಮ',
          'ಗಣೇಶ',
        ],
        correctAnswer: 'ವಿಷ್ಣು',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಗುರುಗಳಿಂದ ಶಿಕ್ಷಣ ಪಡೆದನು?',
        options: [
          'ವಸಿಷ್ಠ ಮತ್ತು ವಿಶ್ವಾಮಿತ್ರ',
          'ವಾಲ್ಮೀಕಿ ಮತ್ತು ನಾರದ',
          'ದಶರಥ ಮತ್ತು ಜನಕ',
          'ಇಂದ್ರ ಮತ್ತು ವರುಣ',
        ],
        correctAnswer: 'ವಸಿಷ್ಠ ಮತ್ತು ವಿಶ್ವಾಮಿತ್ರ',
      },
    ],
    2: [
      {
        question: 'ರಾಮನು ಯಾಕೆ ವನವಾಸಕ್ಕೆ ಹೋದನು?',
        options: [
          'ಕೈಕೇಯಿಯ ವರದಿಂದ',
          'ತನ್ನ ಇಚ್ಛೆಯಿಂದ',
          'ದಶರಥನ ಆಜ್ಞೆಯಿಂದ',
          'ಶಾಪದಿಂದ',
        ],
        correctAnswer: 'ಕೈಕೇಯಿಯ ವರದಿಂದ',
      },
      {
        question: 'ರಾಮನು ಎಷ್ಟು ವರ್ಷಗಳ ಕಾಲ ವನವಾಸದಲ್ಲಿದ್ದನು?',
        options: ['ಹತ್ತು ವರ್ಷ', 'ಹನ್ನೆರಡು ವರ್ಷ', 'ಹದಿನಾಲ್ಕು ವರ್ಷ', 'ಹದಿನಾರು ವರ್ಷ'],
        correctAnswer: 'ಹದಿನಾಲ್ಕು ವರ್ಷ',
      },
      {
        question: 'ರಾಮನೊಂದಿಗೆ ಯಾರು ಕಾಡಿಗೆ ಹೋದರು?',
        options: [
          'ಸೀತೆ ಮತ್ತು ಲಕ್ಷ್ಮಣ',
          'ಭರತ ಮತ್ತು ಶತ್ರುಘ್ನ',
          'ಕೇವಲ ಸೀತೆ',
          'ಕೇವಲ ಲಕ್ಷ್ಮಣ',
        ],
        correctAnswer: 'ಸೀತೆ ಮತ್ತು ಲಕ್ಷ್ಮಣ',
      },
      {
        question: 'ಕೈಕೇಯಿಗೆ ಯಾರು ಎರಡು ವರಗಳನ್ನು ನೀಡಿದರು?',
        options: [
          'ದಶರಥ',
          'ರಾಮ',
          'ವಸಿಷ್ಠ',
          'ಇಂದ್ರ',
        ],
        correctAnswer: 'ದಶರಥ',
      },
      {
        question: 'ಕೈಕೇಯಿಯ ಮೊದಲ ವರ ಯಾವುದು?',
        options: [
          'ಭರತನಿಗೆ ರಾಜ್ಯ',
          'ರಾಮನಿಗೆ ವನವಾಸ',
          'ದಶರಥನಿಗೆ ಮರಣ',
          'ಸೀತೆಗೆ ವನವಾಸ',
        ],
        correctAnswer: 'ಭರತನಿಗೆ ರಾಜ್ಯ',
      },
      {
        question: 'ಕೈಕೇಯಿಯ ಎರಡನೇ ವರ ಯಾವುದು?',
        options: [
          'ರಾಮನಿಗೆ ಹದಿನಾಲ್ಕು ವರ್ಷ ವನವಾಸ',
          'ಭರತನಿಗೆ ರಾಜ್ಯ',
          'ದಶರಥನಿಗೆ ಮರಣ',
          'ಲಕ್ಷ್ಮಣನಿಗೆ ವನವಾಸ',
        ],
        correctAnswer: 'ರಾಮನಿಗೆ ಹದಿನಾಲ್ಕು ವರ್ಷ ವನವಾಸ',
      },
      {
        question: 'ರಾಮನು ವನವಾಸಕ್ಕೆ ಹೋದ ನಂತರ ಭರತನು ಏನು ಮಾಡಿದನು?',
        options: [
          'ರಾಮನ ಪಾದುಕೆಗಳನ್ನು ಸಿಂಹಾಸನದ ಮೇಲೆ ಇಟ್ಟು ರಾಜ್ಯವನ್ನು ನಡೆಸಿದನು',
          'ರಾಜ್ಯವನ್ನು ಸ್ವೀಕರಿಸಿದನು',
          'ರಾಮನನ್ನು ಹುಡುಕಲು ಹೋದನು',
          'ವನವಾಸಕ್ಕೆ ಹೋದನು',
        ],
        correctAnswer: 'ರಾಮನ ಪಾದುಕೆಗಳನ್ನು ಸಿಂಹಾಸನದ ಮೇಲೆ ಇಟ್ಟು ರಾಜ್ಯವನ್ನು ನಡೆಸಿದನು',
      },
      {
        question: 'ದಶರಥನ ಮರಣಕ್ಕೆ ಕಾರಣ ಯಾವುದು?',
        options: [
          'ರಾಮನ ವಿಯೋಗ',
          'ಕೈಕೇಯಿಯ ವರ',
          'ರಾಕ್ಷಸರ ಆಕ್ರಮಣ',
          'ರೋಗ',
        ],
        correctAnswer: 'ರಾಮನ ವಿಯೋಗ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ನದಿಯನ್ನು ದಾಟಿದನು?',
        options: [
          'ಗಂಗಾ',
          'ಯಮುನ',
          'ಗೋದಾವರಿ',
          'ನರ್ಮದ',
        ],
        correctAnswer: 'ಗಂಗಾ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಗುಹ',
          'ವಿಭೀಷಣ',
          'ಹನುಮಂತ',
          'ಸುಗ್ರೀವ',
        ],
        correctAnswer: 'ಗುಹ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಋಷಿಗಳ ಆಶ್ರಮಕ್ಕೆ ಹೋದನು?',
        options: [
          'ಭರದ್ವಾಜ',
          'ವಸಿಷ್ಠ',
          'ವಿಶ್ವಾಮಿತ್ರ',
          'ವಾಲ್ಮೀಕಿ',
        ],
        correctAnswer: 'ಭರದ್ವಾಜ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಪರ್ವತದ ಮೇಲೆ ನೆಲೆಸಿದನು?',
        options: [
          'ಚಿತ್ರಕೂಟ',
          'ಕೈಲಾಸ',
          'ಮೇರು',
          'ಹಿಮಾಲಯ',
        ],
        correctAnswer: 'ಚಿತ್ರಕೂಟ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸಿದನು?',
        options: [
          'ದಂಡಕಾರಣ್ಯ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
          'ಮಿಥಿಲ',
        ],
        correctAnswer: 'ದಂಡಕಾರಣ್ಯ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಋಷಿಗಳನ್ನು ರಕ್ಷಿಸಿದನು?',
        options: [
          'ದಂಡಕಾರಣ್ಯದ ಋಷಿಗಳು',
          'ಹಿಮಾಲಯದ ಋಷಿಗಳು',
          'ವೈದಿಕ ಋಷಿಗಳು',
          'ಯೋಗ ಋಷಿಗಳು',
        ],
        correctAnswer: 'ದಂಡಕಾರಣ್ಯದ ಋಷಿಗಳು',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸರನ್ನು ಕೊಂದನು?',
        options: [
          'ವಿರಾಧ',
          'ರಾವಣ',
          'ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ',
        ],
        correctAnswer: 'ವಿರಾಧ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಆಶ್ರಮದಲ್ಲಿ ವಾಸಿಸಿದನು?',
        options: [
          'ಪಂಚವಟಿ',
          'ಚಿತ್ರಕೂಟ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
        ],
        correctAnswer: 'ಪಂಚವಟಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಋಷಿಗಳನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಅಗಸ್ತ್ಯ',
          'ವಸಿಷ್ಠ',
          'ವಿಶ್ವಾಮಿತ್ರ',
          'ವಾಲ್ಮೀಕಿ',
        ],
        correctAnswer: 'ಅಗಸ್ತ್ಯ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಆಯುಧವನ್ನು ಪಡೆದನು?',
        options: [
          'ಬ್ರಹ್ಮಾಸ್ತ್ರ',
          'ಪಾಶುಪತಾಸ್ತ್ರ',
          'ವೈಷ್ಣವಾಸ್ತ್ರ',
          'ಇಂದ್ರಾಸ್ತ್ರ',
        ],
        correctAnswer: 'ಬ್ರಹ್ಮಾಸ್ತ್ರ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ನದಿಯನ್ನು ದಾಟಿದನು?',
        options: [
          'ಗೋದಾವರಿ',
          'ಗಂಗಾ',
          'ಯಮುನ',
          'ನರ್ಮದ',
        ],
        correctAnswer: 'ಗೋದಾವರಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸಿದನು?',
        options: [
          'ದಂಡಕಾರಣ್ಯ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
          'ಮಿಥಿಲ',
        ],
        correctAnswer: 'ದಂಡಕಾರಣ್ಯ',
      },
    ],
    3: [
      {
        question: 'ಸೀತೆಯನ್ನು ಯಾರು ಅಪಹರಿಸಿದರು?',
        options: ['ರಾವಣ', 'ಕುಂಭಕರ್ಣ', 'ಇಂದ್ರಜಿತ್', 'ವಿಭೀಷಣ'],
        correctAnswer: 'ರಾವಣ',
      },
      {
        question: 'ಚಿನ್ನದ ಜಿಂಕೆಯ ಹೆಸರು ಯಾವುದು?',
        options: [
          'ಮಾರೀಚ',
          'ಸುಬಾಹು',
          'ತಾಟಕ',
          'ಕಬಂಧ',
        ],
        correctAnswer: 'ಮಾರೀಚ',
      },
      {
        question: 'ರಾಮನು ಸೀತೆಯನ್ನು ಹುಡುಕಲು ಯಾರು ಸಹಾಯ ಮಾಡಿದರು?',
        options: [
          'ಜಟಾಯು',
          'ಗರುಡ',
          'ಸಂಪಾತಿ',
          'ಮೇಲಿನ ಎಲ್ಲಾ',
        ],
        correctAnswer: 'ಮೇಲಿನ ಎಲ್ಲಾ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸನನ್ನು ಕೊಂದನು?',
        options: [
          'ಕಬಂಧ',
          'ರಾವಣ',
          'ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ',
        ],
        correctAnswer: 'ಕಬಂಧ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಪಕ್ಷಿಯನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಜಟಾಯು',
          'ಗರುಡ',
          'ಸಂಪಾತಿ',
          'ಜಟಾಯು ಮತ್ತು ಸಂಪಾತಿ',
        ],
        correctAnswer: 'ಜಟಾಯು ಮತ್ತು ಸಂಪಾತಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸಿಯನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಶೂರ್ಪಣಖ',
          'ತಾಟಕ',
          'ಮಂಡೋದರಿ',
          'ತಾರ',
        ],
        correctAnswer: 'ಶೂರ್ಪಣಖ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸರನ್ನು ಕೊಂದನು?',
        options: [
          'ಖರ ಮತ್ತು ದೂಷಣ',
          'ರಾವಣ ಮತ್ತು ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ ಮತ್ತು ಇಂದ್ರಜಿತ್',
          'ಮಾರೀಚ ಮತ್ತು ಸುಬಾಹು',
        ],
        correctAnswer: 'ಖರ ಮತ್ತು ದೂಷಣ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಆಶ್ರಮದಲ್ಲಿ ವಾಸಿಸಿದನು?',
        options: [
          'ಪಂಚವಟಿ',
          'ಚಿತ್ರಕೂಟ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
        ],
        correctAnswer: 'ಪಂಚವಟಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ನದಿಯನ್ನು ದಾಟಿದನು?',
        options: [
          'ಗೋದಾವರಿ',
          'ಗಂಗಾ',
          'ಯಮುನ',
          'ನರ್ಮದ',
        ],
        correctAnswer: 'ಗೋದಾವರಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಋಷಿಗಳನ್ನು ರಕ್ಷಿಸಿದನು?',
        options: [
          'ದಂಡಕಾರಣ್ಯದ ಋಷಿಗಳು',
          'ಹಿಮಾಲಯದ ಋಷಿಗಳು',
          'ವೈದಿಕ ಋಷಿಗಳು',
          'ಯೋಗ ಋಷಿಗಳು',
        ],
        correctAnswer: 'ದಂಡಕಾರಣ್ಯದ ಋಷಿಗಳು',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸನನ್ನು ಕೊಂದನು?',
        options: [
          'ವಿರಾಧ',
          'ರಾವಣ',
          'ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ',
        ],
        correctAnswer: 'ವಿರಾಧ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಆಯುಧವನ್ನು ಬಳಸಿದನು?',
        options: [
          'ಬ್ರಹ್ಮಾಸ್ತ್ರ',
          'ಪಾಶುಪತಾಸ್ತ್ರ',
          'ವೈಷ್ಣವಾಸ್ತ್ರ',
          'ಇಂದ್ರಾಸ್ತ್ರ',
        ],
        correctAnswer: 'ಬ್ರಹ್ಮಾಸ್ತ್ರ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಪಕ್ಷಿಯನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಸಂಪಾತಿ',
          'ಗರುಡ',
          'ಜಟಾಯು',
          'ಹಂಸ',
        ],
        correctAnswer: 'ಸಂಪಾತಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸನನ್ನು ಕೊಂದನು?',
        options: [
          'ಮಾರೀಚ',
          'ರಾವಣ',
          'ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ',
        ],
        correctAnswer: 'ಮಾರೀಚ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸಿದನು?',
        options: [
          'ದಂಡಕಾರಣ್ಯ',
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
          'ಮಿಥಿಲ',
        ],
        correctAnswer: 'ದಂಡಕಾರಣ್ಯ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಋಷಿಗಳನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಅಗಸ್ತ್ಯ',
          'ವಸಿಷ್ಠ',
          'ವಿಶ್ವಾಮಿತ್ರ',
          'ವಾಲ್ಮೀಕಿ',
        ],
        correctAnswer: 'ಅಗಸ್ತ್ಯ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಆಯುಧವನ್ನು ಪಡೆದನು?',
        options: [
          'ಬ್ರಹ್ಮಾಸ್ತ್ರ',
          'ಪಾಶುಪತಾಸ್ತ್ರ',
          'ವೈಷ್ಣವಾಸ್ತ್ರ',
          'ಇಂದ್ರಾಸ್ತ್ರ',
        ],
        correctAnswer: 'ಬ್ರಹ್ಮಾಸ್ತ್ರ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ನದಿಯನ್ನು ದಾಟಿದನು?',
        options: [
          'ಗೋದಾವರಿ',
          'ಗಂಗಾ',
          'ಯಮುನ',
          'ನರ್ಮದ',
        ],
        correctAnswer: 'ಗೋದಾವರಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಕ್ಷಸರನ್ನು ಕೊಂದನು?',
        options: [
          'ಖರ, ದೂಷಣ ಮತ್ತು ತ್ರಿಶಿರ',
          'ರಾವಣ ಮತ್ತು ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ ಮತ್ತು ಇಂದ್ರಜಿತ್',
          'ಮಾರೀಚ ಮತ್ತು ಸುಬಾಹು',
        ],
        correctAnswer: 'ಖರ, ದೂಷಣ ಮತ್ತು ತ್ರಿಶಿರ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಪಕ್ಷಿಯನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಜಟಾಯು ಮತ್ತು ಸಂಪಾತಿ',
          'ಗರುಡ',
          'ಹಂಸ',
          'ಕೋಗಿಲೆ',
        ],
        correctAnswer: 'ಜಟಾಯು ಮತ್ತು ಸಂಪಾತಿ',
      },
    ],
    4: [
      {
        question: 'ಕಿಷ್ಕಿಂಧೆಯ ರಾಜ ಯಾರು?',
        options: [
          'ವಾಲಿ',
          'ಸುಗ್ರೀವ',
          'ಹನುಮಂತ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ವಾಲಿ',
      },
      {
        question: 'ರಾಮನು ವಾಲಿಯನ್ನು ಕೊಲ್ಲಲು ಯಾರು ಸಹಾಯ ಮಾಡಿದರು?',
        options: [
          'ಸುಗ್ರೀವ',
          'ಹನುಮಂತ',
          'ಲಕ್ಷ್ಮಣ',
          'ಮೇಲಿನ ಯಾರೂ ಅಲ್ಲ',
        ],
        correctAnswer: 'ಸುಗ್ರೀವ',
      },
      {
        question: 'ಹನುಮಂತನ ತಂದೆ ಯಾರು?',
        options: [
          'ವಾಯು',
          'ಇಂದ್ರ',
          'ಸೂರ್ಯ',
          'ವರುಣ',
        ],
        correctAnswer: 'ವಾಯು',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಮೊದಲು ಭೇಟಿಯಾದನು?',
        options: [
          'ಹನುಮಂತ',
          'ಸುಗ್ರೀವ',
          'ವಾಲಿ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ಹನುಮಂತ',
      },
      {
        question: 'ರಾಮನು ಯಾರೊಂದಿಗೆ ಮೈತ್ರಿ ಮಾಡಿದನು?',
        options: [
          'ಸುಗ್ರೀವ',
          'ವಾಲಿ',
          'ಹನುಮಂತ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ಸುಗ್ರೀವ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಕೊಂದನು?',
        options: [
          'ವಾಲಿ',
          'ಸುಗ್ರೀವ',
          'ಹನುಮಂತ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ವಾಲಿ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ರಾಜ್ಯಕ್ಕೆ ಹೋದನು?',
        options: [
          'ಕಿಷ್ಕಿಂಧ',
          'ಲಂಕೆ',
          'ಮಿಥಿಲ',
          'ಅಯೋಧ್ಯೆ',
        ],
        correctAnswer: 'ಕಿಷ್ಕಿಂಧ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಕಿಷ್ಕಿಂಧೆಯ ರಾಜನನ್ನಾಗಿ ಮಾಡಿದನು?',
        options: [
          'ಸುಗ್ರೀವ',
          'ವಾಲಿ',
          'ಹನುಮಂತ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ಸುಗ್ರೀವ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಸೇನಾಪತಿಯನ್ನಾಗಿ ಮಾಡಿದನು?',
        options: [
          'ಹನುಮಂತ',
          'ವಾಲಿ',
          'ಸುಗ್ರೀವ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ಹನುಮಂತ',
      },
      {
        question: 'ವಾಲಿಯ ಮಗ ಯಾರು?',
        options: [
          'ಅಂಗದ',
          'ಹನುಮಂತ',
          'ಸುಗ್ರೀವ',
          'ನೀಲ',
        ],
        correctAnswer: 'ಅಂಗದ',
      },
      {
        question: 'ಹನುಮಂತನ ತಾಯಿ ಯಾರು?',
        options: [
          'ಅಂಜನ',
          'ತಾರ',
          'ರೂಮ',
          'ನೀಲ',
        ],
        correctAnswer: 'ಅಂಜನ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಪರ್ವತದಲ್ಲಿ ವಾಸಿಸಿದನು?',
        options: [
          'ಮಲ್ಯವಂತ',
          'ಕೈಲಾಸ',
          'ಮೇರು',
          'ಹಿಮಾಲಯ',
        ],
        correctAnswer: 'ಮಲ್ಯವಂತ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಸರೋವರದಲ್ಲಿ ಸೀತೆಯನ್ನು ಹುಡುಕಿದನು?',
        options: [
          'ಪಂಪಾ ಸರೋವರ',
          'ಮಾನಸ ಸರೋವರ',
          'ದಲ್ ಸರೋವರ',
          'ಚಿಲ್ಕಾ ಸರೋವರ',
        ],
        correctAnswer: 'ಪಂಪಾ ಸರೋವರ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಸೀತೆಯನ್ನು ಹುಡುಕಲು ಕಳುಹಿಸಿದನು?',
        options: [
          'ವಾನರ ಸೇನೆ',
          'ರಾಕ್ಷಸ ಸೇನೆ',
          'ದೇವ ಸೇನೆ',
          'ಯಕ್ಷ ಸೇನೆ',
        ],
        correctAnswer: 'ವಾನರ ಸೇನೆ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಹನುಮಂತ ಮತ್ತು ಸುಗ್ರೀವ',
          'ವಾಲಿ ಮತ್ತು ಅಂಗದ',
          'ರಾವಣ ಮತ್ತು ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ ಮತ್ತು ಇಂದ್ರಜಿತ್',
        ],
        correctAnswer: 'ಹನುಮಂತ ಮತ್ತು ಸುಗ್ರೀವ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ನದಿಯನ್ನು ದಾಟಿದನು?',
        options: [
          'ತುಂಗಭದ್ರ',
          'ಗಂಗಾ',
          'ಯಮುನ',
          'ನರ್ಮದ',
        ],
        correctAnswer: 'ತುಂಗಭದ್ರ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ಸೀತೆಯನ್ನು ಹುಡುಕಲು ಕಳುಹಿಸಿದನು?',
        options: [
          'ಹನುಮಂತ ಮತ್ತು ವಾನರ ಸೇನೆ',
          'ವಾಲಿ ಮತ್ತು ಅಂಗದ',
          'ರಾವಣ ಮತ್ತು ಕುಂಭಕರ್ಣ',
          'ವಿಭೀಷಣ ಮತ್ತು ಇಂದ್ರಜಿತ್',
        ],
        correctAnswer: 'ಹನುಮಂತ ಮತ್ತು ವಾನರ ಸೇನೆ',
      },
      {
        question: 'ರಾಮನು ಯಾರನ್ನು ವಾನರ ರಾಜನನ್ನಾಗಿ ಮಾಡಿದನು?',
        options: [
          'ಸುಗ್ರೀವ',
          'ವಾಲಿ',
          'ಹನುಮಂತ',
          'ಅಂಗದ',
        ],
        correctAnswer: 'ಸುಗ್ರೀವ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ವಾನರರನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಹನುಮಂತ, ಸುಗ್ರೀವ, ನೀಲ, ಅಂಗದ',
          'ವಾಲಿ, ತಾರ, ರೂಮ, ನೀಲ',
          'ರಾವಣ, ಕುಂಭಕರ್ಣ, ವಿಭೀಷಣ, ಇಂದ್ರಜಿತ್',
          'ಮಾರೀಚ, ಸುಬಾಹು, ಖರ, ದೂಷಣ',
        ],
        correctAnswer: 'ಹನುಮಂತ, ಸುಗ್ರೀವ, ನೀಲ, ಅಂಗದ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ಸ್ಥಳದಲ್ಲಿ ಸುಗ್ರೀವನನ್ನು ಭೇಟಿಯಾದನು?',
        options: [
          'ಪಂಪಾ ಸರೋವರ',
          'ಮಲ್ಯವಂತ ಪರ್ವತ',
          'ಕಿಷ್ಕಿಂಧ',
          'ತುಂಗಭದ್ರ ನದಿ',
        ],
        correctAnswer: 'ಪಂಪಾ ಸರೋವರ',
      },
      {
        question: 'ರಾಮನು ಯಾವ ವಾನರರನ್ನು ಸೀತೆಯನ್ನು ಹುಡುಕಲು ಕಳುಹಿಸಿದನು?',
        options: [
          'ಹನುಮಂತ, ಅಂಗದ, ನೀಲ, ಜಾಂಬವಂತ',
          'ವಾಲಿ, ತಾರ, ರೂಮ, ನೀಲ',
          'ರಾವಣ, ಕುಂಭಕರ್ಣ, ವಿಭೀಷಣ, ಇಂದ್ರಜಿತ್',
          'ಮಾರೀಚ, ಸುಬಾಹು, ಖರ, ದೂಷಣ',
        ],
        correctAnswer: 'ಹನುಮಂತ, ಅಂಗದ, ನೀಲ, ಜಾಂಬವಂತ',
      },
    ],
  },

  // English (Sample Questions)
  en: {
    1: [
      {
        question: 'Who is the father of Lord Rama?',
        options: ['Dasharatha', 'Janaka', 'Vishwamitra', 'Bharata'],
        correctAnswer: 'Dasharatha',
      },
      {
        question: 'How many sons did King Dasharatha have?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswer: 'Four',
      },
      {
        question: 'Who is the mother of Rama?',
        options: ['Kausalya', 'Kaikeyi', 'Sumitra', 'Mandodari'],
        correctAnswer: 'Kausalya',
      },
      {
        question: 'Which sage predicted the birth of Rama?',
        options: ['Vishwamitra', 'Vasistha', 'Valmiki', 'Narada'],
        correctAnswer: 'Vasistha',
      },
      {
        question: 'Which demoness did Rama kill?',
        options: ['Tataka', 'Shurpanakha', 'Mandodari', 'Tara'],
        correctAnswer: 'Tataka',
      },
    ],
    2: [
      {
        question: 'Why did Rama go to the forest?',
        options: ['Kaikeyi\'s boon', 'His own wish', 'Dasharatha\'s order', 'Curse'],
        correctAnswer: 'Kaikeyi\'s boon',
      },
      {
        question: 'How many years was the exile?',
        options: ['10 years', '12 years', '14 years', '16 years'],
        correctAnswer: '14 years',
      },
      {
        question: 'Who accompanied Rama?',
        options: ['Sita and Lakshmana', 'Bharata and Shatrughna', 'Only Sita', 'Only Lakshmana'],
        correctAnswer: 'Sita and Lakshmana',
      },
      {
        question: 'Why did Dasharatha die?',
        options: ['Separation from Rama', 'Old age', 'War', 'Disease'],
        correctAnswer: 'Separation from Rama',
      },
      {
        question: 'Who ruled Ayodhya in Rama\'s absence?',
        options: ['Bharata (with Padukas)', 'Lakshmana', 'Shatrughna', 'Vasistha'],
        correctAnswer: 'Bharata (with Padukas)',
      },
      {
        question: 'Who met Rama at the Ganges?',
        options: ['Guha', 'Sugriva', 'Hanuman', 'Vibhishana'],
        correctAnswer: 'Guha',
      },
    ],
    3: [
      {
        question: 'Who kidnapped Sita?',
        options: ['Ravana', 'Kumbhakarna', 'Indrajit', 'Vibhishana'],
        correctAnswer: 'Ravana',
      },
      {
        question: 'Who was the golden deer?',
        options: ['Maricha', 'Subahu', 'Tataka', 'Kabandha'],
        correctAnswer: 'Maricha',
      },
      {
        question: 'Which bird tried to save Sita?',
        options: ['Jatayu', 'Garuda', 'Sampati', 'Hamsa'],
        correctAnswer: 'Jatayu',
      },
      {
        question: 'Whom did Rama meet in the forest (devotee)?',
        options: ['Shabari', 'Ahalya', 'Tara', 'Mandodari'],
        correctAnswer: 'Shabari',
      },
      {
        question: 'Who was the demoness who proposed to Rama?',
        options: ['Shurpanakha', 'Tataka', 'Mandodari', 'Lankini'],
        correctAnswer: 'Shurpanakha',
      },
    ],
    4: [
      {
        question: 'Who was the King of Kishkindha?',
        options: ['Vali', 'Sugriva', 'Hanuman', 'Angada'],
        correctAnswer: 'Vali',
      },
      {
        question: 'Who helped Rama find Sita?',
        options: ['Hanuman and Sugriva', 'Vali', 'Ravana', 'Indrajit'],
        correctAnswer: 'Hanuman and Sugriva',
      },
      {
        question: 'Who is Hanuman\'s father?',
        options: ['Vayu', 'Indra', 'Surya', 'Varuna'],
        correctAnswer: 'Vayu',
      },
      {
        question: 'Whom did Rama assist to become King?',
        options: ['Sugriva', 'Vali', 'Angada', 'Nala'],
        correctAnswer: 'Sugriva',
      },
      {
        question: 'Where did Rama meet Hanuman?',
        options: ['Rishyamukha Parvata', 'Pampa Sarovar', 'Ayodhya', 'Lanka'],
        correctAnswer: 'Rishyamukha Parvata',
      },
    ],
  },

  // Sanskrit (Sample Questions)
  sa: {
    1: [
      {
        question: 'श्रीरामस्य पिता कः?',
        options: ['दशरथः', 'जनकः', 'विश्वामित्रः', 'भरतः'],
        correctAnswer: 'दशरथः',
      },
      {
        question: 'दशरथस्य कति पुत्राः आसन्?',
        options: ['द्वौ', 'त्रयः', 'चत्वारः', 'पञ्च'],
        correctAnswer: 'चत्वारः',
      },
      {
        question: 'रामस्य माता का?',
        options: ['कौसल्या', 'कैकेयी', 'सुमित्रा', 'मन्दोदरी'],
        correctAnswer: 'कौसल्या',
      },
      {
        question: 'कः ऋषिः रामस्य जन्म कथितवान्?',
        options: ['विश्वामित्रः', 'वसिष्ठः', 'वाल्मीकिः', 'नारदः'],
        correctAnswer: 'वसिष्ठः',
      },
      {
        question: 'रामः कां राक्षसीं हतवान्?',
        options: ['ताटका', 'शूर्पणखा', 'मन्दोदरी', 'तारा'],
        correctAnswer: 'ताटका',
      },
    ],
    2: [
      {
        question: 'रामः किमर्थं वनं गतवान्?',
        options: ['कैकेय्याः वरदानेन', 'स्वइच्छया', 'दशरथस्य आज्ञया', 'शापेन'],
        correctAnswer: 'कैकेय्याः वरदानेन',
      },
      {
        question: 'वनवासः कति वर्षाणि आसीत्?',
        options: ['दश', 'द्वादश', 'चतुर्दश', 'षोडश'],
        correctAnswer: 'चतुर्दश',
      },
      {
        question: 'रामस्य सह कः गतवान्?',
        options: ['सीता लक्ष्मणः च', 'भरत शत्रुघ्नः च', 'केवला सीता', 'केवलः लक्ष्मणः'],
        correctAnswer: 'सीता लक्ष्मणः च',
      },
      {
        question: 'दशरथस्य मृत्युः कथं अभवत्?',
        options: ['पुत्रवियोगेन', 'युद्धेन', 'रोगेन', 'वृद्धाप्येन'],
        correctAnswer: 'पुत्रवियोगेन',
      },
    ],
    3: [
      {
        question: 'सीताम् कः अपहृतवान्?',
        options: ['रावणः', 'कुम्भकर्णः', 'इन्द्रजित्', 'विभीषणः'],
        correctAnswer: 'रावणः',
      },
      {
        question: 'स्वर्णमृगः कः आसीत्?',
        options: ['मारीचः', 'सुबाहुः', 'ताटका', 'कबन्धः'],
        correctAnswer: 'मारीचः',
      },
      {
        question: 'सीतायाः रक्षणार्थं कः पक्षी युद्धं कृतवान्?',
        options: ['जटायुः', 'गरुडः', 'सम्पातिः', 'हंसः'],
        correctAnswer: 'जटायुः',
      },
      {
        question: 'शबरी कस्य भक्ता आसीत्?',
        options: ['रामस्य', 'शिवस्य', 'कृष्णस्य', 'दुर्गायाः'],
        correctAnswer: 'रामस्य',
      },
    ],
    4: [
      {
        question: 'किष्किन्धायाः राजा कः आसीत्?',
        options: ['वाली', 'सुग्रीवः', 'हनुमान्', 'अङ्गदः'],
        correctAnswer: 'वाली',
      },
      {
        question: 'रामः कस्य साहाय्यं कृतवान्?',
        options: ['सुग्रीवस्य', 'वालिनः', 'अङ्गदस्य', 'नलस्य'],
        correctAnswer: 'सुग्रीवस्य',
      },
      {
        question: 'हनुमतः पिता कः?',
        options: ['वायुः', 'इन्द्रः', 'सूर्यः', 'वरुणः'],
        correctAnswer: 'वायुः',
      },
      {
        question: 'हनुमान् रामं कुत्र अमिलत्?',
        options: ['ऋष्यमुखपर्वते', 'पम्पासरोवरे', 'अयोध्यायाम्', 'लङ्कायाम्'],
        correctAnswer: 'ऋष्यमुखपर्वते',
      },
    ],
  },
}
