import { Box, styled } from "@mui/material";

export const DotLegendStyled = styled(Box)(
    ({ theme, color }) => `
        border-radius: 22px;
        width: ${theme.spacing(1.5)};
        height: ${theme.spacing(1.5)};
        @media (min-width: 280px) and (max-width: 320px)  {
          width: ${theme.spacing(1)};
          height: ${theme.spacing(1)};
        };
        display: inline-block;
        margin-right: ${theme.spacing(1)};
        margin-top: -${theme.spacing(0.1)};
        border: 1px #303030   solid;
        
  
    `
);