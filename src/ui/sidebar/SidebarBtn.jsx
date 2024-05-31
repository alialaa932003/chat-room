import React from "react";
import styled, { css } from "styled-components";
const StyledBtn = styled.button`
    color: var(--color-grey-400);
    transition: var(--transition-sm);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0.5rem;
    border-radius: var(--radius-md);
    width: 100%;

    ${(props) =>
        props.isActive &&
        css`
            background: var(--color-grey-500);
            color: var(--color-grey-0);
        `}
    &:hover {
        background: var(--color-grey-500);
        color: var(--color-grey-0);
    }

    & h3 {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.2;
        @media (max-width: 540px) {
            font-size: 1.2rem;
        }
    }
`;
const StyledIcon = styled.span`
    position: relative;

    font-size: 2.6rem;
    @media (max-width: 540px) {
        font-size: 2rem;
    }
`;
const TotalMessages = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    background: var(--color-second-600);
    color: var(--color-grey-0);
    min-width: 2.3rem;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2rem;
    transform: translate(50%, -40%);
    border: 2px solid
        ${(props) =>
            props.isActive ? "var(--color-grey-500)" : "var(--color-grey-700)"};
`;
const SidebarBtn = ({ item, setActiveItem, activeItem }) => {
    return (
        <StyledBtn
            onClick={() => {
                setActiveItem(item.type);
            }}
            isActive={activeItem === item.type}
        >
            <StyledIcon>
                {item.icon}
                {item.totalMessages > 0 && (
                    <TotalMessages isActive={activeItem === item.type}>
                        {item.totalMessages}
                    </TotalMessages>
                )}
            </StyledIcon>
            <h3>{item.title}</h3>
        </StyledBtn>
    );
};

export default SidebarBtn;
