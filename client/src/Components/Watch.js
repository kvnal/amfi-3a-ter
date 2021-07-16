import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import '../css/watch.css';
import WatchLike from "./Parts/WatchLike";
import Episodes from "./Parts/Episodes";

const data = {
    title: "Title 2hello this is the title 1",
    utID: "YnP94m5pwls",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 2,
    episodes: ["YnP94m5pwls", "oUFJJNQGwhk", "oUFJJNQGwhk", "oUFJJNQGwhk", "oUFJJNQGwhk", ""],
    creator: ['one', 'two']
};

const Watch = () => {
    //fetch id file use
    // const {id} = useParams();
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])

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
                            <span>
                                {data.description.slice(0, 100)+"..."}
                            <button className="readmore" onClick={() => setShowDesc(true)}>Read More.</button>
                            </span>
                        </>
                    }
                    {showDesc &&
                        <>
                            <span>
                                {data.description}
                            <button className="readmore" onClick={() => setShowDesc(false)}>Read less.</button>
                            </span>
                        </>
                    }
                   
                    
                </div>
                <div className="extras">
                        <div className="likes">
                            <WatchLike storageID = {data.utID} likes={data.likes} creator = {data.creator}/>
                        </div>
                </div>
            </div>

            <div className="playerepisode">
                <Episodes episodes={data.episodes} setEpisode={setEpisodeID}/>
            </div>

        </div>
    );
};

export default Watch;