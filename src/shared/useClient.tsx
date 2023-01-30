import { useContext } from 'react';

import context from './context';

const useClient = () => {
  const { ldClient } = useContext(context);
  return ldClient;
};

export default useClient;