const LDClient = require('launchdarkly-js-client-sdk');

const user = {
  key: 'aa0ceb'
};

if (typeof window !== 'undefined') {
  console.log('You are on the browser')
  // ✅ Can use window here
} else {
  console.log('You are on the server')
  // ⛔️ Don't use window here
}
const client = LDClient.initialize('5f7ba41aab53700a0bb7ca5e', user);


console.log('hi')

function onPageLoad(flags) {

  const client = LDClient.initialize(
    'YOUR_CLIENT_SIDE_ID',
    user,
    options = {
      bootstrap: flags
    }
  );
}
