import React, { useState } from 'react';
import { makeStyles, Grid, Box, Button } from '@material-ui/core';
import CreateDialog from '../dialog/CreateDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
    marginBottom: '10px',
  },
  paper: {
    height: '50px',
    width: '90%',
    margin: 'auto',
    overflow: 'auto',
  },
}));

function DashBoardHeader(props) {
  const classes = useStyles();

  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const onClickCreate = () => {
    setIsOpenCreate(true);
  };
  const onClickCloseCreate = () => {
    setIsOpenCreate(false);
  };

  return (
    <Box className={classes.root}>
      <Grid
        className={classes.paper}
        container
        justify={'flex-start'}
        alignItems={'center'}
      >
        <img src="" alt="logo" />
      </Grid>
      <Grid
        className={classes.paper}
        container
        justify={'flex-end'}
        alignItems={'center'}
      >
        <Button
          size="medium"
          variant="contained"
          color="primary"
          onClick={onClickCreate}
        >
          Create Project
        </Button>
      </Grid>
      <CreateDialog
        isOpenCreate={isOpenCreate}
        onClickCloseCreate={onClickCloseCreate}
      />
    </Box>
  );
}

export default DashBoardHeader;
