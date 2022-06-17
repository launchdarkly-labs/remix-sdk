import React, { Component, ReactNode } from 'react';
import { LDFlagSet } from 'launchdarkly-node-server-sdk';

import { LDContext as HocState, Provider } from '../shared/context';

import { ldClient as ldNodeClient } from './initLDClient';
import { camelCaseKeys } from './utils';

type LDServerProviderProps = { flags: LDFlagSet; children: ReactNode };

class LDServerProvider extends Component<LDServerProviderProps, HocState> {
  readonly state: Readonly<HocState>;

  constructor(props: LDServerProviderProps) {
    super(props);
    this.state = {
      flags: camelCaseKeys(props.flags),
      ldClient: ldNodeClient,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDServerProvider;
