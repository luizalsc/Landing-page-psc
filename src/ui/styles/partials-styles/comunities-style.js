import styled from "styled-components"


export const StyledComunitiesContainer = styled.div`
    display: grid;
    grid: "title title title title title" 10rem
        ". card-1 . card-2 ." auto / 1fr 1.25fr 0.5fr 1.25fr 1fr;
    width: 100vw;

h1 {
    grid-area: title;
}

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nsc{
    grid-area: card-1;
    margin: 0;
}

.sj{
    grid-area: card-2;
    margin: 0;
}

img{
    margin: 0;
}

`