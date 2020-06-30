const fetcher = (url, settings) => {
  const newSettings = {
    ...settings,
    headers: {
      'Authorization': 'Bearer ry-VoftT3hkoD2Qzrwr5kvdil3RJaJeJDA-c'
    },
  }
  const newUrl = `https://gorest.co.in/public-api${url}`
  return fetch(newUrl, newSettings).then(res => res.json()).then(res => res.result)
}

export default fetcher