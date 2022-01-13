import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let category;


    //switches styiling between the differrent categories

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsInline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    width='100%'
                    height='auto'
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                <img 
                    width='100%'
                    height='auto'
                    src={media_url} 
                    alt={caption} 
                />
            );
    }       

    return (
        <>
            {category}
        </>
    );
}

export default Feed;