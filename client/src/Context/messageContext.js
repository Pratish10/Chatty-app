import React, { createContext, useEffect, useState } from "react";

const MessageContext = createContext([]);

const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch("/api/messages");
            const decryptedMessages = await response.json();
            setMessages(decryptedMessages);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MessageContext.Provider value={messages}>
            {children}
        </MessageContext.Provider>
    );
};

export { MessageContext, MessageProvider };