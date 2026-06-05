import { Grid } from "./components/Grid/Grid";
import { Player } from "./components/Player/Player";


function App() {
  const styles = {
    color: 'green',
    display: 'flex',
    "flex-direction": 'raw',
    "flex-wrap": "wrap",
    "gap": "20px",
    "width": "100%"
  };
  const VIDEOS = ["http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/58/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/24/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/35/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/20/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/43/streaming/main.mp4"]

  const container = document.querySelector("#videos-container")

  function createPlayerDelay(src: string) {


  }
  return (
    <><h1>Прораб-Watcher</h1>
      <Grid videosSrcs={VIDEOS}></Grid>
    </>

  );
}

export default App;
