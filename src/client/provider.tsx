import React, { Component, PropsWithChildren } from 'react';
import { initialize, LDOptions } from 'launchdarkly-js-client-sdk';
import { ProviderConfig } from './types';
import { Provider, LDContext as HocState } from './context';
import { camelCaseKeys } from './utils';

// eslint-disable-next-line @typescript-eslint/ban-types
class LDProvider extends Component<PropsWithChildren<ProviderConfig>, HocState> {
  readonly state: Readonly<HocState>;

  constructor(props: ProviderConfig) {
    super(props);
    const { clientSideID } = props;

    console.log(`initializing ld client with ${clientSideID}...`);
    let ldClient;

    if (typeof window !== 'undefined') {
      const options = {
        bootstrap: window.ssrFlags,
      };
      ldClient = initialize(clientSideID, { anonymous: true }, options);
      this.state = {
        flags: camelCaseKeys(options.bootstrap),
        ldClient,
      };
    } else {
      console.error(`Fix LDProvider to work on the server`);
      //TODO: ldClient = this.importInitServerSdk(props.sdkKey, options);
    }
  }

  async importInitServerSdk(clientSideID: string, options: LDOptions) {
    const { initServerSdk } = await import('../server');
    return initServerSdk(clientSideID, options);
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDProvider;
