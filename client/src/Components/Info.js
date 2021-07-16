
import Instagram from "@material-ui/icons/Instagram";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'



const Info = () => {
    const [data,setData] = useState(null)

    useEffect(()=>{
        axios.get('/api/info/creators')
        .then(response=>{
            setData(response.data)
        })
    },[])

    if(!data) return null
    return ( 
        <div className="info">
            <div className="creator">
            <div className="profilepic" >
                {/* <Verify /> */}
            </div>
            <div className="creatorextra">


                <span className="name">About</span>
                {/* <span className="verify"> Verified account</span> */}
                <span className="about">adf</span>
            </div>

            
                <a href="#" className="dmus" target="_blank">
                   Want to be Creator? DM us on <Instagram />
                </a>
            
            <a className="addvideo" href={""}>Add Videos</a>
        </div>

             <div className="allcreator">
                 <span>All Creators </span>
                 <div className="creatorgird">
                     {data.map(element=>(
                         <Link to={`/creator/${element.name}`}>
                         <span>{element.name}</span>
                         </Link>
                     ))}
                 </div>
             </div>

        </div>
     );
}
 
export default Info;