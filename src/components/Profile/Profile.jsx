// import PropTypes from 'prop-types';

import { Card, Info, Name, Text, List, ListItem, ListTitle, ListText } from './Profile.styled';

export const Profile = ({ profile }) => { 
    return (
        <Card>
            <Info>
                <img
                    src={profile.avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <Name>{profile.username}</Name>
                <Text>@{profile.tag}</Text>
                <Text>{profile.location}</Text>
            </Info>

            <List>
                <ListItem>
                    <ListTitle>Followers</ListTitle>
                    <ListText>{profile.stats.followers}</ListText>
                </ListItem>
                <ListItem>
                    <ListTitle>Views</ListTitle>
                    <ListText>{profile.stats.views}</ListText>
                </ListItem>
                <ListItem>
                    <ListTitle>Likes</ListTitle>
                    <ListText>{profile.stats.likes}</ListText>
                </ListItem>
            </List>
        </Card>
    );
};

// Profile.PropTypes = {
//     username:   PropTypes.string.isRequired,
//     tag:        PropTypes.string.isRequired,
//     location:   PropTypes.string.isRequired,
//     avatar:     PropTypes.string.isRequired,
//     followers:  PropTypes.number.isRequired,
//     views:      PropTypes.number.isRequired,
//     likes:      PropTypes.number.isRequired,
// };