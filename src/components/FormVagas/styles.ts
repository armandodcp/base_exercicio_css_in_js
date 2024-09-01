import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const BotaoPesquisar = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-left: 0;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrincipal};

  @media (max-width: 767px) {
    padding: 10px;
    margin-bottom: 8px;
  }
`
