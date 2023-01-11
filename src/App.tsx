import { PlayCircle, SkipBackCircle, SkipForwardCircle } from "phosphor-react";
import { ContainerApp } from "./styles/styles";

export function App() {
  return (
    <ContainerApp id="app" className="app-p">
      <div id="player-1" className="player">
        <div className="wrapper">
          <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sneakers" />

          <div className="info">
            <h1>Black white</h1>
            <p>3MA</p>
          </div>

          <div className="controls">
            <div className="prev">
              <SkipBackCircle size={30} weight="fill" />
            </div>
            <div className="play">
              <PlayCircle size={30} weight="fill" />
            </div>
            <div className="next">
              <SkipForwardCircle size={30} weight="fill" />
            </div>
          </div>

          <div className="track-time">
            <div className="track">
            </div>
            <div className="time">
              <div className="total-time">03:20</div>
              <div className="last-time">00:12</div>
            </div>
          </div>
        </div>
      </div>

      <div id="player-2" className="player horizontal">
        <div className="wrapper">
          <div className="info-wrapper">
            <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sneakers" />

            <div className="info">
              <h1>Black white</h1>
              <p>3MA</p>
            </div>


          </div>

          <div className="controls">
            <div className="prev">
              <SkipBackCircle size={30} weight="fill" />
            </div>
            <div className="play">
              <PlayCircle size={30} weight="fill" />
            </div>
            <div className="next">
              <SkipForwardCircle size={30} weight="fill" />
            </div>
          </div>

          <div className="track-time">
            <div className="track">
            </div>
            <div className="time">
              <div className="total-time">03:20</div>
              <div className="last-time">00:12</div>
            </div>
          </div>
        </div>
      </div>

      <div id="player-3" className="player horizontal">
        <div className="wrapper">

          <div className="info-wrapper">
            <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sneakers" />

            <div className="info">
              <h1>Black white</h1>
              <p>3MA</p>
            </div>
          </div>

          <div className="controls">
            <div className="prev">
              <SkipBackCircle size={30} weight="fill" />
            </div>
            <div className="play">
              <PlayCircle size={30} weight="fill" />
            </div>
            <div className="next">
              <SkipForwardCircle size={30} weight="fill" />
            </div>
          </div>
        </div>
      </div>
    </ContainerApp>
  )
}
