import { ListItem, ListTitle, ListText } from './StatisticsList.styled';

export const StatisticsList = ({ name, value }) => {
    return (
        <ListItem>
            <ListTitle>{name}</ListTitle>
            <ListText>{value}%</ListText>
        </ListItem>
    )
};