import { useEffect } from "react";
const useAutomatedResponse = (lastSentMessage, setMessages, senderData) => {
    useEffect(() => {
        if (lastSentMessage) {
            const timer = setTimeout(() => {
                const responseMessage = {
                    id: lastSentMessage.id + 1,
                    text: "This is an automated response!",
                    sender: {
                        id: senderData.id,
                        name: senderData.title,
                        avatar: senderData.img,
                    },
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                    type: "text",
                };

                setMessages((prevState) => {
                    return {
                        ...prevState,
                        [senderData.id]: [
                            ...(prevState[senderData.id] || []),
                            responseMessage,
                        ],
                    };
                });
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [lastSentMessage, setMessages]);
};
export default useAutomatedResponse;
