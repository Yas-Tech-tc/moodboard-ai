const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY

export async function getImages(keywords) {
  const query = keywords.join(" ")
  
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=6&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`
      }
    }
  )

  const data = await response.json()
  return data.results.map(img => ({
    id: img.id,
    url: img.urls.regular,
    thumb: img.urls.thumb,
    alt: img.alt_description,
    author: img.user.name,
    authorLink: img.user.links.html
  }))
}