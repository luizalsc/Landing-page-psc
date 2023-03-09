import styled from "styled-components"
import { StyledLink } from "../link/default-link"

export const H1 = styled.h1`
font-size: 3rem;
padding: 1rem;
color: rgb(47,79,79)
`
export const P = styled.p`
font-size: 1.5rem;
`
export const Img = styled.img`
height: 30rem;
padding: 1.5rem;
margin-top: 9.5rem;
`
export const Ul = styled.ul`
display: flex;
width: 90vw;
justify-content: space-evenly;
`
export const Li = styled.li`
padding: 2rem;
width: 45rem;
`
export const RedLink = styled(StyledLink)`
color: rgb(255,250,250);
background-color: rgb(128,0,0);
border-radius: 5rem;
transition: color 0.2s ease;

&:hover{
    background-color: rgb(47,79,79);
    cursor: pointer;
}
`
