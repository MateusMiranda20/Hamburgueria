import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import axios from 'axios'

import Button from "../../components/One/styles";

import { Container, H1, Image, ContainetIntens, User, Psnack, Pname} from './Styles';
import Sacola from "../../assets/Sacola.png";
import Lixeira from "../../assets/lixeira.png";



function Pedido() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
 
  useEffect(() => {
    
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3005/pedido");
      setUsers( newUser);
    }

    fetchUsers();
  }, []);
  

  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3005/pedido/${userId}`)

    const newUser = users.filter((user) => user.id !== userId)

    setUsers(newUser)
  }

  function goBackPage(){
    navigate("/");
  }

  return (
    <Container>
      <Image alt="Logo-image" src={Sacola} />
      <ContainetIntens>
        <H1>Pedidos</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <div>
               <Psnack>{user.snack}</Psnack>  <Pname>{user.name}</Pname>
              </div>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="Lixeira" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          Voltar
        </Button>

      </ContainetIntens>
    </Container>
  )
}

export default Pedido
