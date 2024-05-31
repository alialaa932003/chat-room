import React from "react";
import styled from "styled-components";
import ChatItem from "./ChatItem";
import { useMessagesContext } from "@/context/MessagesContext";

const StyleUsersList = styled.div`
    margin: 2rem 0;
    max-height: 85dvh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
        background: var(--color-grey-200);
    }
`;
const UsersList = () => {
    const { users } = useMessagesContext();
    return (
        <StyleUsersList className="">
            {users.map((user) => (
                <ChatItem key={user.id} data={user} />
            ))}
        </StyleUsersList>
    );
};

export default UsersList;
