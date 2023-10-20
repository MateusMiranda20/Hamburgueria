
import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from "../../components/One/styles";

import { Container, H1, Image, InputComida, Input, InputName, ContainetIntens, } from './Styles';
import esponja from "../../assets/esponja.jpg";

function App() {

  const [users, setUsers] = useState([]); // assim que cria uma estado no React E UM REACT HOOKS
  const navigate = useNavigate();

  const inputComida = useRef();
  const inputName = useRef();

  async function userAdd(){
    const { data: newUsers } = await axios.post("http://localhost:3005/Pedido",{
    snack: inputComida.current.value,
    name: inputName.current.value,
    });

    setUsers([...users, newUsers])

    navigate("/pedido");
  }


  //React Hook => useEffect (Efeito colateral)
  //a minha aplicação inicia(a pagina carregou, useEffect e chamado)
  // Quando um estado esta no aray de dependencia do useEffect é alterado

  return (
    <Container>
      <Image alt="Logo-image" src={esponja} />
      <ContainetIntens>
        <H1>Faça seu pedido!</H1>
        
        <InputComida>Pedido</InputComida>
        <Input ref={inputComida} placeholder="1 Coca-Cola, 1 X Salada" />

        <InputName>Nome do Cliente</InputName>
        <Input ref={inputName} placeholder="João " />

        <Button onClick={userAdd}>
          Novo Pedido
        </Button>
      </ContainetIntens>
    </Container>
  )
}

export default App
