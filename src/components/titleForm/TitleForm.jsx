import {TitleContainer, TitleLetter, TitleSpan, TitleStyledImg} from '../../styles/GlobalStyles'

export default function TitleForm() {
  return (
    <TitleContainer>
      <TitleLetter>
        Formulario <TitleSpan>de Prueba</TitleSpan>
      </TitleLetter>
      <TitleStyledImg src='/Laptop.png'></TitleStyledImg>
    </TitleContainer>
  )
}
