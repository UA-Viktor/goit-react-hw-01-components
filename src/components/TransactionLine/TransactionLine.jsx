import { Line, Col } from './TransactionLine.styled';

export const TransactionLine = ({ type, amount, currency }) => {
    return (
        <Line>
            <Col>{type}</Col>
            <Col>{amount}</Col>
            <Col>{currency}</Col>
        </Line>
    )
};