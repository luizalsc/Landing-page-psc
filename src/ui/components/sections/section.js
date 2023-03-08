import { StyledSection, StyledYellowSection } from "../../styles/sections/styled-section"

const Section = (props) => {
    return(
        <StyledSection>
            {props.children}
        </StyledSection>
    )
}

const YellowSection = (props) => {
    return(
        <StyledYellowSection>
            {props.children}
        </StyledYellowSection>
    )
}

export { Section, YellowSection }

