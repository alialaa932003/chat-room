import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { RiPushpinFill } from "react-icons/ri";
import { PiChecks } from "react-icons/pi";

const StyleItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1rem;
    border-radius: var(--radius-lg);
    background: ${({ isActive }) => isActive && "var(--color-brand-200)"};
    max-width: 100%;
    transition: var(--transition-sm);
    margin: 0 0.5rem;
    &:hover {
        background: var(--color-brand-200);
    }
`;
const Image = styled.div`
    min-width: 7rem;
    width: 7rem;
    display: flex;
    aspect-ratio: 1/1;
    border-radius: var(--radius-lg);
    overflow: hidden;
    & img {
        object-fit: cover;
        object-position: top;
    }
`;
const Content = styled.div`
    width: 100%;
    overflow: hidden;
    & h3 {
        font-size: 1.8rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
const TitleParent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;
const DateAndChecks = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
const Check = styled.span`
    font-size: 2.4rem;
    line-height: 0;
    color: ${({ isActive }) =>
        isActive ? "var(--color-brand-600)" : "var(--color-grey-400)"};
`;
const Details = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    gap: 1rem;
    & p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* width: 100%; */
        font-weight: 400;
        color: ${({ isActive }) =>
            isActive ? "var(--color-brand-600)" : "var(--color-grey-400)"};
    }
`;
const PinnedAndTotal = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;
const Pin = styled.span`
    color: var(--color-brand-600);
    display: flex;
    font-size: 2.4rem;
`;
const Total = styled.span`
    width: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: var(--color-second-600);
    color: #fff;
    line-height: 2rem;
`;
const ChatItem = ({ data }) => {
    const { userId } = useParams();
    const isActive = userId == data.id;
    return (
        <StyleItem to={`/chats/${data.id}`} isActive={isActive}>
            <Image>
                <img src={data.img} alt={data.title} />
            </Image>
            <Content>
                <TitleParent>
                    <h3>{data.title}</h3>
                    <DateAndChecks>
                        {data.sent && (
                            <Check isActive={data.isSeen}>{<PiChecks />}</Check>
                        )}
                        <span>{data.date}</span>
                    </DateAndChecks>
                </TitleParent>
                <Details isActive={isActive}>
                    <p>
                        {data.message} dasd asd asdasdasdasasdas asdasd asd
                        sadasd asd asd asd asdasdasdas dasd asdasdasdas
                    </p>
                    <PinnedAndTotal>
                        {data.totalMessages > 0 && (
                            <Total>{data.totalMessages}</Total>
                        )}
                        {data.isPinned && (
                            <Pin>
                                <RiPushpinFill />
                            </Pin>
                        )}
                    </PinnedAndTotal>
                </Details>
            </Content>
        </StyleItem>
    );
};

export default ChatItem;
