import styled from '@emotion/styled';

export const ListItem = styled.li`
    position: relative;

    display: flex;
    justify-content: center:
    align-items: center;
    font-size: 14px;

    box-shadow: 
    0 1px 4px rgba(0, 0, 0, .3),
    inset 0 0 40px rgba(0, 0, 0, .1);
`;

export const Avatar = styled.img`
    margin-left: 20px;
    padding: 5px;
    border-radius: 10%;
`;

export const Name = styled.p`
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
`;

const setStatus = ({isOnline}) => {
    switch (isOnline) {
        case true:
            return '#26b565';
        case false:
            return '#a32359';
        default:
            return '#141012';
    };
};

export const Chip = styled.span`
    position: absolute;

    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;

    background-color: ${setStatus};
`;