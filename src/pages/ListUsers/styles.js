import styled from "styled-components"

export const Container = styled.div`
        background-color: #181f36;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 20px;
        gap: 20px;
`

export const ContainerUsers = styled.div`
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 20px;

            @media (max-width: 740px) {
                grid-template-columns: 1fr;
            }

    
`

export const CardUsers = styled.div`
    background-color: #2c3a59;
    padding: 10px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;
    transition: all 0.3s ease;

    h3 {
        color: #ffffff;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #ffffff;
        font-size: 16px;
        font-weight: 200;
    }

    &:hover {
        transform: translateY(-3px);
        opacity: 0.8;
    }
`

export const TrashIcon = styled.img`
        cursor: pointer;
        padding-left: 30px;

        &:hover {
            opacity: 0.7;
        }

        &:active {
            opacity: 0.3;
        }
`

export const AvatarUser = styled.img`
    height: 80px;
`