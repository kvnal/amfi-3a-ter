import '../../css/creator.css';
import Instagram from "@material-ui/icons/Instagram";
import Youtube from "@material-ui/icons/YouTube";
import Verify from "@material-ui/icons/CheckCircleRounded";
import ShareLink from './small/ShareLink';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    const [data,setData] = useState(null)
    useEffect(()=>{
        window.scrollTo(0,0)
        console.log(id);

        axios.get(`/api/creator/${id}`)
        .then(response=>{
            setData(response.data[0])
        })
    },[])
    
    if(!data) return null
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
                <a href={`https://instagram.com/${data.instagram}`} target="_blank">
                    <Instagram />
                </a>
                <a href={`https://youtube.com/channel/${data.youtube_channel_id}`} target="_blank"> 
                <Youtube />
                </a>
                <a >
                    <ShareLink/>
                </a>

            </div>
            <a className="subs" href={`https://youtube.com/channel/${data.youtube_channel_id}?sub_confirmation=1`}>Subscribe</a>
            
        </div>
    );
};

export default Creator;