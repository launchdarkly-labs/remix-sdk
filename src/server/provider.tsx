import React, { PureComponent } from 'react';
import { Provider, LDContext as HocState } from '../shared/context';
import { camelCaseKeys } from '../client/utils';
import {init, LDClient} from 'launchdarkly-node-server-sdk'
import {v4 as uuidv4} from "uuid"

type LDProviderServerProps = {
  children: React.ReactNode;
  sdkKey: string
  ldServerClientKey?: string,
}

declare global {
  // eslint-disable-next-line no-var
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // eslint-disable-next-line no-var
  var __ld_server_client: LDClient | undefined
}

class LDProviderServer extends PureComponent<LDProviderServerProps> {
  readonly state: Readonly<HocState>;
  ldUserKey = this.props.ldServerClientKey ?? uuidv4();

  componentDidMount() {
    global.__ld_server_client = init(this.props.sdkKey)
  }

  constructor(props: LDProviderServerProps) {
    super(props);
    this.state = {
      flags: camelCaseKeys(global.__ld_server_client?.allFlagsState({anonymous: true, key: this.ldUserKey }) || {}) || {},
      ldClient: global.__ld_server_client,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDProviderServer;