import styled from 'styled-components'
import {DocumentBulletList} from '@styled-icons/fluentui-system-regular/DocumentBulletList'
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
    width: 1.7rem;

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
    padding: 0.5rem 0rem;
    font-weight: 700;
    font-size: 1.5rem;
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
            <div>
                <h1>So what's this all about</h1>
                <p></p>
            </div>
        </Container>
    )
}

export default SectionAbout