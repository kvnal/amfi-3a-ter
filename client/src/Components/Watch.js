import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import '../css/watch.css';
import WatchLike from "./Parts/WatchLike";
import Episodes from "./Parts/Episodes";
import axios from "axios";

const Watch = () => {
    //fetch id file use
    const [data,setData] = useState(null)
    const [episodeID, setEpisodeID] = useState(null);
    const [showDesc, setShowDesc] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        window.scrollTo(0,0)
        axios.get(`/api/watch/${id}`)
        .then(response=>{
            console.log(response.status);
            setData(response.data)
            setEpisodeID(response.data.episodes[0])
        })
    },[])

    if(!data) return null
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
                            <WatchLike storageID = {data._id} likes={data.likes} creator = {data.creator}/>
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