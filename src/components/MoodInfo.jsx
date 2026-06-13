function MoodInfo({ description, fonts }) {
  return (
    <div className="max-w-2xl mx-auto px-4 mt-10">
      <div className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-6">

        <div>
          <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-2">
            Ambiance
          </h2>
          <p className="text-white text-lg">
            {description}
          </p>
        </div>

        <div>
          <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-3">
            Typographies suggérées
          </h2>
          <div className="flex gap-3">
            {fonts.map((font) => (
              <div key={font} className="bg-gray-700 rounded-xl px-4 py-3 flex-1 text-center">
                <p className="text-white font-medium">{font}</p>
                <p className="text-gray-400 text-xs mt-1">Google Fonts</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default MoodInfo