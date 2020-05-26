import * as React from 'react';
import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  TypographyHeadingProps?: TypographyProps;
  SkeletonHeadingProps?: SkeletonProps;
  SkeletonBodyProps?: SkeletonProps;
}

export const GenericSkeleton: React.FC<Props> = props => {
  const {
    TypographyHeadingProps = {},
    SkeletonHeadingProps = {},
    SkeletonBodyProps = {},
  } = props;
  return (
    <>
      <Typography variant="h1" {...TypographyHeadingProps}>
        <Skeleton variant="text" width="100%" {...SkeletonHeadingProps} />
      </Typography>
      <Skeleton variant="rect" width="100%" height="50vh" {...SkeletonBodyProps} />
    </>
  );
};
