const fetcher = (url, settings) => {
  let requestUrl = `http://localhost:3000${url}`;
  console.log(process)
  if (process.env.VERCEL_URL) {
    requestUrl = `${process.env.VERCEL_URL}${url}`
  }
  return fetch(requestUrl, settings).then(res => res.json())
}

export default fetcher