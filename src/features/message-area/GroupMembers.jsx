import { useMessagesContext } from "@/context/MessagesContext";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import React from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";
const GroupMembersStyle = styled.div`
    background: var(--color-brand-500);
    max-width: 50rem;
    position: fixed;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 3rem;
    border-radius: var(--radius-xl);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    height: 60dvh;
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
`;
const MembersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const Item = styled.li`
    display: flex;
    gap: 2rem;
    align-items: center;
`;
const Image = styled.div`
    width: 7rem;
    aspect-ratio: 1/1;
    border-radius: var(--radius-lg);
    overflow: hidden;
    img {
        height: 100%;
        object-fit: cover;
    }
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & h3 {
        font-size: 2rem;
        color: var(--color-grey-500);
        font-weight: 600;
    }
    & h4 {
        font-size: 1.4rem;
        color: var(--color-brand-600);
        font-weight: 500;
    }
`;
const GroupMembers = ({ handleClose }) => {
    const { users } = useMessagesContext();
    const ref = useOutsideClick(handleClose);
    return createPortal(
        <GroupMembersStyle ref={ref}>
            <Header>
                <h2>23 members</h2>
                <button onClick={handleClose}>
                    <FaXmark />
                </button>
            </Header>
            <MembersList className="">
                {users.map((user) => (
                    <Item className="animated fadeUp" key={user.id}>
                        <Image>
                            <img src={user.img} alt={user.title} />
                        </Image>
                        <Content>
                            <h3>{user.title}</h3>
                            <h4>{user.role}</h4>
                        </Content>
                    </Item>
                ))}
            </MembersList>
        </GroupMembersStyle>,
        document.getElementById("portal")
    );
};

export default GroupMembers;
