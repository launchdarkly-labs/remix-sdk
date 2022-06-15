import { initLDServerClient, renderFlagsToString } from 'remix-sdk';
import { v4 } from 'uuid';
let client = undefined;

const createClient = async (): Promise<string> => {
  client = await initLDServerClient('sdk-90d32e56-3402-4194-a47a-908234da7d43');
  return v4();
};
