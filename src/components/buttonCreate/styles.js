import styled from "styled-components";

export const ButtonContainerCreate = styled.button`
    height: 29px;
    width: 264px;
    border: 0;
    border-radius: 27px;
    background-color: #E4105D;
    margin: 30px 6px;
    color: #FFF;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        position: absolute;
        margin: -11px;
        height: 41px;
        width: 280px;
        border: 1px solid #E4105D;
        border-radius: 27px;
    }
`