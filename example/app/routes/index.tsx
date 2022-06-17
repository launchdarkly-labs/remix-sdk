import { useFlags } from 'remix-sdk/client';

export default function Index() {
  const { devTestFlag } = useFlags();

  return (
    <div style={devTestFlag ? {background: '#282828'} : { fontFamily: 'system-ui, sans-serif', lineHeight: '2.4' } }>
      <h1 style={devTestFlag? {color: 'white', fontFamily: 'system-ui, sans-serif', fontSize: '54px'} : undefined}>{devTestFlag ? `Welcome to Remix with LaunchDarkly!` : `Welcome to Remix!`}</h1>
      {devTestFlag ? <div>
        <img src="https://images.prismic.io/launchdarkly/MWMzNmRhYmItNmIwYy00NWZjLWIzNDctYzIyNjRkOTc2NjVl_togglemoon.png?auto=compress,format&rect=0,0,324,371&w=324&h=371" alt="toggle" width="250" height="300"/> 
        <iframe src="https://giphy.com/embed/MXM5QQ3jY7WmcmPwTI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/GEICO-sloth-tada-geico-MXM5QQ3jY7WmcmPwTI">via GIPHY</a></p>
        </div>: undefined}
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

