import { List, ListItem, ListTitle, ListText } from './UserStats.styled';


export const UserStats = ({ followers, views, likes}) => {
    return (
        <List>
                <ListItem>
                    <ListTitle>Followers</ListTitle>
                    <ListText>{followers}</ListText>
                </ListItem>
                <ListItem>
                    <ListTitle>Views</ListTitle>
                    <ListText>{views}</ListText>
                </ListItem>
                <ListItem>
                    <ListTitle>Likes</ListTitle>
                    <ListText>{likes}</ListText>
                </ListItem>
        </List>
    )
}