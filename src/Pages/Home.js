/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Post from "../Templates/Post";

const Home = () => {
	// Add Templates here, for home page
	return (
		<div
			css={css`
				max-width: 1000px;
				margin: 0 auto;
				padding: 30px;
			`}
		>
      <Header />
			<Post />
		</div>
	);
};

export default Home;
