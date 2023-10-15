import React from 'react';

import {Container, Titulo, Nome, BotaoSujeito, BotaoText} from './src/styles';

export default function App() {
  return (
    <Container>
      <Titulo cor="#FF0000" tamanho="25">
        Sujeito Programador
      </Titulo>
      <Nome>Ola Matheus!</Nome>
      <BotaoSujeito onPress={() => alert('CLICOU')}>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>
    </Container>
  );
}
