import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Message from "./Message";
import MessageForm from "./MessageForm";
import { useMessagesContext } from "@/context/MessagesContext";
import { useParams } from "react-router-dom";
import useAutomatedResponse from "./useAutomatedResponse";

const StyledMessageArea = styled.div`
    height: 100%;
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Area = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 78dvh;
    overflow: scroll;
`;

const MessageArea = () => {
    const ref = useRef(null);
    const myId = 333;
    const { userId } = useParams();
    const { messagesState } = useMessagesContext();
    const messages = messagesState[userId] || [];
    console.log(messages);
    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [messagesState]);
    return (
        <StyledMessageArea>
            <Area ref={ref}>
                <div>
                    {messages.map((message, index) => {
                        const showAvatar =
                            index === messages.length - 1 ||
                            messages[index + 1]?.sender.id !==
                                message.sender.id;
                        return (
                            <Message
                                key={message.id}
                                message={message}
                                showAvatar={showAvatar}
                                isSender={message.sender.id == myId}
                            />
                        );
                    })}
                </div>
            </Area>
            <MessageForm />
        </StyledMessageArea>
    );
};

export default MessageArea;
