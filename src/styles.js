import styled from "styled-components"



export const Container = styled.div`
     background-color: #181f36;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-evenly;
     padding: 20px;
     height: 100vh;
`

export const TopBackground = styled.div`
    background: linear-gradient(to right, #4e54c8, #8f94fb);
    height: 30vh;
    width: 90vw;
    max-width: 600px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
       
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
    
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
    
    span{
        color: #ef4f45;
        font-weight: bold;
        margin-left: 5px;
    }
`

export const Button = styled.button`
    background: linear-gradient(180deg, #4e54c8 0%, #8f94fb 100%);
    border: none;
    font-size: 1.2rem;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
        transform: translateY(-3px);
    }

    &:active {
        opacity: 0.5;
        transform: translateY(0px);
    }
 `

