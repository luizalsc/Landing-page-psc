import { Section } from "../../components/sections/section"
import { H1, P, Img } from "../../styles/default-styles/default-styles"

const About = () => {
    return(
        <Section>
            <div>
                <H1>Sobre</H1>
                <P>Criada pelo Decreto 01/1979, do terceiro Arcebispo de Teresina, Dom José Freire Falcão, a Paróquia de São Cristóvão veio atender a muitas reivindicações dos católicos residentes no bairro de São Cristóvão e áreas adjacentes, liderados principalmente por casais encontristas.</P>

                <P>Ao ser criada, não existia no bairro de São Cristóvão e nas imediações nenhuma igreja que pudesse servir de matriz. Assim, a primeira missa foi celebrada pelo Arcebispo Dom José Freire Falcão no pátio da Unidade Escolar Professora Angelina Leal, em 30 de setembro de 1979, um dia após a assinatura do Decreto de criação da Paróquia.</P>

                <P>Era grande o entusiasmo da comunidade com a criação do local. Não demorou mais de uma semana para ser instalada uma Comissão Paroquial Provisória que trataria de prover os meios para funcionamento das atividades e adotaria providências para construção da Igreja Matriz. Com efeito, em 6 de outubro de 1979, essa comissão já se mobilizava para oferecer condições dignas para a residência do Pároco no seio da comunidade. A casa paroquial, embora simples, é fruto do esforço e dedicação de muitos paroquianos.</P>

                <P>O primeiro Pároco foi o padre Manuel Matusalém que, com menos de um ano de atividades começou a enfrentar problemas de saúde, tendo que se ausentar várias vezes para tratamento a partir de junho de 1980.
                </P>
            </div>
            <div>
                <Img src='../../../imgs/entrada-da-igreja.jpg'></Img>
            </div>
        </Section>
    )
}

export { About }