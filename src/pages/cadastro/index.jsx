/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Column, Texto, Explication } from './styles'
import Button from '../../components/buttonCreate'
import InputCreate from '../../components/input'

function Cadastro() {
  return (
    <Container>
        <Column>
            <Texto>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Texto>
        </Column>
        <Column>
            <h1>Comece agora grátis</h1>
            <h4>Crie sua conta e make the change.</h4>
            <InputCreate type='name' placeholder="Nome Completo"/>
            <InputCreate type='email' placeholder="E-mail"/>
            <InputCreate type='password' placeholder="Password"/>
            <Button title={'Criar minha conta'} />
            <Explication>
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </Explication>
            <a href="#">Já tenho conta. <r>Fazer login</r></a>
        </Column>
    </Container>
  )
}

export default Cadastro;