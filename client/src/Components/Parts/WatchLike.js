import Like from '@material-ui/icons/FavoriteRounded'
import OutLike from '@material-ui/icons/FavoriteBorderOutlined'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const WatchLike = ({storageID, likes, creator }) => {
    const [stateLike,setStateLike] = useState(false)
    const [likeVal,setLikeVal] = useState(likes)
    const handleLike = ()=>{
        
        if(!stateLike){
            if(typeof(Storage)!== "undefined"){
                
                if(!localStorage.getItem(storageID)){
                    localStorage.setItem(storageID,1)
                    setLikeVal(likeVal+1)
                    axios.patch(`/api/like/${storageID}`)
                }
                return setStateLike(true)
            }
            
        }
        // if() local storage
        return null
    }

    useEffect(()=>{
        if(typeof(Storage)!=="undefined"){
            if(localStorage.getItem(storageID))
                setStateLike(true)
        }
    },[])

    return (<div>
        <div className="watchlikes">
                <div >
                    <span onClick={handleLike} className="likespan">
                        <span>
                        {likeVal}
                        </span>
                        <span>
                        {!stateLike && <OutLike/>}
                        {stateLike && <Like/>}
                        </span>
                    </span>
                </div>

                <div className="creators">
                    <span>
                        creators:
                        {creator.map(element =>(
                            // link to home id or ?= creator name
                        <Link to={`/creator/${element}`}>
                            <span className="creatorspan">
                            {element}
                        </span>
                        </Link>
                        ))}
                    </span>
                </div>
        </div>

    </div>);
};

export default WatchLike;