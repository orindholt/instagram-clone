/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Theme from "./Components/Theme";
import Header from "./Templates/Header";

<script src="https://kit.fontawesome.com/ccda818105.js" crossorigin="anonymous"></script>

const { red } = Theme.colors

const style = css`
  color: ${red}
`;


const App = () => {
  return (
    <div className="App">
      <Header />
      <p css={style}>Hello, this is a test</p>
    </div>
  );
}

export default App;
