
import * as LDClient from 'launchdarkly-js-client-sdk';



export const iniitCliendSide = () => {


  const user = {
    key: 'aa0ceb'
  };
  const client = LDClient.initialize('YOUR_CLIENT_SIDE_ID', user);
  


  // window.ldClientJS = LDClient.initialize(
  //   clientSideId,
  //   user,
  //   options: {
  //     bootstrap
  //   },
  // );

}