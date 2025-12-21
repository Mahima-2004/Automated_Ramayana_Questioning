# How to Deploy Ramayana Website

The easiest way to host this Next.js application publicly is using **Vercel** (the creators of Next.js). It's free for personal projects.

## Prerequisites
- A [GitHub](https://github.com/) account
- A [Vercel](https://vercel.com/) account (sign up with GitHub)

## Step 1: Push Code to GitHub

1.  Initialize git (if not already done):
    ```bash
    git init
    ```
2.  Add all files:
    ```bash
    git add .
    ```
3.  Commit changes:
    ```bash
    git commit -m "Initial commit"
    ```
4.  Create a new repository on GitHub (name it e.g., `ramayana-website`).
5.  Link your local project to GitHub (replace `YOUR_USERNAME` with your actual username):
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/ramayana-website.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy on Vercel

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import the `ramayana-website` repository you just created.
4.  In the "Configure Project" screen:
    - **Framework Preset**: Next.js (should be auto-detected)
    - **Root Directory**: `./` (leave default)
    - **Build Command**: `npm run build` or `next build` (default is fine)
    - **Environment Variables**: Add any secrets if you have them in `.env.local` (e.g., database keys), otherwise skip this.
5.  Click **"Deploy"**.

## Step 3: Access Your Site

- Vercel will build your project. Once finished (usually 1-2 minutes), you will get a public URL like `https://ramayana-website.vercel.app`.
- You can share this link with anyone!

## Updates
Whenever you want to update the site, just commit and push your changes to GitHub:
```bash
git add .
git commit -m "New update"
git push
```
Vercel will detect the push and automatically redeploy your site.
