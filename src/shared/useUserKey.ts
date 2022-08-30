import { useContext } from 'react';

import context from './context';

const useUserKey = () => {
  const { user } = useContext(context);
  return user?.key;
};

export default useUserKey;
