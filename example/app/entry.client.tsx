import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
// @ts-ignore
import { LDBrowser } from 'remix-sdk/client';

hydrate(
  <LDBrowser>
    <RemixBrowser />
  </LDBrowser>,
  document,
);
