import React from "react";
import styled from "styled-components";

const StyledGroupInfoImages = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    overflow-x: auto;
    & div {
        min-width: 20rem;
        aspect-ratio: 1.2/1;
        border-radius: var(--radius-lg);
        overflow: hidden;
        img {
            height: 100%;
            object-fit: cover;
        }
    }
`;
const GroupInfoImages = () => {
    return (
        <StyledGroupInfoImages>
            <div>
                <img src="/imgs/users/user1.webp" alt="user1" />
            </div>
            <div>
                <img src="/imgs/users/user1.webp" alt="user1" />
            </div>
            <div>
                <img src="/imgs/users/user1.webp" alt="user1" />
            </div>
        </StyledGroupInfoImages>
    );
};

export default GroupInfoImages;
