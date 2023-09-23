import { Outlet } from 'react-router-dom'
import Categories from '../fakestoreData/fetchCategories'
import NavigateBar from '../navigateBar'
import styled from 'styled-components'

const Container = styled.section`
  display:grid;
  grid-template-rows: 50px 5fr;
  grid-template-columns:1fr 5fr;
  height:95vh;
`
const Navi = styled.nav`
  grid-row:1 /2;
  grid-column:1/3;
`

export default function Homepage () {
  return (
    <Container>
      <Navi>
        <NavigateBar />
      </Navi>
      <div className='category'>
        <Categories />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </Container>
  )
}
