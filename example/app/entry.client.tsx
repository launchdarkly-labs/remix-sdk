import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
// @ts-ignore
import { LDClientProvider } from 'remix-sdk/client';

hydrate(
  <LDClientProvider clientSideID={window.LD_CLIENT_SIDE_ID}>
    <RemixBrowser />
  </LDClientProvider>,
  document,
);
