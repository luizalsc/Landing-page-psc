import { Section } from "../../components/sections/section"
import { H1, RedLink, Img } from '../../styles/default-styles/default-styles'
import { StyledComunitiesContainer } from "../../styles/partials-styles/comunities-style"

const Comunities = () => {
    return (
        <Section>
            <StyledComunitiesContainer>
                <H1>Comunidades</H1>
                <div  className='card sj'>
                    <Img src='../../../imgs/capela-nsc.png'></Img>
                    <RedLink>Comunidade São José</RedLink>
                </div>
                <div  className='card nsc'>
                    <Img src='../../../imgs/capela-sj.png'></Img>
                    <RedLink>Comunidade Nossa Senhora do Carmo</RedLink>
                </div>
            </StyledComunitiesContainer>
        </Section>
    )
}

export { Comunities }