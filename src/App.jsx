import { useState } from "react"
import { getMoodBoardData } from "./services/gemini"
import { getImages } from "./services/unsplash"
import SearchBar from "./components/SearchBar"
import ColorPalette from "./components/ColorPalette"
import ImageGrid from "./components/ImageGrid"
import MoodInfo from "./components/MoodInfo"
import domtoimage from "dom-to-image"

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [moodData, setMoodData] = useState(null)
  const [images, setImages] = useState([])

  async function handleSearch(prompt) {
    setLoading(true)
    setError(null)
    try {
      const data = await getMoodBoardData(prompt)
      const imgs = await getImages(data.keywords)
      setMoodData(data)
      setImages(imgs)
    } catch (err) {
      setError("Une erreur est survenue, réessaie.")
    } finally {
      setLoading(false)
    }
  }
  async function handleExport() {
  const element = document.getElementById("moodboard-result")
  const dataUrl = await domtoimage.toPng(element, { scale: 2 })
  const link = document.createElement("a")
  link.download = "moodboard.png"
  link.href = dataUrl
  link.click()
}

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">

      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <span className="text-purple-400 font-semibold tracking-wide">MoodBoard AI</span>
        <span className="text-gray-600 text-sm">Powered by AI</span>
      </div>

      <div className="text-center pt-16 pb-4 px-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Mood Board AI
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Décris une ambiance et laisse l'IA créer ton identité visuelle
        </p>
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <p className="text-red-400 text-center mt-6">{error}</p>
      )}

      {loading && (
        <div className="text-center mt-16">
          <div className="inline-block w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Génération en cours...</p>
        </div>
      )}

      {moodData && !loading && (
        <div id="moodboard-result">
          <MoodInfo description={moodData.description} fonts={moodData.fonts} />
          <ColorPalette colors={moodData.colors} />
          <ImageGrid images={images} />
          <div className="flex justify-center mt-10">
        <button
          onClick={handleExport}
          className="bg-white text-gray-950 font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
          Exporter en PNG
        </button>
  </div>
</div>
      )}

    </div>
  )
}

export default App