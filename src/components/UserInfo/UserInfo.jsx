import { Info, Name, Text } from './UserInfo.styled';

export const UserInfo = ({username, tag, location, avatar}) => {
    return (
        <Info>
            <img
                src={avatar}
                alt="User avatar"
                class="avatar"
            />
            <Name>{username}</Name>
            <Text>@{tag}</Text>
            <Text>{location}</Text>
        </Info>
    )
 };