import styled from '@emotion/styled';

export const Line = styled.tr`

    &:nth-child(odd) {
        background-color: #eee;
    }

`;

export const Col = styled.td`
    padding: 10px;
    height: 20px;
    width: 160px;
    text-align: center;
    color: #696969;
    border: 1px solid #eee;
`;