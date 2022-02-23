import { useNavigate } from 'react-router-dom';

export default (routes: string[]) => {
  const navigate = useNavigate();

  return routes.map(route => () => {
    navigate(route);
  });
};
