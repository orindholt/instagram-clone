/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./reset.css";
import Post from "./Templates/Post";
import { colors } from "./Components/Theme";

const App = () => {
  return (
    <div className="App" css={css`color: ${colors.black}`} >
      <Post />
    </div>
  );
}

export default App;
