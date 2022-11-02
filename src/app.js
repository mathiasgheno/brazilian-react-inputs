import React, { useState } from 'react'
import {
  InputCpf,
  InputCnpj,
  InputTelefone,
  InputCep,
  InputData,
  InputPis,
  InputNumero,
} from "./components";

function App() {
  const [cpf, setCPF] = useState('')
  const [cnpj, setCNPJ] = useState('')
  const [telefone, setTelefone] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [pis, setPis] = useState('')
  const [data, setData] = useState('')
  const [numero, setNumber] = useState('')

  return (
    <div>
      <h1>Form com inputs masks</h1>
      <form>
        <InputNumero onChange={event => setNumber(event.target.value)}/>
        <br/>
        <InputCpf onChange={event => setCPF(event.target.value)}/>
        <br/>
        <InputCnpj onChange={event => setCNPJ(event.target.value)} />
        <br/>
        <InputTelefone onChange={event => setTelefone(event.target.value)} />
        <br/>
        <InputPis onChange={event => setPis(event.target.value)} />
        <br/>
        <InputCep onChange={event => setZipcode(event.target.value)} />
        <br/>
        <InputData onChange={event => setData(event.target.value)} />
        <br/>
      </form>
      <pre>{JSON.stringify({cpf, cnpj, telefone, zipcode, pis, data, numero})}</pre>
    </div>
  )
}

export default App
