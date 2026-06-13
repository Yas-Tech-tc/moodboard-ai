function ColorPalette({ colors }) {
  return (
    <div className="max-w-2xl mx-auto px-4 mt-10">
      <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-4">
        Palette de couleurs
      </h2>
      <div className="flex gap-3">
        {colors.map((color) => (
          <div key={color} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full h-16 rounded-xl cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => navigator.clipboard.writeText(color)}
              title="Cliquer pour copier"
            />
            <span className="text-gray-400 text-xs">{color}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-xs mt-2">
        Clique sur une couleur pour copier le code HEX
      </p>
    </div>
  )
}

export default ColorPalette