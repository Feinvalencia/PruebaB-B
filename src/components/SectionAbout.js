import styled from 'styled-components'
import {DocumentBulletList} from '@styled-icons/fluentui-system-regular/DocumentBulletList'
import {RightArrowCircle} from '@styled-icons/boxicons-regular/RightArrowCircle'
const SectionAbout = () =>{

    const Container= styled.div`
        display: flex;
        background-color: white;
        border-radius: 5px;
        margin-bottom: 2rem;
        padding: 4rem 10rem;
    `
    const ContainerImg = styled.div`
        width: 40%;
    `
    const Cube = styled.div`
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        row-gap: 10px;
        img{
            border-radius: 5px;
        }
    `
    const Document = styled(DocumentBulletList)`
    color :white;
    width: 1.3rem;

`
    const ButtonMore = styled.div`
    cursor: pointer;
    border-radius: 4px;
    background-color:#1591c3;
    color: white;
    text-align: center;
    width: 9rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 0.3rem 0rem;
    font-weight: 700;
    font-size: 1.3rem;
    border: 2px solid #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 1px 2px 5px rgb(0 0 0 / 30%);
    &:hover{
        color: #434345;
        border: 3px solid #1591c3;
        background-color: white;

        svg{
            fill: #434345;
        }
    }
`
const ContainerText = styled.div`
    padding: 0rem 3rem;
    width: 60%;
    h1{
        
    }
`
const ButtonReading = styled(ButtonMore)`
    width: 15rem;   
    position: relative;
    
`
const Arrow = styled(RightArrowCircle)`
    color: white;
    width: 1.3rem;

`



    return(
        <Container>
            <ContainerImg>
                <h3>Interesting stuff</h3>
                <Cube>
                    <img src="./images/pic04.jpg"/>
                    <img src="./images/pic05.jpg"/>
                    <img src="./images/pic06.jpg"/>
                    <img src="./images/pic07.jpg"/>
                </Cube>
                <ButtonMore>
                    <Document/>
                     More
                </ButtonMore>
            </ContainerImg>
            <ContainerText>
                <h1>So what's this all about</h1>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>

                <ButtonReading>
                    <Arrow/>
                    Continue Reading
                </ButtonReading>
            </ContainerText>
        </Container>
    )
}

export default SectionAbout