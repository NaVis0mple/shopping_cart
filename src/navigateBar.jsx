import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiCart, mdiGithub, mdiHomeVariant } from '@mdi/js'

const StyleUl = styled.ul`
    display:flex;
    list-style-type:none;
    padding:0;
  `
const Container = styled.section`
    display:flex;
    justify-content:flex-start;
    align-items:baseline;
  `
const Bb = styled.li`
  &:hover {
    background-color:gray
}
`
const Aa = styled(Link)`
  &:visited ,&:link {
    color: black;
    text-decoration:none;
}

`
export default function NavigateBar () {
  return (
    <Container>
      <div>FakeStore</div>
      <StyleUl>
        <Bb>
          <Aa to='/category/electronics'><Icon path={mdiHomeVariant} size={1} /></Aa>
        </Bb>
        <Bb>
          <Aa to='/cartpage'><Icon path={mdiCart} size={1} /></Aa>
        </Bb>
        <Bb>
          <Aa to='https://github.com/NaVis0mple/shopping_cart'><Icon path={mdiGithub} size={1} /></Aa>
        </Bb>
      </StyleUl>
    </Container>
  )
}
