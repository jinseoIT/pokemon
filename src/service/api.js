export const API_END_POINT = 'https://pokeapi.co/api/v2/pokemon'
export const IMG_END_POINT = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`
    const response = await fetch(fullUrl, options)

    if (response.ok) {
      const json = await response.json()
      return json;
    }
    throw new Error('API 통신 실패')
  } catch (e) {
    alert(e.message);
  }
}

export const getPoketList = async (offset = 0, limit = 20) => {
  // https://pokeapi.co/api/v2/pokemon?limit=19&offset=0
  return request(`?offset=${offset}&limit=${limit}`)
}