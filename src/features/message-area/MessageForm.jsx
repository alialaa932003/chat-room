import React, { useState } from "react";
import styled from "styled-components";
import { IoMicOutline } from "react-icons/io5";

import { FiPaperclip, FiSend } from "react-icons/fi";
import Input from "@/ui/form/Input";
import { useMessagesContext } from "@/context/MessagesContext";
import { useParams } from "react-router-dom";
import useAutomatedResponse from "./useAutomatedResponse";

const MessageFormStyle = styled.form`
    position: relative;
    background: var(--color-brand-200);
    border-radius: var(--radius-lg);
    display: flex;
    padding: 0 1rem;
    max-height: 8rem;
    min-height: 3rem;
    height: 20%;
    & input {
        padding: 0 1rem;
        background: transparent;
        height: 100%;
        border: none;
        font-size: 1.8rem;
    }
    & button {
        font-size: 2.4rem;
        margin: 0 0.5rem;
        color: #6e6eb7;
    }
`;
const MessageForm = () => {
    const [message, setMessage] = useState("");
    const { setMessagesState, users } = useMessagesContext();
    const { userId } = useParams();
    const [lastSentMessage, setLastSentMessage] = useState(null);
    const reciverData = users.find((user) => user.id == userId);
    const handleSendMessage = (e) => {
        e.preventDefault();
        // if the message is empty, do nothing
        if (message === "") return;
        // create a new message object
        const newMessage = {
            id: Math.random(),
            sender: {
                id: 333,
                name: "ali alaa eldin",
                avatar: "/imgs/users/user10.webp",
            },
            text: message,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };
        // update the messages state
        setMessagesState((prevState) => {
            return {
                ...prevState,
                [userId]: [...(prevState[userId] || []), newMessage],
            };
        });
        // set the last sent message
        setLastSentMessage(newMessage);
        setMessage("");
    };
    // use the automated response hook
    useAutomatedResponse(lastSentMessage, setMessagesState, reciverData);
    return (
        <MessageFormStyle onSubmit={handleSendMessage}>
            <button type="button" title="clip">
                <FiPaperclip />
            </button>
            <Input
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                placeholder="your message..."
            />
            <button type="button" title="voice">
                <IoMicOutline />
            </button>
            <button type="submit" title="send">
                <FiSend />
            </button>
        </MessageFormStyle>
    );
};

export default MessageForm;
