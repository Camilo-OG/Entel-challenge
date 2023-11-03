import {TitleContainer, TitleLetter, TitleSpan, TitleStyledImg} from '../../styles/GlobalStyles'



export default function TitleForm() {
  return (
    <TitleContainer>
      <div>
        <TitleLetter>
          Formulario <TitleSpan>de Prueba</TitleSpan>
        </TitleLetter>
      </div>
      <div>
        <TitleStyledImg src='/Laptop.png'></TitleStyledImg>
      </div>
    </TitleContainer>
  )
}
