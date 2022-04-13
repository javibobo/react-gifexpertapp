export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=i5Die1i1LbL99S8zJPwBXxte4BOSsoJ6`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })

  return gifs;
}