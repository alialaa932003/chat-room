import React, { createContext, useContext, useState, useEffect } from "react";

const MessagesContext = createContext();
const MessagesProvider = ({ children }) => {
    // This is  messages dummy data for testing purposes
    const [messagesState, setMessagesState] = useState({
        1: [
            {
                id: 1,
                text: "This is an automated response!",
                sender: {
                    id: 1,
                    name: "Bob",
                    avatar: "/imgs/users/user1.webp",
                },
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                type: "text",
            },
            {
                id: 2,
                text: "hi that is my message!",
                sender: {
                    id: 333,
                    name: "ali alaa eldin",
                    avatar: "/imgs/users/user10.webp",
                },
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                type: "text",
            },
            {
                id: 3,
                text: "hi that is my second message for testing the chat!",
                sender: {
                    id: 333,
                    name: "ali alaa eldin",
                    avatar: "/imgs/users/user10.webp",
                },
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                type: "text",
            },
        ],
        2: [
            {
                id: 1,
                text: "This is an automated response!",
                sender: {
                    id: 2,
                    name: "ali alaa eldin elsyaed",
                    avatar: "/imgs/users/user2.webp",
                },
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                type: "text",
            },
            {
                id: 2,
                text: "hi that is my message!",
                sender: {
                    id: 333,
                    name: "ali alaa eldin",
                    avatar: "/imgs/users/user10.webp",
                },
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                type: "text",
            },
            {
                id: 3,
                text: "hi that is my second message for testing the chat!",
                sender: {
                    id: 333,
                    name: "ali alaa eldin",
                    avatar: "/imgs/users/user10.webp",
                },
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                type: "text",
            },
        ],
    });
    // This is users dummy data for testing purposes
    const users = [
        {
            id: 1,
            img: "/imgs/users/user1.webp",
            title: "Bob",
            message: "Hello, how are you?",
            date: "4m",
            isPinned: true,
            totalMessages: 2,
            sent: true,
            role: "admin",
        },
        {
            id: 2,
            img: "/imgs/users/user2.webp",
            title: "ali alaa Eldin elsayed",
            message: "Hello, how are you?",
            date: "4m",
            isPinned: false,
            totalMessages: 0,
        },
        {
            id: 3,
            img: "/imgs/users/user3.webp",
            title: "John Doe",
            message: "Hello, how are you?",
            date: "4m",
            isPinned: true,
            totalMessages: 2,
            sent: true,
            isSeen: true,
        },
        {
            id: 4,
            img: "/imgs/users/user4.webp",
            title: "Jane Doe",
            message: "Hello, how are you?",
            date: "4m",
            isPinned: false,
            totalMessages: 0,
        },
        {
            id: 5,
            img: "/imgs/users/user5.webp",
            title: "Jane Doe",
            message: "Hello, how are you?",
            date: "5m",
            isPinned: false,
            totalMessages: 0,
        },
        {
            id: 6,
            img: "/imgs/users/user6.webp",
            title: "Jane Doe",
            message: "Hello, how are you?",
            date: "6m",
            isPinned: false,
            totalMessages: 5,
        },
        {
            id: 7,
            img: "/imgs/users/user7.webp",
            title: "Jane Doe",
            message: "Hello, how are you?",
            date: "7m",
            isPinned: false,
            totalMessages: 0,
        },
        {
            id: 8,
            img: "/imgs/users/user8.webp",
            title: "Jane Doe",
            message: "Hello, how are you?",
            date: "8m",
            isPinned: false,
            totalMessages: 0,
        },
        {
            id: 9,
            img: "/imgs/users/user9.webp",
            title: "Jane Doe",
            message: "Hello, how are you?",
            date: "9m",
            isPinned: false,
            totalMessages: 0,
        },
    ];
    return (
        <MessagesContext.Provider
            value={{
                messagesState,
                setMessagesState,
                users,
            }}
        >
            {children}
        </MessagesContext.Provider>
    );
};

function useMessagesContext() {
    const context = useContext(MessagesContext);
    if (context === undefined)
        throw new Error(
            "Messages context was used outside of Messages provider"
        );
    return context;
}
export { MessagesProvider, useMessagesContext };
