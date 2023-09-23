import { useContext } from 'react'
import NavigateBar from '../navigateBar'
import { CartContext } from '../globalContext'
import styled from 'styled-components'

const List = styled.li`
    display:grid;
    grid-template-columns:3fr 1fr 1fr 1fr;
`
const Container = styled.ul`
    width:70vw;
    margin: 0 auto;
    padding:0;
`
const Total = styled.div`
  font-size:150px;
`
const Button = styled.button`
  padding:10px;
  font-size:75px
`

export default function Cartpage () {
  function Content () {
    const { cart } = useContext(CartContext)

    const totalCost = Object.entries(cart)
      .filter(([key, value]) => value.order !== 0)
      .reduce((acc, [key, value]) => { return acc + (value.order * value.price) }, 0)

    return (
      <Container>
        {Object.entries(cart)
          .filter(([key, value]) => value.order !== 0)
          .map(([key, value]) => (
            <List key={key}>
              <div>{key}</div>
              <div>{value.order}</div>
              <div>${value.price}</div>
              <div>{value.order * value.price}</div>
            </List>
          ))}
        <Total>Total:${totalCost}</Total>
        <Button>proceed to checkout</Button>
      </Container>
    )
  }

  return (
    <>
      <NavigateBar />
      <Content />
    </>
  )
}
