import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { initBrowserSdk } from 'remix-sdk';

initBrowserSdk(window.env.LD_CLIENT_SIDE_ID);

hydrate(<RemixBrowser />, document);
