import styled from "styled-components";

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