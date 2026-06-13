function ImageGrid({ images }) {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-10">
      <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-4">
        Inspirations visuelles
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img) => (
          <div key={img.id} className="relative group overflow-hidden rounded-xl">
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-2">
              <a href={img.authorLink} target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                Photo : {img.author}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrid