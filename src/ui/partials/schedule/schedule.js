import { YellowSection } from "../../components/sections/section"
import { H1, Ul, Li } from "../../styles/default-styles/default-styles"


const Schedule = () => {
    return(
        <YellowSection>
            <div>
                <H1>Horários</H1>
                <Ul>
                    <Li>
                        <h2>Secretaria</h2>
                        <h4>Segunda, terça, quarta e sexta</h4>
                        <p>8h às 12h e das 14h às 18h</p>
                        <h4>Quinta e sábado</h4>
                        <p>8h às 12h</p>
                    </Li>
                    <Li>
                        <h2>Missas</h2>
                        <h4>Terça e sexta</h4>
                        <p>Missa às 19h</p>
                        <h4>Sábado</h4>
                        <p>Missa às 17h - Comunidade 01</p>
                        <p>Missa às 19h - Comunidade 02</p>
                        <h4>Domingo</h4>
                        <p>Missa às 7h, 10h e 18:30</p>
                    </Li>
                    <Li>
                        <h2>Confissões</h2>
                        <h4>Todas as terças</h4>
                        <p>14:30 às 18h</p>
                    </Li>
                    <Li>
                        <h2>Outros</h2>
                        <h4>Quarta</h4>
                        <p>De quinze em quinze dias Missa da Misericórdia - 19h</p>
                        <p>De quinze em quinze dias Adoração pela Vida - 19h</p>
                    </Li>
                </Ul>
            </div>
        </YellowSection>
    )
}

export { Schedule }