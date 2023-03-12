// import PropTypes from 'prop-types';

import { ListItem, ListTitle, ListText } from './StatisticsList.styled';

export const StatisticsList = ({ name, value }) => {
    return (
        <ListItem>
            <ListTitle>{name}</ListTitle>
            <ListText>{value}%</ListText>
        </ListItem>
    )
};

// StatisticsList.propTypes = {
//     name: PropTypes.string.isRequired,
//     value: PropTypes.number.isRequired,
// }
