import fetch from 'node-fetch'

const showMatchedResults = async (req, res) => {
  const response  = await fetch(
    'https://api.github.com/users/lokita282/received_events'
  )
  const data = await response.json()
  await res.json(data)
}

export { showMatchedResults }
