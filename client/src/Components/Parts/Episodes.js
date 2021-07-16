import ShareLink from "./small/ShareLink";

const utURL = "https://img.youtube.com/vi/";
const Episodes = ({ episodes, setEpisode }) => {

    const handleEpisodeChange = (id)=>{
            setEpisode(id)
            return window.scrollTo({top:0, behavior:'smooth'})
    }
    return (<div className="episodes">
        <span>Episodes {episodes.length} <ShareLink/></span>

        <div className="episodecard">


            {episodes.map((element,id)=>(
                <div className="epcard shadowDepth1" onClick={()=>handleEpisodeChange(element)}>
                <div className="epimg" style={{ background: `url(${utURL + element}/default.jpg) center no-repeat`, backgroundSize: 'cover' }} >
                    {/* <img src={utID_URL} alt="" /> */}
                </div>
                <div className="epdetail" >
                    Episode {id+1}
                </div>
            </div>

            ))}
            
        </div>

    </div>);
};

export default Episodes;