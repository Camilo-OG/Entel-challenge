import Navbar from "../../components/navbar/Navbar"
import TitleForm from "../../components/titleForm/TitleForm"
import { StyledDiv, StyledH2, StyledH3, StyledP, GridDiv, StyledInputDiv, StyledLabel, StyledInput, StyledSpan, StyledContainer, StyledSelect, StyledGridDiv } from "../../components/form/styledForm"
import styled from "styled-components"
import { useState } from "react"



export default function FormView() {

  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')

  return (
    <>
      <Navbar/>
      <TitleForm/>
      <StyledDiv >
        <StyledContainer>

          <StyledH2>Nuevo formulario</StyledH2>
          <StyledP> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut officia eligendi, quia vitae, provident inventore, perspiciatis fuga illo minima quisquam amet minus asperiores dolor unde itaque veniam vel culpa. Aperiam.</StyledP>
        </StyledContainer>

        <form>
          <div>
            <StyledH3>Datos del vendedor :</StyledH3>
            <GridDiv>
              <StyledInputDiv>
                <StyledLabel htmlFor="nombreCompleto">
                  Nombre completo <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="nombre" id="nombreCompleto" placeholder="|"/>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel htmlFor="rutVendedor">
                  Rut vendedor <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="rut" id="rutVendedor" placeholder="|"/>
              </StyledInputDiv>
            </GridDiv>
          </div>
          <div>
            <StyledH3>Datos del vehículo :</StyledH3>
            <StyledGridDiv>
                <StyledInputDiv>
                <StyledLabel htmlFor="patenteVehiculo">
                  Patente del vehículo <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="patente" id="patenteVehiculo" placeholder="|"/>
              </StyledInputDiv>
              <StyledInputDiv>
                <StyledLabel htmlFor="marcaVehiculo">
                  Rut vendedor <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledSelect type="text" name="rut" id="marcaVehiculo" placeholder="|">
                  <option value=""></option>
                </StyledSelect>

              </StyledInputDiv>
              <StyledInputDiv>
                <StyledLabel htmlFor="rutVendedor">
                  Rut vendedor <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="rut" id="rutVendedor" placeholder="|"/>
              </StyledInputDiv>
            </StyledGridDiv>
            
          </div>
          
        </form>
      </StyledDiv>
            

    
    </>
  )
}
