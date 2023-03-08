import { Section } from "../../components/sections/section"
import { H1 } from '../../styles/default-styles/default-styles'
import { LinkDefault } from "../../components/links/default-link"

const Comunities = () => {
    return (
        <Section>
            <div>
                <H1>Comunidades</H1>
                <LinkDefault>Comunidade São José</LinkDefault>
                <LinkDefault>Comunidade Nossa Senhora do Carmo</LinkDefault>
            </div>
        </Section>
    )
}

export { Comunities }