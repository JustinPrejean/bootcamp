import React from "react";

function Videos(props){
    return(
        <div>
            <iframe
                title="YouTube video player"
                className="youtube-player"
                width="500"
                height="390"
                src={props.link}
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default Videos;