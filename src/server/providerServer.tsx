import React, { PureComponent } from 'react';
import { Provider, LDContext as HocState } from '../shared/context';
import { camelCaseKeys } from './utils';

class LDProviderServer extends PureComponent {
  readonly state: Readonly<HocState>;

  constructor(props) {
    super(props);
    this.state = {
      flags: camelCaseKeys(global.ldClient.allFlagsState()),
      ldClient: global.ldClient,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDProviderServer;
