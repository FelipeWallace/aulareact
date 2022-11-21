import React, { useState, useEffect } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Component1() {
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp));
  }, [url]);

  function incContador() {
    setContador(contador + 1);
  }

  const decrement = function decContador() {
    setContador((contador) => contador - 1);
  };

  //comparacao com componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  //comparacao com componentDidMount (array de dependencias para ser Mount)
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  //comparacao com componentDidMount e dependencias
  useEffect(() => {
    console.log("componentDidMount com dependencia");
    console.log(contador);
  }, [contador]);

  return (
    <>
      <div>Componente de exemplo Aula DevWeb</div>
      <p>
        Olá @smurfdomuca Sou eu, seu único espectador. Durante meses, criei a
        ilusão de que você está transmitindo para um grande público. Mas aqui
        está a verdade: todas essas pessoas no chat sou eu. E agora, para você
        se convencer disso,vou enviar esta mensagem de todas as minhas contas
      </p>
      <button onClick={incContador}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <p>{contador}</p>
      {/* {dados.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.name} -- </span>
            <span>{item.email} </span>
          </div>
        );
      })} */}
      
      <UsuariosTabela dados={dados} />

    </>
  );
}
