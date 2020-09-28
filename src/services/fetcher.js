const fetcher = (url, settings) => {
  const requestUrl = `http://localhost:3000${url}`
  return fetch(requestUrl, settings).then(res => res.json())
}

export default fetcher