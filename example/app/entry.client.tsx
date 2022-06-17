import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { LDClientProvider } from 'remix-sdk/client';

hydrate(
  <LDClientProvider clientSideID={window.env.LD_CLIENT_SIDE_ID}>
    <RemixBrowser />
  </LDClientProvider>,
  document,
);
