import '../../css/creator.css';
import Instagram from "@material-ui/icons/Instagram";
import Youtube from "@material-ui/icons/YouTube";
import Verify from "@material-ui/icons/CheckCircleRounded";
import ShareLink from './small/ShareLink';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const data = {
    id: "",
    name: "creator name",
    pass: " ",
    youtube: "www.google.com",
    instagram: "www.google.com",
    youtube_channel_id: "this is channel id",
    about: "hello this is my account about how are you all??"
};
const Creator = () => {
    // use effect fetch details
    const {id} = useParams()
    
    useEffect(()=>{
        window.scrollTo(0,0)
        console.log(id);
    },[])
    return (
        <div className="creator">
            <div className="profilepic" >
                {/* <Verify /> */}
            </div>
            <div className="creatorextra">


                <span className="name">@{data.name} <Verify/> </span>
                {/* <span className="verify"> Verified account</span> */}
                <span className="about">{data.about}</span>
            </div>

            <div className="socials">
                <a href={data.instagram} target="_blank">
                    <Instagram />
                </a>
                <a href={data.instagram} target="_blank"> 
                <Youtube />
                </a>
                <a >
                    <ShareLink/>
                </a>

            </div>
            <a className="subs" href={""}>Subscribe</a>
            
        </div>
    );
};

export default Creator;