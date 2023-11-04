import Navbar from "../../components/navbar/Navbar"
import TitleForm from "../../components/titleForm/TitleForm"
import { StyledDiv, StyledH2, StyledH3, StyledP, GridDiv, StyledInputDiv, StyledLabel, StyledInput, StyledSpan, StyledContainer, StyledSelect, StyledGridDiv, StyledDivContainer, StyledButton,StyledDivForm, StyledDivButton } from "../../components/form/styledForm"
import { useState } from "react"
import data from "../../hooks/autos.json"
import { useForm } from 'react-hook-form';

export default function FormView() {

  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const autos = data.data 
  const [userData, formUserData] = useState({
    nombre: '',
    rut: '',
    patente: '',
    brand: '',
    modelo: '',
    precio: '',
  })
  const { register , handleSubmit } = useForm();

  const onSubmit = handleSubmit ((data) => {
    console.log(data)
  })
  
  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setMarca(selectedBrand);
    setModelo('');
    
  }
  const handleModelChange = (e) => {
    setModelo(e.target.value)
  }

  return (
    <>
      <Navbar/>
      <TitleForm/>
      <StyledDiv >
        <StyledContainer>

          <StyledH2>Nuevo formulario</StyledH2>
          <StyledP> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut officia eligendi, quia vitae, provident inventore, perspiciatis fuga illo minima quisquam amet minus asperiores dolor unde itaque veniam vel culpa. Aperiam.</StyledP>
        </StyledContainer>

        <form onSubmit={onSubmit}>
          <StyledDivContainer>
            <StyledH3>Datos del vendedor :</StyledH3>
            <GridDiv>
              <StyledInputDiv>
                <StyledLabel htmlFor="nombreCompleto">
                  Nombre completo <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="nombre" id="nombreCompleto" placeholder="|" {...register("nombre", { required: true })}/>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel htmlFor="rutVendedor">
                  Rut vendedor <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="rut" id="rutVendedor" placeholder="|" {...register("rut", { required: true })}/>
              </StyledInputDiv>
            </GridDiv>
          </StyledDivContainer>
          <StyledDivForm>
            <StyledH3>Datos del vehículo :</StyledH3>

            <StyledGridDiv>

              <StyledInputDiv>

                <StyledLabel htmlFor="patenteVehiculo">
                  Patente del vehículo <StyledSpan> * </StyledSpan>
                </StyledLabel>

                <StyledInput type="text" name="patente" id="patenteVehiculo" placeholder="|" {...register("patente", { required: true })}/>

              </StyledInputDiv>
              <StyledInputDiv>
                
                <StyledLabel htmlFor="marcaVehiculo">
                  Marca del vehículo <StyledSpan> * </StyledSpan>
                </StyledLabel>

                <StyledSelect type="text" name="marca" id="marcaVehiculo" placeholder="|" {...register("marca", { required: true })} onChange={handleBrandChange} >
                  <option defaultValue={marca}></option>
                  {autos.map((auto)=> {
                    return <option key={auto.id} value={auto.marca}> {auto.marca} </option>
                  })}
                </StyledSelect>

              </StyledInputDiv>
              <StyledInputDiv>

                <StyledLabel htmlFor="modeloVehiculo">
                  Modelo del Vehículo <StyledSpan> * </StyledSpan>
                </StyledLabel>

                <StyledSelect type="text" name="modelo" id="modeloVehiculo" placeholder="|" {...register("modelo", { required: true })} onChange={handleModelChange}>
                <option defaultValue={modelo}></option>
                  {marca !== '' && autos.filter(auto => auto.marca === marca)[0].modelo.map(modelo => {
                    
                    return <option key={modelo} value={modelo}> {modelo} </option>
                  })}
                </StyledSelect>

              </StyledInputDiv>

              <StyledInputDiv>

                <StyledLabel htmlFor="precioVehiculo">
                  Precio del Vehículo <StyledSpan> * </StyledSpan>
                </StyledLabel>
                <StyledInput type="text" name="precio" id="preciovehiculo" placeholder="|" {...register("precio", { required: true })}/>

              </StyledInputDiv>
            </StyledGridDiv>

            <StyledDivButton>
              <StyledButton type="submit"> Enviar</StyledButton>
            </StyledDivButton> 

            
          </StyledDivForm>
          
        </form>
      </StyledDiv>
            

    
    </>
  )
}