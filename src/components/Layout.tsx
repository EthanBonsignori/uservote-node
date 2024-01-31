import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import styled from "@emotion/styled";

const AppBarStyled = styled(AppBar)`
  margin-bottom: 20px;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <AppBarStyled color="primary" position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UserVote
          </Typography>
          {/* TODO: login */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBarStyled>
      {children}
    </div>
  );
};

export default Layout;
