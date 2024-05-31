import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    padding: 0.5rem 1.5rem;
    font-size: 1.6rem;
    background: var(--color-brand-500);
    border-radius: var(--radius-md);
    position: relative;
    border: 2px solid transparent;
    width: 100%;
    &:focus,
    &:hover {
        outline: none;
        border-color: var(--color-brand-600);
    }
`;
const Input = ({ type = "text", ...props }) => {
    return <StyledInput type={type} {...props} />;
};

export default Input;
