import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let category;


    //switches styiling between the differrent categories 
    
    //!FOR TESTING ONLY

    switch (media_type) {
        case "VIDEO":
            category = (
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
            category = (
                <img 
                    width='100%'
                    height='auto'
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            category = (
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