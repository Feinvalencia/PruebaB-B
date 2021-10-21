import styled from 'styled-components'
import {TwitterSquare} from '@styled-icons/fa-brands/TwitterSquare'
import {FacebookSquare} from '@styled-icons/fa-brands/FacebookSquare'
import {InstagramSquare} from '@styled-icons/fa-brands/InstagramSquare'
import {PinterestSquare} from '@styled-icons/fa-brands/PinterestSquare'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem;
    h3{
        font-weight: 700;
    }
    div{
        margin: 1rem 0rem;
    }
    a{
        color: #606060;;
    }
`

const Twitter = styled(TwitterSquare)`
    color :#434345;
    width: 2rem;
    transition: 1s ease;
    cursor: pointer;
    &:hover{
        color: black;
    }
`
const Facebook = styled(FacebookSquare)`
    color :#434345;
    width: 2rem;
    transition: 1s ease;
    cursor: pointer;
    &:hover{
        color: black;
    }
`
const Instagram = styled(InstagramSquare)`
    color :#434345;
    width: 2rem;
    transition: 1s ease;
    cursor: pointer;
    &:hover{
        color: black;
    }
`
const Pinteres = styled(PinterestSquare)`
    color :#434345;
    width: 2rem;
    transition: 1s ease;
    cursor: pointer;
    &:hover{
        color: black;
    }
`
const BoxIcons = styled.div`
    display: flex;
    justify-content: space-between;
`
const Footer = () =>{

    return(
        <Container>
            <div>
                <h3>Ramdom stuff</h3>
                <div>
                    <a href="#">Etiam feugiat condimentum</a>
                </div>
                <div>
                    <a href="#">Aliquam imperdiet suscipit odio</a>
                </div>
                <div>
                    <a href="#">Sed porttitor cras in erat nec</a>
                </div>
                <div>
                    <a href="#">Felis varius pellentesque potenti</a>
                </div>
                <div>
                    <a href="#">Nullam scelerisque blandit leo</a>
                </div>
            </div>
            <div>
                <h3>Ramdom stuff</h3>
                <div>
                    <a href="#">Etiam feugiat condimentum</a>
                </div>
                <div>
                    <a href="#">Aliquam imperdiet suscipit odio</a>
                </div>
                <div>
                    <a href="#">Sed porttitor cras in erat nec</a>
                </div>
                <div>
                    <a href="#">Felis varius pellentesque potenti</a>
                </div>
                <div>
                    <a href="#">Nullam scelerisque blandit leo</a>
                </div>
            </div>
            <div>
                <h3>Ramdom stuff</h3>
                <div>
                    <a href="#">Etiam feugiat condimentum</a>
                </div>
                <div>
                    <a href="#">Aliquam imperdiet suscipit odio</a>
                </div>
                <div>
                    <a href="#">Sed porttitor cras in erat nec</a>
                </div>
                <div>
                    <a href="#">Felis varius pellentesque potenti</a>
                </div>
                <div>
                    <a href="#">Nullam scelerisque blandit leo</a>
                </div>
            </div>
            <div>
                <h3>Contact Us</h3>
                <BoxIcons>
                    <Twitter/>
                    <Facebook/>
                    <Instagram/>
                    <Pinteres/>
                </BoxIcons>
                <div>
                    <p>1234 Fictional Road</p>
                </div>
                <div>
                    <p>Nashville, TN 00000</p>
                </div>
                <div>
                    <p>(888) 555-0000</p>
                </div>
            </div>
        </Container>

    )
}

export default Footer