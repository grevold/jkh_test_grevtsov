import { Player } from "./components/Player/Player";


function App() {
  const styles = {
    color: 'green',
    display: 'flex',
    "flex-direction": 'raw',
    "flex-wrap":"wrap",
    "gap":"50px"
  };
  const VIDEOS = ["http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/58/streaming/main.mp4", "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/24/streaming/main.mp4", "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/35/streaming/main.mp4", "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/20/streaming/main.mp4", "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/43/streaming/main.mp4"]
  return (
    <><h1>hello</h1>
      <div style={styles} >{VIDEOS.map((src) => (<Player src={src}></Player>))}</div>

      {/* <div>{VIDEOS.map((src) => (<Player src={src}></Player>))}</div> */}
    </>

  );
}

export default App;
