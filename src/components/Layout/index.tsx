import React from 'react';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import StyledMain from './Layout.styled';
import Typography from '@mui/material/Typography';

type Props = {
  children?: React.ReactNode;
  mainClass?: String;
};

const Layout = ({
  children,
  mainClass,
}: Props) => {
  
  return (
    <Box
        component="div"
        display="flex"
        height="100vh"
        width="100%"
      >
        <StyledMain component="main" className={clsx(mainClass)}>
          <Typography gutterBottom variant="h3" component="div" align="center">
              The Rick and Morty App
          </Typography>
          <Box padding={2} margin={4}>
            {children}
          </Box>
        </StyledMain>
      </Box>
  );
};

export default Layout;
