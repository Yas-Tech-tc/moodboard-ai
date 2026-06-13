const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY

export async function getMoodBoardData(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Tu es un expert en design et identité visuelle.
            
L'utilisateur décrit une ambiance : "${prompt}"

Réponds UNIQUEMENT en JSON valide avec cette structure exacte :
{
  "colors": ["#hex1", "#hex2", "#hex3", "#hex4", "#hex5"],
  "fonts": ["NomPolice1", "NomPolice2"],
  "keywords": ["mot1", "mot2", "mot3"],
  "description": "Une phrase courte qui décrit l'ambiance"
}`
          }]
        }]
      })
    }
  )

  const data = await response.json()
  const text = data.candidates[0].content.parts[0].text
  const cleaned = text.replace(/```json|```/g, "").trim()
  return JSON.parse(cleaned)
}