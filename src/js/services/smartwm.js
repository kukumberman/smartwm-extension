export default async function fetchFromNetlify(data) {
  const url = "https://modest-shaw-b5cb04.netlify.app/.netlify/functions/parsePrice"
  const response = await fetch(url, {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json"
    // },
    body: JSON.stringify(data),
  })
  return response.json()
}