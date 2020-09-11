import React, { ReactElement } from 'react';
import clsx from 'clsx';
// import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { ListItemText } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {
  className?: string;
  primary?: string;
}

// We can inject some CSS into the DOM.
const styles = {
  root: {
    fontWeight: 900,
    opacity: 0.5,
  },
};

function ListSeparator(props: Props): ReactElement {
  const { classes, className, ...other } = props;

  return (
    <ListItemText className={clsx(classes.root)} {...other} />
  );
}

export default withStyles(styles)(ListSeparator);