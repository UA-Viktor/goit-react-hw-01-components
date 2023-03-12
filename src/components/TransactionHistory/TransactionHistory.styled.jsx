import styled from '@emotion/styled';

export const Card = styled.div`
    padding: 10px;
    background-color: #fff;
    width: 500px;
    box-shadow: 
        0px 1px 3px rgba(0, 0, 0, 0.12), 
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 7px;
`;

export const Table = styled.table`
    width: 100%; 
    border-collapse: collapse; 
    box-shadow: 
        0 1px 4px rgba(0, 0, 0, .3),
        inset 0 0 40px rgba(0, 0, 0, .1);
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
    padding: 10px;
    height: 20px;
    text-align: center;
    color: #fff;
    background-color: #2385a8;  
`;