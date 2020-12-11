import React from 'react'
import styled from 'styled-components'

export default function Notify(props) {
  const { data } = props

  return (
    <Container theme={data.severity}>
      {data.message}
      {data.cta && (
        <Cta href={data.cta.url} title={data.cta.description}>
          {data.cta.label}
        </Cta>
      )}
    </Container>
  )
}

const Cta = styled.a`
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  background: transparent;
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  background-color: ${props => {
    switch (props.theme) {
      case 'success':
        return '#00b94a'
      case 'warning':
        return '#ec9236'
      case 'error':
        return '#b90000'
      default:
        return '#3a21c9'
    }
  }};

  & + & {
    margin-top: 16px;
  }
`
