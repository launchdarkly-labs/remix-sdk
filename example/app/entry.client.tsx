import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
// @ts-ignore
import { LDBrowser } from 'remix-sdk/client';

hydrate(
  <LDBrowser clientSideID={window.LD_CLIENT_SIDE_ID}>
    <RemixBrowser />
  </LDBrowser>,
  document,
);
