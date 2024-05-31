import React from "react";
import Input from "@ui/form/Input";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const StyleSearch = styled.div`
    position: relative;
    margin-left: 1rem;
`;
const StyleSearchInput = styled(Input)`
    padding: 0.8rem 1.5rem 0.8rem 4.5rem;

    &::placeholder {
        color: var(--color-grey-500);
    }
`;
const Icon = styled.span`
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    font-size: 2.6rem;
    z-index: 2;
    display: flex;
`;
const UsersSearch = () => {
    return (
        <StyleSearch>
            <Icon>
                <BiSearch />
            </Icon>
            <StyleSearchInput placeholder="search..." />
        </StyleSearch>
    );
};

export default UsersSearch;
