import styled from '@emotion/styled';

export const Info = styled.div`
${'' /* overflow: hidden; */}
${'' /* display:flex; */}
${'' /* justify-content: center; */}
${'' /* align-items: center; */}
  padding: 30px;
 


    img {
        ${'' /* background-color: green;  */}
        border-radius: 50%;
        display: block;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
`;

export const Name = styled.p`
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

  font-size: 14px;
color:#757575;
         margin-top: 5;
  margin-bottom: 5;
`;