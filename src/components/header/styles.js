import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display:flex
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;

    a {
        color: #FFF;
        margin-right: 10px;
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
    }
`;