import React from 'react'
import Notify from './Notify'
import styled from 'styled-components'
import screen from './screen.png'

function App() {
  return (
    <Container>
      <Notify
        data={{
          severity: 'success',
          message: 'Sua passagem foi alterada com sucesso! :)',
          icon: 'icone'
        }}
      />

      {/*
      <Notify
        data={{
          severity: 'warning',
          message:
            'Sua reserva está pendente. Clique em "Alterar Viagem" para selecionar um novo destino.',
          icon: 'icone',
          cta: {
            label: 'Alterar Viagem',
            description: 'Alterar sua viagem na Decolar.com',
            url: 'http://decolar.com'
          }
        }}
      />
      <Notify
        data={{
          severity: 'error',
          message: 'Sua passagem foi alterada com sucesso! :)',
          icon: 'icone',
          cta: {
            label: 'Alterar Viagem',
            description: 'Alterar sua viagem na Decolar.com',
            url: 'http://decolar.com'
          }
        }}
      />
      <Notify
        data={{
          severity: 'info',
          message: 'Sua passagem foi alterada com sucesso! :)',
          icon: 'icone'
        }}
      />
       */}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 1150px;
  max-width: 1440px;
  padding: 304px 169px 0 174px;
  background-image: url(${screen});
  background-size: contain;
  background-position: center top;
`

export default App
