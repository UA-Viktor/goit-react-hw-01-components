import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: #fff;
  width: 270px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
`;

export const Info = styled.div`
  padding: 20px 30px 10px 30px;

    img {
        border-radius: 50%;
        display: block;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
`;

export const Name = styled.p`
  margin: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
`;

export const Text = styled.p`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 5;
  margin-bottom: 5;
  font-size: 14px;
  color:#757575;
`;

export const List = styled.ul`
  margin: 0;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: space-between ;
  background-color: #f2f2f2;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
`;

export const ListTitle = styled.span`
    color:#757575;
    margin-bottom: 10px;
`;

export const ListText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;