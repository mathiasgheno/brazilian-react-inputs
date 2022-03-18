import React, { useState } from 'react'
import { numberMask } from './utils/masks'
import styled from 'styled-components'
import {
  InputCpf,
  InputCnpj,
  InputTelefone,
  InputCep,
  InputData,
  InputPis,
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
    <Container>
      <h1>Form com inputs masks</h1>
      <form>
        <Label htmlFor='numero'>Numero: 000,00</Label>
        <Input
          type='text'
          name='numero'
          id='numero'
          value={numberMask(numero)}
          onChange={(e) => setNumber(e.target.value)}
        />

        <InputCpf onChange={cpf => setCPF(cpf)}/>
        <br/>
        <InputCnpj onChange={cnpj => setCNPJ(cnpj)} />
        <br/>
        <InputTelefone onChange={telefone => setTelefone(telefone)} />
        <br/>
        <InputPis onChange={pis => setPis(pis)} />
        <br/>
        <InputCep onChange={cep => setZipcode(cep)} />
        <br/>
        <InputData onChange={data => setData(data)} />
        <br/>
      </form>
      <pre>{JSON.stringify({cpf, cnpj, telefone, zipcode, pis, data})}</pre>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 700px;
`

const Label = styled.label`
  margin-bottom: 50px;
`

const Input = styled.input`
  margin: 0 auto;
  width: 700px;
  margin-bottom: 19px;
  border: 5px solid #CCC;
`

export default App

// TODO porcentagem
// TODO Maior que
// TODO Menor que
// TODO dinheiro
// TODO Numerico com
