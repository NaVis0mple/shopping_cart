import FetchItem from '../fakestoreData/fetchItem'
import styled from 'styled-components'
import AddToCartButton from './addtoTheCartButton'
import SpinLoader from '../spinloader'

const Card = styled.div`
    border-bottom:1px black solid;
    border-left:1px black solid;
  &:nth-child(1),&:nth-child(2),&:nth-child(3){
    border-top:1px black solid;
  }
  &:nth-child(3n),&:last-child{
    border-right:1px black solid;
  }
  img {
    height:300px;
    width:300px;
    object-fit:contain;
  }
`
const Line = styled.div`
    border-top:1px black solid;
    height:5vh;
    text-overflow:clip;
`
const Mid = styled.div`
    text-align:center;
`
const Container = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    overflow-y:auto;
`
const ContainerInfo = styled.div`
    display:grid;
    grid-template-rows:2fr 1fr 1fr;
    height:10vh;
`

export default function Content () {
  const { content, error, loading } = FetchItem()
  if (error) {
    return `${error.message}`
  }
  if (loading) {
    return <SpinLoader />
  }
  return (
    <Container>
      {
         content.map((item) =>
           <Card key={item.id}>
             <img src={item.image} alt='' />
             <ContainerInfo>
               <Line>{item.title}</Line>
               <Mid>${item.price}</Mid>
               <AddToCartButton itemTitle={item.title} itemPrice={item.price} />
             </ContainerInfo>
           </Card>
         )
}
    </Container>
  )
}
