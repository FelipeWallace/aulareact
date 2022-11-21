import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "https://backendexpress-22com1b70-felipewallace.vercel.app/";

  useEffect(() => {
    fetch(url + "usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }

  function limparDados() {
    setId("");
    setNome("");
    setEmail("");
    setTipo("");
  }

  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email } = usuario;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEmail(email);
  }

  function editarDados(cod) {
    let usuario = usuarios.find((item) => item.id === cod);
    const { id, nome, email } = usuario;
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEmail(email);
  }

  function apagarDados(cod) {
    axios.delete(url + "usuarios/" + cod).then(() => {
      //atualizar a lista
      setUsuarios(usuarios.filter((item) => item.id !== cod));
    });
  }

  return (
    <div>
      {usuarios.map((pessoa) => (
        <div>{pessoa.nome}</div>
      ))}
    </div>
  );
}
