import React from "react";
import styled from "styled-components";

const StyledWelcomeMessage = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    & h1 {
        font-size: 3.8rem;
        color: var(--color-brand-600);
    }
    & p {
        font-size: 1.8rem;
        color: var(--color-grey-500);
    }
`;
const Logo = styled.div`
    filter: invert(100%);
    max-width: 30rem;
    width: 100%;
`;
const WelcomeMessage = () => {
    return (
        <StyledWelcomeMessage className="animated fadeDown">
            <Logo>
                <img src="/imgs/logo.svg" alt="logo" width={300} height={300} />
            </Logo>
            <h1>Welcome to Chat Room</h1>
            <p>Click on a user to start chatting</p>
        </StyledWelcomeMessage>
    );
};

export default WelcomeMessage;
