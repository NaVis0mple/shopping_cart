import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SpinLoader from '../spinloader'

const ListStyle = styled.ul`
  display:grid;
  list-style-type:none;
  padding:0;
  gap:5px;
`
const Aa = styled(Link)`
&:visited ,&:link {
  color: black;
  text-decoration:none;
}
&:hover {
  background-color:gray
}
`

export default function Categories () {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('server error')
        }
        return res.json()
      })
      .then(json => setCategories(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])
  if (error) return <p>{error.message}</p>
  return (
    <ListStyle>

      {loading
        ? <SpinLoader />
        : categories.map((category) =>
          <li key={category}>
            <Aa to={`/category/${category.replace(/ /g, '_')}`}>{category}</Aa>
          </li>
        )}
    </ListStyle>
  )
}
