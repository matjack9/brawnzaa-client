import * as React from 'react';
import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

interface Props {
  TypographyHeadingProps?: TypographyProps;
  SkeletonHeadingProps?: SkeletonProps;
  SkeletonBodyProps?: SkeletonProps;
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: '50%',
      marginTop: theme.spacing(6),
    },
  })
);

export const FullscreenSkeleton: React.FC<Props> = props => {
  const {
    TypographyHeadingProps = {},
    SkeletonHeadingProps = {},
    SkeletonBodyProps = {},
  } = props;
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      <Typography variant="h1" {...TypographyHeadingProps}>
        <Skeleton variant="text" {...SkeletonHeadingProps} />
      </Typography>
      <Skeleton variant="rect" height="65vh" {...SkeletonBodyProps} />
    </Container>
  );
};
