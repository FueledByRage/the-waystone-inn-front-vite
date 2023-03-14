import styled from "styled-components";


export const RegisterContainer = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;

`;

export const StyledForm = styled.form`
    position: relative;
    display: flex;
    width: 35vw;
    flex-direction: column;
    min-width: 350px;
    padding: 30px 10px 10px 10px;
    min-height: 440px;
    justify-content: space-between;
    background-color: white;
`;

export const RegisterInput = styled.input`
    padding: 10px 10px;
    border: none;
    border-bottom: 2px solid silver;
    font-size: 18px;
`; 


export const RegisterLabel = styled.label`
    color: #F33850;
    position: absolute;
    pointer-events: none;
    transform-origin: 0 0;
    left: 20px;
    transition: .5s ease-in-out;
    font-size: 15px;
`;

