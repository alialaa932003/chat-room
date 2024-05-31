import { useMessagesContext } from "@/context/MessagesContext";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import { LuImage, LuFiles, LuVideo, LuMusic4 } from "react-icons/lu";

import styled from "styled-components";
import GroupInfoImages from "./GroupInfoImages";
const GroupInfoStyle = styled.div`
    background: var(--color-grey-0);
    max-width: 50rem;
    position: fixed;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 3rem;
    border-radius: var(--radius-xl);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-height: 60dvh;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-bottom: 3rem;
    & h2 {
        font-size: 2.8rem;
        font-weight: 600;
    }
`;
const Title = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & span {
        display: flex;
        font-size: 2.4rem;
    }
`;
const GroupInfo = ({ handleClose }) => {
    const { users } = useMessagesContext();
    const ref = useOutsideClick(handleClose);
    const items = [
        {
            id: 1,
            icon: <LuImage />,
            title: "256 photos",
            body: <GroupInfoImages />,
        },
        {
            id: 2,
            icon: <LuVideo />,
            title: "13 videos",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur cum doloribus. Inventore, dignissimos expedita? Debitis incidunt voluptate fugiat deleniti, voluptates, quaerat odit ipsum eos ea magni quod laboriosam quia!",
        },
        {
            id: 3,
            icon: <LuFiles />,
            title: "15 files",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur cum doloribus. Inventore, dignissimos expedita? Debitis incidunt voluptate fugiat deleniti, voluptates, quaerat odit ipsum eos ea magni quod laboriosam quia!",
        },
        {
            id: 4,
            icon: <LuMusic4 />,
            title: "256 audio files",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur cum doloribus. Inventore, dignissimos expedita? Debitis incidunt voluptate fugiat deleniti, voluptates, quaerat odit ipsum eos ea magni quod laboriosam quia!",
        },
    ];
    return createPortal(
        <GroupInfoStyle ref={ref}>
            <Header>
                <h2>group info</h2>
                <button onClick={handleClose}>
                    <FaXmark />
                </button>
            </Header>
            <Title>files</Title>

            {items.map((item) => (
                <Accordion
                    className="animated fadeUp"
                    sx={{
                        "&.MuiAccordion-root": {
                            background: "transparent",
                            color: "var(--color-grey-500)",
                            boxShadow: "none",
                            border: "none",
                        },
                        "&.MuiAccordion-root::before": {
                            display: "none",
                        },
                    }}
                    key={item.id}
                >
                    <AccordionSummary
                        expandIcon={<IoIosArrowDown />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            fontSize: "1.8rem",
                            margin: ".7rem 0",
                        }}
                    >
                        <Item>
                            <span>{item.icon}</span>
                            {item.title}
                        </Item>
                    </AccordionSummary>
                    <AccordionDetails>{item.body}</AccordionDetails>
                </Accordion>
            ))}
        </GroupInfoStyle>,
        document.getElementById("portal")
    );
};

export default GroupInfo;
