import React, { Component, ReactNode } from 'react';
import { initialize, LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';
import { ProviderConfig } from './types';
<<<<<<< Updated upstream
import { Provider, LDContext as HocState } from './context';
=======
import { Provider, LDContext as HocState } from '../shared/context';
>>>>>>> Stashed changes
import { camelCaseKeys, getFlattenedFlagsFromChangeset } from './utils';

type LDProviderProps = ProviderConfig & { children: ReactNode };

class LDProvider extends Component<LDProviderProps, HocState> {
  readonly state: Readonly<HocState>;

  constructor(props: LDProviderProps) {
    super(props);
    const { clientSideID } = props;
    const { ssrFlags } = window;

    console.log(`initializing ld client with ${clientSideID}...`);
    const ldClient = initialize(clientSideID, { anonymous: true }, { bootstrap: ssrFlags });
    ldClient.on('change', (changes: LDFlagChangeset) => {
      const flattened: LDFlagSet = getFlattenedFlagsFromChangeset(changes, window.ssrFlags);
      if (Object.keys(flattened).length > 0) {
        this.setState(({ flags }) => ({ flags: { ...flags, ...flattened } }));
      }
    });

    this.state = {
      flags: camelCaseKeys(ssrFlags),
      ldClient,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDProvider;
