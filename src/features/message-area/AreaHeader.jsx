import { useMessagesContext } from "@/context/MessagesContext";
import React, { useState } from "react";
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import GroupMembers from "./GroupMembers";
import GroupInfo from "./GroupInfo";
const StyledHeader = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    @media (max-width: 540px) {
        flex-direction: column;
    }
`;
const Content = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    cursor: pointer;
`;
const CloseChat = styled(Link)`
    display: flex;
    font-size: 2.4rem;
`;
const Details = styled.div`
    & h1 {
        font-size: 2.8rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 25rem;
    }
    & p {
        font-size: 1.6rem;
        color: var(--color-grey-400);
    }
`;
const Actions = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    & button {
        font-size: 2.8rem;
        color: var(--color-grey-400);
    }
`;

const AreaHeader = () => {
    const { userId } = useParams();
    const { users } = useMessagesContext();
    const currentUser = users.find((user) => user.id === +userId);
    const [isMembersListOpened, setIsMembersListOpened] = useState(false);
    const [isGroupInfoOpened, setIsGroupInfoOpened] = useState(false);

    return (
        <StyledHeader>
            <Content
                onClick={() => {
                    setIsMembersListOpened(true);
                }}
            >
                <CloseChat to="/chats" title="back">
                    <FaArrowLeftLong />
                </CloseChat>
                <Details>
                    <h1>{currentUser.title}</h1>
                    <p>23 member, 10 online</p>
                </Details>
            </Content>

            <Actions>
                <button title="chatSearch">
                    <GoSearch />
                </button>
                <button title="phone">
                    <BsTelephone />
                </button>
                <button
                    title="dots"
                    onClick={() => {
                        setIsGroupInfoOpened(true);
                    }}
                >
                    <BsThreeDotsVertical />
                </button>
            </Actions>
            {isMembersListOpened && (
                <GroupMembers
                    handleClose={() => setIsMembersListOpened(false)}
                />
            )}
            {isGroupInfoOpened && (
                <GroupInfo handleClose={() => setIsGroupInfoOpened(false)} />
            )}
        </StyledHeader>
    );
};

export default AreaHeader;
