import { FC } from 'react';
import PropTypes from 'prop-types';
import { styled, Typography, Box, Divider, useTheme, Container } from '@mui/material';
import { HeadingStyle } from '../StyledComponents/CommonStyled';
import { useNavigate } from 'react-router';

interface PageHeaderProps {
  heading: string;
}

const RootWrapper = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.spacing(2)};
        margin-bottom: ${theme.spacing(2)};
`
);

const PageHeader: FC<PageHeaderProps> = ({ heading}) => {
  const theme = useTheme();

  const navigate = useNavigate();
  if (sessionStorage.getItem("UserId") === null ||
    sessionStorage.getItem("UserId") === undefined) {
    navigate('/')
  }
  return (
    <Container>
      <RootWrapper display="flex" alignItems="center">
      <HeadingStyle>{(heading)}</HeadingStyle>
       </RootWrapper>
    </Container>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
};

export default PageHeader;