import { Card, List } from './FriendList.styled';

import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <Card>
            <List>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))}
            </List>
        </Card>
    )
};