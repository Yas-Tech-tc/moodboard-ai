import { useState } from "react"
import { getMoodBoardData } from "./services/gemini"
import { getImages } from "./services/unsplash"
import SearchBar from "./components/SearchBar"
import ColorPalette from "./components/ColorPalette"
import ImageGrid from "./components/ImageGrid"
import MoodInfo from "./components/MoodInfo"

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

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">

      <div className="text-center pt-16 pb-4">
        <h1 className="text-4xl font-bold">Mood Board AI</h1>
        <p className="text-gray-500 mt-2">Génère une identité visuelle en quelques secondes</p>
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <p className="text-red-400 text-center mt-6">{error}</p>
      )}

      {loading && (
        <p className="text-purple-400 text-center mt-10 animate-pulse">
          Génération en cours...
        </p>
      )}

      {moodData && !loading && (
        <>
          <MoodInfo description={moodData.description} fonts={moodData.fonts} />
          <ColorPalette colors={moodData.colors} />
          <ImageGrid images={images} />
        </>
      )}

    </div>
  )
}

export default App