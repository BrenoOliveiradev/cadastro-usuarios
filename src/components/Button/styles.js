import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #4e54c8 0%, #8f94fb 100%)' : 'transparent'} ;
    border: ${props => props.theme === 'primary' ? 'none' : '2px solid #4e54c8'};
    font-size: 1.2rem;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #4e54c8 0%, #8f94fb 100%)' : '#4e54c8'};
        opacity: 0.8;
        transform: ${props => props.theme === 'primary' ? 'translateY(-3px)' : 'translateY(-6px)'};
    }

    &:active {
        opacity: ${props => props.theme === 'primary' ? 0.5 : 0.3};
        transform: translateY(0px);
    }
`