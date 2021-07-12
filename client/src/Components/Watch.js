import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import '../css/watch.css';

const data = {
    title: "Title 2hello this is the title 1",
    utID: "rQs6HjTw0VE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 2,
    episodes: ["YnP94m5pwls", "oUFJJNQGwhk", ""],
    creator: ['one', 'two']
};

const Watch = () => {
    //fetch id file use
    // const {id} = useParams();

    const [episodeID, setEpisodeID] = useState(data.episodes[0]);
    const [showDesc, setShowDesc] = useState(false);
    return (
        <div className="watch">
            <div className="player">

                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={`https://www.youtube.com/watch?v=${episodeID}`}
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>

                <div className="htitle">
                    {data.title}
                </div>
                <div className="hdesc">
                    {!showDesc &&
                        <>
                            <p>
                                {data.description.slice(0, 100)+"..."}
                            </p>
                            <button className="readmore" onClick={() => setShowDesc(true)}>Read More.</button>
                        </>
                    }
                    {showDesc &&
                        <>
                            <p>
                                {data.description}
                            </p>
                            <button className="readmore" onClick={() => setShowDesc(false)}>Read less.</button>
                        </>
                    }
                   
                    
                </div>
                <div className="extras">
                        <div className="likes">
                            {data.likes}
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Watch;