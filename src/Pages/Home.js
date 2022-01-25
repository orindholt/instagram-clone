/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react';


import Post from "../Templates/Post";
import PostSettings from '../Templates/PostSettings';

const Home = () => {
	const [postSettings, setPostSettings] = useState(false);
	// Add Templates here, for home page
	return (
		<div
			css={css`
				max-width: 1000px;
				margin: 0 auto;
				padding: 30px;
			`}
		>
			<Post setPostSettings={setPostSettings}/>
			{postSettings && <PostSettings setPostSettings={setPostSettings}/>}
		</div>
	);
};


export default Home
