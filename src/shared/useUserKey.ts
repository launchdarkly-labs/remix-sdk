import { useContext } from 'react';

import context from './context';

const useUserKey = () => {
  const { key } = useContext(context);
  return key;
};

export default useUserKey;
