import { Box, Button, Typography, styled} from '@mui/material';

export const HeadingStyle= styled(Typography)( ({ theme }) =>`

font-weight: 500;
font-size: 20px;
color: black;
margin: auto;
text-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
font-family: roboto;
@media (min-width: 280px) and (max-width: 320px)  {
  font-size: 18px;
};
@media (min-width: 600px)  {
  font-size: 22px;
};
`);

export const IconCardSize = styled(Box)`
 
  width:70px;
  height:75px;
  @media (max-width: 320px) {
    width: 60px;
    height: 65px;
  }
  @media (max-width: 280px) {
    width: 50px;
    height: 55px;
  }

  border-radius: 10px;
  margin-bottom: 5px;
  text-align: center;
text-decoration: none;
  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);
`;


export const ButtonPrimary = styled(Button)(
  ({ theme, color }) => `
color: white;
font-size: 12px;
font-family: 'Roboto';
text-decoration: none;
height:30px;
border-radius: 3px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
background-color:Blue;
@media (min-width: 600px) {
  
 };
`);