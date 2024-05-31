import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import UsersSearch from "@features/users-chats/UsersSearch";
import UsersList from "@features/users-chats/UsersList";
import styled from "styled-components";
import WelcomeMessage from "@/features/message-area/WelcomeMessage";
import useInnerWidth from "@/hooks/useInnerWidth";
const StylePage = styled.div`
    display: flex;
    padding: 2rem 1.5rem;
    width: 100%;
    overflow: hidden;
`;
const UsersSection = styled.section`
    width: 100%;
    max-width: ${(props) => (props.isMobile ? "70rem" : "32rem")};
    margin: 0 auto;
`;
const Home = () => {
    const { userId } = useParams();
    const { width } = useInnerWidth();
    const isMobile = width < 992;

    const [isMessageAreaOpen, setIsMessageAreaOpen] = useState(
        Boolean(userId) && isMobile
    );
    useEffect(() => {
        // close the message area on mobile when therse is no userId
        setIsMessageAreaOpen(Boolean(userId) && isMobile);
    }, [userId, isMobile]);
    return (
        <StylePage>
            {!isMessageAreaOpen && (
                <UsersSection className="animated fadeUp" isMobile={isMobile}>
                    <UsersSearch />
                    <UsersList />
                </UsersSection>
            )}
            <Outlet
                context={[isMobile, isMessageAreaOpen, setIsMessageAreaOpen]}
            />
            {!userId && !isMobile && <WelcomeMessage />}
        </StylePage>
    );
};

export default Home;
