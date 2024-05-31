import { Outlet } from "react-router-dom";

import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import { styled } from "styled-components";
import SideBar from "./sidebar/SideBar";

const AppLayoutStyle = styled.div`
    background: var(--color-grey-700);
    height: 100dvh;
    display: flex;
    overflow-x: hidden;
    padding: 1rem;
`;
const ContentLayoutStyle = styled.div`
    background: var(--color-grey-20);
    width: 100%;
    display: flex;
    /* margin: 1rem 1rem 1rem 0; */
    border-radius: var(--radius-xl);
    width: calc(100% - 11rem);

    @media (max-width: 540px) {
        width: calc(100% - 8rem);
    }
`;

const AppLayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <Toaster
                gutter={12}
                position="top-center"
                containerStyle={{ margin: "0px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },

                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />

            <AppLayoutStyle>
                <SideBar />
                <ContentLayoutStyle>
                    <Outlet />
                </ContentLayoutStyle>
            </AppLayoutStyle>
        </div>
    );
};

export default AppLayout;
