import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    h4 {
        font-size: 18px;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
    }

    r {
        color: #23DD7A;
    }
`;

export const Texto = styled.div`
    
    height: 308px;
    width: 388px;

    font-size: 32px;
    font-weight: 700;
`;

export const Explication = styled.div`

    height: 75px;
    width: 372px;

    font-size: 18px;
    font-weight: 400;
`