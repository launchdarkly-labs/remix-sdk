import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { initBrowser } from 'remix-sdk';

initBrowser('CLIENT-SIDE-ID');

hydrate(<RemixBrowser />, document);
