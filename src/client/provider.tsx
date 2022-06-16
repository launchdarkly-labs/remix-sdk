import React, { Component, PropsWithChildren } from 'react';
import { initialize, LDOptions, LDClient, LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';
import { ProviderConfig, defaultReactOptions } from './types';
import { Provider, LDContext as HocState } from './context';
import { camelCaseKeys, getFlattenedFlagsFromChangeset } from './utils';

// eslint-disable-next-line @typescript-eslint/ban-types
class LDProvider extends Component<PropsWithChildren<ProviderConfig>, HocState> {
  readonly state: Readonly<HocState>;

  constructor(props: ProviderConfig) {
    super(props);
    const { clientSideID } = props;

    console.log(`initializing ld client with ${clientSideID}...`);
    const options = {
      bootstrap: window.ssrFlags,
    };
    const ldClient = initialize(clientSideID, { anonymous: true }, options);
    this.state = {
      flags: camelCaseKeys(options.bootstrap),
      ldClient,
    };
  }

  componentDidMount() {
    this.subscribeToChanges()
  }


  subscribeToChanges = () => {
    const { flags: targetFlags } = this.state;
    this.state.ldClient.on('change', (changes: LDFlagChangeset) => {
      const flattened: LDFlagSet = getFlattenedFlagsFromChangeset(changes, targetFlags);
      if (Object.keys(flattened).length > 0) {
        this.setState(({ flags }) => ({ flags: { ...flags, ...flattened } }));
      }
    });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDProvider;
