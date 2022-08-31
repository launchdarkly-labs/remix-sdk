import { useContext } from 'react';

import context from './context';

const useLDUser = () => {
  const { user } = useContext(context);
  return user;
};

export default useLDUser;
