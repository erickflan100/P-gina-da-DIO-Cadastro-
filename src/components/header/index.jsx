/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Wrapper, Container, Row } from "./styles";
import Logo from '../../assets/logo-dio.png'
import Button from "../buttonHeader";

const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="logo DIO" />
                </Row>
                <Row>
                    <a href="#">Home</a>
                    <Button title={'Entrar'} />
                    <Button title={'Cadastrar'}/>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header;