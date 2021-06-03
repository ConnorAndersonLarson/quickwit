export const getArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: {
      'accept': 'application/json'
    }
  })
}

export const filteredArticles = (type) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${process.env.REACT_APP_API_KEY}`, {
    headers: {
      'accept': 'application/json'
    }
  })
}
