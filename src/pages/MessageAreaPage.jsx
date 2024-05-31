import React from "react";
import MessageArea from "@/features/message-area/MessageArea";
import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import AreaHeader from "@/features/message-area/AreaHeader";
const StyleMessageArea = styled.div`
    width: 100%;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 540px) {
        padding: 0;
    }
`;
const AreaLayout = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const MessageAreaPage = () => {
    const { userId } = useParams();
    const [isMobile, isMessageAreaOpen] = useOutletContext();

    const renderMessageArea = (
        <StyleMessageArea className="animated fade" key={userId}>
            <AreaLayout>
                <AreaHeader />
                <MessageArea />
            </AreaLayout>
        </StyleMessageArea>
    );
    if (isMessageAreaOpen) return renderMessageArea;
    if (!isMobile) return renderMessageArea;
};

export default MessageAreaPage;
