import Player from './components/Player.jsx';
import TimmerChallenge from './components/TimmerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimmerChallenge title="Easy" targetTime={1} />
        <TimmerChallenge title="Not Easy" targetTime={5} />
        <TimmerChallenge title="Getting Tough" targetTime={10} />
        <TimmerChallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
