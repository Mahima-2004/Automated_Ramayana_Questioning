# Chatbot API Setup Guide

## Option 1: Groq API (Recommended - FREE)

Groq offers a free tier with no quota limits. This is the recommended option.

### Step 1: Get Your Groq API Key

1. Go to [Groq Console](https://console.groq.com/)
2. Sign up or log in (it's free!)
3. Navigate to [API Keys](https://console.groq.com/keys)
4. Click "Create API Key"
5. Copy the API key

### Step 2: Add API Key to Your Project

1. Create or open the `.env.local` file in the root directory
2. Add the following line:

```
GROQ_API_KEY=your-actual-api-key-here
```

**Example:**
```
GROQ_API_KEY=gsk_abc123xyz456def789ghi012jkl345mno678pqr901stu234vwx567
```

### Step 3: Restart the Server

1. Stop the current server (press `Ctrl+C`)
2. Start it again: `npm run dev`

---

## Option 2: OpenAI API (Requires Credits)

The chatbot can also use OpenAI (ChatGPT) API, but requires credits in your account.

### Step 1: Get Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to [API Keys](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Copy the API key (it starts with `sk-`)
6. **Important:** Add credits to your account (billing required)

### Step 2: Add API Key to Your Project

1. Create or open the `.env.local` file in the root directory
2. Add the following line:

```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Example:**
```
OPENAI_API_KEY=sk-abc123xyz456def789ghi012jkl345mno678pqr901stu234vwx567
```

### Step 3: Restart the Server

**IMPORTANT:** After adding the API key, you MUST restart your development server:

1. Stop the current server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`

### Step 4: Test the Chatbot

1. Open your website
2. Click the 💬 button (chatbot icon)
3. Ask a question about Ramayana
4. The chatbot should respond in Kannada

## How It Works

The chatbot will:
1. **First try Groq API** (if `GROQ_API_KEY` is set) - Free, fast, no quota
2. **Fallback to OpenAI** (if `OPENAI_API_KEY` is set and Groq fails) - Requires credits

You can use either one or both. If both are set, Groq will be tried first.

## Troubleshooting

### "API key is not set"
- Make sure the `.env.local` file exists in the root directory
- Check that the variable name is exactly `GROQ_API_KEY` or `OPENAI_API_KEY` (case-sensitive)
- Verify there are no spaces around the `=` sign
- Restart the server after adding the key

### "API error" or "Connection failed"
- Check your internet connection
- Verify your API key is valid and active
- For OpenAI: Make sure you have credits in your account
- Check the terminal for detailed error messages

### "You exceeded your current quota" (OpenAI)
- This means your OpenAI account has no credits
- **Solution:** Use Groq API instead (it's free!)
- Get Groq API key from: https://console.groq.com/keys
- Add `GROQ_API_KEY=your-key` to `.env.local`
- Restart the server

### Still not working?
- Check the terminal output for debug messages
- Verify the API key format:
  - Groq: Usually starts with `gsk_`
  - OpenAI: Starts with `sk-`
- Make sure you restarted the server after adding the key

## Notes

- **Groq API**: Uses Llama 3.1 8B model - Free, fast, no quota limits
- **OpenAI API**: Uses GPT-3.5-turbo model - Requires credits, but very accurate
- All responses are in Kannada language
- The chatbot is context-aware and knows which chapter you're reading
- No local training or data storage - all requests go directly to the API
