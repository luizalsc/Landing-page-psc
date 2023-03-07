import { StyledSection } from "../../styles/sections/styled-section"

const Section = (props) => {
    return(
        <StyledSection>
            {props.children}
        </StyledSection>
    )
}

export { Section }

