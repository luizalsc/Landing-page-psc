import { StyledUl} from "../../styles/navbar/styled-menu"
import { LinkDefault } from "../links/default-link"

const Menu = () => {
    return(
        <StyledUl>
          <li><LinkDefault>Sobre</LinkDefault></li>
          <li><LinkDefault>Horários</LinkDefault></li>
          <li><LinkDefault>Comunidades</LinkDefault></li>
          <li><LinkDefault>Pastorais</LinkDefault></li>
          <li><LinkDefault>Dúvidas frequentes</LinkDefault></li>
        </StyledUl>
    )
}

export { Menu }