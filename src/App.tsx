import { useState } from "react";
import { ControllersPanel } from "./components/ControllersPanel/ControllersPanel";
import { Grid } from "./components/Grid/Grid";
import { Player } from "./components/Player/Player";


function App() {

  const VIDEOS = ["http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/58/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/24/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/35/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/20/streaming/main.mp4",
    "http://minstroy:A21GbztRX@81.90.211.34:33661/cameras/43/streaming/main.mp4"]

  const [isPlayAll, setIsPlayAll] = useState(false)


  return (
    <>
      <h1>Прораб-Watcher</h1>
      <ControllersPanel onChange={setIsPlayAll} isPlayAll={isPlayAll} />
      <div className="container">
        <Grid videosSrcs={VIDEOS} isPlayAll={isPlayAll}></Grid>
      </div>
    </>

  );
}

export default App;
