import '../../css/hcard.css'
import Like from '@material-ui/icons/FavoriteRounded'

import { Link } from 'react-router-dom'

const HCard = ({id,utID,title,desc,likes,ep}) => {
    const utID_URL = `https://img.youtube.com/vi/${utID}/mqdefault.jpg`
    return (  
        <>
            <Link to={`/watch/${id}`}>
        <div className="hcard shadowDepth1">
            <div className="img" style={{background:`url(${utID_URL}) center no-repeat`,backgroundSize:'cover'}} >
                {/* <img src={utID_URL} alt="" /> */}
            </div>

            <div className="hcarddetails">
                <div className="htitle text-limit" >
                    {title}
                </div>
                <div className="hdesc text-limit-desc ">
                    {desc}
                </div>
                <div className="hextra-parent">
                <div className="hextras">
                    <div className="like">
                        {likes}
                        <Like style={{paddingLeft:"4px"}}/>
                    </div>
                    <div className="ep">
                        {`Episodes ${ep}`}
                    </div>
                </div>
                </div>

            </div>

        </div>
            </Link>
        </>
    );
}
 
export default HCard;