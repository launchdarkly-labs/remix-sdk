import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { initBrowser } from 'remix-sdk';

initBrowser(window.env.LD_CLIENT_SIDE_ID);

hydrate(<RemixBrowser />, document);
