import styled from 'styled-components'
import {RightArrowCircle} from '@styled-icons/boxicons-regular/RightArrowCircle'
import {QuestionMarkCircleOutline} from '@styled-icons/evaicons-outline/QuestionMarkCircleOutline'

const ContWhite = styled.div`
    background-color: white;
    display: flex;
    padding: 4rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`
const BoxText = styled.div`
    width: 60%;
    h1{
        font-size: 3.5rem;
        margin: 0;
    }
    p{
        font-size: 2.5rem;
        margin: 0;
    }
`
const BoxButtons = styled.div`
    width: 40%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
`
const Arrow = styled(RightArrowCircle)`
    color :#434345;
    width: 2rem;
    right: 20px;
    position: absolute;
`
const ButtonGo = styled.div`
    cursor: pointer;
    border-radius: 4px;
    color :#434345;
    text-align: left;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    position: relative;
    border: 1px solid #1591c3;
    transition: 0.4s;
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
    &:hover{
        color: white;
        border: 2px solid #fff;
        background-color:#1591c3;
        svg{
            fill: white;
        }
    }
`
const Question = styled(QuestionMarkCircleOutline)`
    color :#434345;
    width: 2rem;
    right: 20px;
    position: absolute;
    &:hover{
        color: white;
    }
`
const ButtonMore = styled(ButtonGo)`
    color :#434345;
    background-color:#fff;
    &:hover{
        color: white;
        background-color:#1591c3;
        border: 2px solid #fff;
        svg{
            fill: white;
        }
    }
`
const SectionButtons = () =>{
    return(
        <ContWhite>
            <BoxText>
                <h1>Hi. This is lorem.</h1>
                <p>Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
            </BoxText>
            <BoxButtons>
                <ButtonGo>
                    Ok le'ts go
                    <Arrow/>
                </ButtonGo>
                <ButtonMore>
                    More info
                    <Question/>
                </ButtonMore>
            </BoxButtons>
        </ContWhite>
    )
}

    export default SectionButtons