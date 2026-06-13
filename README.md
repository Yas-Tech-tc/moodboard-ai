# Mood Board AI

A web application that generates visual mood boards from a text description. You type an emotion, a project idea, or an atmosphere, and the app returns a color palette, font suggestions, and thematic images that match what you described.

## Why I built this

I wanted to build something that combines AI and visual design in a practical way. As someone interested in both development and aesthetics, a mood board generator felt like a natural project.

## What it does

You type anything — a word, a feeling, a concept — and the app generates:

- A five-color palette with HEX codes you can copy by clicking
- Two typography suggestions from Google Fonts that match the mood
- Six curated images from Unsplash related to the keywords extracted from your description
- A short sentence describing the visual atmosphere

## Tech stack

- React with Vite
- Tailwind CSS v4
- OpenRouter API for AI text generation
- Unsplash API for images

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Yas-Tech-tc/moodboard-ai.git
cd moodboard-ai
npm install
```

Create a `.env` file at the root of the project:

VITE_GEMINI_KEY=your_openrouter_api_key
VITE_UNSPLASH_KEY=your_unsplash_access_key

Then start the development server:

```bash
npm run dev
```

## API keys

- OpenRouter: create a free account at openrouter.ai and generate a key
- Unsplash: register as a developer at unsplash.com/developers and create an application

## Project structure
src/
components/
SearchBar.jsx
ColorPalette.jsx
ImageGrid.jsx
MoodInfo.jsx
services/
gemini.js
unsplash.js
App.jsx
main.jsx
index.css

## Current limitations

The app uses free tier API keys which have rate limits. If you get an error after generating several mood boards in a row, wait a minute before trying again.

## Roadmap

- Export the mood board as a PNG file
- Load the suggested fonts dynamically from Google Fonts
- Add a history of previously generated mood boards
- Deploy on Vercel
