import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 3rem;
    max-width: 70rem;
    width: 90%;
    flex-direction: ${({ isSender }) => (isSender ? "row-reverse" : "row")};
    margin: ${({ isSender }) =>
        isSender ? "4rem 0 4rem auto" : "4rem auto 4rem 0}"};
`;

const Avatar = styled.div`
    min-width: 8rem;
    width: 8rem;
    aspect-ratio: 1.05/1;
    display: flex;
    border-radius: var(--radius-lg);
    overflow: hidden;

    & img {
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 540px) {
        min-width: 3rem;
        width: 3rem;
    }
`;
const Content = styled.div`
    background: ${({ isSender }) =>
        isSender ? "var(--color-brand-600)" : "var(--color-brand-200)"};
    padding: 1.5rem 2rem;
    border-radius: ${({ isSender }) =>
        isSender ? "2rem 2rem 0rem 2rem" : "2rem 2rem 2rem 0"};
    position: relative;
    & h2 {
        font-size: 2rem;
        color: #37387d;
        margin-bottom: 1rem;
        @media (max-width: 540px) {
            font-size: 1.8rem;
        }
    }
    @media (max-width: 540px) {
        padding: 1.5rem;
    }
    & p {
        color: ${({ isSender }) =>
            isSender ? "var(--color-grey-0)" : "var(--color-grey-600)"};
        word-break: break-word;
    }
    font-size: 1.6rem;
    @media (max-width: 540px) {
        font-size: 1.3rem;
    }
    &::before {
        content: "";
        position: absolute;
        display: ${({ showAvatar }) => (showAvatar ? "block" : "none")};
        bottom: 0px;
        right: ${({ isSender }) => (isSender ? "unset" : "100%")};
        left: ${({ isSender }) => (isSender ? "100%" : "unset")};
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: ${({ isSender }) =>
            isSender
                ? "18px solid var(--color-brand-600)"
                : "18px solid var(--color-brand-200)"};
        transform: ${({ isSender }) =>
            isSender ? "rotate(90deg)" : "rotate(-90deg)"};
    }
`;
const Date = styled.span`
    font-size: 1.4rem;
    color: ${({ isSender }) =>
        isSender ? "var(--color-grey-0)" : "var(--color-grey-600)"};
    text-align: right;
    width: 100%;
    margin-top: 2rem;
`;
const Triangle = styled.span``;

const Message = ({ isSender = true, message, showAvatar }) => {
    return (
        <StyledMessage className="animated fadeUp" isSender={isSender}>
            <Avatar>
                {showAvatar && (
                    <img
                        src={message?.sender?.avatar}
                        alt={message?.sender?.name}
                    />
                )}
            </Avatar>
            <Content isSender={isSender} showAvatar={showAvatar}>
                {!isSender && <h2>{message?.sender?.name}</h2>}
                <p>{message?.text}</p>
                <Date isSender={isSender}>{message?.timestamp}</Date>
            </Content>
        </StyledMessage>
    );
};

export default Message;
