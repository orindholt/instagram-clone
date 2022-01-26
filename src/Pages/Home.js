/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import Post from "../Templates/Post";
import PostSettings from '../Templates/PostSettings';
import Suggestions from '../Templates/Suggestions';
import useApi from '../Templates/useApi';

const Home = () => {
	const [postSettings, setPostSettings] = useState(false);
	const data = useApi();

	// Add Templates here, for home page
	return (
		<div
			css={css`
				max-width: 1000px;
				margin: 0 auto;
				padding: 30px;
				display: flex;
				justify-content: space-between;
			`}
		>
			<div css={css`display: flex; flex-direction: column; gap: 30px;`}>
				{data && data.map((content, index)=> <Post key={index} setPostSettings={setPostSettings} data={content} />)}
			</div>
			{postSettings && <PostSettings setPostSettings={setPostSettings}/>}
			<Suggestions />
		</div>
	);
};


export default Home
