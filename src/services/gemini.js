const API_KEY = import.meta.env.VITE_GEMINI_KEY

export async function getMoodBoardData(prompt) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b:free",
        messages: [{
          role: "user",
          content: `Tu es un expert en design et identité visuelle.
          
L'utilisateur décrit une ambiance : "${prompt}"

Réponds UNIQUEMENT en JSON valide avec cette structure exacte :
{
  "colors": ["#hex1", "#hex2", "#hex3", "#hex4", "#hex5"],
  "fonts": ["NomPolice1", "NomPolice2"],
  "keywords": ["mot1", "mot2", "mot3"],
  "description": "Une phrase courte qui décrit l'ambiance"
}`
        }]
      })
    }
  )

  const data = await response.json()
  console.log("API response:", data)
  const text = data.choices[0].message.content
  const cleaned = text.replace(/```json|```/g, "").trim()
  return JSON.parse(cleaned)
}