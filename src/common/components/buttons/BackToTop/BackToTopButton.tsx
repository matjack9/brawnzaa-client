import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import TopIcon from '@material-ui/icons/ExpandLess';

export const BackToTopButton: React.FC<ButtonProps> = props => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      color="secondary"
      data-testid="back-to-top-btn"
      startIcon={<TopIcon />}
      onClick={handleClick}
      {...props}
    >
      Top
    </Button>
  );
};
