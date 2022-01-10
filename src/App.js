/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./reset.css";
import { theme } from "./Components/Theme";
const { colors: {red} } = theme;

const style = css`
  color: ${red}
`;

const App = () => {
  return (
    <div className="App">
      <p css={style}>Test</p>
    </div>
  );
}

export default App;
