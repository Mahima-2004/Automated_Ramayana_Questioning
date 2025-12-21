# Ramayana Learning Platform

An interactive web application for learning the Ramayana epic through chapters, PDFs, and automated questioning.

## Features

- 🔐 **User Authentication**: Login and Register pages
- 📚 **Chapter Navigation**: Browse through 7 chapters of Ramayana
- 📄 **PDF Viewer**: Read chapters in PDF format
- ❓ **Automated Quizzing**: Test your knowledge after each chapter
- 🎨 **Animated Background**: Beautiful animated scenes inspired by Ramayana

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file (optional, for production):
```
JWT_SECRET=your-secret-key-here
```

3. Add PDF files to `public/chapters/`:
   - chapter1.pdf
   - chapter2.pdf
   - chapter3.pdf
   - chapter4.pdf
   - chapter5.pdf
   - chapter6.pdf
   - chapter7.pdf

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Account

- Email: `demo@example.com`
- Password: `demo123`

Or create a new account using the Register page.

## Project Structure

```
ramayana-learning/
├── app/
│   ├── api/
│   │   └── auth/          # Authentication API routes
│   ├── chapter/[id]/       # Individual chapter pages
│   ├── dashboard/          # Main dashboard after login
│   ├── login/              # Login page
│   ├── register/           # Registration page
│   └── page.tsx            # Home page
├── components/
│   ├── AnimatedBackground.tsx  # Background animation
│   ├── PDFViewer.tsx           # PDF viewing component
│   └── Quiz.tsx                 # Quiz component
├── data/
│   ├── chapters.ts         # Chapter data
│   └── questions.ts        # Quiz questions
└── public/
    └── chapters/           # PDF files location
```

## Chapters

1. **Bala Kanda** - The Childhood Chapter
2. **Ayodhya Kanda** - The Ayodhya Chapter
3. **Aranya Kanda** - The Forest Chapter
4. **Kishkindha Kanda** - The Kishkindha Chapter
5. **Sundara Kanda** - The Beautiful Chapter
6. **Yuddha Kanda** - The War Chapter
7. **Uttara Kanda** - The Final Chapter

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **react-pdf** - PDF viewing
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication

## Future Enhancements

- Database integration for user data persistence
- Progress tracking across chapters
- Leaderboard for quiz scores
- More interactive animations
- Audio narration
- Multi-language support

## License

This project is open source and available for educational purposes.








