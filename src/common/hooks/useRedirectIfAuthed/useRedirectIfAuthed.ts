import { useSelector } from 'react-redux';
import { useNavigate } from '@reach/router';
import { selectIsLoggedIn } from 'app/reducers/authReducer';
import { Route } from 'common/constants/routes';

export const useRedirectIfAuthed = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  if (isLoggedIn) {
    navigate(Route.ROOT);
  }
};
