import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function FetchItem () {
  const [content, setContent] = useState([])
  const [cache, setCache] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    const fixspace = category.replace(/_/g, ' ')
    if (!cache[category]) {
      setLoading(true)
      fetch(`https://fakestoreapi.com/products/category/${fixspace}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`${res.status}`)
          }
          return res.json()
        }
        )
        .then(json => {
          setContent(json)
          setCache((pre) => ({
            ...pre, [category]: json
          }))
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    } else {
      setContent(cache[category])
      console.log(cache)
    }
  }, [category, cache])

  return { content, error, loading }
}
