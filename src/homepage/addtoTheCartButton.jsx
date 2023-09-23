import { useContext } from 'react'
import { CartContext } from '../globalContext'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  display:flex;
  justify-content:space-evenly;
`
const Button = styled.button`
  &{
  width:40%;
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 1px 5px 1px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
 }
  &:hover,
  &:focus {
  opacity: .75;
}
`

export default function AddToCartButton ({ itemTitle, itemPrice }) {
  const { cart, setCart } = useContext(CartContext)

  function handleChange () {
    console.log('hi')
  }
  function handleButtonIncrement () {
    console.log(cart)
    setCart((prevCart) => ({
      ...prevCart,
      [itemTitle]: {
        ...prevCart[itemTitle],
        order: (prevCart[itemTitle]?.order || 0) + 1,
        price: itemPrice
      }
    }))
  }
  function handleButtonDecrement () {
    setCart((prevCart) => ({
      ...prevCart,
      [itemTitle]: {
        ...prevCart[itemTitle],
        order: (prevCart[itemTitle]?.order || 0) - 1,
        price: itemPrice
      }
    }))
  }

  return (
    <Container>
      <Button disabled={cart[itemTitle] ? cart[itemTitle]?.order <= 0 : true} onClick={() => handleButtonDecrement()}>-</Button>
      <div>{cart[itemTitle]?.order || 0}</div>
      <Button onClick={() => handleButtonIncrement()}>+</Button>
    </Container>
  )
}
