import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaFolder } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdOptions } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { RiArchive2Fill } from "react-icons/ri";
import styled, { css } from "styled-components";
import SidebarBtn from "./SidebarBtn";

const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 11rem;
    min-width: 11rem;
    padding: 3rem 1rem;
    max-height: 100dvh;
    overflow-y: scroll;

    @media (max-width: 540px) {
        max-width: 8rem;
        min-width: 8rem;
        padding: 3rem 0;
    }
`;
const StyledBrand = styled.div`
    max-width: 6rem;
    width: 100%;
`;
const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
    gap: 1rem;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 0.08px;
        background: var(--color-grey-400);
        min-width: 4rem;
    }
    &:last-of-type::after {
        display: none;
    }
`;

const SideBar = () => {
    const [activeItem, setActiveItem] = useState("all");
    const chatsAndGroups = [
        {
            title: "all chats",
            icon: <IoChatbox />,
            type: "all",
            totalMessages: 43,
        },
        {
            title: "work",
            icon: <FaFolder />,
            type: "work",
            totalMessages: 4,
        },
        {
            title: "friends",
            icon: <FaFolder />,
            type: "friends",
            totalMessages: 0,
        },

        {
            title: "archive chats",
            icon: <RiArchive2Fill />,
            type: "archive",
            totalMessages: 0,
        },
    ];
    const settingsItem = [
        {
            title: "profile",
            icon: <FaUserLarge />,
            type: "profile",
        },
        {
            title: "edit",
            icon: <IoMdOptions />,
            type: "edit",
        },
    ];
    return (
        <StyledSideBar>
            <StyledBrand>
                <img src="/imgs/logo.svg" alt="logo" width={80} height={50} />
            </StyledBrand>
            <div style={{ width: "100%" }}>
                <StyledList>
                    {chatsAndGroups.map((item) => (
                        <li key={item.title}>
                            <SidebarBtn
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                item={item}
                            />
                        </li>
                    ))}
                </StyledList>
                <StyledList>
                    {settingsItem.map((item) => (
                        <li key={item.title}>
                            <SidebarBtn
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                item={item}
                            />
                        </li>
                    ))}
                </StyledList>
            </div>

            <SidebarBtn
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                item={{ title: "logout", icon: <CgLogOut /> }}
            />
        </StyledSideBar>
    );
};

export default SideBar;
