import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { LDProvider } from 'remix-sdk/client';

hydrate(
  <LDProvider clientSideID={window.env.LD_CLIENT_SIDE_ID}>
    <RemixBrowser />
  </LDProvider>,
  document,
);
