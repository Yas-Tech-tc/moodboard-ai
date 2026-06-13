function SearchBar({ onSearch, loading }) {
  function handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements.prompt.value.trim()
    if (value) onSearch(value)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 mt-12">
      <p className="text-gray-400 text-center mb-6">
        Décris une ambiance, un projet, une émotion...
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          name="prompt"
          type="text"
          placeholder="ex: forêt mystérieuse au crépuscule..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 px-6 py-3 rounded-xl font-medium transition-colors"
        >
          {loading ? "..." : "Générer"}
        </button>
      </form>
    </div>
  )
}

export default SearchBar