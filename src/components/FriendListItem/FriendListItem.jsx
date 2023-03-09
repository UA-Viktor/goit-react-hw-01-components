import { ListItem, Avatar, Name, Chip } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (

        <ListItem>
            <Chip isOnline={isOnline}></Chip>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem>
        
    )
};